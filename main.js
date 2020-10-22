var radioBtns = document.querySelectorAllgit ('.radio-button');
var displayMessage = document.querySelector('#show-message');
var recieveMessageBtn = document.querySelector('#recieve-message')
var mantraImg = document.querySelector('.mantra-img')

recieveMessageBtn.addEventListener('click', generateMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateAffirmation() {
  displayMessage.innerHTML = "";
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];

  displayMessage.insertAdjacentHTML('afterbegin', 
 `<div>
  <p>${randomAffirmation}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
};

function generateMantra() {
  displayMessage.innerHTML = "";
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMessage.insertAdjacentHTML('afterbegin',
  `<div>
  <p>${randomMantra}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
};

function getSelectedInput() {
  var selected;
  console.log(radioBtns);
  radioBtns.forEach(function(btn) {
    if (btn.checked) {
      selected = btn.value
    };
  });
  return selected
};

function generateMessage() {
  console.log('hi');
  var checked = getSelectedInput();
  if (checked === 'affirmation') {
    generateAffirmation()
  } else {
    generateMantra(checked);
  };
};

// function toggleImg(elementOne, elementTwo) {
//   elementOne.classList.toggle('hidden');
//   elementTwo.classList.toggle('hidden');
// };