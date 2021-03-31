Watch Party

Watch Party is an app where a user can select an upcoming sporting event and either create a watch party for that event or search for a watch party already created that they can join.

Getting Started
The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Download and install Node.js, if not already installed on your local machine.
Install React with the following terminal command:
npm install --save react
Install ReactDOM with the following terminal command:
npm install --save react-dom
Install json-server with the following terminal command:
npm install -g json-server

Clone my repository to your local machine.

Navigate to the project folder. In the src directory, you will see a file named .Settings.js (note the dot at the beginning).

Usage
A step by step series of examples that tell you how to get a development env running

In your terminal, navigate to the project directory.
From the root of this directory, run the following terminal command in order to start up React.
npm start
Open a new terminal tab and navigate to the api directory.
Run the following terminal command in order to start up your json-server.
json-server -p 8088 -w database.json
Open your web browser of choice and navigate to http://localhost:3000/

You will be presented with a login/registration page if this is your first time using the application. Register an account (NOTE: USE DUMMY DATA! Do NOT use your real email or password).

Enjoy!