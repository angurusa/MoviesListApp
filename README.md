# Evaluation Project for Vue.js

This project is intended to serve as an example of how you can solve a problem.
It represents the kind of work that we do as a team, but it is not at all 
related to our projects or industry. This project can only be used to evaluate
your ability to meet project requirements in a Vue.js application.

The goals of this evaluation are to determine your level of ability with Vue.js
and frontend development in general. Specifically, we will be evaluating:

* Technical accuracy of the code.
* Stylistic consistency and adherence to common best practices.
* Ability to interpret requirements into working code.
* Ability to interpret design documents into working interface.
* Ability to write tests and document features.

## Expectations
We expect that you will use this project as an opportunity to prove your skills
with regard to the criteria listed above. You have been given a 
partially-completed project that requires you to complete the requirements
listed below in order to run.

This project should take an experienced Vue.js developer a couple of hours to
complete. It requires knowledge of Vue components and templates, Vuex data 
stores, and modern concepts of HTML, CSS, and JS. Although you are welcome to 
invest as much time as you have to complete the project, it is not intended 
that it should take more than a few hours to do so.

**You should post your completed project within 72 hours of receiving the
project files.**

## Requirements

In order to successfully complete this evaluation, you must fulfill these
requirements.

### Interpolate data into template 
The following data must be interpolated into the template. Use proper HTML
structures and avoid unnecessary wrapper or style support elements.

The `Home.vue` will contain a list of the top movies of the 20th Century (as
determined by user reviews on TMDb.org). Each movie will be displayed in a box
that features various information.

Required data to be shown for each movie:

* Movie Title
* Release Year
* List of Genres
* Movie Overview
* Average Viewer Rating
* Favorite/unfavorite button and status
* Poster image
* Backdrop image

### Lay out content according to design comp
A design comp has been provided in the root of the project repository. The
filename is `design-comp.png`. It shows the desired layout and design of the
page or information. You should attempt to reproduce this layout as closely
as possible. 

Guidelines for styling and layout:

* Do not add any third-party libraries
* Use modern CSS (no need to support legacy browsers for this demo)
* Use the most clean and approachable CSS you can
* Please use Grid and Flex layouts as needed
* Use the dynamic poster image value in the layout
* Use the dynamic backdrop image in the background

### Add a filter for release year
In order to transform the release date value into a year, it will be necessary
to use a filter. Define this filter as part of the `Home.vue` component.

### Refactor favorite buttons
The favorite button is partially functional, but it is included in the 
`Home.vue` file, which is not idea. In order to use favorite buttons in a more
modular way, we want to make it a standalone component.

A skeleton file `components/FavoriteButton.vue` has been created to contain the
new component. 

Refactor the `Home.vue` component to use `FavoriteButton.vue` as a child
component. It should pass the `movie` prop and handle setting/insetting favorite
movies in the Vuex store.

When clicked, the Favorite button should toggle the "favorite" status of the 
movie -- it will either add or remove the `movie` object to the Vuex store 
state (under `favorites`).

### Add unfavorite capability
In the Vuex store, there is a `removeFavorite` mutation defined that is not 
yet functional. Complete the functionality fo the `removeFavorite` mutation and
add a `removeFavorite` action that can be triggered in the `FavoriteButton.vue`
component. Use this action in the favorite button component to allow users to 
remove Favorite movies (in addition to adding them).

### Finish unit tests for favorite and unfavorite ability
There are two unit tests that check the ability for the 
`FavoriteButton.vue` component to add/remove favorite movies from the Vuex 
store. 

You can run the unit test with:
```
npm run test:unit
```

Right now the unit tests will not do anything. These tests need to have the 
final parts added in `tests/unit/favoriteButton.spec.js` to actually test the
favorite/unfavorite feature. Complete the tests and make sure the unit tests
are passing.

### Write up your work summary
Once you've completed the project, fill in the questionaire located in the
file `candidate-documents/project-summary.md`. You can add any additional 
project or process artifacts or documentation in the `candidate-documents`
directory, too.

### Submit your work for evaluation
When you have provided a reasonable summary for your work, please submit it to 
us. You should post the work in a Git repository hosted on your GitHub account.
You may name the repository anything you'd like, and you may make it either
public or private. Send your hiring contact a link to your project repo via
email. (Be sure to confirm that they have received the link.)

## Stretch Goals

Do you really want to impress us? If you've completed the requirements and
you're still having fun, then attempt any of these stretch goals.

* Did you notice anywhere things could be improved in the project? Improve them!
(And be sure to tell us what you did.)
* Refactor each movie list item into a component (and write a new test for it).
* Add sorting to the list: Sort by release date, rating, alphabetical would be
especially handy.
* Improve the design or layout in some significant way, especially if that 
includes adding interesting responsive or interactive elements.
* Address accessibility in a deep way and explain to us what you've done.
* Add the ability to filter for only favorites.
* Plug all of this into the real [Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
 and add the ability to search, browse, or do other things with the live data.

## Project Installation

You have been given a Vue.js project in an archive (ZIP, Tar, etc.). You must
install this project and its dependencies on your development machine. You must
also create a Git repository and share it with us via GitHub. 

### Project requirements
This project requires you to be running the latest version of Node.js and `npm`.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```


## Candidate Responsibilities
All work in this project should be completed by you, during the time period 
alotted. If you have any questions or concerns about the project, reach out to
your hiring contact. No assistance towards completing the requirements here 
will be offered, but we will provide every reasonable accommodation to enable
you to do the work.

You are free to develop as you normally would, consulting whatever references
you would consult during your usual development process. Please avoid direct
copying/pasting of code examples and focus on showing us your development
abilities.
