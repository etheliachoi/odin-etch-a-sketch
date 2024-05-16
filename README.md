# odin-etch-a-sketch

## Difficulties
(1) Items in the palette flex-box does not wrap when the viewport shrinks horizontally

My approach: I noticed that I define a fixed height and width, these values will override the flex-box wrap property. Hence, I removed height and width and added margin to the children items to get the ideal outcome. Then, I added `flex-wrap: wrap;` to both the palette and buttons div. Both is needed because I want the word palette to wrap as well and not be stuck on the left side. The wrap function only applies wrap to the flex-box's children, not its grandchildren, so I need one for the buttons too. At this point, the palette behaves the way I want it to. Lastly, I changed `justify-content` to `space-evenly` in the buttons div so they would stay centered as the viewport shrinks. 

(2) Implement progressive darkening effect 

My approach: I defined an array with ten hex codes that are ordered from the least opaque (white) to most opaque (black). Then, I used a counter variable to keep track of which stage in the opacity I should be at. 

One mistake I made was incrementing and returning the counter in the function where I assign the color to the element's background. This function is called when the mouse crosses over a square. As a result of this approach, the counter never gets incremented and all squares will be the same color. To fix this, the function is only used to assign the color. Then, I increment the counter and do sanity check after calling the function. Another possible approach is to use opacity. [Here](https://sentry.io/answers/how-to-change-the-css-background-opacity-of-an-element/) is more information on ways to use it. 

## Improvements
The only thing left to do is to make the number of pixels in the grid fixed. Depending on how many squares the user wants, the squares will adjust its size to fit in the grid. 