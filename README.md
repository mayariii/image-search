# iMage the Photo Wizard 🧙
A photo searching app where iMage the photo wizard will conjure up some images for you!
Enter a search term, and let him work his magic to find related photos. 🪄

You can view it live here: https://image-search-app-ts-react.netlify.app/

![image](https://user-images.githubusercontent.com/70478809/129495511-2c1ce1df-eae9-4ea6-8214-c8d3defc3075.png)
![image](https://user-images.githubusercontent.com/70478809/129495526-91523f03-2b60-45b7-b534-253e9b9cb5c5.png)


## The Project 📄
It is a single-page application (SPA) for searching photos via the Unsplash API. 
### Technologies ⚛️
Created with React and TypeScript. This is my first project with TypeScript and using Hooks in React. 
### Approach
* Started by analysing the requirements of the project
* Noted initial thoughts/ideas
* Broke down requirements into user stories in a KanBan board on Miro
* Focused on the features needed to meet the requirements at a minimum + drew simple wireframe in Miro
  ![image](https://user-images.githubusercontent.com/70478809/129494815-e5571f39-0e46-4d1b-aec3-aec7aa02bb6f.png)
* Further broke down each story into smaller tasks
* Worked with branches / pull requests for each of the smaller tasks 
* Once I had a minimum working app, I focused on styling and adding features from my backlog that time permitted

### Components
![image](https://user-images.githubusercontent.com/70478809/129495879-345ce0d2-619c-4e9b-9e54-3a084b397eee.png)


### What was built
* Decorative header for context (and a little bit of fun!)
* Search form: form fields consisting of label, text input and button, for user to enter search term 
* Image list: once search term is submitted, relevant images will be rendered 
* Pagination: max number of results presented per page, and 
* Mobile responsiveness 

### Future improvements
UI/UX:
* Have a 'clear' option for the search field which resets the page
* Present the results in a masonry-style grid 
* Feedback if there are no search results returned ('e.g. no results found, try again!'), and do not show page number when no results
* Improved pagination: next/previous buttons
* Mobile improvements: bigger form buttons, hide keyboard when submit clicked 
* Homepage presented with random photos before user search
* Highlight text field when in focus
* The ability to click on an image and copy it's URL to clipboard (useful especially for developers wanting to use photos in their projects)

Development:
* Validation on search input
* Use of CSS variables or Sass for repeated styles
* Unit testing with Jest


## Setup 💻

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Or view live: https://image-search-app-ts-react.netlify.app/

Thank you for reading - have a great day! ☀️
