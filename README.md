This project experience various tools for converting pdf to html/css

## node-poppler

https://www.npmjs.com/package/node-poppler

### Learnings

* This library depends on external binaries;
* It can export pdf to html
    * With option `complexOutput`, it can preserve the original layout with css;
    * Fonts are not extracted, so the layout will look different than the original pdf;
    * It can extract links as well, but the links will be pre-styled and the page will look different than the original pdf;
    * It provides an option to "use data URLs instead of external images in HTML", but enabling this option will end up crashing;
* It can export pdf to svg
    * The output seems pixel perfect;
    * Each font symbol is presented with glyph tag (but it says nothing about the actual character);
    * The texts are not accessible to screen readers;
    * No link integration;
    * Footprint is huge (246KB vs 1.8MB);

## pdf2htmlEX

https://github.com/pdf2htmlEX/pdf2htmlEX

### Learnings
