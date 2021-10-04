const cheerio = require("cheerio");
const { prismaClient } = require("../../../services");

const { fetchWithTimeout } = require("../../../helpers");

const parseUrlHandler = async (req, res) => {
  // get url from request query params
  const {
    query: { url },
  } = req;

  try {
    // first check if there is a entry in the URL CACHE DB with the same url as url to be queries
    const foundUrl = await prismaClient.url.findFirst({
      where: { url },
    });

    // if url is found return it as response
    if (foundUrl) {
      return res.status(200).json({
        title: foundUrl.title,
        favicon: foundUrl.favicon,
        description: foundUrl.description,
      });
    } else {
      // else do the following 👇👇

      // making an api or ajax call url
      // remember to change from http to https before submission
      const response = await fetchWithTimeout(`https://${url}`);

      const responseText = await response.text();

      // console.log("Response Text", responseText);

      // response to be returned to user with default values || placeholder response
      const result = {
        title: "no title",
        favicon: "no favicon",
        description: "no description",
      };

      // create an html document from respone text
      const $ = cheerio.load(responseText);

      // retriving favicon from response text
      const favicon = $("link[rel*='icon']").attr("href");
      result.favicon = favicon || result.favicon;

      // retriving title response text
      result.title = $("title").text() || result.title;

      // retriving title response text
      result.description =
        $("meta[name*='description']").attr("content") || result.description;

      // save the new url info to thr URL CACHE DB
      const newUrlInfo = await prismaClient.url.create({
        data: {
          url,
          description: result.description,
          favicon: result.favicon,
          title: result.title,
        },
        select: {
          title: true,
          favicon: true,
          description: true,
        },
      });

      prismaClient.$disconnect();

      // return a success response with url info
      return res.status(200).json(newUrlInfo);
    }
  } catch (error) {
    console.log("Error", error);
    // return an error if there was an error
    return res.status(404).json({ message: error.message });
  }
};

export default parseUrlHandler;
