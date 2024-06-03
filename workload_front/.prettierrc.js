module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrder: [
    '^/(.*)$',
    '^(views|containers|components)/(.*)$',
    '^(helpers|utils|router|store)/(.*)$',
    '^models/(.*)$',
    '^hooks/(.*)$',
    '^assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
