# delta-css main theme

delta main theme is a first theme using sass pre-processor

## using theme

styles as html and electron

```html
<!-- cdn link -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/delta-css/styles/delta-fonts.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/delta-css/themes/main/delta.css" />
<!-- example with script is require external js with type="module active" -->
<script type="module">
import {
  deltaMenu,
} from "https://cdn.jsdelivr.net/npm/delta-css/browser-js/main.js"

deltaMenu()
</script>

<!-- via electron -->
<link rel="stylesheet" href="<path>/node_modules/delta-css/styles/delta-fonts.css">
<link rel="stylesheet" href="<path>/node_modules/delta-css/themes/main/delta.css" />
```

:::tip info
&lt;path&gt; is for reference the path project example: ../../app or ../app
:::

js via module

```js
/* electron */
const { deltaMenu, } = require('delta-css/themes/main')

/* bundle */

/* styles */
import 'delta-css/styles/delta-fonts.css' // fonts
import 'delta-css/themes/main/delta.css' // theme css mode
import 'delta-css/themes/main/scss/delta.scss' // theme sass mode

// import global
import { deltaMainTheme } from 'delta-css'
deltaMainTheme.deltaAlert('example', 'primary')

// specificity theme
import { deltaAlert } from 'delta-css/themes/main'
deltaAlert('example', 'primary')
```

## components

some components a colors using CSS custom properties.

### layout

```html
<!-- glass -->
<div class="glass">
hello
</div>

<!-- container -->
<main class="container">
  <p>lorem</p>
</main>

<!-- mansory layout -->
<section class="mansory">
  <img src='https://images.unsplash.com/photo-1672910059109-19d499a00465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
  <img src='https://images.unsplash.com/photo-1673950271048-a12ae839d36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
  <img src='https://images.unsplash.com/photo-1673085796350-a842999ec21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
</section>

<!-- grid  -->
<section class="grid">
  <img src='https://images.unsplash.com/photo-1674071140986-d873769f0016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
  <img src='https://images.unsplash.com/photo-1672910059109-19d499a00465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
  <img src='https://images.unsplash.com/photo-1674647363290-12c85533e3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400' alt=''>
</section>

<!-- footer -->
<footer class="footer">
  <p>hello</p>
</footer>
```

### alert

this component using javascript

```js
import { deltaMainTheme } from 'delta-css'
deltaMainTheme.deltaAlert('example', 'primary')

// specificity theme
import { deltaAlert } from 'delta-css/themes/main'
deltaAlert('example', 'primary')
```

#### types for alert color:

- primary
- secondary
- tertiary
- success
- warning
- danger
- dark
- medium
- light

### buttons

```html
<button class="btn" disabled>i'm btn disabled</button>
<button class="btn btn-primary">hello</button>
<button class="btn btn-secondary">hello</button>
<button class="btn btn-tertiary">hello</button>
<button class="btn btn-success">hello</button>
<button class="btn btn-warning">hello</button>
<button class="btn btn-danger">hello</button>
<button class="btn btn-dark">hello</button>
<button class="btn btn-medium">hello</button>
<button class="btn btn-light">hello</button>
```

### cards

```html
<section class="glass card">
  <figure class="card-header">
    <img class="card-image" src="https://images.unsplash.com/photo-1672910059109-19d499a00465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU0NDE0NTc&ixlib=rb-4.0.3&q=80&w=400" alt="example" />
    <figcaption class="card-title">example</figcaption>
  </figure>
  <article class="card-body">
    <p>lorem</p>
  </article>
  <footer class="card-footer">
    <p>footer</p>
  </footer>
</section>
```

### accordion

```html
<details class="glass accordion">
  <summary class="accordion-header">hello</summary>
  <div class="accordion-body">
    <p>lorem</p>
  </div>
</details>
```

### text colors

```html
<p class="primary">lorem</p>
<p class="secondary">lorem</p>
<p class="tertiary">lorem</p>
<p class="success">lorem</p>
<p class="warnig">lorem</p>
<p class="danger">lorem</p>
<p class="dark">lorem</p>
<p class="medium">lorem</p>
<p class="light">lorem</p>
```

### navbar

```html
<nav class="glass navbar">
  <a href="#" class="navbar-brand">
    <img src="logo-mobile.png" alt="example" class="navbar-brand-image">
    home
  </a>
  <div class="navbar-menu-btn">
    <span class="navbar-bars"></span>
  </div>
  <menu class="navbar-menu">
    <li class="navbar-menu-item">
      <a href="#" class="navbar-menu-link">example</a>
    </li>
    <li class="navbar-menu-item">
      <a href="#" class="navbar-menu-link">example</a>
    </li>
    <li class="navbar-menu-item">
      <a href="#" class="navbar-menu-link">example</a>
    </li>
    <li class="navbar-menu-item">
      <a href="#" class="navbar-menu-link">example</a>
    </li>
  </menu>
</nav>
```

```js
deltaMainTheme.deltaMenu() // via global
deltaMenu() // via theme
```

### forms

```html
<fieldset class="input-field">
  <input class="input-field-text" type="text" placeholder="with input" />
  <textarea class="input-field-text" placeholder="with textarea">
  </textarea>
  <input class="input-field-check" type="checkbox" />
</fieldset>

<fieldset class="input-field">
  <select class="input-field-select">
    <option value="">222</option>
    <option value="">444</option>
  </select>
</fieldset>
```

### modal

```html
<dialog id="modal" class="modal glass">
  <span id="modal-close" class="modal-close">x</span>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a obcaecati consequatur voluptate in itaque
    aspernatur perferendis, veritatis nam? Iusto animi maiores commodi cumque repellat consectetur modi, similique
     maxime libero.
  </p>
</dialog>
```

```js
deltaMainTheme.deltaModal() // via global
deltaModal() // via theme
```

> only modern browsers

## print hidden

this class using media query print with next class

```html
<p class="print-hidden">hidden for print</p>
```
