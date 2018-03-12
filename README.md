![2018 To Do List!](public/to-do-2018.png)

# My Awesome Project
This is an simple to-do list application that allows you to keep track of things within a list, focusing on how to use CRUD, Express and Mongo DB, so, more server-side stuff. This being the first time I was setting up my first database and only having experience with the front end, I was really intimidating but with my previous experience in JavaScript and using Node allows you to use JavaScript as your server-side language.

## How It's Made:
HTML, CSS, Node.JS, Express, MongoDB, Javascript Framework of choice Under the Hood:First starting off with the HTML, An html.ejs file was used as a template to reduce the amount of code needed to get this app running. I put two inputs to submit the task at hand and the date due, where the list items will populate on the DOM. As well as a thumbs up if it completed or thumbs down if not complete with a delete function. Using node, express modules, MongoDB and the server localhost 3000 I was able to connect the front and back end. I created my server.js file for my node folder and then installed Express thru the commandline with Node package manager (npm), which comes bundled with Node. Once installing Node and Express, I started setting I realized that you need to restart your server whenever you make a change to server.js file. For the styling of this website I just put a video background and white text with hover attribute for the input & button. CRUD played a major part in this so once I set up the listen method, GET request, POST request for the <form> I was having problems because Express doesn’t handle reading data from the <form> element on it’s own. I had to add another package called body-parser to gain this functionality. I found out that Express allows us to add middleware like body-parser to our application with the use method. The whole MongoDB was more simple than I thought. Once I got that set up, I was ready to push!


## Optimizations
After now looking at it, I would like to add a edit button instead of a thumbs down button and I would have also change the thumbs up to a checkbox or radio buttons.

## Lessons Learned:

No matter what my experience level, being an engineer means continuously learning. Every time I build something I always have those *whoa this is awesome* or *ahh ha moment* . During this project I learned that Express allows us to add middleware like body-parser to our application with the use method. I was having problems because Express doesn’t handle reading data from the <form> element on it’s own. I had to add another package called body-parser to gain this functionality. I also learned how to create the front end and back end to a website, which is extremely useful!

## portfolio:

**WEBSITE:** https:/johnfleurimond.com



## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `npm todo`
2. Navigate to `localhost:3000`
