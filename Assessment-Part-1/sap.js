/* 

Widerfunnel Web Developer Assessment Exercise Bonus
Author: Nick Tchernikov 

Tasks: 
Go to this page: https://www.dollarshaveclub.com
- Change the header of the first section from “HOW DO YOU GET READY?” to
“Widerfunnel”
- Change the subheader of the first section from “Tell us about your grooming
needs and we’ll recommend the perfect products.” to “We are here to help you
with experimentation.”
- Click the “Get started” button of the first section, which will take you to another
page
- Click on Dollar Shave Club logo on the upper left back to homepage
- Ensure that the header stay “Widerfunnel”

Notes: 
- This code works by setting up a constantly firing changeContent 
function which changes the text, so even though
the website is a single page application and re-renders the components
as HTML using props, the rendered DOM elements are altered as soon
as they are rendered. Any time the heading and subtitle elements
are in the rendered DOM, they are altered immediately.
- The only downside is that since the text is rendered from the props first, 
the original text appears for a millisecond and is then changed.

Steps to implement in browser:
1. Visit https://www.dollarshaveclub.com/
2. Copy/paste below code into console
3. Hit Enter

*/

function changeContent() {
    let headingElem = document.querySelector('.css-4rbku5');
    let headingElem2 = document.querySelector('.r-1dn12g7');
    let subtextElem = document.querySelector('.css-9whu1j');
    let subtextElem2 = document.querySelector('.css-1slrpid');
    if(headingElem && subtextElem) {
        headingElem.innerHTML = 'Widerfunnel';
        subtextElem.innerHTML = 'We are here to help you with experimentation';
    }
    if(headingElem2 && subtextElem2) {
        headingElem2.innerHTML = 'Widerfunnel';
        subtextElem2.innerHTML = 'We are here to help you with experimentation';
    }
}
changeContent();
setInterval(changeContent, 1);