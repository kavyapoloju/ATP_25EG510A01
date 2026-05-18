# common types of routes

   - public poutes(by anyone)
   - protected routes(by authenticated users)

### user aunthentication (login)

 - submit crrdential and get token
 - this is the way to get user details in frontend
 - req->public routes
 - req -> middleware -> portected  routes(by authenticated users only)
 
 - crate a file with verify token.js
 - we shulod not write for all the time app.use function 
 

to access the cookies property of the object we need cookies parser middleware otherwise request .cookies is undefined

 access token 
 refresh token