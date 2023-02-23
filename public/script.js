// //Filter option
// const links = document.querySelectorAll(".link-frontend");
// const filterOption = document.querySelector(".filterOption");
// // loopt door alle filter option links
// for (let i = 0; i < links.length; i++) {
//   const link = links[i];
//   //luistert naar elke link klik
//   link.addEventListener("click", (event) => {
//     // Wanneer de link is geklikt wordt de function uitgevoerd: navigeert naar een ander de paragraph in de home twitter
//     event.preventDefault();
//     // haalt de tekstinhoud van de aangeklikte link op (bv: filter option)
//     const selectedOption = link.innerHTML;
//     //  filteren van andere links
//     const filterLinks = Array.from(links).filter(
//       (option) => option.innerHTML !== selectedOption
//     );
//     // werkt de content van de container van de links bij door de classname te gebruiken
//     filterOption.innerHTML = `# ${selectedOption}`;
//     // Laat de filteroption zien door display:block te gebruiken
//     for (let j = 0; j < filterOption.length; j++) {
//       filterOption[j].style.display = "block";
//     }
//   });
// }

// console.log(links);
