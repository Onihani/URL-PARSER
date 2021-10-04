const cheerio = require("cheerio");

const parseUrlHandler = (req, res) => {
  // get url from request query params
  const {
    query: { url },
  } = req;

  // making an api or ajax call url
  // remeber to change from http to https before submission
  fetch(`http://${url}`)
    .then((response) => response.text())
    .then((responseText) => {
      // response to be returned to user with default values
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
      result.description = $("meta[name*='description']").attr("content") || result.description;

      // return a success response with 
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      // return an error if there was an error
      res.status(500);
    });
};

export default parseUrlHandler;
