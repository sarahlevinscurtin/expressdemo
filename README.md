# Node Express API Example - Demo 18 June 2024

Recording of demo can be found [here]()

## Run Project Locally
1) Create a `.env` file in the root folder, and set the following values, replacing XXXX with your own values
```
API_KEY=XXXX
MONGO_DB_USERNAME=XXXX
MONGO_DB_PASSWORD=XXXX
```
2) run `npm install` in the root folder to create node_modules
3) run `npm run start` in the root folder
4) access the api at `localhost:3000/events` 

The events endpoint is accessible using GET and POST. Both require api key authentication. Set the X-API-KEY header to the value you set in .env

## Deploy to render

As of 18th June 2024 I recommend using the free tier to deploy this API to [render](https://render.com/). 

Integrate your account with your github project, and deploy it as a webservice on the hobby tier.