# HNG13-Stage0-Backend

This is a simple RESTful API endpoint built with Node.js and Express. It returns a static user profile along with a dynamic timestamp and a random cat fact fetched from an external API.

## Core Features
- GET endpoint at `/me`
- Returns profile data in JSON format
- Integrates with the [Cat Facts API](https://catfact.ninja/fact)
- Includes dynamic UTC timestamp (ISO 8601)

## Tech Stack
- **Backend:** Node.js, Express.js
- **HTTP Client:** Axios
- **Environment Variables:** dotenv

## Setup and Run Locally

### Prerequisites
- Node.js installed
- npm or yarn

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/Abdulbaasiterinkitola/HNG13-Stage0-Backend.git
```

2. Navigate to the project directory:
```Bash
    cd HNG13-Stage0-Backend
```
3. Install the dependencies:

```Bash
    npm install
```
4. Environment Variables
Create a .env file in the root directory and add the following variables:
- PORT="Your desired port"
- MY_EMAIL="your.email"
- MY_NAME="Your Full Name"
- MY_STACK="Your Stack"

## Running the Application
To start the server, run the following command:
```Bash
    node index.js
```
### API Endpoint
**URL:** /me

**Method:** GET

**Success Response:**

**Code:** 200 OK

**Content:**
```JSON
{
  "status": "success",
  "user": {
    "email": "your email",
    "name": "Your Full Name",
    "stack": "your stack"
  },
  "timestamp": "2025-10-21T18:45:00.123Z",
  "fact": "Cats can make over 100 different sounds, whereas dogs can only make about 10."
}
```