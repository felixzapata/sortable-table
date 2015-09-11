module.exports = {
  verbose: true,
  testTimeout: 5 * 60 * 1000,
  plugins: {
    sauce: {
      disabled: true,
      browsers: [
        'OS X 10.10/chrome'
      ]
    }
  }
};
