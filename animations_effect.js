// 5. Animation & Effects Methods

1. .show()  // Display an element
// The .show() method is used to display an element that was previously hidden.

$('#myDiv').show();  // Make #myDiv visible

2. .hide()  // Hide an element
// The .hide() method is used to hide an element, setting its CSS display property to 'none'.

$('#myDiv').hide();  // Hide #myDiv

3. .toggle()  // Toggle the visibility of an element
// The .toggle() method is used to toggle between showing and hiding an element.

$('#myDiv').toggle();  // If #myDiv is visible, it will be hidden, and vice versa

4. .fadeIn()  // Fade an element in (show it with opacity)
// # The .fadeIn() method is used to fade an element in by changing its opacity from 0 to 1.

$('#myDiv').fadeIn(1000);  // Fade in #myDiv over 1 second

5. .fadeOut()  // Fade an element out (hide it with opacity)
// # The .fadeOut() method is used to fade an element out by changing its opacity from 1 to 0.

$('#myDiv').fadeOut(1000);  // Fade out #myDiv over 1 second

6. .fadeToggle()  // Toggle between fade in and fade out
// The .fadeToggle() method is used to toggle between fading in and fading out.

$('#myDiv').fadeToggle(500);  // Toggle the visibility of #myDiv with fade effect

7. .slideDown()  // Slide an element down (make it visible)
// The .slideDown() method is used to slide an element down and make it visible.

$('#myDiv').slideDown(800);  // Slide down #myDiv over 0.8 seconds

8. .slideUp()  // Slide an element up (make it hidden)
// The .slideUp() method is used to slide an element up and hide it.

$('#myDiv').slideUp(800);  // Slide up #myDiv over 0.8 seconds

9. .slideToggle()  // Toggle between slide up and slide down
// The .slideToggle() method is used to toggle between sliding an element up and down.

$('#myDiv').slideToggle(600);  // Toggle the visibility of #myDiv with slide effect

10. .animate()  // Perform custom animations on selected elements
// The .animate() method is used to perform custom animations by changing CSS properties.

$('#myDiv').animate({ opacity: 0.5, left: '+=50px' }, 1000);  // Animate opacity and move #myDiv to the right

11. .stop()  // Stop the current animation
// The .stop() method is used to stop an ongoing animation on an element.

$('#myDiv').stop();  // Stop any running animations on #myDiv


// 6. Utility Methods

1. .each()  // Iterate over a jQuery object and execute a function for each element
// The .each() method is used to iterate over a set of elements and execute a function on each element.

$('#myList li').each(function(index) {
    console.log('Item ' + index + ': ' + $(this).text());
});

2. .map()  // Translate each element in a set of matched elements
// The .map() method is used to translate each element in a set of matched elements and return a new array.

var items = $('#myList li').map(function() {
    return $(this).text();
}).get();  // Return an array of all list item texts

3. .extend()  // Merge two or more objects
// The .extend() method is used to merge two or more objects into one.

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
$.extend(obj1, obj2);  // obj1 will be merged with obj2: {a: 1, b: 3, c: 4}

4. .data()  // Store or retrieve data associated with an element
// The .data() method is used to store or retrieve data associated with an element.

$('#myDiv').data('info', 'This is some data');  // Store data in #myDiv

var info = $('#myDiv').data('info');  // Retrieve the data from #myDiv

5. .removeData()  // Remove data associated with an element
// The .removeData() method is used to remove data associated with an element.

$('#myDiv').removeData('info');  // Remove the data associated with #myDiv

6. .queue()  // Get or set the queue of a DOM element
// The .queue() method is used to retrieve or set the queue of functions for a DOM element.

$('#myDiv').queue(function(next) {
    console.log('This is a queued function.');
    next();
});

7. .dequeue()  // Execute the next function in the queue
// The .dequeue() method is used to execute the next function in the queue.

$('#myDiv').dequeue();  // Move to the next function in the queue

8. .hasClass()  // Check if an element has a certain class
// The .hasClass() method checks if an element has the specified class.

if ($('#myDiv').hasClass('active')) {
    console.log('The element has the class "active".');
}

9. .is()  // Check if an element matches a selector
// The .is() method checks if the selected element matches a given selector.

if ($('#myDiv').is('.active')) {
    console.log('The element has the class "active".');
}

10. .attr()  // Get or set an attribute of an element
// The .attr() method is used to get or set the value of an attribute of an element.

var src = $('#myImg').attr('src');  // Get the 'src' attribute of an image
$('#myImg').attr('src', 'new-image.jpg');  // Set a new 'src' attribute for the image

11. .toggle()  // Toggle between two states
// The .toggle() method is used to toggle between two states, such as showing or hiding an element.

$('#myDiv').toggle();  // Toggle visibility of #myDiv

12. .delay()  // Create a delay in the animation queue
// The .delay() method adds a delay before the next animation in the queue starts.

$('#myDiv').fadeOut(500).delay(1000).fadeIn(500);  // Fade out, wait 1 second, then fade in


// 7. CSS Methods

1. .css()  // Get or set the CSS properties
// The .css() method is used to get or set the CSS properties of an element.

$('#myDiv').css('color', 'red');  // Set the text color of #myDiv to red

var color = $('#myDiv').css('color');  // Get the current color of #myDiv

2. .width()  // Get or set the width of an element
// The .width() method is used to get or set the width of an element.

$('#myDiv').width(300);  // Set the width of #myDiv to 300px

var width = $('#myDiv').width();  // Get the width of #myDiv

3. .height()  // Get or set the height of an element
// The .height() method is used to get or set the height of an element.

$('#myDiv').height(200);  // Set the height of #myDiv to 200px

var height = $('#myDiv').height();  // Get the height of #myDiv

4. .innerWidth()  // Get the inner width (including padding) of an element
// The .innerWidth() method returns the width of an element including padding, but excluding borders and margins.

var innerWidth = $('#myDiv').innerWidth();  // Get the inner width of #myDiv

5. .innerHeight()  // Get the inner height (including padding) of an element
// The .innerHeight() method returns the height of an element including padding.

var innerHeight = $('#myDiv').innerHeight();  // Get the inner height of #myDiv

6. .outerWidth()  // Get the outer width (including margin) of an element
// The .outerWidth() method returns the width of an element including margin.

var outerWidth = $('#myDiv').outerWidth();  // Get the outer width of #myDiv

7. .outerHeight()  // Get the outer height (including margin) of an element
// The .outerHeight() method returns the height of an element including margin.

var outerHeight = $('#myDiv').outerHeight();  // Get the outer height of #myDiv

8. .position()  // Get the position of an element relative to its offset parent
// The .position() method returns the position of an element relative to its offset parent (usually the nearest positioned ancestor).

var position = $('#myDiv').position();  // Get the position of #myDiv relative to its parent
