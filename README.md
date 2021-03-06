# thePeaks

## News View

## Features

-   `Search Result` - User can search any content
-   `Home Page` - News and Sports Section.
-   `Bookmark` - Bookmarked by the user
-   `Detail/Article Page`

## Installation and Execution

Install the dependencies and devDependencies and start the server.

```sh
cd thePeaks
npm i
```

For dev environment

```sh
npm run start:dev
```

For production environments...

```sh
npm run build
npm run start
```

## Tech

thePeaks uses a number of open source projects to work properly:

-   [reactjs.org] - View Library
-   [node.js] - evented I/O for the backend
-   [Express] - fast node.js network app framework
-   [webpack.js.org] - the streaming build system
-   eslint & prettier - For linting
-   babel - for transpiling
-   jest - For testing

## Assumptions and working

-   We have used a custom background image because of aspect ratio problem of the image.
-   Bookmarking is being stored in local storage.
-   Bookmark page is shown using the data stored in local storage.
-   Special bookmark util to set the bookmark data and get the bookmark data
-   Add and Remove Bookmark with animation

## PWA

-   Added service worker support using workbox
-   It can precache js,css and other images
-   It can cache index.html and other api's
-   Home page will work offline

## Details

-   `tools` - Webpack configuration for dev as well as production mode.
-   `src/containers` - Main Page Components
-   `src/ui` - Generic UI components
-   `src/components` - Components required by the Application. Application Specific components.
-   `src/styles` - Base styles and variable
-   `src/util` - Util functions
-   `assets/images` - Images
-   `server` - Server code
