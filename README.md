# Cloud_Tomb

This is a CS50 final project. 
The website "https://cloudtombs.com/" is developed to allow user to create their own tombs in the cloud.
Users can sign up and log in, and then create/edit their personal information and "inscription". 
Also, users can browse other users' tomb which are randomly shown in the homepage. 
Once clicked on any of others' tomb, a new page for this tomb will be shown, which is able to be liked or unliked by clicking on the button.

The frontend of the web is built by Vue3 with Javascript and tailwindcss (for styling).
Firebase Realtime Database is used to store users' tomb information.
Sign-up and sign-in functions are achieved by Firebase Authentication.
Backend service is built by Rust backend service.
Google Cloud Run is used to host the website via docker container.



## Create a new repo:
1. Create a new repo on Github
1. Go to the local Workspace 
1. `git clone`

## Create a new Vue project:`
- check vue --version
- if vue/cil 4.5.8+
- vue create vue3 -> select "Default (Vue 3 Preview)"
- `cd vue3`
- `npm run serve`

## install and import tailwindcss 
- `npm install tailwindcss`
- create a file called "style.css" in ./src/assets
- add tailwind to css
    ```
    @tailwind base;          
    @tailwind components;          
    @tailwind utilities;
    ```
- create tailwind config file: tailwind.config.js, by commend `npm tailwindcss init`
- create a file called "postcss.config.js"
- copy the code below into the file:
    ```
    module.exports = {
      plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
      ]
    }
    ```
- import css into main.js: import "./assets/style.css
      
