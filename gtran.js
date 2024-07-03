#!/usr/bin/env node

const translate = require('@iamtraction/google-translate');
const { program } = require('commander');

program
  .requiredOption('--text <text>', 'Text to translate')
  .option('--source <source>', 'Source language (default: auto)', 'auto')
  .option('--target <target>', 'Target language (default: en)', 'en');

program.parse(process.argv);

const options = program.opts();
const targetLanguage = options.target || 'en';

translate(options.text, { from: options.source, to: targetLanguage })
  .then(res => {
    let translationResult = {
      source: res.from.language.iso,
      target: targetLanguage,
      translation: res.text
    };

    if (res.from.text.autoCorrected || res.from.text.didYouMean) {
      // Remove <em> tags from the did_you_mean text
      const cleanText = res.from.text.value.replace(/<\/?em>/g, '');
      translationResult.did_you_mean = cleanText;
    }

    console.log(JSON.stringify(translationResult));
  })
  .catch(err => {
    console.error(JSON.stringify({ err: err.toString() }));
  });
