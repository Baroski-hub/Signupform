document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.getElementsByClassName("mainForm").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("mail").value;
  const password = document.getElementById("Password").value;

  const errorfirstname = document.getElementById("errorfirstname");
  const errorlastname = document.getElementById("errorlastname");
  const erroremail = document.getElementById("erroremail");
  const errorpassword = document.getElementById("errorpassword");

  let valid = true;
  console.log(firstname);
  if (!firstname) {
    errorfirstname.innerHTML = "First name cannot be empty.";
    document.getElementById("firstname").style.border = "1px solid red";
    document.getElementById("icon").style.display = "block";
    valid = false;
  } else {
    errorfirstname.innerHTML = "";
    document.getElementById("firstname").style.border = "1px solid #fffefe";
    document.getElementById("icon").style.display = "none";
  }

  if (!lastname) {
    errorlastname.innerHTML = "Last name cannot be empty.";
    document.getElementById("lastname").style.border = "1px solid red";
    document.getElementById("icon2").style.display = "block";

    valid = false;
  } else {
    errorlastname.innerHTML = "";
    document.getElementById("lastname").style.border = "1px solid #fffefe";
    document.getElementById("icon2").style.display = "none";
  }
  console.log(email);
  if (!email) {
    erroremail.innerHTML = "Looks like this is not an Email.";
    document.getElementById("mail").style.border = "1px solid red";
    document.getElementById("icon3").style.display = "block";

    valid = false;
  } else {
    erroremail.innerHTML = "";
    document.getElementById("mail").style.border = "1px solid #fffefe";
    document.getElementById("icon3").style.display = "none";
  }

  if (!password) {
    errorpassword.innerHTML = "Password cannot be empty.";
    document.getElementById("Password").style.border = "1px solid red";
    document.getElementById("icon4").style.display = "block";

    valid = false;
  } else {
    errorpassword.innerHTML = "";
    document.getElementById("Password").style.border = "2px solid #fffefe";
    document.getElementById("icon4").style.display = "none";
  }

  if(valid){
    alert('Seccessful.')
  }
});
