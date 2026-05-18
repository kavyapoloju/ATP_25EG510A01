# User API, User Model, and Server Code Explanation

This document explains the code in:

- `server.js`
- `APIs/UserAPI.js`
- `models/UserModel.js`

---

## 1) `server.js`

### Purpose
`server.js` is the entry point of the backend application.

### What the code does
1. Imports required modules:
   - `express` (as `exp`)
   - `connect` from `mongoose`
   - `userApp` router from `./APIs/UserAPI.js`
2. Creates an Express app:
   - `const app = exp();`
3. Adds middleware:
   - `app.use(exp.json())` to parse JSON request bodies.
4. Mounts user routes:
   - `app.use('/user-api', userApp)`
5. Starts server:
   - `app.listen(4000, ...)`
6. Connects to MongoDB using:
   - `connect('mongodb://localhost:27017')` inside `connectDB()`

### Summary
This file wires everything together: middleware, routes, server startup, and DB connection.

---

## 2) `APIs/UserAPI.js`

### Purpose
Defines user-related REST API endpoints using an Express Router.

### What the code does
1. Creates router:
   - `export const userApp = exp.Router();`
2. Imports `UserModel` from `../models/UserModel.js`
3. Defines `POST /Users` route:
   - Reads user data from `req.body`
   - Creates a new Mongoose document:
     - `const newUserDocument = new UserModel(newUser)`
   - Saves it with:
     - `await newUserDocument.save()`
   - Sends response:
     - `res.status(201).json({ message: "user created" })`

### Effective full endpoint path
Because the router is mounted at `/user-api` in `server.js`, the actual endpoint is:

- `POST /user-api/Users`

### Summary
This file currently handles creating a new user and storing it in MongoDB.

---

## 3) `models/UserModel.js`

### Purpose
Defines the schema and model for user documents in MongoDB.

### Schema fields
- `UserName`:
  - `String`
  - required
  - min length: 4
  - max length: 6
- `password`:
  - `String`
  - required
- `email`:
  - `String`
  - required
- `age`:
  - `Number` (optional)

### Schema options
- `versionKey: false`  
  Removes `__v` field.
- `timestamps: true`  
  Automatically adds:
  - `createdAt`
  - `updatedAt`

### Model export
- `export const UserModel = model("user", userSchema);`

### Summary
This file defines the structure and validation rules for user data.

---

## Request Flow (End-to-End)

1. Client sends `POST /user-api/Users` with JSON body.
2. `server.js` forwards request to `userApp`.
3. `UserAPI.js` creates and saves a user document using `UserModel`.
4. `UserModel.js` enforces schema rules.
5. API returns `201 Created` on success.

---

## Response Code Used

- `201` → User created successfully

(Recommended to add `400` and `500` handling with `try/catch` in routes.)

---

## Suggested Improvements

- Add `try/catch` in API routes for error responses.
- Add `unique: true` on email field.
- Hash passwords before saving (`bcryptjs`).
- Add CRUD routes for read/update/delete users.
- Add centralized error middleware.