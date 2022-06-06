let purchseData = JSON.parse(localStorage.getItem("purchase"));

  let balance = localStorage.getItem("balance");
  let wallet_balance = document.createElement("h3");
  wallet_balance.setAttribute("id", "balance")
  wallet_balance.innerText = balance
  document.getElementById("wallet_balance").append(wallet_balance);

  purchseData.map(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "voucher_class");
    let name = document.createElement("h3");
    name.innerText = el.name;

    let image = document.createElement("img");
    image.src = el.image;

    let price = document.createElement("h3");
    price.innerText = el.price;

    div.append(name, image, price);
    document.getElementById("purchased_vouchers").append(div);
  })