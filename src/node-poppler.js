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
    // dataUrls: true, this will throw error 🤷‍♂️
  };

  poppler
    .pdfToHtml(
      `${inputFolder}/${filename}.pdf`,
      `${outputFolder}/${filename}.html`,
      options
    )
    .then(res => {
      console.log(res);
      exec(`open ${outputFolder}/${filename}.html`);
    });

  // poppler
  //   .pdfFonts(`${inputFolder}/${filename}.pdf`, {
  //     firstPageToExamine: pageNumber,
  //     lastPageToExamine: pageNumber,
  //   })
  //   .then(console.log);

  poppler
    .pdfToCairo(
      `${inputFolder}/${filename}.pdf`,
      `${outputFolder}/${filename}.svg`,
      {
        firstPageToConvert: pageNumber,
        lastPageToConvert: pageNumber,
        svgFile: true,
      }
    )
    .then(res => {
      console.log(res);
      exec(`open ${outputFolder}/${filename}.svg`);
    });
});
