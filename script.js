function firstChar(text) {
  text = text.trim();
  if (text.length === 0) {
    return '';
  }
  return text[0];
}

// Do not change the code below
// ✅ Uncomment this line so Cypress can stub prompt()
const text = prompt("Enter text:");

alert(firstChar(text));

