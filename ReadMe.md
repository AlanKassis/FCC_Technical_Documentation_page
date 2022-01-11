#FCC_Technical_Documentation_page

Free Code Camp Responsive Design Project
## Here is a link to the assignment
https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page

The task is to recreate the given page form the ground up.
At first I tried to build the page using three main boxes. One parent box "container" and two children "nav-bar" and "main-doc".
I had planned to make the container display:flex and thought I could style the sticky nav and documentation in this way. 
It didn't work however. Once I made the nav position:fixed the main-doc would no longer respect the positioning of the nav. 
Therefore I simply gave the nav-bar a fixed width and gave that width as margin-left to the main doc. 
I used media breakpoints to handle the responsive design. 
I experimented with the colors for this one. Probably most people would prefer their documentation to be colored salmon pink... Right?