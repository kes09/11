let formRegistration = document.getElementById("form-registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let name= document.getElementById("name").value;

  if (name == "") {
    errors.name = "სახელის ველი ცარიელია";
  }

  let surname = document.getElementById("surname").value;

  if(surname == ""){ 
    errors.surname = "გვარის ველი ცარიელია";
  }

  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;

  if (password1 == "") {
    errors.mypassword = "პაროლის ველი ცარიელია";
  }
  if (password1 != password2) {
    errors.mypassword2 = "პაროლები არ ემთხვევა";
  }

  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "გთხოვთ მონიშნოთ წესების ველი";
  }
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "გთხოვთ მონიშნოთ თქვენი ასაკი";
  }

console.log(errors);

form.querySelectorAll(".error-text").forEach((element) => {
  element.innerText = " ";
});

for (let item in errors) {
  // console.log(item); //სათითაოდ თითოელუ errors ობიექტის key

  let spanError = document.getElementById("error_" + item);

  if (spanError) {
    spanError.innerText = errors[item];
  }
}

if (Object.keys(errors).length == 0) {
  form.submit();
}
});