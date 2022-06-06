let userArr = JSON.parse(localStorage.getItem("user")) || [];
  class UserCLass {
    constructor(name, email, address, amount) {
      this.name = name;
      this.email = email;
      this.address = address;
      this.amount = amount;

    }
  }
  function submitFun() {
    // console.log("fine");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;


    let userObj = new UserCLass(name, email, address, amount);
    // console.log(userObj);

    userArr.push(userObj);
    localStorage.setItem("user", JSON.stringify(userArr));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("amount").value = "";
  }