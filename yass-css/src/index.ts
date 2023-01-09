#!/usr/bin/env node
import { build } from './build'
import { buildTypes } from './build-types'
import walkSync from './utils/walk-sync'
import writeFile from './utils/write-file'
import { 
  defaults as defaultTokens, 
  css as cssTokens,
} from './tokens'

import type { Config } from './types'

// Validate and process config
const userConfig: Partial<Config> = require(`${process.cwd()}/yass.config.json`) // Open user config JSON
const config: Config = {
  includeBaseClasses: userConfig.includeBaseClasses !== undefined ? userConfig.includeBaseClasses : true,
  pseudoClasses: userConfig.pseudoClasses || ['hover', 'focus', 'active', 'visited'],
  stylesheet: {
    buildPath: userConfig.stylesheet?.buildPath || 'styles/yass/',
    filename: userConfig.stylesheet?.filename || 'yass.css',
  },
  types: {
    buildPath: userConfig.types?.buildPath || 'types/',
    filename: userConfig.types?.filename || 'yass.ts',
  },
}

// Validate and process command line args
const tokensDir = process.argv[2]

let tokens = []
if(tokensDir) {
  walkSync(tokensDir, (filepath, stats) => {
    tokens.push(...require(`${process.cwd()}/${filepath}`))
  })
} else {
  tokens = defaultTokens
}
// Build stylesheet from tokens
const stylesheet = build(
  tokens, 
  config.includeBaseClasses ? cssTokens : [],
  config.pseudoClasses,
)
const { buildPath, filename } = config.stylesheet

writeFile(buildPath, filename, stylesheet)

const types = buildTypes(
  tokens, 
  config.includeBaseClasses ? cssTokens : [],  
)

const { buildPath: typesBuildPath, filename: typesFilename } = config.types

writeFile(typesBuildPath, typesFilename, types)
