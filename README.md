# UNC Roommates
UNC Roommates is your one-stop destination for finding a roommate at UNC Chapel Hill!

Currently deployed at this domain: https://6096427c300c42f06256a91e--serene-liskov-010cf3.netlify.app/

## Features
UNC Roommates has:
* A feed of posts where you can find potential roommates or post looking for potential roommates
* A housing dashboard that shows supported housing locations and their estimaated price and walking distance
* Notifications and the ability to accept or reject roommate requests.
* Donation feature

## Project Inspirations
I created UNC Roommates because two friends and I spent months trying to find a 4th roommate for our apartment in Chapel Hill. There just wasn't an obvious destination to go for meeting new people online (COVID-19) and especially those who were also looking for housing. The current system is to use Facebook Groups which are often unapparent and inactive. So I sought to create an easy-to-use, obvious destination for finding roommates. This is also my COMP 426 Final Project.

## Technical Details
UNC Roommates is created with ReactJS, Firebase, and Material-UI. It uses 3 APIs: [Google Maps API](https://developers.google.com/maps), [Google Maps Geocoding API](https://rapidapi.com/googlecloud/api/google-maps-geocoding), and [Quotes API by Martin Svoboda](https://rapidapi.com/martin.svoboda/api/quotes15).

ReactJS
* Makes up the entire front-end of the website, including multiple components found in the src/ folder.
* Contains the logic for the website

Firebase
* Used for authentication and back-end of website
* Four OAuth providers: Google, Facebook, Twitter, and Github

Material-UI
* For beautiful components and styling
* Autocomplete for housing options

## Attributions
Thank you to:
* [ReactJS and documentation](https://reactjs.org/docs/getting-started.html)
* [Firebase and documentation](https://firebase.google.com/docs)
* [Material-UI and documentation](https://material-ui.com/)
* [COMP 426 for the project, KMP for teaching, and Chris Burgees for being a great TA](https://comp426.com/home)
* [Computer Science + Social Good for teaching me the basics of React and Firebase through our CFTK project.](https://cssgunc.org/)
* [Stripe + Google Pay for payment](https://stripe.com/)

Loved this project <3 hope to grow it out more
