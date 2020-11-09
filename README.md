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
	let navSetting = {
		expand: 'md', // or xl, lg, sm, xs
		layout: 'sidebar', // or collapse
		hover: false, // now use click
		toggle: '<span class="default"></span>', //pointer arrow customization, example: <i class="fa fa-chevron-down"></i>
		sidebar: {
			placement: 'right',
			width: 250
		}
	}

	let vg_nav = new VGNav('#myNav', navSetting);
	vg_nav.toggle()
});
```

## Authors

[VEGAS STUDIO](https://vegas-dev.com)  Russia

## License 
Is published under the [MIT license](http://www.opensource.org/licenses/mit-license)