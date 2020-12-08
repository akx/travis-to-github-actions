# Travis to GitHub Actions converter

This utility helps you convert Travis CI configuration files to the GitHub Actions workflow format.

## Usage

### Online

The `master` branch of the repository is automatically deployed to https://akx.github.io/travis-to-github-actions/ 

### Command-line usage

If you install `ts-node`, you can run e.g.

```
./node_modules/.bin/ts-node -O '{"module": "CommonJS"}' bin/convert.ts < .travis.yml
```

to get a GitHub workflow. (Running via `yarn`, e.g. `yarn ts-node`, loses the stdin redirection.)

## Contributing

Contributions are welcome!

The app is a standard Create React App TypeScript app.

* If you use Npm, `npm i; npm start` should get you going.
* If you use Yarn, `yarn; yarn start` should get you going.
