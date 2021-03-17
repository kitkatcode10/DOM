// // Menu data structure from part 1
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

const menuLinks = [ // from part 2 
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Task 1.0: Select and cache the <main> element in a variable named mainEl.

var mainEl = document.querySelector('main');

// Task 1.1: Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

mainEl.style.backgroundColor = 'var(--main-bg)';

// //Task 1.2: Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// // Task 1.3: Add a class of flex-ctr to mainEl.

mainEl.classList.add('flex-ctr');

// Task 2.0: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

var topMenuEl = document.getElementById('top-menu'); // We are using getElementbyID because nav id = ID. (I did querySelector first... :())

// Task 2.1: Set the height topMenuEl element to be 100%.

topMenuEl.style.height = '100%'; //how come this isn't line-height and is just 'height' (in the CSS, there is a line height)

// Task 2.2: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3: Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');

// Task 3.1: Iterate over the entire menuLinks array and for each "link" object: Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.

menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href); //had to look at solution to get link.href and textContent = link.text 
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl); // this step, I didn't know the appendChild function... I knew there was 'append' 
}); 
    //I understand I want to iterate over each menlink item and create an <a> element for them, then I'll use that tag to the element to add an href to each of them so they're 'links' of their text as part of the top menu 

// Task 4.0: Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.

var subMenuEl = document.getElementById('sub-menu');

//  Task 4.1: Set the height subMenuEl element to be 100%.

subMenuEl.style.height = '100%';
    
// Task 4.2: Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
    
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3: Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add('flex-around');
    
// Task 4.4: Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = 'absolute';

// Task 4.5: Set the CSS top property of subMenuEl to the value of 0.
 
subMenuEl.style.top = '0'; 

// it won't load on my html page :( and i double checked my answers with the solution!

// Task 5.1: Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

// Declare a global showingSubMenu variable and initialize it to false;

 var topMenuLinks = document.querySelectorAll('#top-menu a'); //using selector for many, but I missed the '#top-menu a', i just wrote a
 var showingSubMenu = false; 

// Task 5.2: Attach a delegated 'click' event listener to topMenuEl.

// topMenuEl.addEventListener('click', preventDefault()); //attempting addeventlistener() approach 
// console.log('a');  this was my attempt! 

// I understand I need to make an event listener on every click on the top menu a items, x happens, but I'm not sure what prevent Default means... yet!

// The first line of code of the event listener function should call the event object's preventDefault() method.

// The second line of code function should immediately return if the element clicked was not an <a> element.


// console.log the content of the <a> to verify the handler is working.

// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.

// Clicking anywhere other than on a link should do nothing.



