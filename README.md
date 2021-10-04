# Url Parser

A node + nestjs server (one API endpoint)

GET `api/parse/:url`

This endpoint returns a parsed version of the html content of the **url**, and returns back a response in the
following format. The idea is to create a response that can then be shown to the user as a
card to the user for what the url does. This is also known as **_site previews_** / **_link unfurling_**.

Sample Response:

```json
{
  "title": "title of the website",
  "favicon": "favicon of website",
  "description": "description of website"
}
```

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## How to use

Execute [`git clone https://github.com/Onihani/url-parser.git`](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) to clone the repository

Create a .env file with a variable `DATABASE_URL` is the connection URI of your prosgresql database. For creating to cache parsed urls

Make sure you have npm and node installed on your local system

Test In Development Mode

```bash
# To start the development server run
npm run dev
```

Test in Production Mode

```bash
# For the production server run
npm run build
# then run
npm start
```

If everything goes well the server should be started at `localhost:3000`

open `localhost:3000` to test application with a gui

or

open `localhost:3000/api/parse/:url` to test application with raw json response

##### Note:

- Please make sure the url is a **valid url**.
- Do not include url protocol Eg: **https://, http://, etc**
- Do not add with path **Eg: tailwindcss.com/docs**

## How to Deploy

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
