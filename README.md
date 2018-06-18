# NodeJS MongoDB React

This app simulates a contact list management whose data are stored into an instance 
of mongo db. The goal is have a scaffold with Rest API accessing to MongoDb and running on Express, 
and front-end layer developed through React.

## 1.1	Environment

- NodeJS 	10.x
- Npm 		6.x
- Bower 	1.8.4
- MongoDb 	3.6.2
- IDE like WebStorm

## 1.2 Architecture overview

The project contains both back-end and front-end layer.

The back-end layer defined into **/app** root folder has been developed
through MVC pattern and contains Rest API definition, model and persistence layer.

The front-end layer defined into **/assets** root folder has been developed 
through Flux pattern and contains Presentation definition and store data access.


## 1.3 Dependencies

Main dependencies for application are
- Webpack 3
- Express
- Monk
- React
- Mobx
- Bootstrap 3.x

## 1.4 Configuration and build

**npm install -g bower**

**npm install**

**bower install**

**npm run build:dev**


## 1.5 Database creation and configuration

start database server v3.6.2

**mongod --dbpath "<project_root>\db\contacts_db"**
(eg. C:\projects\fe\contact-listing\db\contacts_db)

Just for test, connect to database executing **mongo** command

switch to schema **use contacts_db**

test query on customer collection **db.contact.find()**

(for collection creation has been executed **db.createCollection("contact");**)

## 1.6 Profiles and Build

**npm run build:dev** for development environment build. All assets will be processed 
and written as webapack configuration into **/build** root folder.

**Back-end** env. variables have been defined into **dev.env** file and loaded
through **env-cmd**.

**Front-end** env. variables have been defined into **webpack.config.dev.js** instead.

Other env profiles should be defined.

## 1.7 Execution

**npm run start-express:dev**

**Visit http://localhost:3000/**

## 1.8 Refs

https://reactjs.org/

https://automattic.github.io/monk/docs/GETTING_STARTED.html

