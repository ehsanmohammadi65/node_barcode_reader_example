const Quagga = require("@ericblade/quagga2").default;
const imageSrc = "br.jpeg";
const codes = [];

Quagga.decodeSingle(
  {
    src: imageSrc,
    numOfWorkers: 0, // 0 means to use all available cores
    decoder: {
      readers: [
        "code_128_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader",
      ],
    },
    locate: false,
    multiple: false,
  },
  function (result) {
    if (result && result.codeResult && result.codeResult.code) {
      codes.push(result.codeResult.code);
    } else {
      console.log("No barcode detected.");
    }

    if (codes.length) {
      console.log("Barcodes found:", codes);
    }
  }
);
