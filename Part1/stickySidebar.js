/* 

Widerfunnel Web Developer Assessment Exercise #1
Author: Nick Tchernikov 

Tasks: 
- Make the sidebar section (Stay In The Know) sticky on scroll (up and down)
- Remove sticky from the sidebar section before reaching the footer
- This is desktop only.

Bonus task: 
- [Bonus] make the sidebar section stay at the bottom aligned with the last row of
“Go Group Digital Leaders”

Notes: 
- The authored code accomplishes the tasks and bonus task.
- 'display: flex' and 'position: sticky' not supported in IE

Steps to implement in browser:
1. Visit https://www.widerfunnel.com/leadership/ 
2. Copy/paste below code into console
3. Hit Enter

*/

const headerWrapperHeight = document.querySelector('.site-header-wrapper').offsetHeight;
const padding = 40;
const topPos = headerWrapperHeight + padding;

const sidebar = document.querySelector('#sidebar');
const style = {
  position : 'sticky',
  alignSelf : 'flex-start', 
  top : (topPos) + 'px',
};

Object.assign(sidebar.style, style);