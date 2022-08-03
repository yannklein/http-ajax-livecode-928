const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// Select the form
const form = document.querySelector("#clearbitForm");
// Select the table data to change their text
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");
// Add event listener on the form (submit event)

const displayInfo = (person) => {
  // Update the DOM inserting the data received into the table data tags
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  const options = {
    headers: { 
      Authorization: authorization,
    }
  };
  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      displayInfo(data.person);
  });
};

const stalkSomeone = (event) => {
  // preventDefault();
  event.preventDefault();
  // Get the value of the input (clearbitemail)
  const elemValue = form.elements["clearbitEmail"].value;
  // Fetch the data from the api using the email fron the input
  //    use the url and the headers: (check the documentation)
  fetchClearbit(elemValue);
};

form.addEventListener("submit", stalkSomeone)