# vegasNavigation
A script for implementing navigation on a site with a normal drop-down list and with mega content.

The application is written in JQuery, html5 and ССS3 using the compiler SCSS

[![npm](https://img.shields.io/npm/v/vgnav.svg?style=flat-square&maxAge=600)](https://www.npmjs.com/package/vgnav) [![npm](https://img.shields.io/npm/l/vgnav.svg?style=flat-square)]()

## Demo
https://vegas-dev.github.io/vegas-nav/

## Install
```
npm i vgnav
```

or download [here](https://github.com/vegas-dev/vegas-nav/archive/master.zip)

## Dependencies
* jQuery >= 3

## Usage
##### HTML markup
```html
<nav class="vg-nav vg-nav-lg">
    <ul>
        <li class="active"><a href="/">Home page</a></li>
		<li class="dropdown">
            <a href="#">Left dropdown</a>
            <ul class="left">
                ...
            </ul>
        </li>
        <li class="dropdown-mega">
            <a href="#">Mega Menu</a>
            <div class="dropdown-mega-container">
                ... 
            </div>
        </li>
        <li class="dropdown">
            <a href="#">Right dropdown</a>
            <ul class="right">
		       ...
            </ul>
        </li>
    </ul>
</nav>
```

##### JQuery init
```javascript
$(document).ready(function () {
    $('.vg-nav').vegasMenu();
})
```

##### Hamburger folding. Use the following classes next to the main:
```scss
.vg-nav-xl // Desktop and laptop
.vg-nav-lg // Tablets landscape
.vg-nav-md // Tablets portrait
.vg-nav-sm // Phone landscape
.vg-nav-xs // Phone portrait
```

```html
<nav class="vg-nav vg-nav-md">
    The menu will collapse on the tablet in portrait mode
</nav>
```

##### Custom sidebar width
```javascript
sidebar: {
    width: {
        xl: '100%',
        lg: '100%',
        md: '80%',
        sm: '90%',
        xs: '75%'
    }
}
```

## Authors

[VEGAS STUDIO](https://vegas-dev.com)  Russia

## License 
Is published under the [MIT license](http://www.opensource.org/licenses/mit-license)