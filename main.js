var radioBtns = document.querySelectorAll('.radio-button');
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
 `<div class="message">
  <p class="message">${randomAffirmation}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
};

function generateMantra() {
  displayMessage.innerHTML = "";
  var randomMantra = mantra[getRandomIndex(mantra)];

  displayMessage.insertAdjacentHTML('afterbegin',
  `<div>
  <p class="message">${randomMantra}</p>
  </div>`
  );

  mantraImg.classList.add('hidden');
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
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      recieveMessageBtn.disabled = false;
      checked === 'affirmation' ? generateAffirmation() : generateMantra(checked)
    } else {
      recieveMessageBtn.disabled = true;
    };
  };
};

// function toggleImg(elementOne, elementTwo) {
//   elementOne.classList.toggle('hidden');
//   elementTwo.classList.toggle('hidden');
// };