# web-appbuilder-typescript-examples
Featuring examples of using TypeScript with Web AppBuilder.

## Examples

There are 2 types of project examples in this repository, one if you want to use and test your custom widgets within a running version of Web AppBuilder (see `builder` section below) and one example of if you're developing a widget for a particular app (see `developer` section below).


## Quick Start - `builder`

Example using TypeScript and Grunt to copy files to your local Web AppBuilder Developer Edition so you can use your custom widgets in the builder interface. This is meant to be an example of what an output of [generator-esri-appbuilder-js](https://github.com/Esri/generator-esri-appbuilder-js) might look like if Typescript were integrated into the generator.

1. Copy the files from the `/builder` folder to your GitHub repo.
1. Update the file paths at the beginning (line ~10) of `Gruntfile.js` to point to your running Web AppBuilder instance.
1. Install Node.js.
2. `npm install -g grunt-cli` (see https://gruntjs.com/getting-started)
1. `npm install`
1. `grunt`

## Quick Start - `developer`

If you're not using the builder interface, this version extracts Web AppBuilder, copies the config files for your app, builds your widgets, and hosts the files. This workflow is less common, but can get you running quicker and easier.

#### First-time:

1. Install Node.js.
2. `npm install -g grunt-cli` (see https://gruntjs.com/getting-started)
3. Clone or download this repo.
2. In the terminal, browse to the `developer` folder
3. `npm install`
4. `grunt init`

#### Development:

Run `grunt` and as you modify your files, the web app should be updated automatically.