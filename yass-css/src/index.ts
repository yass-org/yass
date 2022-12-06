import generate from './generate'
import * as fs from 'fs'
import tokens from 'yass-default-tokens'

export interface YassConfig {
  stylesheetOutDir?: string;
  styleSheetFileName?: string;
  typesOutDir?: string;
  typesFileName?: string;
}

export const build = ({
  stylesheetOutDir = './public/styles',
  styleSheetFileName = 'yass.css',
  typesOutDir = './types',
  typesFileName = 'yass.d.ts',
}: YassConfig) => {
  const { css, json } = generate(tokens)
  
  fs.writeFile(`${stylesheetOutDir}/${styleSheetFileName}`, css, err => {
    if (err) {
    console.error(err);
    throw err;
    }
    console.log('Successfully wrote CSS')
  });



  const types = JSON.stringify(json, null, 2) // TODO: Generate actual types with style dictionary
  fs.writeFile(`${typesOutDir}/${typesFileName}`, types, err => {
    if (err) {
    console.error(err);
    throw err;
    }
    console.log('Successfully wrote JSON')
  });    
}
