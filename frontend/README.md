# Frontend of the HK Legco Project

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Dependencies

Choose 2

```
1) angular#~1.3 which resolved to 1.3.16 and is required by angular-busy#4.1.3
2) angular#1.3.16 which resolved to 1.3.16 and is required by angular-animate#1.3.16
3) angular#1.4.1 which resolved to 1.4.1 and is required by angular-animate#1.4.1, angular-aria#1.4.1, angular-cookies#1.4.1, angular-messages#1.4.1, angular-mocks#1.4.1, angular-resource#1.4.1, angular-route#1.4.1, angular-sanitize#1.4.1, angular-touch#1.4.1
4) angular#^1.3.0 which resolved to 1.4.1 and is required by frontend
```

## Build & Deploy

Regardless of the deploy target, build first: `grunt build`

* Deploy to staging server (rsync): `grunt deploy:staging`
* Deploy to prod server (gh-pages): `grunt deploy:prod`

## Screenshot

```
phantomjs screen.js
```

