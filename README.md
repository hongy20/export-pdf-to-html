This project experience various tools for converting pdf to html/css

## node-poppler

https://www.npmjs.com/package/node-poppler

### Learnings

* This library depends on external binaries;
* It can export pdf to html;
* With option `complexOutput`, it can preserve the original layout with css;
* It provides an option to "use data URLs instead of external images in HTML", but enabling this option will end up crashing;
* Fonts are not extracted, so the layout will look different than the original pdf;
