const card = document.getElementById("creditCard");


const cardNumber =
  document.getElementById("cardNumber");


const cardName =
  document.getElementById("cardName");


const expiry =
  document.getElementById("expiry");


const cvv =
  document.getElementById("cvv");


const previewNumber =
  document.getElementById("previewNumber");


const previewName =
  document.getElementById("previewName");


const previewExpiry =
  document.getElementById("previewExpiry");


const previewCvv =
  document.getElementById("previewCvv");


const cardBrand =
  document.getElementById("cardBrand");


const paymentForm =
  document.getElementById("paymentForm");


const payBtn =
  document.getElementById("payBtn");


const successScreen =
  document.getElementById("successScreen");


const resetBtn =
  document.getElementById("resetBtn");






/* =========================
   CARD NUMBER
========================= */


cardNumber.addEventListener(
  "input",
  function () {


    let value =
      this.value.replace(/\D/g, "");


    value =
      value.substring(0, 16);


    value =
      value.replace(
        /(.{4})/g,
        "$1 "
      ).trim();


    this.value = value;


    previewNumber.textContent =
      value ||
      "0000 0000 0000 0000";


    detectCardBrand(
      value.replace(/\s/g, "")
    );


  }
);






/* =========================
   CARD BRAND
========================= */


function detectCardBrand(number) {


  if (
    number.startsWith("4")
  ) {


    cardBrand.textContent =
      "VISA";


  }


  else if (
    /^5[1-5]/.test(number)
  ) {


    cardBrand.textContent =
      "MASTER";


  }


  else {


    cardBrand.textContent =
      "CARD";


  }


}






/* =========================
   NAME
========================= */


cardName.addEventListener(
  "input",
  function () {


    this.value =
      this.value.replace(
        /[^a-zA-Z\s]/g,
        ""
      );


    previewName.textContent =
      this.value.toUpperCase()
      ||
      "YOUR NAME";


  }
);






/* =========================
   EXPIRY
========================= */


expiry.addEventListener(
  "input",
  function () {


    let value =
      this.value.replace(
        /\D/g,
        ""
      );


    value =
      value.substring(
        0,
        4
      );


    if (
      value.length >= 3
    ) {


      value =
        value.substring(0,2)
        +
        "/"
        +
        value.substring(2);


    }


    this.value = value;


    previewExpiry.textContent =
      value || "MM/YY";


  }
);






/* =========================
   CVV
========================= */


cvv.addEventListener(
  "focus",
  function () {


    card.classList.add(
      "flip"
    );


  }
);




cvv.addEventListener(
  "blur",
  function () {


    card.classList.remove(
      "flip"
    );


  }
);




cvv.addEventListener(
  "input",
  function () {


    this.value =
      this.value.replace(
        /\D/g,
        ""
      );


    previewCvv.textContent =
      this.value || "000";


  }
);






/* =========================
   OTHER INPUTS FLIP FRONT
========================= */


[
  cardNumber,
  cardName,
  expiry
].forEach(input => {


  input.addEventListener(
    "focus",
    () => {


      card.classList.remove(
        "flip"
      );


    }
  );


});






/* =========================
   VALIDATION
========================= */


function showError(
  input,
  errorId,
  message
) {


  input.classList.add(
    "error"
  );


  document.getElementById(
    errorId
  ).textContent =
    message;


}




function clearError(
  input,
  errorId
) {


  input.classList.remove(
    "error"
  );


  document.getElementById(
    errorId
  ).textContent = "";


}




function validateForm() {


  let valid = true;


  const number =
    cardNumber.value
    .replace(/\s/g, "");


  const name =
    cardName.value.trim();


  const expiryValue =
    expiry.value;


  const cvvValue =
    cvv.value;




  /* CARD NUMBER */


  if (
    number.length !== 16
  ) {


    showError(
      cardNumber,
      "numberError",
      "Enter 16 digits"
    );


    valid = false;


  }


  else {


    clearError(
      cardNumber,
      "numberError"
    );


  }




  /* NAME */


  if (
    name.length < 3
  ) {


    showError(
      cardName,
      "nameError",
      "Enter card holder name"
    );


    valid = false;


  }


  else {


    clearError(
      cardName,
      "nameError"
    );


  }




  /* EXPIRY */


  if (
    !/^\d{2}\/\d{2}$/
      .test(expiryValue)
  ) {


    showError(
      expiry,
      "expiryError",
      "Use MM/YY"
    );


    valid = false;


  }


  else {


    const month =
      Number(
        expiryValue
        .substring(0,2)
      );


    if (
      month < 1 ||
      month > 12
    ) {


      showError(
        expiry,
        "expiryError",
        "Invalid month"
      );


      valid = false;


    }


    else {


      clearError(
        expiry,
        "expiryError"
      );


    }


  }




  /* CVV */


  if (
    cvvValue.length !== 3
  ) {


    showError(
      cvv,
      "cvvError",
      "Enter 3 digits"
    );


    valid = false;


  }


  else {


    clearError(
      cvv,
      "cvvError"
    );


  }




  return valid;


}






/* =========================
   PAY BUTTON
========================= */


paymentForm.addEventListener(
  "submit",
  function(event) {


    event.preventDefault();


    card.classList.remove(
      "flip"
    );


    if (
      !validateForm()
    ) {


      return;


    }




    payBtn.classList.add(
      "loading"
    );


    payBtn.disabled = true;




    setTimeout(() => {


      payBtn.classList.remove(
        "loading"
      );


      payBtn.disabled = false;


      successScreen.classList.add(
        "show"
      );


      createConfetti();


    }, 1800);


  }
);






/* =========================
   CONFETTI
========================= */


function createConfetti() {


  const container =
    document.getElementById(
      "confettiContainer"
    );


  const colors = [
    "#65e9ff",
    "#8878ff",
    "#4df5b5",
    "#ffd166",
    "#ff6b8a"
  ];


  for (
    let i = 0;
    i < 70;
    i++
  ) {


    const piece =
      document.createElement(
        "div"
      );


    piece.classList.add(
      "confetti"
    );


    piece.style.left =
      Math.random()
      * 100
      + "vw";


    piece.style.background =
      colors[
        Math.floor(
          Math.random()
          *
          colors.length
        )
      ];


    piece.style.animationDelay =
      Math.random()
      * .6
      + "s";


    piece.style.transform =
      `rotate(
        ${Math.random() * 360}deg
      )`;


    container.appendChild(
      piece
    );




    setTimeout(() => {


      piece.remove();


    }, 3500);


  }


}






/* =========================
   RESET
========================= */


resetBtn.addEventListener(
  "click",
  function () {


    successScreen.classList.remove(
      "show"
    );


    paymentForm.reset();


    previewNumber.textContent =
      "0000 0000 0000 0000";


    previewName.textContent =
      "YOUR NAME";


    previewExpiry.textContent =
      "MM/YY";


    previewCvv.textContent =
      "000";

    cardBrand.textContent =
      "CARD";


  }
);
