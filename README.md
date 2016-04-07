Econonomic Indicators Dashboard 
===============================



[![Build Status](https://travis-ci.org/codeforsanjose/economic-indicators-dashboard.svg?branch=master)](https://travis-ci.org/codeforsanjose/economic-indicators-dashboard?branch=master)
[![dependencies](https://david-dm.org/codeforsanjose/economic-indicators-dashboard.svg)](https://david-dm.org/codeforsanjose/economic-indicators-dashboard)
[![devDependency Status](https://david-dm.org/codeforsanjose/economic-indicators-dashboard/dev-status.svg)](https://david-dm.org/codeforsanjose/economic-indicators-dashboard#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![Stories in Ready](https://badge.waffle.io/codeforsanjose/economic-indicators-dashboard.svg?label=ready&title=Ready)](http://waffle.io/codeforsanjose/economic-indicators-dashboard)

See the [wiki](https://github.com/codeforsanjose/economic-indicators-dashboard/wiki) for a more complete overview

[Initial mockup prototype](http://codeforsanjose.github.io/economic-indicators-dashboard/#/?_k=9sa7tb)

## Table of contents

  * [Goals](#goals)
  * [Target Audience](#target-audience)
  * [Related Sites](#related-sites)
  * [Data Sources](#data-sources)
  * [Example Sites](#example-sites)
  * [Minimum Viable Product](#data-sources)
  * [Stack](#stack)
  * [Getting Started](#getting-started)
  * [Structure](#structure)

### Goals
1. Elected officials, policymakers, businesses, nonprofits and community members have access to accurate, recent data on San Jose economy.
2. Reduce OED staff time spent servicing one-off data requests. 

### How will progress toward goals be measured?
1. Use of dashboard in discussions about San Jose economy (Committee and Council meetings, public meetings, etc)
2. Reduction in number of individual data requests to OED staff
3. Site traffic analytics

### What is the 10 second test?  
In 10 seconds a user should be able to get a sense of whether the SJ economy is growing, shrinking, or staying the same. 

In 30 seconds a user should be able to find a specific statistic that he/she is looking for (or determine that it is not listed on the page). E.g. number of jobs in San Jose. 

### Does this replace/supplement an existing site?  If so, what are key improvements that are being sought?
No

### Does this map to an existing city initiative?
Yes, ongoing data services provided by Office of Economic Development staff. 

### Target audience
* San Jose elected officials, policy makers and other local government staff
* Real estate developers, brokers and investors
* Nonprofit organizations that make advocate on specific policy issues (urbanism, housing, business climate)
* Journalists writing about San Jose
* Companies looking to relocate to San Jose
* People looking to live in San Jose
* Current San Jose residents

### Usage Frequency
* As needed for reports, articles, etc (infrequently)
* Monthly Community and Economic Development Committee meetings
* Quarterly updates 

### General Impressions hoping to convey
* Economic strength
* Competitive growth compared to other areas
* Vibrant, thriving citypment Committee meetings
* Quarterly updates 

##### Roles
* Viewers
* Users of the data (e.g. journalists, analysts, researchers)
* Data entry (back-end)
* Developers
* Analysts looking at visit analytics

#### Related Sites
[San Jose Office of Economic Development](http://sjeconomy.com/) - Current San Jose site done in wordpress

### Data Sources
Each indicator should be compared to value from prior year.  

|Category | Name  | Description |Link |Update frequency|Time Lag|Show Historical Detail?|
| -------|------------- | ------------- |-----|----|----|----|---| 
| Jobs | Unemployment Rate | % of SJ residents in the labor force but not employed |TBD|Monthly|1-2 Months|Yes|
| Jobs | Number of Jobs | Number of jobs in the City of San Jose | TBD | Every 3 months | 9 months |Yes|
| Jobs | Number of Tech Jobs | Number of jobs in industries classified as "tech" | TBD | Every 3 months | 9 months |Yes| Manual | 
| Real Estate | Citywide Office Vacancy |
| Real Estate | Citywide R&D Vacancy |
| Real Estate | Citywide Industrial Vacancy |
| Talent | Labor Force | # SJ residents employed or available for work | TBD | Monthly | 1-2 months | Yes|
| Talent | 

Data wishlist for future versions
* Sq.ft. and value of commercial construction within the City to date (Requires data from Planning dept)
* Net number of businesses over 10 employees in the City? (Requires data from Finance dept)

#### Integrations
(List any existing city or external systems that should be integrated with this site.)
Ideally the indicators would be populated from the [City of San Jose's open data portal](http://data.sanjoseca.gov/home)

#### Example sites
[Denver's economic indicators](http://www.metrodenver.org/research-reports/monthly-economic-indicators/)

[San Diego's economic dashboard](http://www.sandiegobusiness.org/research/dashboard)

[California Center for Jobs & the Economy](http://www.centerforjobs.org/data-tool/#santa_clara)

[Boston's transportation agency performance dashboard](http://www.mbtabackontrack.com/performance/index.html#/home)

[Montgomery County's dashboard](https://reports.data.montgomerycountymd.gov/countystat/objective/economy)

#### Minimum Viable Product (MVP) description
* Static webpage showing key numbers for current quarter and change from previous year (no interactive charts)
* Look-and-feel is consistent with SJeconomy.com website (doesn't have to be perfect match, but passable)

##### Release targets
* Share alpha version with Office of Economic Development staff in early April
* Launch beta version to San Jose elected officials at April 25, 2016 Community and Economic Development Committee meeting 

#### Stack
See the package.json for the full set of libraries/tools used

###### Front end
* React - https://facebook.github.io/react/
  * All styles are set and maintained in external files. All tags, classnames, ids are set in jsx. 
* React-redux - http://redux.js.org/
* scss - http://sass-lang.com/
* Bootstrap - http://getbootstrap.com/
* nvd3 - http://nvd3.org/
  * D3 - https://d3js.org/

###### Server  
The server is simply for development to support hot module replacement
* Koa - http://koajs.com/

###### Backend
Currently there is not a backend.  In the future if one needs to be created, node will be used so that code can be shared between the front and back ends.

###### Build
If there are any eslint errors, the build will fail.

* npm - https://www.npmjs.com/
* better-npm-run - https://www.npmjs.com/package/better-npm-run
* babel - https://babeljs.io/
* webpack - https://webpack.github.io/
* travis (github integration) - https://travis-ci.org/

###### Quality checks
* eslint - http://eslint.org/ 
  * Uses the standard rules (http://standardjs.com/rules.html) via https://www.npmjs.com/package/eslint-config-standard
* phantomjs - http://phantomjs.org/
* sinon - http://sinonjs.org/
* chai - http://chaijs.com/
* codecov - https://codecov.io/
* karma - https://karma-runner.github.io/0.13/index.html

#### Getting started

The project uses the [react-reduct-starter-kit](https://github.com/davezuko/react-redux-starter-kit) by [Dave Zukowski](https://github.com/davezuko)

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/codeforsanjose/economic-indicators-dashboard.git
$ cd economic-indicators-dashboard.git
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

To deploy to gh-pages
```shell
# In the economic-indicators-dashboard folder, run the following
$ npm clean                     # Remove the dist folder which contains the compiled pieces
$ npm run deploy                # Generate a clean build in the dist folder

# Clone the gh-pages branch into a different folder (e.g. branches folder)
$ git clone -b gh-pages https://github.com/codeforsanjose/economic-indicators-dashboard.git 
$ cd economic-indicators-dashboard.git   # cd into the gh-branches version of economic-indicators-dashboard
$ git rm *.js *.css                      # remove the previous bundles of the css and js
# copy the bundled *.js, *.css and index.html from the dist folder to the gh-branches folder
# edit the index.html and prepend '/economic-indicators-dashboard' to the path for the *.js and *.css 
# commit the changes to the gh-pages branch
```
Great, now that introductions have been made here's everything in full detail:

|Script|Description|
|---|---|
|`npm start`|Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.|
|`npm run compile`|Compiles the application to disk (`~/dist` by default).|
|`npm run dev`|Same as `npm start`, but enables nodemon to automatically restart the server when server-related code is changed.|
|`npm run dev:nw`|Same as `npm run dev`, but opens the redux devtools in a new window.|
|`npm run dev:no-debug`|Same as `npm run dev` but disables redux devtools.|
|`npm run test`|Runs unit tests with Karma and generates a coverage report.|
|`npm run test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`npm run deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`npm run flow:check`|Analyzes the project for type errors.|
|`npm run lint`|Lint all `.js` files.|
|`npm run lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

**NOTE:** Deploying to a specific environment? Make sure to specify your target `NODE_ENV` so webpack will use the correct configuration. For example: `NODE_ENV=production npm run compile` will compile your application with `~/build/webpack/_production.js`.

#### Structure

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── coverage                 # Test coverage results - NOT CHECKED IN
├── dist                     # Files to deploy - NOT CHECKED IN
├── interfaces               # Type declarations for Flow
├── node_modules             # Results from npm install - NOT CHECKED IN
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   |   ├── client
│   |   |   ├── server       # Koa application (uses webpack middleware)
│   |   |   |   └── main.js  # Server application entry point
│   |   |   ├── app
│   |   |   |   ├── charts       # nvd3 pieces
│   |   |   |   ├── components   # Generic React Components (generally Dumb components)
│   |   |   |   ├── config       # Constants, urls pieces
│   |   |   |   ├── containers   # Components that provide context (e.g. Redux Provider)
│   |   |   |   ├── layouts      # Components that dictate major page structure
│   |   |   |   ├── redux        # Redux-specific pieces
│   |   |   |   │   ├── modules  # Collections of reducers/constants/actions
│   |   |   |   │   └── utils    # Redux-specific helpers
│   |   |   |   ├── routes       # Application route definitions
│   |   |   |   ├── static       # Static assets (not imported anywhere in source code)
│   |   |   |   ├── styles       # Application-wide styles (generally settings)
│   |   |   |   ├── views        # Components that live at a route
│   |   |   |   ├── index.html   # index.html
│   |   |   |   └── main.js      # Application bootstrap and rendering
└── tests                    # Unit tests
```
