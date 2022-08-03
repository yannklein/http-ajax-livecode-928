const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";
// 1. select element input (name, email, bio, location), submit
const input = document.querySelector('#clearbitEmail');
const submit = document.querySelector('#clearbitSubmit');
const name = document.querySelector('#userName');
const email = document.querySelector('#userEmail');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');

const displayInfo = (data) => {
  name.innerText = data.name.fullName;
  email.innerText = data.email;
  bio.innerText = data.bio;
  location.innerText = data.location;
};

const fetchClearbit = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, {
    headers: {
      'Authorization': authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // 3: change DOM, insert data into input fields 
      displayInfo(data);
    }) 
};

const stalkSomeone = (event) => {
  event.preventDefault();
  console.log(event);
  // 2.5: fetch API
  fetchClearbit(input.value);
}


// 2. listen to click on submit button, prevent refresh
submit.addEventListener("click", stalkSomeone);