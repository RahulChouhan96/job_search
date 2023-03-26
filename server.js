require('dotenv').config();
const axios = require("axios");

const options = {
  method: 'GET',
  url: "https://jobs-from-remoteok.p.rapidapi.com/",
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': "jobs-from-remoteok.p.rapidapi.com"
  }
};

axios.request(options).then(function (response) {
	console.log("RESPONSE: ", response.data);
}).catch(function (error) {
	console.error("ERROR: ", error);
});