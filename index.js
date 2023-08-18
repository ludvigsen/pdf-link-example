const fs = require("fs");
const pdfme = require("@pdfme/generator");

const run = async () => {
  const basePdf = fs.readFileSync(`${__dirname}/link.pdf`);
  const pdf = await pdfme.generate({
    template: {
      basePdf,
      schemas: [],
    },
    inputs: [{}],
  });
  fs.writeFileSync(`${__dirname}/out.pdf`, pdf);
};

run();
