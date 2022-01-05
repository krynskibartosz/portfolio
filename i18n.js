module.exports = {
  locales: ["en", "fr", "pl"],
  defaultLocale: "fr",
  pages: {
    "*": ["common", "home"],
  },
  loader: false,
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./public/static/locales/${lang}/${ns}.json`).then((m) => m.default),
};
