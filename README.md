# tombates.co

# This repo is probably totally fucked up due to changes in Meteor. Not sure, how reliable using it will be. Need to get my portfolio updated soon. So will fix. Probably. Maybe.

## Running locally

Install meteor.js

``` sh
$ curl https://install.meteor.com | /bin/sh
```

Install Meteorite *(Package manager for meteor)*

``` sh
$ sudo -H npm install -g meteorite
```

Clone this repository

``` sh
$ git clone https://github.com/yoamomonstruos/tombates.co.git
```

Navigate to directory and run meteor/meteorite
``` sh
$ mrt
```

### Troubleshoot

You may need run into a problem with the scss package for meteor. Something to do with running tests. If so, go into `packages/scss` and comment out the following within `package.js`

``` js
Package.on_test(function (api) {
  api.use(['test-helpers', 'tinytest']);
  api.use(['spark']);
  // api.add_files(['scss_tests.scss', 'scss_tests.js'], 'client');
});
```
