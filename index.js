import express from "express";

const url = "https://whois.fdnd.nl/api/v1/squad/squat-c-2022";
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error);

// Maak een nieuwe express app
const app = express();

// Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maak een route voor de index
app.get("/", (request, response) => {
  console.log(request.query.squad);
  response.render("index", data);
});

// dummy datatables ambition
const ambitions = [
  "Frontend engineer",
  "HTML/CSS developer",
  "Frontend webdesigner",
  "Not yet defined",
];
data.squad.members.forEach(function (member) {
  if (!member.ambition) {
    // Pak een random ambition en zet deze in de member
    member.ambition = ambitions[Math.floor(Math.random() * ambitions.length)];
  }
});

// Stel het poortnummer in en start express
app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
