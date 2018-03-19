# web-appbuilder-typescript-examples
Featuring examples of using TypeScript with Web AppBuilder.

## Examples

There are 2 types of project examples in this repository, one if you want to use and test your custom widgets within a running version of Web AppBuilder (see `builder` section below) and one example of if you're developing a widget for a particular app (see `developer` section below).


## Quick Start - `builder`

Example using TypeScript and Grunt to copy files to your local Web AppBuilder Developer Edition so you can use your custom widgets in the builder interface. We have options for 2D Web AppBuilder apps (that use the ArcGIS API for Javascript v3.x) and 3D Web AppBuilder apps (that use the the ArcGIS API for JavaScript 4.x). This is the template that the [generator-esri-appbuilder-js](https://github.com/Esri/generator-esri-appbuilder-js) now outputs if you choose "TypeScript". [More info here](https://community.esri.com/people/GRehkemper-esristaff/blog/2018/03/15/web-appbuilder-widget-generator-v3-released-typescript).

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
1. `npm install -g grunt-cli` (see https://gruntjs.com/getting-started)
1. Clone or download this repo.
1. Download the Web AppBuilder Developer Edition zip file from [here](https://developers.arcgis.com/web-appbuilder/), and save the zip file named `arcgis-web-appbuilder-2.6.zip` into the `developer/` folder, right at the same level as the `Gruntfile.js`.
1. In the terminal, browse to the `developer` folder
1. `npm install`
1. `grunt init`

#### Development:

Run `grunt` and as you modify your files, the web app should be updated automatically.

## Documentation

A few notes about the general ideas and principles that are used in both the `builder` and `developer` versions of this code

- We are currently supporting [TypeScript version 2.6](https://blogs.msdn.microsoft.com/typescript/2017/10/31/announcing-typescript-2-6/).
- The Declare Decorator is used to tell TypeScript how to translate our Widget class into a dojo/declare syntax that Web AppBuilder is looking for. [Decorators are currently experimental](https://www.typescriptlang.org/docs/handbook/decorators.html) (although widely used) so beware of that small risk. If TypeScript did take out decorators at some point, we would have to change how we're doing this.
- For more info, see this blog post: [Custom Web AppBuilder Widgets in TypeScript ](https://community.esri.com/people/GRehkemper-esristaff/blog/2017/12/13/custom-web-appbuilder-widgets-in-typescript)
