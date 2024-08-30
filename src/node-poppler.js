const { Poppler } = require("node-poppler");

const file = "example/HS#40_Digital.pdf";
const poppler = new Poppler();
const options = {
  firstPageToConvert: 3,
  lastPageToConvert: 3,
  complexOutput: true,
};

poppler
  .pdfToHtml(file, "output/HS.html", options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    throw err;
  });
