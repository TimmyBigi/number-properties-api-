# Number Properties API

## Overview

The Number Properties API is a simple and efficient API that classifies numbers based on mathematical properties and provides a fun fact about the number. It accepts a number as input and returns whether the number is prime, perfect, or an Armstrong number, along with its digit sum and parity (odd/even).

## Features

- Determines if a number is prime.
- Determines if a number is perfect.
- Identifies if a number is an Armstrong number.
- Calculates the digit sum of the number.
- Classifies the number as odd or even.
- Fetches a fun fact about the number from the Numbers API.

API Specification

Endpoint:

GET /api/classify-number?number=<num>

Request Parameters:

Parameter

Type

Description

number

Integer

The number to classify

### Example Request:

GET https://your-domain.com/api/classify-number?number=371

Success Response (200 OK):

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong", 
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
Error Response (400 Bad Request):
json
Copy
{
    "number": "alphabet",
    "error": true
}

Technologies Used
Node.js (Express.js for API development)

Axios (for fetching fun facts from Numbers API)

CORS (for cross-origin resource sharing)

nodemon (to restart the server automatically)

pino & pino-pretty (for better colorful logs in the terminal)

JavaScript (for mathematical property calculations)

Installation and Setup
1. Resources
Fun fact API: http://numbersapi.com/#42

Parity (mathematics): https://en.wikipedia.org/wiki/Parity_(mathematics)

2. Install Dependencies
npm install

3. Start the Server
npm start
The server will run on http://localhost:4500 (or the port specified in the environment).

Deployment
The API is deployed and accessible at:

https://number-properties-api-juzs.onrender.com

Project Structure:
number-properties-api/
│── handlers/
│   ├── numberHandler.js
│── routes/
│   ├── numberRoutes.js
│── helpers.js
│── app.js
|── package-lock.json
│── package.json
│── README.md
How It Works
The API receives a number as input.

It validates the input to ensure it is a valid integer.

It calculates the number's properties (prime, perfect, Armstrong, etc.).

It fetches a fun fact from the Numbers API.

The response is returned in a structured JSON format.