/* 

Widerfunnel Web Developer Assessment Exercise #2
Author: Nick Tchernikov 

Tasks: 
- On the same page, add a link/button on the sidebar
- Clicking on the link will open a modal
- The modal should have a close icon, a headline, and a paragraph of text
- Desktop: have an overlay on when the modal is active
- Tablet and below: full screen

Notes: 
- For both IE and Chrome etc support, comment out 'buttonStyle '& 'responsiveModalStyle' with backticks for style injection, 
and uncomment out the single-line versions (IE doesn't support backticks for multilines)

Steps to implement in browser:
1. Visit https://www.widerfunnel.com/leadership/ 
2. Copy/paste below code into console
3. Hit Enter

*/

// Create elements

const containerDiv = document.createElement('div');
const overlayDiv = document.createElement('div');
const contentDiv = document.createElement('div');
const headerDiv = document.createElement('div');
const labelSpan =  document.createElement('span');
const closeSpan = document.createElement('span');
const bodyDiv = document.createElement('div');

containerDiv.className = 'modal__container';
overlayDiv.className = 'modal__overlay';
contentDiv.className = 'modal__content';
headerDiv.className = 'modal__header';
labelSpan.className = 'modal__header-label';
closeSpan.className = 'modal__close';
bodyDiv.className = 'modal__body';

// Nest elements

containerDiv.appendChild(overlayDiv);
containerDiv.appendChild(contentDiv);
contentDiv.appendChild(headerDiv);
contentDiv.appendChild(bodyDiv);
headerDiv.appendChild(labelSpan);
headerDiv.appendChild(closeSpan);

// Add placeholder content

labelSpan.innerHTML = 'Lorem ipsum dolor';
bodyDiv.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'

// Append modal to page content

document.querySelector('#main').appendChild(containerDiv);

// Display/hide modal container styles

containerStyleShow = {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
}
containerStyleHide = {
  display: 'none',
}

// Hide modal on load

Object.assign(containerDiv.style, containerStyleHide);

// Inject other styles

const responsiveModalStyle = `
@media screen and (max-width:991px) {
    .modal__content {
        border-radius: 0 !important;
        margin-top: 0;
        margin-bottom: 0;
        max-height: 100% !important;
        margin: 0px auto !important;
        z-index: 999999 !important;
    }
    .modal__body {
        margin-left: -40px;
        margin-right: -40px;
        padding-left: 40px;
        padding-right: 40px;
    }
    .modal__container {
        z-index: 999999 !important;
    }
}
`
const buttonStyle = `
a.orange-button {
    display: inline-block;
    text-align: center;
    border-radius: 4px;
    background-color: #f79120;
    color: #fff !important;
    -webkit-box-shadow: 0 0 15px rgba(247, 145, 32, .2);
    box-shadow: 0 0 15px rgba(247, 145, 32, .2);
    line-height: 41px;
    padding: 0 23px;
    font-weight: 600;
    border: 2px solid #f79120;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    cursor: pointer !important;
}
a.orange-button:hover {
    background-color: transparent;
    color: #f79120 !important;
}
`;

// - Uncomment for both IE and Chrome and comment out above 
// const buttonStyle = "a.orange-button { display: inline-block; text-align: center; border-radius: 4px; background-color: #f79120; color: #fff !important; -webkit-box-shadow: 0 0 15px rgba(247, 145, 32, .2); box-shadow: 0 0 15px rgba(247, 145, 32, .2); line-height: 41px; padding: 0 23px; font-weight: 600; border: 2px solid #f79120; -webkit-transition: 0.4s ease-in-out; transition: 0.4s ease-in-out; } a.orange-button:hover { background-color: transparent; color: #f79120 !important; }";
// const responsiveModalStyle = "@media screen and (max-width:991px) { .modal__content { border-radius: 0 !important; margin-top: 0; margin-bottom: 0; max-height: 100% !important; margin: 0px auto !important; z-index: 999999 !important; } .modal__body { margin-left: -40px; margin-right: -40px; padding-left: 40px; padding-right: 40px; } .modal__container { z-index: 999999 !important; } }";

const modalStyleDiv = document.createElement('style');
modalStyleDiv.appendChild(document.createTextNode(responsiveModalStyle));
modalStyleDiv.appendChild(document.createTextNode(buttonStyle));
document.getElementsByTagName("head")[0].appendChild(modalStyleDiv);

// Style containers

contentStyle = {
    borderRadius: '4px',
    maxWidth: '991px',
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    maxHeight: '800px',
    background: '#fff',
    zIndex: '12',
    margin: '80px auto',
    padding: '90px 40px 40px',
    overflowY: 'hidden',
}
Object.assign(contentDiv.style, contentStyle);

const overlayStyle = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, .5)',
    zIndex: '11'
}
Object.assign(overlayDiv.style, overlayStyle);

const closeStyle = {
    background: 'url(https://www.widerfunnel.com/wp-content/themes/widerfunnel/assets/images/modal-close-grey.png) center center no-repeat',
    backgroundSize: 'cover',
    width: '15px',
    height: '15px',
    display: 'block',
    position: 'absolute',
    top: '10px',
    right: '5px',
    cursor: 'pointer',
};
Object.assign(closeSpan.style, closeStyle);

const headerStyle = {
    position: 'absolute',
    top: '20px',
    width: 'calc(100% - 80px)',
    marginBottom: '20px', 
    paddingBottom: '15px',
    borderBottom: '.5px solid #868787',
};
Object.assign(headerDiv.style, headerStyle);

const labelStyle = {
    fontFamily: 'neusa-next-std-condensed',
    fontWeight: '500',
    fontSize: '26px',
    lineHeight: '35px',
    letterSpacing: '.005em',
};
Object.assign(labelSpan.style, labelStyle);

const bodyStyle = {
    overflowY: 'auto',
    height: '100%',
};
Object.assign(bodyDiv.style, bodyStyle);

// Add buttons to sidebar/mobile and tablet views

const sidebarButtonElem = document.createElement('a');
sidebarButtonElem.className = 'orange-button';
sidebarButtonElem.innerHTML = 'Learn More';
document.querySelector('#sidebar .entry-content').appendChild(sidebarButtonElem);

const mobileTabletButtonElem = document.createElement('a');
mobileTabletButtonElem.className = 'orange-button';
mobileTabletButtonElem.setAttribute('href', '#');
mobileTabletButtonElem.innerHTML = 'Learn More';
document.querySelector('.entry-content.hide-on-desktop-min').appendChild(mobileTabletButtonElem);

// Add click listeners

closeSpan.addEventListener('click', function() {
    containerDiv.style.display = 'none';
    document.querySelector('body').style.overflow = '';
    overlayDiv.style.display = 'none';
});

overlayDiv.addEventListener('click', function() {
    containerDiv.style.display = 'none';
    document.querySelector('body').style.overflow = '';
    overlayDiv.style.display = 'none';  
});

sidebarButtonElem.addEventListener('click', function() {
    Object.assign(containerDiv.style, containerStyleShow);
    document.querySelector('body').style.overflow = 'hidden';
    overlayDiv.style.display = 'block';  
});

mobileTabletButtonElem.addEventListener('click', function() {
    Object.assign(containerDiv.style, containerStyleShow);
    document.querySelector('body').style.overflow = 'hidden';
    overlayDiv.style.display = 'block';  
});