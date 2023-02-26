const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const userName = document.querySelector("#username-input-signup");
    const passWord = document.querySelector("#password-input-signup");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: userName.value,
        password: passWord.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);