# vegas-nav

`vegas-nav` is a navigation component for horizontal and vertical menus with:

- dropdown and mega menu support
- responsive breakpoint switching
- automatic overflow collapse into a `dots` menu
- optional hover mode
- optional hamburger button
- lifecycle callbacks

## Installation

Install from npm:

```bash
npm install vgnav
```

Or use the built files from the repository:

- JS: `build/vgnav.js`
- CSS: `build/vgnav.css`

## How To Connect

### Variant 1. Directly in HTML

```html
<link rel="stylesheet" href="/build/vgnav.css">
<script src="/build/vgnav.js"></script>
```

After that the class is available as `vgn.VGNav`.

```html
<script>
	document.querySelectorAll('.vg-nav').forEach(function (nav) {
		new vgn.VGNav(nav);
	});
</script>
```

### Variant 2. Through a bundler

```js
import { VGNav } from 'vgnav';
import 'vgnav/build/vgnav.css';

new VGNav('.vg-nav');
```

Inside this repository the entry point is [index.js](/F:/OSPanel/home/projects/vegas-nav/index.js:1).

## Required HTML Structure

Base structure:

```html
<nav class="vg-nav">
	<ul class="vg-nav-wrapper">
		<li><a href="/">Home</a></li>

		<li class="dropdown">
			<a href="#">Catalog</a>
			<ul>
				<li><a href="/a">Item A</a></li>
				<li><a href="/b">Item B</a></li>
			</ul>
		</li>

		<li class="dropdown-mega">
			<a href="#">Services</a>
			<div class="dropdown-mega-container">
				<div>Any custom content</div>
			</div>
		</li>
	</ul>
</nav>
```

Important:

- root element: `.vg-nav`
- menu list: `.vg-nav-wrapper`
- simple dropdown item: `.dropdown`
- mega menu item: `.dropdown-mega`
- mega menu body: `.dropdown-mega-container`

Without `.vg-nav-wrapper` initialization will fail. This is checked in [app/js/app.js](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:149).

## Initialization

The constructor accepts 3 arguments:

```js
new VGNav(element, options, callbacks);
```

- `element`: DOM element or selector string
- `options`: component options
- `callbacks`: object with hook functions

Example:

```js
new VGNav('.vg-nav', {
	breakpoint: 'lg',
	placement: 'horizontal',
	isHover: false,
	isCollapse: true
}, {
	afterInit: ({ nav, element, settings }) => {
		console.log('init', nav, element, settings);
	},
	beforeClick: ({ event, trigger, item, dropdown, isMegaMenu }) => {
		console.log('before click', event, trigger, item, dropdown, isMegaMenu);
	},
	afterClick: ({ event, trigger, item, dropdown, isMegaMenu, isOpen }) => {
		console.log('after click', isOpen);
	},
	clickHamburger: ({ event, trigger, isShow }) => {
		console.log('hamburger', isShow);
	}
});
```

Supported callback names are defined in [app/js/app.js](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:84).

## Options

Default options are defined in [app/js/app.js](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:57).

```js
{
	breakpoint: 'md',
	breakpoints: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400,
		xxxl: 1600
	},
	placement: 'horizontal',
	classes: {
		hamburgerActive: 'vg-nav-hamburger-active'
	},
	isExpand: true,
	isHover: false,
	isAutoPosition: true,
	isCollapse: true,
	isHamburger: true,
	toggle: '<span class="default"></span>',
	hamburger: {
		title: '',
		body: null
	}
}
```

Main options:

- `breakpoint`: named breakpoint from `breakpoints`
- `breakpoints`: custom responsive values
- `placement`: `horizontal` or `vertical`
- `isExpand`: whether responsive mode is enabled
- `isHover`: open menu by hover
- `isAutoPosition`: auto place dropdown left/right/bottom
- `isCollapse`: move overflowing items into the `dots` dropdown
- `isHamburger`: create hamburger button automatically
- `toggle`: HTML for the dropdown arrow
- `hamburger.title`: text inside the generated hamburger
- `hamburger.body`: custom hamburger markup
- `classes.hamburgerActive`: class added to the active hamburger button

## Data Attributes

Options can be passed through `data-*` attributes on the root navigation node. They override values from the `options` object.

Example:

```html
<nav
	class="vg-nav"
	data-hover="true"
	data-breakpoint="lg"
	data-hamburger="false"
	data-params='{"classes":{"hamburgerActive":"is-active"}}'
>
	<ul class="vg-nav-wrapper"></ul>
</nav>
```

The merge logic is implemented in `setParams(...)` in [app/js/app.js](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:15).

## How The Script Works

At initialization `VGNav`:

1. resolves the root element
2. merges default options, constructor options, and `data-*` attributes
3. checks required markup
4. adds root classes for placement and responsive mode
5. creates a hamburger button if needed
6. injects dropdown toggle markup
7. calculates overflow and moves extra items into the `dots` menu through `_setCollapse(...)`
8. binds click and resize handlers
9. emits `afterInit`

Current implementation lives in [app/js/app.js](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:100).

## Overflow Collapse

If `isCollapse` is enabled and the menu is wider than the available space, extra root items are moved into a generated `.dots` dropdown.

This logic is implemented in [_setCollapse](/F:/OSPanel/home/projects/vegas-nav/app/js/app.js:568).

## Current Demo Note

The demo in [public/index.html](/F:/OSPanel/home/projects/vegas-nav/public/index.html:291) still shows the old `clickHamburger(self, event, isShow)` style. The current API in `app.js` already uses a single payload object:

```js
clickHamburger: ({ trigger, event, isShow }) => {}
```

If you use the current source from `app/js/app.js`, write callbacks in the new format.
