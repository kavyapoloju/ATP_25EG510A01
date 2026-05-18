# this it a basic back end application 
###
1.generate package.json
###
2.create express server
###
3.install mongoose and connect to mongodb server
###
    REST API - mongodb native driver -> db server
    REST API -mongoose ODM driver -> db server
###
# pure-backend
mongodb connection and express server   
### How to run the application
1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. The server will be running on `http://localhost:4000`
4. Use an API client like Postman to interact with the API endpoints.
5. To stop the server, press `Ctrl + C` in the terminal.

### API Endpoints
- `GET /api/items`: Retrieve all items
- `POST /api/items`: Create a new item
- `GET /api/items/:id`: Retrieve a specific item by ID
- `PUT /api/items/:id`: Update a specific item by ID
- `DELETE /api/items/:id`: Delete a specific item by ID
### Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
### License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

**Note: This is a basic backend application and can be extended with additional features such as authentication, validation, and error handling as needed.**

###
## async &d await
      async function getData(){
        try{
        let res =await fetch("<api url>")
        let data = await res.json()
        console.log(data)
      }
      catch(err){
        console.log(err);
      }
      }


4.Build USER REST api

         -Create user
         -read all user by id
         -read a user by id
         -update a user by id
         -delete a uesr by id

5.create Schema and model of the Resource(User)

         1.create a folder with models
         2. //create User Schema(username,password,email,age)
         import {schema} from 'mongoose';
            const userSchema=new Schema({
            UserName:{ 
              //structure of user schema
              type:String,
              required:[true,"Username is required"],
              minLength:[4,"min Length of username is 4 chars"],
              maxLength:[6,"max length of userName is 6 chars"]
            },
            password:{
              type:String,
              required:[true,"password required"] },
            email:{
              type:String,
              required:[true,"password required"] },
            age:{
              type:Number,
            } });
         -
  | keyword | forwhat | 
   |---|---|
   | `String` | for mongoose | 
   |`string`|for java script|

### create model
    import {model} from 'mongoose';
    export const UserModel=model("user",userSchema);
    //example export const ProductModel=model("product",userSchema);

### api defineing 
    import exp from 'express'
    export const userApp = exp.Router();

# total code 
### server.js


           // create express app
           import exp from 'express';
           import { connect } from 'mongoose';
           import { userApp } from './APIs/UserAPI.js';

           const app = exp();

           // Parse JSON body and forward requests to user router
           app.use(exp.json());
           app.use('/user-api', userApp);

           app.listen(4000, () => console.log('server on port 4000...'));

           async function connectDB() {
           try {
    await connect('mongodb://localhost:27017');
    console.log('database connection success');
           } catch (err) {
          console.log('err in DB Connection :', err);
           }
          }

          connectDB();
  ## USERapi-path: ./APIs/UserAPI.js
    import exp from 'express'
    export const userApp = exp.Router();
    import {UserModel} from '../models/UserModel.js'
    //define user rest api routers
    //create new user 
       userApp.post("/Users", async(req,res)=>
      {
    //get newUser obj from req
    const newUser=req.body;
    //create new user document
    const newUserDocument=new UserModel(newUser)
    //save
    const result =await newUserDocument.save();
    console.log("result :",result)
    //send res
    res.status(201).json({message:"user created"})
    })

## UserModel -path: ./models/UserModel.js
      import {Schema,model} from 'mongoose';
      //Create User Schema
      //create User Schema(username,password,email,age)
        const userSchema=new Schema({
        UserName:{ 
          //structure of user schema
          type:String,
          required:[true,"Username is required"],
          minLength:[4,"min Length of username is 4 chars"],
          maxLength:[6,"max length of userName is 6 chars"]
        },
        password:{
          type:String,
          required:[true,"password required"] },
        email:{
          type:String,
          required:[true,"password required"] },
        age:{
          type:Number, },
          
          },{  
            versionKey:false,
            timestamps:true,
           }
      );
      export const UserModel=model("user",userSchema);

### status code
 |code|name|
 |---|---|
|`200`|sucess|
|`201`|created|
|`400`|bad request|
|`401`|unauthorize|
|`404`|not found|
|`500`|server error|


# techniques to learn
- handliing unavailable resources
- validators during update
- hashing password
- unique fields
- refined version of error handling middleware

|type|used for|
|---|---|
|`strict`|it cannot interact with database|
| `none`|it cannot restrict it from the backend|
|`lax`|relaxed way and also good as strict|



### Author
- Your Name (
    sashreek )