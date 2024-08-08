document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const size = document.querySelector('input[name="size"]:checked')?.value;
    const voucher = document.getElementById("voucher").value;
    const protection = document.getElementById("protection").checked ? "yes" : "no";

    let voucherText = "None";
    if (voucher === "discount10") voucherText = "10%";
    else if (voucher === "discount20") voucherText = "20%";
    else if (voucher === "discount30") voucherText = "30%";

    if (name && email && phone && address && size) {
      const orderData = {
        name,
        email,
        phone,
        address,
        size,
        voucher: voucherText,
        protection
      };

      localStorage.setItem("orderData", JSON.stringify(orderData));

      window.location.href = "../receipt.html";
    } else {
      alert("Please fill out all required fields.");
    }
  });
});
