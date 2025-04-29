// 3. Traversal Methods

1. .find()  // Find descendants of the selected element
// The .find() method is used to find the descendants of the selected element by matching the provided selector.

$('#parentDiv').find('.childDiv').css('color', 'blue');  // Find all .childDiv elements inside #parentDiv and change their text color

2. .children()  // Get the children of the selected element
// The .children() method returns all direct children of the selected element.

$('#parentDiv').children().css('background-color', 'yellow');  // Apply a background color to all children of #parentDiv

3. .parent()  // Get the parent of the selected element
// The .parent() method returns the direct parent of the selected element.

$('#childDiv').parent().css('border', '2px solid red');  // Apply a border to the parent of #childDiv

4. .parents()  // Get all ancestors of the selected element
// The .parents() method returns all ancestors of the selected element up to the root element.

$('#childDiv').parents().css('border', '1px solid green');  // Apply a border to all ancestors of #childDiv
                                                                                                                                                                             
5. .siblings()  // Get all sibling elements of the selected element
// The .siblings() method returns all siblings of the selected element.

$('#myDiv').siblings().css('font-size', '18px');  // Apply a font size to all sibling elements of #myDiv

6. .next()  // Get the next sibling of the selected element
// The .next() method returns the next sibling element of the selected element.

$('#myDiv').next().css('color', 'red');  // Change the text color of the next sibling element of #myDiv

7. .prev()  // Get the previous sibling of the selected element
// The .prev() method returns the previous sibling element of the selected element.

$('#myDiv').prev().css('color', 'blue');  // Change the text color of the previous sibling element of #myDiv

8. .first()  // Get the first element in the selected set
// The .first() method returns the first element in the selected set of elements.

$('#myList li').first().css('font-weight', 'bold');  // Apply bold styling to the first list item in #myList

9. .last()  // Get the last element in the selected set
// The .last() method returns the last element in the selected set of elements.

$('#myList li').last().css('font-style', 'italic');  // Apply italic styling to the last list item in #myList

10. .eq()  // Get the element at a specific index in the selected set
// The .eq() method returns the element at the specified index (zero-based) in the selected set.

$('#myList li').eq(2).css('color', 'green');  // Apply green color to the third list item in #myList (index 2)

11. .filter()  // Filter the selected elements based on a condition
// The .filter() method filters the selected elements based on the provided selector or function.

$('#myList li').filter('.highlighted').css('background-color', 'yellow');  // Apply a background color to all list items with class .highlighted

12. .not()  // Exclude the specified elements from the selection
// The .not() method excludes elements that match the provided selector from the current selection.

$('#myList li').not('.excluded').css('text-decoration', 'underline');  // Apply underline to all list items except those with class .excluded
