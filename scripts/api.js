"use strict";

if ( document.querySelector(".main__wrapper")) {
  const mainWrapper = document.querySelector(".main__wrapper");
  const modal = document.querySelector(".fixed-overlay");
  const modalSpinner = document.querySelector(".modal_spinner");
  const modalSuccess = document.querySelector(".modal-success-overlay");
  const closeModalBtn = document.querySelector(".close-modal");

  const from = document.querySelector(".from");
  const formId = document.getElementById("form");

  const modalHandler = (e) => {
    const className = e.target.className;

    if (className === "orderBtn" || className === "header__callbackbtn") {
      modal.classList.add("active-modal");
    }
    if (className === "fixed-overlay active-modal") {
      modal.classList.remove("active-modal");
      modal.removeEventListener("click", openModal);
    }
  }

  const openModal = mainWrapper.addEventListener("click", modalHandler);

  const closeModal = closeModalBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const className = e.target.className;

    if (className == "close-modal") {
      modal.classList.remove("active-modal");
      modal.removeEventListener("click", closeModal);
    }
  });

  const sendFrom = form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    console.log('click form');

    // modalSpinner.classList.add("modal_spinner-active");

    // const formData = new FormData(form);

    // const objectFromFormData = function (formData) {
    //   var values = {};
    //   for (var pair of formData.entries()) {
    //     var key = pair[0];
    //     var value = pair[1];
    //     if (values[key]) {
    //       if (!(values[key] instanceof Array)) {
    //         values[key] = new Array(values[key]);
    //       }
    //       values[key].push(value);
    //     } else {
    //       values[key] = value;
    //     }
    //   }
    //   // Send email
    //   sendEmail(values);
    // };

    // objectFromFormData(formData);
    //form.reset();
  });

  const sendEmail = async (values) => {
    const API_URL = "https://sender-techband.herokuapp.com";
    let response = await fetch(`${API_URL}/api/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    });

    let result = await response
      .json()
      .then((res) => {
        modalSpinner.classList.remove("modal_spinner-active");
        modal.classList.remove("active-modal");
        modal.removeEventListener("click", closeModal);
        modalSuccess.classList.add("active-modal-success");

        setTimeout(() => {
          modalSuccess.classList.remove("active-modal-success");
        }, 2000);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
}