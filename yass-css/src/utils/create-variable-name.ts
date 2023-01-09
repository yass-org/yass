import { DesignToken } from "../types";

export const createVariableName = (token: DesignToken) => {
  const { category, name, value} = token

  if(value[0] === '{' && value[value.length - 1] === '}') {
    const trimmedValue = value.slice(1, value.length - 1)
    return `--${trimmedValue}`        
  }

  if(!category) {
    return `--${name}`
  }

  return `--${category}-${name}`
}
