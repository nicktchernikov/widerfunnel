/* 
Widerfunnel Web Developer Assessment Exercise Bonus (Redo)
Author: Nick Tchernikov

Tasks: 
Go to this page: https://www.dollarshaveclub.com
- Change the header of the first section from “HOW DO YOU GET READY?” to
“Widerfunnel”
- Change the subheader of the first section from “Tell us about your grooming
needs and we’ll recommend the perfect products.” to “We are here to help you
with experimentation.”
- Click the “Get started” button of the first section, which will 
take you to another page
- Click on Dollar Shave Club logo on the upper left back to homepage
- Ensure that the header stay “Widerfunnel”

Notes: 
- This is a redo of the task once learning about Mutation Observer.
- There is no longer any delay when changing the text content.

Steps to implement in browser:
1. Visit https://www.dollarshaveclub.com/
2. Copy/paste below code into console
3. Hit Enter
*/

// Change content initially
document.querySelector('.css-4rbku5').textContent = 'Widerfunnel';
document.querySelector('.css-9whu1j').textContent = 'We are here to help you with experimentation.';

// Mutation Observer callback to persist change
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if(mutation.target.textContent.includes('HOW DO YOU GET READY?')) {
                document.querySelector('.css-4rbku5').textContent = 'Widerfunnel';
            }
            if(mutation.target.textContent.includes('Tell us about your grooming needs and we’ll recommend the perfect products.')) {
                document.querySelector('.css-9whu1j').textContent = 'We are here to help you with experimentation.';
            }
        }
    }
};

// Start Mutation Observer
const targetNode = document.getElementById('root');

const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);