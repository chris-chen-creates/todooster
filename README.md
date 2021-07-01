![Imgur](https://i.imgur.com/QQWxbJs.png)

## What is it? :rooster:
Todooster is a fullstack app that uses React for the frontend, express for the server, and MySQL for the database.

### See it in action!
![Todooster App Gif](https://media.giphy.com/media/C3Wwc75PYIi6psYbPO/giphy.gif)

## What's the user experience?
Todooster is designed to be a simple todo app that allows a user to jot down tasks to complete and remove them when completed.

## Functionality for user
- Add new tasks to the list
- Cross off completed tasks
- Delete completed tasks
- Login and have the state for the list be saved

## What technologies are being used?
- [Node.js](https://nodejs.org/en/) v12.18.3
- [npm](https://www.npmjs.com/) v7.18.1
- [React w/ Typescript](https://create-react-app.dev/)
- [Tailwind CSS w/ Craco](https://tailwindcss.com/)
- [Jest](https://jestjs.io/) (for testing)
- [React Icons](https://react-icons.github.io/react-icons/)
- [MySQL](https://www.mysql.com/) database
- [Goose](https://github.com/pressly/goose) for migrations
- [Express](https://expressjs.com/)

# Setup :hatching_chick:
1. Download the .zip file or clone the repo using the command line tool:
```
gh repo clone chris-chen-creates/todooster
```
2. Install the dependencies using:
```
npm install
```

# Running the app
1. Start by navigating to the `/todooster` folder
2. In the command line, run either `npm start` or `yarn start` (if you're a yarn user)
3. *login/registration steps will go here when ready*
4. 


# Design Notes :chicken:

### Register
**Frontend**

When the user first enters the app, they are greeted with a login window. Below the login window is an option to register if they're not currently a user of the app.

When the register option is pressed, they move to another window that will allow them to create a username and password. Once filled out, they will be returned to login screen to log in to Todooster.

**Backend** 

When the user submits their newly created username and password, the information will be passed through the server and into the Todooster database. The username and password will be stored in the user table and the password is hashed before being stored to reinforce security. After the info is stored, a session token will be passed back to the user.

### Login
**Frontend**

When the user enters the app, they're greeted with a login window. If they're already a user, they can enter their username and password. If the credentials are valid, they'll enter the app. If the credentials are invalid, they'll be greeted with a helpful error message. 

Once logged in, the user will see the task list in the same state that they last used it.

**Backend** 

When the user logs in, the entered information will be compared to what is within the database. The password will be hashed to make the comparison. If the information passes, the server will pass back a session token. If the info fails, they'll be passed a 4xx error.

### Creating a task
**Frontend**

The user can type a task into the input box and either press enter or press the + icon to the right of the input box. The task will then be added to their task list. 

**Backend** 

When the task is created, the task will be passed to through the server to the database. A timestamp for the creation will be added to the database as well.

### Completing a task
**Frontend**

After a user completes their task, they can press the circle icon to the left of the task. This will change the icon to a filled in (or completed) icon signifying they completed the task (yay!)

**Backend** 

When a task is marked as complete, a timestamp will be added to the `is_complete` field for the task within the database. If a task is changed from completed to incomplete, the timestamp for `is_complete` will be deleted until the task is completed again.

### Deleting completed tasks
**Frontend**

After a user has marked a task as complete, it'll then be eligible for deletion. When the "Delete Completed" button is pressed, the completed tasks will be removed.

**Backend** 

Deleting tasks will add a timestamp to the deleted field on the associated task in the database. These tasks will no longer be available to the user. 

## Backend Design

### ERD
![Imgur](https://i.imgur.com/5Xpi8hu.png)
![Imgur](https://i.imgur.com/Ah30sap.png)
