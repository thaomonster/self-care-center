var radioBtns = document.querySelectorAll('.radio-button');
var clearBtn = document.querySelector('#clear-button');
var recieveMsgBtn = document.querySelector('.recieve-message');
var addMsgBtn = document.querySelector('#add-button');
var submitBtn = document.querySelector('#submit-button');

var btnErrorMsg = document.querySelector('#button-error-message');
var inputErrorMsg = document.querySelector('#input-error-message');

var displayMsg = document.querySelector('.message');
var mantraImg = document.querySelector('.mantra-img');
var inputType = document.querySelector('#type-of-message');
var userMsgInput = document.querySelector('#user-message');

window.onload = defaultDisableBtn();
recieveMsgBtn.addEventListener('click', generateMessage);
clearBtn.addEventListener('click', clearMessage);
addMsgBtn.addEventListener('click', displayForm);
submitBtn.addEventListener('click', submitUserInput);
changeBtnTrueToFalse();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateAffirmation() {
  displayMsg.innerHTML = "";
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];

  displayMsg.insertAdjacentHTML('afterbegin', 
  `<div>
    <img class="mantra-img hidden" src="./assets/meditate.svg" alt="mantra">
    <p class="message" id="show-message">${randomAffirmation}</p>
  </div>`
  );
};

function generateMantra() {
  displayMsg.innerHTML = "";
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMsg.insertAdjacentHTML('afterbegin',
  `<div>
    <img class="mantra-img hidden" src="./assets/meditate.svg" alt="mantra">
    <p class="message" id="show-message">${randomMantra}</p>
  </div>`
  );
};

function getSelectedInput() {
  var selected;
  radioBtns.forEach(function(btn) {
    if (btn.checked) {
      selected = btn.value
    };
  });
  return selected
};

function generateMessage() {
  var checked = getSelectedInput();
 
  if (checked) {
    checked === 'affirmation' ? generateAffirmation() : generateMantra(checked);
    viewOrHideElement();
    btnErrorMsg.classList.add('hidden');
    recieveMsgBtn.disabled = false;
  } else {
    btnErrorMsg.classList.remove('hidden');
  };

  changeTrueFalseValue(submitBtn, clearBtn);
};

function clearMessage() {
  displayMsg.innerHTML = "";
  toggleElement(mantraImg, displayMsg);
  enableDisableBtnStyle();
  changeBtnTrueToFalse();
};

function viewOrHideElement() {
  toggleElement(inputType, userMsgInput);
  addHiddenClass();
  removeHiddenClass();
};

function displayForm() {
  inputType.value = "";
  userMsgInput.value = "";
  addHiddenClass();
  toggleElement(inputType, userMsgInput);
  changeTrueFalseValue(clearBtn, submitBtn);
};

function submitUserInput() {
  displayMsg.innerHTML = "";
  checkUserInputValue()
  clearBtn.disabled = false;
};

function checkUserInputValue() {
  if (inputType.value === '' || userMsgInput.value === '') {
    inputErrorMsg.classList.remove('hidden')
  } else if (inputType.value.toLowerCase('affirmation') === 'affirmation') {
    affirmation.push(userMsgInput.value);
    inputErrorMsg.classList.add('hidden');
    generateUserInput();
  } else if (inputType.value.toLowerCase('mantra') === 'mantra') {
    mantra.push(userMsgInput.vale);
    inputErrorMsg.classList.add('hidden');
    generateUserInput();
  };
};

function generateUserInput() {
  toggleElement(inputType, userMsgInput);
  removeHiddenClass();

  displayMsg.insertAdjacentHTML('afterbegin',
  `<div>
    <p class="message" id="show-message">${userMsgInput.value}</p>
  </div>`
  );
};

function toggleElement(elementOne, elementTwo) {
  elementOne.classList.toggle('hidden');
  elementTwo.classList.toggle('hidden');
};

function addHiddenClass() {
  mantraImg.classList.add('hidden');
  inputType.classList.add('hidden');
  userMsgInput.classList.add('hidden');
  displayMsg.classList.add('hidden');
};

function removeHiddenClass() {
  displayMsg.classList.remove('hidden');
};

function defaultDisableBtn() {
  clearBtn.disabled = true;
  submitBtn.disabled = true;
  recieveMsgBtn.disabled = true;
  enableDisableBtnStyle();
}

function enableDisableBtnStyle() {
 if (clearBtn.disabled === true || submitBtn.disabled === true || recieveMsgBtn.disabled === true) {
   clearBtn.classList.add('disabled-btn-style');
   submitBtn.classList.add('disabled-btn-style');
   recieveMsgBtn.classList.add('disabled-btn-style');
 };
};

function changeBtnTrueToFalse() {
  if (clearBtn.disabled === false || submitBtn.disabled === false) {
    clearBtn.disabled = true;
    submitBtn.disabled = true;
  };
};

function changeTrueFalseValue(btnOne, btnTwo) {
  btnOne.disabled = true;
  btnTwo.disabled = false;
}