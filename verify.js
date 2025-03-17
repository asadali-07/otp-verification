async function sendOTP(email) {
  const response = await fetch("http://localhost:5000/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();
  console.log(data.message);
  return data.message;
}

async function verifyOTP(email, otp) {
  const response = await fetch("http://localhost:5000/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  const data = await response.json();
  console.log(data.message);
  return data.message;
}

let send = document.getElementById("send");
let verify = document.getElementById("verify");

send.addEventListener("click", async () => {
  let email = document.getElementById("email").value;
  let message = await sendOTP(email);
  document.getElementById("message1").innerHTML = message;
  let element1 = document.getElementById("verifyDiv");
  element1.classList.remove("hidden");
  let element2 = document.getElementById("emailDiv");
  element2.style.display = "none";
});

verify.addEventListener("click", async () => {
  let email = document.getElementById("email").value;
  let otp = document.getElementById("otp1").value;
  otp += document.getElementById("otp2").value;
  otp += document.getElementById("otp3").value;
  otp += document.getElementById("otp4").value;
  otp += document.getElementById("otp5").value;
  otp += document.getElementById("otp6").value;
  let message = await verifyOTP(email, otp);
  document.getElementById("message2").innerHTML = message;
});
