var radioBtns = document.querySelectorAll('.radio-button');
var clearBtn = document.querySelector('#clear-button');
var recieveMessageBtn = document.querySelector('#recieve-message');
var addBtn = document.querySelector('#add-button');

var btnErrorMsg = document.querySelector('#button-error-message');
var displayMessage = document.querySelector('#show-message');
var mantraImg = document.querySelector('.mantra-img');

recieveMessageBtn.addEventListener('click', generateMessage);
clearBtn.addEventListener('click', clearMessage);
addBtn.addEventListener('click', userMessageInput);

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
  mantraImg.classList.add('hidden')
  btnErrorMsg.classList.add('hidden');
  clearBtn.classList.remove('hidden');
  displayMessage.classList.remove('hidden');
}

function toggleElement(elementOne, elementTwo) {
  elementOne.classList.toggle('hidden');
  elementTwo.classList.toggle('hidden');
};