Project Name : Dev Stack 

Description: A modern developer technology stack builder where you can explore popular technologies, learn about their categories and difficulty levels, and create your own personalized technology stack.


DevStack is a responsive React + TypeScript web application designed for developers who want to explore different technologies and build their own personalized stack.

Users can browse technologies, view useful information such as ratings and difficulty levels, and add their favorite technologies to Your Stack.

The project focuses on practicing modern React concepts, TypeScript, component-based architecture, state management, responsive UI, and working with JSON data.

Technologies Used:
React
TypeScript
Tailwind CSS
DaisyUi
React Toastify
React Icons
JSON for technology data
Vite


🌟 Features

1. 🔍 Explore Technologies

Browse a collection of technologies with useful information including:

Technology name
Description
Category
Difficulty level
Rating
Technology icon
Badge


2. 🧩 Build Your Own Stack

Add technologies to your personal Your Stack section.

Add technologies with one click,
Prevent duplicate technologies,
Remove individual technologies,
Remove all technologies at once,
See the number of selected technologies


3. 🔔 Interactive User Feedback

The application uses React Toastify to provide instant feedback when users interact with their stack.

Users receive notifications when:

A technology is successfully added,
A duplicate technology is added,
A technology is removed,
All technologies are removed,


Question and Answer :

1. JSX is a HTML version of JavaScript.
2. Props are use for data passsing, State is use for changed inside a component.
3. UseState is a hook that make create and changing data inside a component. In my project at App.tsx I have use it for handling the technology cards .
4. UseEffect uses for load the data. In this project using it for when the page load, fetch the json data.
5. Every item in a .map() list need a unique key prop for identify each of the items. It handles the identity of the data.
6. Conditional rendering is showing something when the condition is true. In YourStack.tsx at the empty state I use the conditional rendering. it happens. when selectedTechnology is 0 it shows the message 'Your stack is empty.' If not equal to 0 it shows nothing.
7. Use Props For passing data from a parent component to a child component.
  and Use callback function for a child send something back to the parent. React is one-way directional. So it can send data from parent to child. But it won't recieve data from child. To recieve data from child react needs a callback function. 

