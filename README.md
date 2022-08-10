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
    
    As a User (Customer),
    I want an application/website,
    Where I can easily and enjoyably share my experiences and read other user's experiences, good and bad, about restaurants big/small.
    Because it will give insight to other users about the quality of food/service.

    As a User (Restaurant Owner),
    I want an application/website, 
    Where I can easily view my restaurant's reviews,
    Because it give me insight on how my restaurant is doing and that will allow me to make potential adjustments/improvements accordingly.

##### Wireframes:

## Notes

##### extra add-ons:
    
    Rating system (star or #/10?)