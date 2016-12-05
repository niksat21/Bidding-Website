# Hackstreet Boyz
## Wyatt Lee Chastain, Nikhil Sathe, & Mayur Talole
### CS 6314 - Fall 2016

## Shopping Website
#### Tech Stack
-------
Spring Boot v.1.4.5
Angular 2
MongoDB

#### Install and Running
------
The website can be created in a few parts.  
First, install and run mongodb using the command "mongod" in the install folder.
Second, after extracting the project, open a new terminal windows and go to WPL_BE.  Run "./gradlew build" followed by "./gradlew bootRun" (exclude ./ for Windows machines).  This should download the dependencies and start the Spring Boot Application.
Lastly, open the WPL_FE folder and run "ng serve".  This assumes that prerequisite NPM packages are installed.  You can install them using:
npm install
npm install angular-cli
...

Lastly, go to https://localhost:4200 to access the application from the web browser or https://localhost:9000 to test the backend API (Basic Authentication: username - admin, password - 12345).