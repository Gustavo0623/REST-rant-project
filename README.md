# Project REST-Rant

REST-Rant is an interactive app where users can Review/RANT (comment) about different restaraunts. 

## Tech Usage

##### Stack: MongoDB, Express, NodeJS

##### Server-Side Rendering: JSX

##### Node Modules: method-override, dotenv, express-react-views

## Routes
 
|  Method  |           Path             |                 Purpose                   |
|----------|----------------------------|-------------------------------------------|
|  GET     |  /                         |  Home page                                |
|  GET     |  /places                   |  Places index page                        |
|  POST    |  /places                   |  Create new place                         |
|  GET     |  /places/new               |  Form page to create new place            |
|  GET     |  /places/:id               |  Details about particular place           | 
|  PUT     |  /places/:id               |  Update particular place                  |
|  GET     |  /places/:id/edit          |  Form page for editting existing page     |
|  DELETE  |  /places/:id               |  Delete a particular place                |
|  POST    |  /places/:id/rant          |  Create a RANT (comment) about a place    |
|  DELETE  |  /places/:id/rant/:rantid  |  Delete a RANT (comment) about a place    |
|  GET     |  *                         |  404 page (for any page not listed above  |

## Database

##### Places 

|  Field  |   Type    |
|---------|-----------|
| Id      | Object ID |
| Name    | String    |
| City    | String    |
| State   | String    |
| Food    | String    |
| Picture | String    |

##### rants (comments)

|  Field   |          Type          |
|----------|------------------------|
| _id      |  Object ID             |
| Place_id |  ref(places) Object_id |
| rant     |  Boolean               |
| rating   |  Number                |
| comment  |  String                | 
| reviews  |  String                |

## Planning

##### User Stories:

##### Wireframes:

## Notes

##### extra add-ons:
    
    Rating system (star or #/10?)