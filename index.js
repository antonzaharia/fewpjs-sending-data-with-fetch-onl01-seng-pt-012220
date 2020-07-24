function submitData(name, email) {
  let formData = {
    let name = name;
    let email = email;
  }
  let configObj = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  fetch("http://localhost:3000/users", configObj)
};
