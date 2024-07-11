// Write your code here!
// Remove the <main id="main"> element from the DOM
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
// Assign some text content to the <h1> element
newHeader.textContent = "Hello World";
// Append the <h1> element to the document body or any other location
document.body.appendChild(newHeader);



// Create a new <h1> element with id 'victory'
const newHeader1 = document.createElement('h1');
newHeader.id = "victory";
// Append the <h1> element to the document body 
document.body.appendChild(newHeader1);


// Replace 'YOUR-NAME' with your actual name
const yourName = "Purity";
// Create a new <h1> element with id 'victory'
const newHeader2 = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = `Hello World ${yourName} is the champion`;
// Append the <h1> element to the document body (or any other desired location)
document.body.appendChild(newHeader2);