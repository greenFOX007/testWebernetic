function openModal(content) {
  let owerlay = document.createElement("div");
  owerlay.style.cssText = `
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display:flex;
        align-items: center;
        justify-content: center;
        background:rgba(0,0,0,.3);
    `;

  let contentContainer = document.createElement("div");
  contentContainer.id = "contentContainer";
  contentContainer.style.cssText = `
        max-width:500px;
        margin: 15px;
        background-color:white;
        position:relative;
        max-height: 90%;
        overflow-y: ${window.innerHeight < 564 ? "scroll" : "unset"};
   `;

  let closeButton = document.createElement("div");
  closeButton.style.cssText = `
    width:52px;
    height:52px;
    display:flex;
     align-items: center;
    justify-content: center;
    position:absolute;
    right:24px;
    top:24px;
    background:white;
    border-radius:10px;
    cursor: pointer;
   `;

  closeButton.innerHTML = `
    
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   `;

  contentContainer.append(content, closeButton);

  owerlay.appendChild(contentContainer);

  document.body.appendChild(owerlay);

  owerlay.addEventListener("click", (e) => {
    if (e.target == owerlay) {
      owerlay.remove();
      document.body.style.overflow = "unset";
    }
  });

  closeButton.addEventListener("click", () => {
    owerlay.remove();
    document.body.style.overflow = "unset";
  });
}

function loginForm() {
  let formContainer = document.createElement("div");
  formContainer.style.cssText = `
        padding:80px 24px 24px 24px;
        background-color:rgba(240, 244, 252, 1);
    `;

  let form = document.createElement("form");

  let formTitle = document.createElement("h3");
  formTitle.textContent = "Войти в систему";
  formTitle.style.cssText = `
        font-size:1.5rem;
        font-weight: 500;
        line-height:33px;
        color:rgba(50, 50, 50, 1);
        margin-top:0;
    `;
  let emailInput = document.createElement("input");
  emailInput.name = "email";
  emailInput.type = "text";
  emailInput.placeholder = "Email/Телефон";
  emailInput.style.cssText = `
        font-family: "Manrope";
        width:100%;
        padding:24px;
        background:rgba(215, 226, 246, 1);
        font-size: 18px;
        font-weight: 500;
        line-height:24px;
        color:rgba(31, 66, 132, 1);
        border:none;
        border-radius: 10px;
        margin-bottom: 4px;
    `;

  let passInput = document.createElement("input");
  passInput.name = "password";
  passInput.type = "password";
  passInput.placeholder = "Пароль";
  passInput.style.cssText = `
  font-family: "Manrope";
        width:100%;
        padding:24px;
        background:rgba(215, 226, 246, 1);
        font-size: 18px;
        font-weight: 500;
        line-height:24px;
        color:rgba(31, 66, 132, 1);
        border:none;
        border-radius: 10px;
        margin-bottom: 24px;
    `;

  let checkBoxContainer = document.createElement("div");
  checkBoxContainer.style.cssText = `
        display:flex;
        gap: 17px;
        margin-bottom: 24px;
    `;

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "savePass";
  checkBox.style.cssText = `
        width:18px;
        height:18px;
        border: 2px solid black;
    `;

  let checkBoxLabel = document.createElement("label");
  checkBoxLabel.textContent = "Запомнить пароль";

  checkBoxLabel.htmlFor = "savePass";

  checkBoxLabel.style.cssText = `
        font-size:18px;
        line-heigh:24px;
        font-weight:400;
        color:rgba(50, 50, 50, 1);
    `;

  checkBoxContainer.append(checkBox, checkBoxLabel);

  let restorePass = document.createElement("a");
  restorePass.textContent = "Восстановить";
  restorePass.href = "/";
  restorePass.style.cssText = `
  display:inline-block;
        font-size:20px;
        line-heigh:27px;
        font-weight:500;
        color:rgba(36, 76, 152, 1);
        text-decoration:none;
        margin-bottom: 36px;
    `;

  let submitBtn = document.createElement("button");
  submitBtn.textContent = "Войти";
  submitBtn.style.cssText = `
        font-size:18px;
        line-heigh:27px;
        font-weight:500;
        color:rgba(255, 255, 255, 1);
        width:100%;
        background:rgba(36, 76, 152, 1);
        padding: 18px 0;
        border-radius: 4px;
        margin-bottom: 4px;
        cursor: pointer;

    `;
  let registrationBtn = document.createElement("button");
  registrationBtn.textContent = "Зарегестрироваться";
  registrationBtn.style.cssText = `
        font-size:18px;
        line-heigh:27px;
        font-weight:500;
        color:rgba(36, 76, 152, 1);
        width:100%;
        background:transparent;
        padding: 18px 0;
        border: 1px solid rgba(36, 76, 152, 1);
        border-radius: 4px;
        cursor: pointer;
    `;

  form.append(
    formTitle,
    emailInput,
    passInput,
    checkBoxContainer,
    restorePass,
    submitBtn,
    registrationBtn
  );

  formContainer.appendChild(form);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("kek");
  });
  return formContainer;
}

// openModal(loginForm());

document.getElementById("open-modal").addEventListener("click", () => {
  openModal(loginForm());
  document.body.style.overflow = "hidden";
});
