import * as base  from './base'

import type { UtilityClassDefinition } from './types'

export const utility: UtilityClassDefinition[] = [
  {
    name: 'visually-hidden',
    declarations: [
      { property: 'position', value: 'absolute' },
      { property: 'width', value: '1px' },
      { property: 'height', value: '1px' },
      { property: 'margin', value: '-1px' },
      { property: 'border', value: '0' },
      { property: 'padding', value: '0' },
      { property: 'white-space', value: 'no-wrap' },
      { property: 'clip-path', value: 'inset(100%)' },
      { property: 'clip', value: 'rect(0 0 0 0)' },
      { property: 'overflow', value: 'hidden' },
    ]    
  },
  {
    name: 'debug',
    declarations: [
      { property: 'background-color', value: base.color.tokens['red-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-red',
    declarations: [
      { property: 'background-color', value: base.color.tokens['red-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-orange',
    declarations: [
      { property: 'background-color', value: base.color.tokens['orange-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-yellow',
    declarations: [
      { property: 'background-color', value: base.color.tokens['yellow-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-green',
    declarations: [
      { property: 'background-color', value: base.color.tokens['red-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-teal',
    declarations: [
      { property: 'background-color', value: base.color.tokens['teal-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-blue',
    declarations: [
      { property: 'background-color', value: base.color.tokens['blue-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-purple',
    declarations: [
      { property: 'background-color', value: base.color.tokens['purple-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
  {
    name: 'debug-pink',
    declarations: [
      { property: 'background-color', value: base.color.tokens['pink-900'] },
      { property: 'opacity', value: base.opacity.tokens['100'] },
    ],
  },
]

