// 1. DOM Manipulation Methods
// ==========================================================================================

1. .html()  // Get or set the HTML contents of an 

// Example: get html content
let content = $('#myDiv').html();  // Get the HTML content of the div
console.log(content);

// Example: set html content
$('#myDiv').html('<p>This is a new HTML content.</p>');  // Set HTML content inside the div


2. .text()  // Get or set the text contents of an element

// Example: Get text content:
let textContent = $('#myDiv').text();  // Get the text content inside the div
console.log(textContent);

// Exmple: Set text content:
$('#myDiv').text('This is new text content.');  // Set new text content inside the div


3. .val()  // Get or set the value of form elements

// Example: Get the value of an input field:
let value = $('#myInput').val();  // Get the value of the input field
console.log(value);

// Example: Set the value of an input field:
$('#myInput').val('New Value');  // Set a new value to the input field


4. .attr()  // Get or set the value of an attribute

// Example: Get the value of an attribute:

 imgSrc = $('#myImage').attr('src');  // Get the 'src' attribute of the image
console.log(imgSrc);

// Example: Set the value of an attribute:
$('#myImage').attr('src', 'new-image.jpg');  // Set a new 'src' attribute for the image


5. .css()  // Get or set CSS styles

// Example: Get a CSS property:
let bgColor = $('#myDiv').css('background-color');  // Get the background color of the div
console.log(bgColor);

// Example:  Set a CSS property:
$('#myDiv').css('background-color', 'yellow');  // Set the background color of the div to yellow



6. .addClass()  // Add one or more classes to an element

// Example: 
$('#myDiv').addClass('newClass');  // Add the class 'newClass' to the div


7. .removeClass() //  Remove one or more classes from an element
// Example:
$('#myDiv').removeClass('oldClass');  // Remove the class 'oldClass' from the div


8. .toggleClass()  // Add or remove one or more classes from an element
// Example:
$('#myDiv').toggleClass('active');  // Toggle the 'active' class on the div

9. .append()  // Insert content at the end of the selected elements
// Example:
$('#myDiv').append('<p>New paragraph added at the end.</p>');  // Add a new paragraph at the end of the div


10. .prepend() //  Insert content at the beginning of the selected elements
// Example:
$('#myDiv').prepend('<p>New paragraph added at the beginning.</p>');  // Add a new paragraph at the beginning of the div


11. .before() // Insert content before the selected element
// Example:
$('#myDiv').before('<p>This paragraph is before the div.</p>');  // Insert a new paragraph before the div


12. .after() // Insert content after the selected element
// Example:
$('#myDiv').after('<p>This paragraph is after the div.</p>');  // Insert a new paragraph after the div

13. .remove() // Remove an element from the DOM
// Example:
$('#myDiv').remove();  // Remove the div from the DOM


14. .empty() // Remove all child elements of the selected element
// Example:
$('#myDiv').empty();  // Remove all child elements of the div


15. .clone()  // Clone selected elements
// Example:
let clonedDiv = $('#myDiv').clone();  // Clone the div element
$('#anotherDiv').append(clonedDiv);  // Append the cloned div to another div


16. .wrap() // Wrap each selected element inside a new element
// Example:
$('#myDiv').wrap('<div class="wrapper"></div>');  // Wrap the div inside a new div with the class 'wrapper'

17. .unwrap()  // Remove the wrapping element from each selected element
// Example:
$('#myDiv').unwrap();  // Remove the wrapper div around the div


18. .replaceWith() // Replace each element with the specified content
// Example:
$('#myDiv').replaceWith('<p>This is a replacement element.</p>');  // Replace the div with a new paragraph





