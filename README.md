# Pre-requisites
- Node.js v18.18.0
- A Firebase account
- A server: [EA_Node_Ajax_Server](https://github.com/Hyper-TH/EA_Node_Ajax_Server)
- A cup of coffee

## Install dependencies
```
npm install axios
npm install firebase firebase-admin
npm install flowbite flowbite-react
npm install react
npm install react-router-dom
npm install nodemon
npm install autoprefixer postcss tailwindcss
npm install @tailwindcss/aspect-ratio
npm install @tailwindcss/line-clamp
```

## Firebase Private Key
Within your Firebase console, go to:

`Project settings` > `Service Accounts`

Then select `Generate new private key`

Then paste the values into the `.env.example`

## Environment variables
Use the `.env.example` file as a template (and remove `.example`). All of the environment variable values can be found within your `config.js` from your Firebase account. The `REACT_APP_LOCALHOST` variable can be your `localhost` domain or your deployed link.

## To run the application
First run the server then run the following
```
npm run start
```