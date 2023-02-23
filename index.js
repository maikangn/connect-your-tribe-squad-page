// Importeer express uit de node_modules map
import express from "express"; // express zorgt ervoor dat  de route van je website defineerd wordt

// De URL wordt gebruikt om informatie op te halen van de API
const url = "https://whois.fdnd.nl/api/v1/squad/squat-c-2022";
// Fetch gegevens op van de opgegeven URL, parsed deze als JSON en wijst het resultaat toe aan de variabele "data".
const data = await fetch(url)
  .then((response) => response.json())
  .catch((error) => error);

console.log(data.members);

// Maak een nieuwe express app
const app = express();

// Stel in hoe we express gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");

// Gebruik de map 'public' voor statische resources
app.use(express.static("public"));

// Dummy data filter on the option in the parameter
const ambitions = [
  "Frontend engineer",
  "HTML/CSS developer",
  "Frontend webdesigner",
  "Not yet defined",
  "TheWizard",
  "TheEnthusiast",
  "TheInventer",
  "TheMashUp",
];
data.squad.members.forEach(function (member) {
  if (!member.ambition) {
    // Pak een random ambition en zet deze in de member
    member.ambition = ambitions[Math.floor(Math.random() * ambitions.length)];
  }
});
// console.log(data.squad.members)

// Maak een route voor de index
app.get("/", function (req, res) {
  // res.send('Hello World!')

  const filtered = structuredClone(data);

  if (req.query.ambition) {
    filtered.squad.members = filtered.squad.members.filter(
      (member) => member.ambition == req.query.ambition
    );
  }
  res.render("index", filtered);
});

// Stel het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
