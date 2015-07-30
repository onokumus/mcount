# mcount
[![NPM version](https://badge.fury.io/js/mcount.svg)](http://badge.fury.io/js/mcount) [![Bower version](https://badge.fury.io/bo/mcount.svg)](http://badge.fury.io/bo/mcount)

> Simple, easy, lightweight countdown plugin with moment.js

## Install

- bower `bower install mcount`
- npm `npm install mcount`
- github [mcount](https://github.com/onokumus/mcount/archive/master.zip)

## Setup

#### add data-countdown attribute html file

```html
<span data-countdown="years"></span>
<span data-countdown="months"></span>
<span data-countdown="days"></span>
<span data-countdown="hours"></span>
<span data-countdown="minutes"></span>
<span data-countdown="seconds"></span>
```

#### create config file

```javascript
var countdownConfig = {
  end: moment('2019-03-20'),
  start: moment('2015-08-01')
};
```

#### load mcount plugin

```html
<script src="mcount.js"></script>
```

## License

MIT © [onokumus](https://github.com/onokumus)
