# Accordion Component
This is an accordion component which I recently build that can also be improved and I'm constantly updating.
I've started by thinking which feature I want the most from it, the first that comes to my mind was to be reusable, it was the main goal, so it can be used in multiple places of a project without rework the logic everytime.

## My Process
For demo purposes, I've created an array of object with mock data then map through the array and give to the component some basic styling. 
You can modify styling classes with tailwind, bootstrap or with pure css and add accessibility standard with ARIA attributes through component props.
Also, I need to implement a function for handling keyboard events which I'm working on.

For accordion indicator, I've used a wrapper component which accepts through props a dynamic HTML element.
In this demo it's only a button with text, anyway having the HTML element defined by props can also turn it to be a container for multiple buttons or svgs.