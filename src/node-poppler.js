const { Poppler } = require("node-poppler");
const { exec } = require("child_process");

const inputFolder = "pdf";
const outputFolder = "html";

const samples = [
  {
    filename: "boneshaker",
    pageNumber: 3,
  },
  {
    filename: "HS_40_Digital",
    pageNumber: 3,
  },
];

samples.forEach(({ filename, pageNumber }) => {
  const poppler = new Poppler();
  const options = {
    firstPageToConvert: pageNumber,
    lastPageToConvert: pageNumber,
    complexOutput: true,
  };

  poppler
    .pdfToHtml(
      `${inputFolder}/${filename}.pdf`,
      `${outputFolder}/${filename}.html`,
      options
    )
    .then((res) => {
      console.log(res);
      exec(`open ${outputFolder}/${filename}.html`);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
});
