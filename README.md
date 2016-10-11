
# clone-date

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/clone-date.svg)](https://www.npmjs.com/package/clone-date) [![Downloads](https://img.shields.io/npm/dt/clone-date.svg)](https://www.npmjs.com/package/clone-date) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Clone date objects.

## :cloud: Installation

```sh
$ npm i --save clone-date
```


## :clipboard: Example



```js
const cloneDate = require("clone-date");

var d = new Date(1989, 11, 21);

// Clone the d object
var c = cloneDate(d);

console.log(d);
// => Thu Dec 21 1989 00:00:00 GMT+0200 (EET)

console.log(c);
// => Thu Dec 21 1989 00:00:00 GMT+0200 (EET)

console.log(c === d);
// => false
```

## :memo: Documentation


### `cloneDate(date)`
Clones a date object.

#### Params
- **Date** `date`: The date object to clone.

#### Return
- **Date** The cloned date object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`time-picker`](https://github.com/scienceai/time-picker) (by Robin Berjon)— A very simple React time picker

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
