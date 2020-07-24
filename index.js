function submitData(name, email) {
  let formData = {
    "name": name,
    "email": email
  }
  let configObj = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let p = document.createElement('p');
    p.textContent = object["id"];
    let body = document.querySelector('body')
    body.appendChild(p);
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    console.log(error.message);
  });
};
