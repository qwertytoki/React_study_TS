const NextI18Next = require("next-i18next").default;
// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    ja: "ja",
  },
  all: {
    en: "en",
    ja: "ja",
  },
};

module.exports = new NextI18Next({
  otherLanguages: ["ja"],
  //   localeSubpaths: localeSubpathVariations[localeSubpaths],
});
