This project explores various tools for converting pdf to html/css

## How to run

```cmd
# Clean up the workspace
just clean

# Install
brew install poppler
yarn

# Run the experiments with node-poppler
just run-node-poppler
```

## node-poppler

https://www.npmjs.com/package/node-poppler

### Learnings

* This library depends on external binaries;
* It can export pdf to html
    * With option `complexOutput`, it can preserve the original layout with css 👍;
    * Fonts are not extracted, so the layout will look different than the original pdf 👎;
    * It can extract links. But it will render the links with some default styling and the page will look different than the original pdf 👍👎;
    * It provides an option to "use data URLs instead of external images in HTML", but enabling this option will end up crashing 👎;
* It can export pdf to svg
    * The output looks pixel perfect 👍;
    * Each font symbol is presented with glyph tag (but it tells nothing about the actual character) 👎;
    * The texts are not accessible to screen readers 👎;
    * No link integration 👎;
    * Footprint is huge (246KB vs 1.8MB) 👎;

## pdf2htmlEX

https://github.com/pdf2htmlEX/pdf2htmlEX

### Learnings
