# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application(SPA) to track students interviews built with the latest tools and techniques for optimized user experience. The App allows users to add, edit and delete appointments in real time. It uses React built-in and custom hooks Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Moreover, for quality assurance, the project follows best practices of Test Driven Development (TDD).i.e, individual Component is tested in isolation as well as End-to-End testing is performed.

## Project Outcomes 
Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
The days show the number of slots available
A user can switch between days and see detailed information
Booked and available slots are clearly differentiated
A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
A user can change the details of an existing interview by pressing the edit icon
A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
Days display currently remaining spots and show updates after each modification

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Views 

### Daily View
![Daily Schedule](https://github.com/kevincogen/scheduler/blob/6b969f5235b7e8d3d6a2132755def713db32a1ca/public/images/Screenshot%202023-06-29%20at%202.17.47%20PM.png?raw=true)

### Add/Edit Appointment View 
![Add/Edit form](https://github.com/kevincogen/scheduler/blob/master/public/images/Screenshot%202023-06-29%20at%202.18.25%20PM.png?raw=true)
### Delete Appointment View
![Delete confirmation](https://github.com/kevincogen/scheduler/blob/master/public/images/Screenshot%202023-06-29%20at%202.18.46%20PM.png)

### Input Validation View
![Ensure data is entered](https://github.com/kevincogen/scheduler/blob/master/public/images/Screenshot%202023-06-29%20at%202.19.12%20PM.png?raw=true)