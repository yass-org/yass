import { TokenDefinitions } from "../types"

export const grid: TokenDefinitions[] = [
  {
    properties: [
      'grid-template-columns'
    ],
    tokens: {
      'three-column-layout': 'repeat(3, 1fr)',
      'two-column-layout': 'repeat(2, 1fr)',
      'page-layout': '1fr 4fr 1fr',
    }
  }
]