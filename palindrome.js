const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function palindrome() {
  let regex = /[^a-zA-Z0-9]/gi;
  let regexa = /[_]/g;
  const newArray = textInput.value.replace(regex, '').replace(regexa, '').toLowerCase().split('');
  const reverseArray = newArray.toReversed();

  if (String(newArray) === String(reverseArray)) {
    return result.innerText = `"${textInput.value}" is a palindrome.`;
  } else {
    return result.innerText = `"${textInput.value}" is not a palindome`;
  }
}

function noInputAlert() {
  if (textInput.value === '') {
    alert('Please type a word to check if it is a palindrome');
    return result.innerText = '';
  }
}

function searchByEnter() {
  textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      checkButton.click();
    }
  })
}