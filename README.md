# Itunes API Search
# Objective
Create a seach field that passes a text string to search content, the result should be shown in a component similar to a card, should use **iTunes Store API's**. Adicionally, you can add pagination, order and see all.
# Results

The first step is to interact with the API REST, I used **AXIOS** for send a _GET_ request.Then I had a problem with CORS, so I had to read some StackOverflow forums for that.

As a second step I dedicated my time to make a good UI using **VUETIFY**, i found a problem with the resolution of the image, since by default it is 100x100, so to solve this problem create a method that changes the resolution to 300x300 for a better user experience and make some optional points that were given. 

Then I found that I had a mistake with my http request, because it was searching all the songs from an artist and not their albums, so i started to play with the itunes api for fix this.

Finally I make some unit test and clean code.

# Tools
Vuejs, Javascript, Vuetify, Axios, SCSS and HTML 5
# Some Screens of the final Solutions
 The following screenshots show the final result meeting the objective and some optional points:

 ![Image of Example 2](https://github.com/pablin2402/InternshipProgramExercise/tree/master/src/1.png))

 Exceptions
 ![Image of Example 3](https://github.com/pablin2402/InternshipProgramExercise/tree/master/src/exceptions1.png))

 The nexts steps are neeeded to run the proyect
## Project setup
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

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
