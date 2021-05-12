const Engineer = require("../../lib/engineer");
const Intern = require("../../lib/intern");
const Manager = require("../../lib/manager");

const generateManagerCard = (manager) => {
  const { Name, id, email, officeNumber } = manager;
  return `
          <div
          class="card text-white bg-dark mb-3 engineerCard"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">${Name}</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Manager</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-white bg-dark">ID: ${id}</li>
            <li class="list-group-item text-white bg-dark">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item text-white bg-dark">Office Number: ${officeNumber}</li>
          </ul>
          <div class="card-body">
          </div>
          </div>
  `;
};

const generateEngineerCard = (engineer) => {
  const { Name, id, email, github } = engineer;
  return `
          <div
          class="card text-white bg-dark mb-3 engineerCard"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">${Name}</h5>
            <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-white bg-dark">ID: ${id}</li>
            <li class="list-group-item text-white bg-dark">Email: <a href="mailto:${email}">${email}</a></li>
          </ul>
          <div class="card-body">
            <a href="${github}" class="card-link">Github</a>
          </div>
          </div>
  `;
};

const generateInternCard = (intern) => {
  const { Name, id, email, school } = intern;
  return `
          <div
          class="card text-white bg-dark mb-3 engineerCard"
          style="width: 18rem"
        >
          <div class="card-body">
            <h5 class="card-title">${Name}</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-white bg-dark">ID: ${id}</li>
            <li class="list-group-item text-white bg-dark">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item text-white bg-dark">School: ${school}</li>
          </ul>
          <div class="card-body">
          </div>
          </div>
  `;
};

const generateHTML = (employees) => {
  const generateCard = (employee) => {
    // if (animal instanceof Aquatic) {
    //   return "Aquatic";
    // }
    if (employee instanceof Manager) {
      return generateManagerCard(employee);
    } else {
      if (employee instanceof Engineer) {
        return generateEngineerCard(employee);
      }
      if (employee instanceof Intern) {
        return generateInternCard(employee);
      }
    }
  };

  const cards = employees.map(generateCard);

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
    <script src="https://kit.fontawesome.com/19442e565b.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
    <link href="./style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <div class="pageTitle">
        <h1 class="teamProfileText">Team Profile</h1>
      </div>
    </header>
    <div class="cards">
    ${cards.join("")}
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
          crossorigin="anonymous"
        ></script>
        <script src="../index.js"></script>
      </body>
    </html>
  `;
};

module.exports = generateHTML;
