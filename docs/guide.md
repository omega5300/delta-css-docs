# Guide

CSS framework based on themes concept. each theme may contain at least any of following technologies:

- styles:
  - sass
  - tailwind css / postcss
  - plain css
  - fontawesome (only in light-dark theme)
- scripts:
  - typescript
  - plain js

## install and using

```sh
npm i delta-css
```

```javascript
// fonts only in main theme and light-dark theme
import 'delta-css/styles/delta-fonts.css'

// theme import
import 'delta-css/themes/main/delta.css'

// import global
import { deltaMainTheme } from 'delta-css'
deltaMainTheme.deltaAlert('example', 'primary')

// specificity theme
import { deltaAlert } from 'delta-css/themes/main'
deltaAlert('example', 'primary')
```
