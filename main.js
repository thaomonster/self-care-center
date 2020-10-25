var radioBtns = document.querySelectorAll('.radio-button');
var clearBtn = document.querySelector('#clear-button');
var recieveMsgBtn = document.querySelector('#recieve-message');
var addMsgBtn = document.querySelector('#add-button');
var submitBtn = document.querySelector('#submit-button')

var btnErrorMsg = document.querySelector('#button-error-message');
var inputErrorMsg = document.querySelector('#input-error-message');

var displayMsg = document.querySelector('.message');
var mantraImg = document.querySelector('.mantra-img');
var inputType = document.querySelector('#type-of-message');
var userMsgInput = document.querySelector('#user-message');

recieveMsgBtn.addEventListener('click', generateMessage);
clearBtn.addEventListener('click', clearMessage);
addMsgBtn.addEventListener('click', adduserMsg);
submitBtn.addEventListener('click', submitUserInput);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateAffirmation() {
  displayMsg.innerHTML = "";
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];

  displayMsg.insertAdjacentHTML('afterbegin', 
  `<div>
    <p class="message" id="show-message">${randomAffirmation}</p>
  </div>`
  );
};

function generateMantra() {
  displayMsg.innerHTML = "";
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMsg.insertAdjacentHTML('afterbegin',
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
    showHideElement();
    clearBtn.disabled = false;
  } else {
    btnErrorMsg.classList.remove('hidden')
  };
};

function clearMessage() {
  displayMsg.innerHTML = "";
  displayMsg.classList.add('hidden');
  mantraImg.classList.remove('hidden');
};

function showHideElement() {
  btnErrorMsg.classList.add('hidden');
  mantraImg.classList.add('hidden');
  displayMsg.classList.remove('hidden');
  inputType.classList.add('hidden');
  userMsgInput.classList.add('hidden')
};

function adduserMsg() {
  inputType.value = "";
  userMsgInput.value = "";
  mantraImg.classList.add('hidden');
  submitBtn.disabled = false;
  toggleElement(inputType, userMsgInput, displayMsg);
};

function submitUserInput(e) {
  e.preventDefault();
  displayMsg.innerHTML = "";

  inputType.value === "" ? inputErrorMsg.classList.remove('hidden')
  : inputType.value.toLowerCase('affirmation') === 'affirmation' ? (affirmation.push(userMsgInput.value)) && generateUserInput(): (mantra.push(userMsgInput.value)) && generateUserInput()
};

function generateUserInput() {
  displayMsg.insertAdjacentHTML('afterbegin',
  `<div>
    <p class="message" id="show-message">${userMsgInput.value}</p>
  </div>`
  );

  toggleElement(inputType, userMsgInput, displayMsg);
  inputErrorMsg.classList.add('hidden');
};

function toggleElement(elementOne, elementTwo, elementThree) {
  elementOne.classList.toggle('hidden');
  elementTwo.classList.toggle('hidden');
  elementThree.classList.toggle('hidden');
};
