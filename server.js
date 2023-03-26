require('dotenv').config();
const axios = require("axios");

const options = {
  method: 'GET',
  url: process.env.JOB_LIST_URL,
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
};

axios.request(options).then(function (response) {
	console.log("RESPONSE: ", response.data);
}).catch(function (error) {
	console.error("ERROR: ", error);
});