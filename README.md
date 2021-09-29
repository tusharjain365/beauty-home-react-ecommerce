# E-Commerce React App
Complete App is deployed here https://beauty-home-react1.netlify.app/

This is an ecommerce site with dummy home products.
For frontend reactjs is used and for backend netlify serverless function is used to integrate it with stripe payment.This site also uses user authentication that has been connected to auth0 service and for storing cart products of user local storage is used.

## Fixes for Deployment with Netlify
Try to prevent all the warnings before productions if still have some warnings then,

Create an BUILD COMMAND `CI= npm run build` in under deploy setting and create another environment variable `CI = false`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


