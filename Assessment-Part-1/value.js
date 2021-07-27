/* 

Widerfunnel Web Developer Assessment Exercise #3
Author: Nick Tchernikov 

Tasks: 
- On the same page, underneath the “Our Leadership Team” header, create a new section
called Value propositions (image + text) similar to the image below (don’t have to be
exact)
Requirement: use either Flex or Grid CSS
- Desktop: horizontal 3 columns, image top, text bottom
- Tablet: stack them vertically, but have the image on the left and text on the right
- Mobile: stack everything vertically

Steps to implement in browser:
1. Visit https://www.widerfunnel.com/leadership/ 
2. Copy/paste below code into console
3. Hit Enter

*/

// Set up new section container

const sectionElem = document.createElement('div');
const sectionStyle = {
    marginTop: '100px',
    position: 'relative',
};
Object.assign(sectionElem.style, sectionStyle);
const parentElem = document.querySelector('#main');
parentElem.insertBefore(sectionElem, parentElem.children[1]);

// Create centered title 

const titleContainer = document.createElement('div');
const titleContainerStyle = { 
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex' 
};
Object.assign(titleContainer.style, titleContainerStyle);

const titleItem = document.createElement('div');

const titleItemStyle = { 
    margin: 'auto', 
    fontSize: '2em',
    fontFamily: 'neusa-next-std-condensed',
};
Object.assign(titleItem.style, titleItemStyle);

titleItem.innerHTML = 'Value Propositions';

titleContainer.appendChild(titleItem);
sectionElem.appendChild(titleContainer);

// Inject value container and items

sectionElem.innerHTML += `
    <div id='value-container'>
        <div class='value-item'>
            <div class='value-item-image-container'> 
                <img class='value-item-image' src='https://assets.widerfunnel.com/wp-content/uploads/2020/03/icon-2-65x65.png' />
            </div>
            <div class='value-item-info'>
                <div class='value-item-title'> Header 1 </div>
                <div class='value-item-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
        </div>
        <div class='value-item'>
            <div class='value-item-image-container'> 
                <img class='value-item-image' src='https://assets.widerfunnel.com/wp-content/uploads/2020/03/icon-3-65x57.png' />
            </div>
            <div class='value-item-info'>
                <div class='value-item-title'> Header 2 </div>
                <div class='value-item-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
        </div>
        <div class='value-item'>
            <div class='value-item-image-container'> 
                <img class='value-item-image' src='https://assets.widerfunnel.com/wp-content/uploads/2020/03/icon-4-57x65.png' />
            </div>
            <div class='value-item-info'>
                <div class='value-item-title'> Header 3 </div>
                <div class='value-item-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
        </div>
    </div>
`;

// Value container and items styling on load

const valueContainerStyle = {
    marginTop: '15px',

    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    alignContent: 'flex-start',
};

const itemStyleDesktop = {
    width: '30%',
    maxWidth: '300px',
    height: '250px',
    padding: '5px',
    marginTop: '10px',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',

    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',

    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
};

const itemImageStyleDesktop = {
    width: '75px',
}

const itemTitleStyleDesktop = {
    margin: '0px auto',
};

const itemDescriptionStyleDesktop = {
    margin: '0px auto',
    fontWeight: 'normal',
};

const itemInfoStyleDesktop = {
    width: '100%',
}

const valueContainer = document.querySelector('#value-container');
Object.assign(valueContainer.style, valueContainerStyle);

const itemElems = document.querySelectorAll('.value-item');
itemElems.forEach(elem => { Object.assign(elem.style, itemStyleDesktop); });

const itemElemImages = document.querySelectorAll('.value-item-image');
itemElemImages.forEach(elem => { Object.assign(elem.style, itemImageStyleDesktop); });

const itemInfos = document.querySelectorAll('.value-item-info');
itemInfos.forEach(elem => { Object.assign(elem.style, itemInfoStyleDesktop); });

const itemElemTitles = document.querySelectorAll('.value-item-title');
itemElemTitles.forEach(elem => { Object.assign(elem.style, itemTitleStyleDesktop); });

const itemElemDescriptions = document.querySelectorAll('.value-item-description');
itemElemDescriptions.forEach(elem => { Object.assign(elem.style, itemDescriptionStyleDesktop); });

// Inject responsive styles
const responsiveValueStyle = `
@media screen and (max-width: 991px) {
    #value-container {
        margin-left: 30px; 
        margin-bottom: 30px !important;

        flex-direction: column !important;
    }
    .value-item {
        width: 100% !important;
        height: 125px !important; 
        text-align: left !important;
        max-width: 680px !important;
        margin: 0px auto; 

        flex-direction: row !important;
    }
    .value-item-info {
        padding-left: 20px; 
    }
    .dots {
        display: none;
    }
}
@media screen and (max-width: 661px) {
    #value-container {
        margin-left: 0px !important; 
        margin-bottom: 30px !important;

        flex-direction: column !important;
    }
    .value-item {
        width: 100% !important;
        text-align: center !important;
        margin: 0px auto; 
        height: 200px !important; 

        flex-direction: column !important;
    }
    .value-item-info {
        padding-left: 0px; 
    }
    .dots {
        display: none;
    }
}
.value-item-image-container {
    margin: 0px auto;
    width: 75px;
    z-index: 2;
}
.value-item-image-container img {
    max-width: none !important;
}
`
const valueStyleDiv = document.createElement('style');
valueStyleDiv.appendChild(document.createTextNode(responsiveValueStyle));
document.getElementsByTagName("head")[0].appendChild(valueStyleDiv);

// Create dots for desktop

const dotsElem = document.createElement('div');
dotsElem.className = 'dots';
dotsElem.innerHTML = '.....................................................................................';
const dotsStyle = {
    zIndex: '1',
    position: 'absolute', 
    top: '25%',
    overflowX: 'hidden',
    fontSize: '60px', 
    color: '#f0f0f0',
};
Object.assign(dotsElem.style, dotsStyle);
sectionElem.appendChild(dotsElem);

// Responsive restyling of dots

function changeDotsPos() {
    screenWidth = window.innerWidth; 
    document.querySelector('.dots').style.width = (screenWidth * 0.65) + 'px';
    leftImageRect = document.querySelector('.value-item-image').getBoundingClientRect().left;
    document.querySelector('.dots').style.left = (leftImageRect + 38) + 'px'; 
}
changeDotsPos();
window.addEventListener('resize', changeDotsPos);

