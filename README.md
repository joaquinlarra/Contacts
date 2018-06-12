# NodeJS MongoDB React

This app simulates a contact list management whose data are stored into an insstance 
of mongo db.
The goal is have a scaffold with Rest API running on Express, and front-end layer
developed through React.

## 1.1	Environment

- NodeJS 	6.11.1
- Npm 		3.10.10
- Bower 	1.8.4
- MongoDb 	3.6.2
- IDE like WebStorm


## 1.2 Dependencies

Main dependencies for application are
- Webpack 3
- Express
- Monk
- React
- Bootstrap 3.x

## 1.3 Configuration

**npm install -g bower**
**npm install**


## 1.4 Database creation and configuration

start database server v3.6.2
- **mongod --dbpath "<project_root>\db\contacts_db"**

Just for test, connect to database **mongo**

switch to schema **use contacts_db**

test query on customer collection **db.contact.find()**

(already executed **db.createCollection("contact");**)

## 1.5 Profiles and Build

- **npm run build:dev** for development environment

## 1.6 Execution

- **npm run start-express:dev**

## 1.8 Refs

https://reactjs.org/

https://automattic.github.io/monk/docs/GETTING_STARTED.html

