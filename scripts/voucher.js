let userdata = JSON.parse(localStorage.getItem("user"));

  userdata.map(function (el) {
    let p = document.createElement("h3");
    p.setAttribute("id", "wallet_balance");
    p.innerText = el.amount;
    //console.log(p);
    document.getElementById("balance").append(p)
  });
  
  
  let voucherData = JSON.parse(localStorage.getItem("purchase")) || [];
  async function voucherFun() {
    //console.log("hi");
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

    let res = await fetch(url);
    let data = await res.json();
    console.log(data[0].vouchers);
    append(data[0].vouchers);

  }

  function append(data) {
    data.forEach((el) => {
      let div = document.createElement("div");
      div.setAttribute("class", "voucher")
      let name = document.createElement("h3");
      name.innerText = el.name;
      //console.log(name);
      let image = document.createElement("img");
      image.src = el.image;

      let price = document.createElement("h3");
      price.innerText = el.price;


      let btn = document.createElement("button");
      btn.setAttribute("class", "buy_voucher");
      btn.innerText = "Buy"
      btn.addEventListener("click", () => {
        buyVoucher(el);
      })

      div.append(name, image, price, btn)
      document.getElementById("voucher_list").append(div);
    });
  }


  function buyVoucher(el) {
    voucherData.push(el);

    let wallet = document.getElementById("wallet_balance");
    let price = el.price;

    if (wallet.innerText > price) {
      alert("Hurray! purchase successful");
      wallet = (+wallet.innerText) - (+el.price);
      document.getElementById("wallet_balance").innerText = wallet;
      localStorage.setItem("balance", (wallet));
    } else {
      alert("Sorry! insufficient balance");
    }
    
    localStorage.setItem("purchase", JSON.stringify(voucherData));
  }

  voucherFun();