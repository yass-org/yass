import { TokenDefinitions } from "../types"
import * as base from '../base'

export const text: TokenDefinitions[] = [
  {
    properties: [
      'font-weight',
    ],
    tokens: {
      'light': base.fontWeight.tokens['200'],
      'normal': base.fontWeight.tokens['400'],
      'bold': base.fontWeight.tokens['700'],
    }
  },
  {
    properties: [
      'color',
    ], 
    tokens: {
      'text': base.color.tokens['neutral-800'],

      'primary': base.color.tokens['neutral-100'],
      'primary-hover': base.color.tokens['neutral-50'],
      'primary-active': base.color.tokens['neutral-200'],

      'subtle': base.color.tokens['neutral-700'],
      'subtle-hover': base.color.tokens['neutral-600'],
      'subtle-active': base.color.tokens['neutral-800'],

      'neutral': base.color.tokens['neutral-100'],
      'neutral-hover': base.color.tokens['neutral-50'],
      'neutral-active': base.color.tokens['neutral-200'],

      'success': base.color.tokens['neutral-100'],
      'success-hover': base.color.tokens['neutral-50'],
      'success-active': base.color.tokens['neutral-200'],

      'warning': base.color.tokens['neutral-100'],
      'warning-hover': base.color.tokens['neutral-50'],
      'warning-active': base.color.tokens['neutral-200'],

      'danger': base.color.tokens['neutral-100'],
      'danger-hover': base.color.tokens['neutral-50'],
      'danger-active': base.color.tokens['neutral-200'],     
    }
  },  
]
