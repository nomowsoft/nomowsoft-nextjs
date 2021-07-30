const nextTranslate = require("next-translate");

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["/src"],
  },
  ...nextTranslate(),
};
