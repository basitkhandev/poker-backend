- Clone project
- Go to project directory and run "npm i"
- Run commant "npm run start" to run the project
- Check api's on swagger go to url "http://localhost:3000/api-docs"
- For protected api's access first need to login and authorize by using token

- Run migration to create tables in database using command "npx sequelize-cli db:migrate"
- If want to write any new migration here is the example command "npx sequelize-cli model:generate --name TutorRating --attributes tutorId:integer,rating:integer"