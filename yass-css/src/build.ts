import postcss, { Root, Rule, Declaration } from 'postcss'

import color from './definitions/categories/color.json'
import elevation from './definitions/categories/elevation.json'
import opacity from './definitions/categories/opacity.json'
import size from './definitions/categories/size.json'
import fontWeight from './definitions/categories/font-weight.json'
import scale from './definitions/categories/scale.json'

import { createVariableName } from './utils/create-variable-name'
import { isUnresolvedTokenName } from './utils/is-unresolved-token-name'

import type { DesignToken } from "./types"

const categoryMap = {
  'color': color,
  'elevation': elevation,
  'opacity': opacity,
  'size': size,
  'scale': scale,
  'font-weight': fontWeight,
}


export const build = (userTokens: DesignToken[], cssTokens: DesignToken[], pseudoClasses: string[]): string => {
  const root = new Root()
  
  root.append(buildUserStyleSheet(userTokens, pseudoClasses))
  root.append(buildCssStylesheet(cssTokens, pseudoClasses))
  
  const css = postcss().process(root).css

  return css
}

const buildUserStyleSheet = (tokens: DesignToken[], pseudoClasses: string[]): Root => {
  const variables = new Rule({ selector: ':root' })
  const themes: { [theme: string]: Rule } = {}
  const classes = new Root()

  tokens.forEach((token: DesignToken) => {
    const { name, category, theme, value, properties: userProperties } = token
    // Create Variables
    if(!isUnresolvedTokenName(value)) {
      variables.append(new Declaration({ prop: createVariableName(token), value }))
    } 

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
      const value = `var(${createVariableName(token)})`
      const className =  `${property}\\:${name}`
      const rule: Rule = buildRule(className, property, value)
      const pseudos: Rule[] = buildPseudos(className, property, value, pseudoClasses)

      classes.append(rule, ...pseudos)
    })
      
  })

  return new Root().append(
    variables,
    Object.values(themes),
    classes,
  )
}


const buildCssStylesheet = (tokens: DesignToken[], pseudoClasses: string[]): Root => {
  const classes = new Root()
  
  tokens.forEach((token: DesignToken) => {
    const { name, value, properties } = token
  
    properties.forEach((property: string) => {
      const className =  `${property}\\:${name}`
      const rule: Rule = buildRule(className, property, value)
      const pseudos: Rule[] = buildPseudos(className, property, value, pseudoClasses)

      classes.append(rule, ...pseudos)
    })
  })

  return classes
}

const buildRule = (className: string, property: string, value: string) => {
  const declaration = new Declaration({
    prop: property,
    value: value,
  })

  const rule = new Rule({
    selector: `.${className}`,
  }).append(declaration)
 
  return rule
}

const buildPseudos = (className: string, property: string, value: string, pseudos: string[]) => {

  return pseudos.map((pseudo: string) => {
    const declaration = new Declaration({
      prop: property,
      value: value,
    })
  
    return new Rule({
      selector: `.${pseudo}\\(${className}\\):${pseudo}`, // e.g. .hover(background-color:red-500):hover
    }).append(declaration)

  })
}