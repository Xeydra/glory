module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
