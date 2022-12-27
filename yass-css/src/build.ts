import postcss, { Root, Rule, Declaration } from 'postcss'

import color from './definitions/categories/color.json'
import elevation from './definitions/categories/elevation.json'
import opacity from './definitions/categories/opacity.json'
import size from './definitions/categories/size.json'
import fontWeight from './definitions/categories/font-weight.json'
import scale from './definitions/categories/scale.json'

import type { DesignToken } from "./types"
import { createVariableName } from './utils/create-variable-name'

const categoryMap = {
  'color': color,
  'elevation': elevation,
  'opacity': opacity,
  'size': size,
  'scale': scale,
  'font-weight': fontWeight,
}


export const build = (userTokens: DesignToken[], cssTokens: DesignToken[]): string => {
  const root = new Root()
  
  root.append(buildUserStyleSheet(userTokens))
  root.append(buildCssStylesheet(cssTokens))
  
  const css = postcss().process(root).css

  return css
}

const buildUserStyleSheet = (tokens: DesignToken[]): Root => {
  const variables = new Rule({ selector: ':root' })
  const themes: { [theme: string]: Rule } = {}
  const classes = new Root()

  tokens.forEach((token: DesignToken) => {
    const { name, category, theme, value, properties: userProperties } = token

    // Create Variables
    variables.append(new Declaration({ prop: createVariableName(token), value }))

    // Create theme classes
    if(theme) {
      Object.keys(theme).forEach((themeName: string) => {
        if(!themes[themeName]) {
          themes[themeName] = new Rule({ selector: `.${themeName}` })
        }
        const value = theme[themeName]

        themes[themeName].append(new Declaration({ prop: createVariableName(token), value }))
      })
    }

    const properties = userProperties || categoryMap[category]    
    properties.forEach((property: string) => {
      
      // Create atomic classes
      const declaration = new Declaration({
        prop: property,
        value: `var(${createVariableName(token)})`,
      })

      const rule = new Rule({
        selector: `.${property}\\:${name}`
      }).append(declaration)

      classes.append(rule)
    })
      
  })

  return new Root().append(
    variables,
    Object.values(themes),
    classes,
  )
}

const buildCssStylesheet = (tokens: DesignToken[]): Root => {
  const classes = new Root()
  
  tokens.forEach((token: DesignToken) => {
    const { name, value, properties } = token
  
    properties.forEach((property: string) => {
      const declaration = new Declaration({
        prop: property,
        value: value,
      })

      const rule = new Rule({
        selector: `.${property}\\:${name}`
      }).append(declaration)

      classes.append(rule)
    })
  })

  return classes
}