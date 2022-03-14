# E-Commerce React App

E-Commerce Web App made with React.js along with Authentication and Checkout functionality.

Complete App is deployed here https://beauty-home-react1.netlify.app/
![image](https://user-images.githubusercontent.com/75572829/158166836-c915b951-c071-46b2-92a8-31d80bd55581.png)
![image](https://user-images.githubusercontent.com/75572829/158166950-7355513c-8101-4ed1-9af2-762693d23203.png)
![image](https://user-images.githubusercontent.com/75572829/158167212-001b3dd7-e8cb-45fb-afa2-553fbe49205e.png)

# Get Started
- Fork this repo.
- Made an account with Auth0 and stripe if not done already.
- Make a file `.env` in src folder and put all the secrets from account.

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


