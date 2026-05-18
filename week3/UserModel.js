import {Schema,model} from 'mongoose';
//Create User Schema
//create User Schema(username,password,email,age)
        const userSchema=new Schema({
        UserName:{ 
          //structure of user schema
          type:String,
          required:[true,"Username is required"],
          minLength:[4,"min Length of username is 4 chars"],//min for numbers
          maxLength:[6,"max length of userName is 6 chars"],//max for numbers
          unique:[true,"username already exists"]
        },
        //password schema
        password:{
          type:String,
          required:[true,"password required"] },
        //email schema
        email:{
          type:String,
          required:[true,"password required"] ,
          unique:[true,"email already exist"]
        },
         //age schema 
        age:{
          type:Number, },
          
    },{ //it shows when the table is created 
            versionKey:false,
            timestamps:true,
        }
);
      //this is to send the model to api for calculating the products
      export const UserModel=model("user",userSchema);
