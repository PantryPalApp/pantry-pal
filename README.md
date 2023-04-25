# pantry-pal
This app displays recipes and keeps track of shopping lists for logged in users.

npm run dev - starts the frontend on 8080 (with proxy to 3000 for /api and /auth) and backend on 3000
npm build - generates bundle.js and index.html in dist folder
npm start - starts frontend based on built files and backend on 3000 

Front end - React / React Router Dom / CSS
App.js has the routes for client side routing.
There are 4 pages and a bunch of components
Note on client-side routing: 
  npm start will serve the react app to any url, so when you refresh the page on the route, it'll route correctly
  npm run dev will only serve the react app to localhost:8080, so when you refresh the page, it'll only load on localhost:8080/
  might be some config options for 8080 to serve the app when url not found?


Back end
User data and recipe data are stored in a psql server.
Our express server has router files for the api calls
It also serves bundle.js and index.html for production mode

psqlSetupFile has the sql queries to set up the table and insert recipes
  Uses edamam api to get 20 recipes (check api for query options)
