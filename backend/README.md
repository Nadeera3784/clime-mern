# Clime API 

## Installation

Install all backend dependencies using npm

```sh
npm install 
```
Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env
    
Update following section of the `.env` file to configure weather api key

    WEATHER_API_KEY==your-weather-api-key-here

Run the database  aseeds (**Set the database connection in .env before migrating**)

    npm run db:seed
    
start the server.    

    npm run dev
    