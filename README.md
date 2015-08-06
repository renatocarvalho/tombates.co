Boa
=========

Boa is a set of tools that can be used to replace a [Jekyll](http://jekyllrb.com/) build. It's a collection of node packages basically. It's a static site generator workflow I guess. It uses [gulp](http://gulpjs.com/) and [metalsmith](http://metalsmith.io) mostly. It should be pretty easy to customise. I hope. If you got any questions, issues or ideas just add them to [issues](https://github.com/yoamomonstruos/pwww/issues).

Resources
---------

It's all bit on pretty popular and opensource projects. You can learn more about them here:

- [Basscss](http://www.basscss.com/) - Low-level css toolkit
- [CSSNEXT](https://cssnext.github.io/) - Use tomorrows css today. CSS4 compiler
- [Gulp](http://gulpjs.com) - Automate and enhance your workflow
- [Metalsmith](http://metalsmith.io) - An extremely simple, pluggable static site generator.

Installation
---------

Let's assume a few things. Firstly, you have [Node.js](https://nodejs.org/) installed, etc. You also have [Git](http://git-scm.com/) setup.

```sh
$ git clone https://github.com/yoamomonstruos/boa.git ## Clone this repo :)
$ npm install ## Install all the node packages we need
$ gulp ## This will compile all the assets and serve it all.
```

### Optional Flags

There's a couple of optional flags when running the gulp command. These are:
- `--network` - This will get your ip address so you can share across your local network easily.
- `--open` - This will open the build in a new tab of your browser

Creating a page
--------

Boa tries to make this as simple as possible. Maybe it fails not sure. Basically you run a gulp task to generate you're new content template. All your fancy pages will live in `_pages`.

```sh
$ gulp create:page --name="Your pages name"
[16:20:00] Using gulpfile ~/Github/boa/Gulpfile.js
[16:20:00] Starting 'create:page'...
[16:20:00] Finished 'create:page' after 11 ms
```

Simple huh? Here's what would be generated

```html
---
title: Your pages name
template: master.handlebars
permalink: true
collection: pages
js:
- your_js_file
og:
  title: The Rock
  type: video.movie
  url: http://www.imdb.com/title/tt0117500/
  image: http://ia.media-imdb.com/images/rock.jpg
twitter_card:
  card: summary
  site: '@yoamomonstruos'
  creator: '@yoamomonstruos'
  url: http://tombates.co
  description: A description would be awesome
---

<h1>Your pages name</h1>
```

This works exactly the same for creating posts. Except you swap post for page. E.g. `gulp create:post --name="etc"`.


Adding Global Metadata
---------

Boa makes this simple too. Everyone loves having data in the handlebars templates. Any `.json` file inside of the `_data` directory will be attached to Metalsmith's metadata object, which in turn is passed to handlebars. Pretty simple right?

Deploying to GitHub pages
---------

This is as simple as it possibly could be.

```sh
$ gulp deploy:github
[20:17:14] Using gulpfile ~/GitHub/boa/Gulpfile.js
[20:17:14] Starting 'deploy:github'...
[20:17:14] [gh-pages] Cloning repo
[20:17:14] [gh-pages] Checkout branch `gh-pages`
[20:17:14] [gh-pages] Updating repository
[20:17:23] [gh-pages] Copying files to repository
[20:17:23] [gh-pages] Adding 4 files.
[20:17:23] [gh-pages] Committing "Update 2015-05-28T23:17:14.307Z"
[20:17:23] [gh-pages] Pushing to remote.
[20:17:26] Finished 'deploy:github' after 12 s
```
