var radioBtns = document.querySelector('#radio-button');
var displayMessage = document.querySelector('#show-message');
var recieveMessageBtn = document.querySelector('#recieve-message')
var mantraImg = document.querySelector('.mantra-img')

recieveMessageBtn.addEventListener('click', generateMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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

function generateAffirmation() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];

  displayMessage.insertAdjacentHTML('afterbegin', 
 `<div>
  <p>${randomAffirmation}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
};

function generateMantra() {
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMessage.insertAdjacentHTML('afterbegin',
  `<div>
  <p>${randomMantra}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
};

function generateMessage() {
  var checked = getSelectedInput();
  checked === 'affirmation' ? generateAffirmation() : generateMantra(checked);
};



// function toggleImg(elementOne, elementTwo) {
//   elementOne.classList.toggle('hidden');
//   elementTwo.classList.toggle('hidden');
// };