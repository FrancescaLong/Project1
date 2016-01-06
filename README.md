# Project1
Project 1 - What is that vegetable

This is a website that has pictures of vegetables with information about the vegetable and recipes. The initial 10 vegetables were chosen due to their rarity in the American market or more intimidating nature to a cook who isn't very comfortable in the kitchen.

The site is hosted on Heroku here:
https://lit-beach-6135.herokuapp.com/

Wireframes and user stories are included in the Trello tracking tool for the project:
Wireframes - https://trello.com/c/y83jNIgD/16-make-wireframes
User Stories - https://trello.com/c/DMvGciLh/15-create-user-stories

The API currently used in the app is Food2Fork. 

Libraries used include:
	Bootsnipp.com
	jQuery
	Express
	EJS
	Path
	Body-parser
	Mongoose
	Express-session
	Bcrypt
	Ajax


Problems
	1. Login still doen't take you back to the home page, it just sits there.
	2. Only artichoke is currently populated with recipes and pictures. The others will be added.

Future Development
	1. Include the Wikipedia API to provide more information about the vegetable.
	2. If the Wikipedia API will not work, write up the text for those pages.
	3. Implement comments in the recipe section that will allow users to comment.
	4. Allow users to identify their favorite vegetables.
	5. Simplify the code and create templates rather than the multitude of pages.  
	6. Fix the login button so it shows up on the same line with the box.
	7. Get the rest of the veggie pages going (along with the recipes).
	8. Fix the picture size on the the recipes 1-3 pages.
	9. Create a summary in the JS files and explain what each one does.

To Run the App
	1. Run the "mongod" command in the terminal window to start the database
	2. Run the "nodemon" command next in the terminal window to start the server
	3. Navigate to http://localhost:5000/ in your browser
