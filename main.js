var radioBtns = document.querySelectorAll('.radio-button');
var clearBtn = document.querySelector('#clear-button');
var recieveMessageBtn = document.querySelector('#recieve-message');
var addBtn = document.querySelector('#add-button');
var submitBtn = document.querySelector('#submit-button')

var btnErrorMsg = document.querySelector('#button-error-message');
var inputErrorMsg = document.querySelector('#input-error-message');

var displayMessage = document.querySelector('#show-message');
var mantraImg = document.querySelector('.mantra-img');
var inputType = document.querySelector('#type-of-message');
var userMessage = document.querySelector('#user-message');

recieveMessageBtn.addEventListener('click', generateMessage);
clearBtn.addEventListener('click', clearMessage);
addBtn.addEventListener('click', userFormInput);
submitBtn.addEventListener('click', submitUserInput);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateAffirmation() {
  displayMessage.innerHTML = "";
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];

  displayMessage.insertAdjacentHTML('afterbegin', 
  `<div>
    <p class="message" id="show-message">${randomAffirmation}</p>
  </div>`
  );
};

function generateMantra() {
  displayMessage.innerHTML = "";
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMessage.insertAdjacentHTML('afterbegin',
  `<div>
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
    addHideElement()
  } else {
    btnErrorMsg.classList.remove('hidden')
  };
};

function clearMessage() {
  displayMessage.classList.add('hidden');
  clearBtn.classList.add('hidden');
  mantraImg.classList.remove('hidden');
};

function addHideElement() {
  btnErrorMsg.classList.add('hidden');
  mantraImg.classList.add('hidden');
  clearBtn.classList.remove('hidden');
  displayMessage.classList.remove('hidden');
};

function userFormInput() {
  toggleElement(inputType, userMessage, mantraImg, submitBtn, addBtn);
};

function submitUserInput(e) {
  e.preventDefault();
  displayMessage.innerHTML = "";

  inputType.value === "" ? inputErrorMsg.classList.remove('hidden')
  : inputType.value.toLowerCase('affirmation') === 'affirmation' ? (affirmation.push(userMessage.value)) && generateUserInput(): (mantra.push(userMessage.value)) && generateUserInput()
};

function generateUserInput() {
  displayMessage.insertAdjacentHTML('afterbegin',
  `<div>
    <p class="message" id="show-message">${userMessage.value}</p>
  </div>`
  );

  toggleElement(inputType, userMessage, submitBtn, addBtn, inputErrorMsg)
// submitBtn.classList.add('hidden');
// addBtn.classList.remove('hidden');
// inputErrorMsg.classList.add('hidden')
}

function toggleElement(elementOne, elementTwo, elementThree, elementFour, elementFive) {
  elementOne.classList.toggle('hidden');
  elementTwo.classList.toggle('hidden');
  elementThree.classList.toggle('hidden');
  elementFour.classList.toggle('hidden');
  elementFive.classList.toggle('hidden');
  // elementSix.classList.toggle('hidden');
};
