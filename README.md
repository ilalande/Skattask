# Skattask - task manager

## Contents

1. [General information](#General-information)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Author](#author)

## General information

This WebApp is a reminder board. It allows you to create lists of tasks and assign them a person, a description, a deadline.
This WebApp was developed as part of an internship at User-Agency, adapted by the author in order to prepare the passage of title of the Web developper diploma.
It is developed on NextJS with TypeScript, Redux, Prisma, NextAuth and has never been launched in production.

### Project status and progress

This project was developed from September 2022 to March 2023. The features available on the user side are the following:

- Login through Github or Google. If the account does not exist it is created in the database.
- Create a task
- Select and modify a task (assign a date, a person, modify the description, set it to "completed" status)
- Access existing (stored in database), ongoing and completed tasks

## Technologies

This project is developed in **NextJS**.

**Main libraries used:**

- Redux: To record the state of the application.
- Redux saga: To manage out-of-sync states, such as database queries or user login status
- TypeScript: Allows variables to be typed and thus improve code quality.
- PostGre: The database is managed on PostGre. It was created to manage the data of the application. The two main tables are users, used for logging into the application and assigning a task; and tasks. Other tables have been added to use NextAuth and to manage sessions. The database schema can be found in the prisma folder.
- Prisma: This is an ORM that has been used in its entirety: to manage migrations (prisma migrate), the database schema (Prisma Schema), make SQL queries (Prisma Client)
- Next: To manage the back office and the creation of APIs, Next was used thanks to the /api/ folder
- NextAuth: Allows you to manage all the authentication. The configuration options are in the "/api/auth" folder

### Other miscellaneous libraries

- React calendar: To show the calendar which allows tasks to be assigned
- Styled Component` was used to manage the styling of the application.
- Styled Reset` was used to reset the default styles of the various browsers.
- Axios` was used to manage the application's API calls (request folders for the call and Pages/api to see the APIs called by http://localhost3000/api)

## Installation

### To start a project

- Clone this repository, go inside
  Run the npm run build command

- Configure the .env file (to be added in gitignore)

- Open (http://localhost:3000) with a browser to see the result.

- API routes are accessible at http://localhost:3000/api/tasks (or users) in connected mode only

### List of commands and their meaning

    npm run build : Initialization of the frontend and backend as well as the tools
    npm run dev : Start the development server
    npm run seed : Delete all data from the database and inject the data in the prisma/data.js file into the database
