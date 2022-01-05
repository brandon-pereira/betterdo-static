# betterdo-static

This repository contains the static site which is visible pre-authentication as well as any static files hosted on the server.

It's recommended you run this repo with the following other repos:

-   [betterdo-api](https://github.com/brandon-pereira/betterdo-api) - This is the server side logic of BetterDo.
-   [betterdo-ui](https://github.com/brandon-pereira/betterdo-ui) - This is the front-end BetterDo application logic.

## Features

-   🚀 Built using [Astro](https://astro.build/) for improved performance and SEO.
-   🎼 Leverages GitHub actions for automated production deploys

## Running Locally

```bash
npm install
npm start
```

If both server and UI are running, you'll have the option of visiting:

-   [http://localhost:8000/](http://localhost:8000/) for full user experience
-   [http://localhost:8080/](http://localhost:8080/) for front-end live reloading
