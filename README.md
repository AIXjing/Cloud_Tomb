# Cloud_Tomb
# Create a new repo:
    # Create a new repo on Github
    # Go to the local Workspace 
    # git clone
    
# Create a new Vue project:
    # check vue --version
    # if vue/cil 4.5.8+
    # vue create vue3 -> select "Default (Vue 3 Preview)"
    # cd vue3
    # npm run serve
    
    
# install and import tailwindcss 
    #npm install tailwindcss
    #create a file called "style.css" in ./src/assets
    #add tailwind to css
           @tailwind base;          
           @tailwind components;          
           @tailwind utilities;
    #create tailwind config file: tailwind.config.js - npx                              tailwindcss init
    #create a file called "postcss.config.js"
    #copy the code below into the file:
        module.exports = {
          plugins: [
            // ...
            require('tailwindcss'),
            require('autoprefixer'),
            // ...
          ]
        }
    #import css into main.js: import "./assets/style.css"
      