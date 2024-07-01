#!/usr/bin/env node

const translate = require('@iamtraction/google-translate');
const { program } = require('commander');

program
  .requiredOption('--text <text>', 'Text to translate')
  .option('--source <source>', 'Source language (default: auto)', 'auto')
  .option('--target <target>', 'Target language (default: en)', 'en');

program.parse(process.argv);

const options = program.opts();

translate(options.text, { from: options.source, to: options.target })
  .then(res => {
    console.log(`Translation: ${res.text}`);
    console.log(`Source Language: ${res.from.language.iso}`);
    if (res.from.text.autoCorrected || res.from.text.didYouMean) {
      console.log(`Did you mean: ${res.from.text.value}`);
    }
  })
  .catch(err => {
    console.error('Error:', err);
  });
