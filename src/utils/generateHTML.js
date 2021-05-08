const generateManagerHTML = (data) => {
  const { name, id, email, officeNumber, getRole } = data;
  return `
  <div
        class="card text-white bg-dark mb-3 engineerCard"
        style="width: 18rem"
      >
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${getRole}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-white bg-dark">ID: ${id}</li>
          <li class="list-group-item text-white bg-dark">Email: ${email}</li>
          <li class="list-group-item text-white bg-dark">Office Number: ${officeNumber}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
        </div>
  `;
};
