# redux-word-gl

Reimplementation of an old game project, which can be found here:
http://deadlock.at/#wordgl

It's built with React / Redux / Sagas.

**Development:**

* After cloning, run `npm install` to install all dependencies.
* Run `npm run webpack-dev` to run the development server
* You can access the application in the browser with `http://localhost:8080`

**Test:**

* `tape` is used for testing
* To run a single test, just use `babel-node test/sometest.js`
* To run the whole test-suite, run `npm test`

**TODO:**

* [ ] Fix row-collapsing, whenever letters are destroyed
* [ ] Add dictionary for word validation
* [ ] Add score addition mechanics
* [ ] Add nicer score / input display
* [ ] Add design
