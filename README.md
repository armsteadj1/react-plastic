# react-plastic

A no hassle react display for a card using only the css from jessepollak's Card (https://github.com/jessepollak/card). This does not use the javascript from this project, it is only to display static cards. If you need it to be interactive, I suggest using another project for this (https://www.npmjs.com/package/card-react).  

![card](https://cl.ly/0q1P0j2M0V2a/Image%202017-07-16%20at%209.33.41%20AM.png)

Attempts to make a best effort to scale the card. Look below for information on how to override this.

## Packages

### npm

```shell
npm install react-plastic
```

## Usage

```
	import React from 'react';
	import Plastic from 'react-plastic';

	export const ShowCard = () => (
      <Plastic
        type="amex"
        name="Peter Sagan"
        expiry="10/20"
        number="444466666655555"
        cvc="3333"
      />);
```

That's it! Depending on your setup, the CSS should be pulled in automagically.

### Properties

* `type` - A string for the name that should appear on the card. 
  * supported cards: 
  * any other value will appear as the default unknown card
* `expiry` - A string for the expiration date that should appear on the card
  * accepts either: 02/2020 or 02/20.
* `number` - A string for the card number that should appear on the card
* `name` - A string for the name that should appear on the card
* `cvc` - A string for the cvc that should appear front and back of the card
* `back` - A boolean to show the back of the card

## Scaling

To override, you should be able to override the css for:

`@media (max-width: <SIZE>px) { .card-wrapper {} }`

## CSS
If for some reason your styling isn't working, you may need to include:
 
`node_modules/react-plastic/styles/card.css`

## Contributors

```
James Armstead
```

### Contribute!

Be a part of this project! You can run the test using the following.

1. Install dependencies from package.json by running `npm install`
2. Run the test via `npm test`
3. Contribute!

This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License)

Proudly written in Des Moines, Iowa.