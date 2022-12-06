import { TokenDefinitions } from "../types"
import * as base from '../base'

export const button: TokenDefinitions[] = [
  {
    properties: [
      'padding-inline'
    ],
    tokens: {
      'button-small': base.scale.tokens['5'],
      'button-medium': base.scale.tokens['8'],
      'button-large': base.scale.tokens['20'],
    }
  },
  {
    properties: [
      'padding-block'
    ],
    tokens: {
      'button-small': base.scale.tokens['2'],
      'button-medium': base.scale.tokens['5'],
      'button-large': base.scale.tokens['10'],
    }
  },
  {
    properties: [
      'font-size'
    ],
    tokens: {
      'button-small': base.scale.tokens['8'],
      'button-medium': base.scale.tokens['8'],
      'button-large': base.scale.tokens['10'],
    }
  },  
]