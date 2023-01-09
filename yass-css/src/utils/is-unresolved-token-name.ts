export const  isUnresolvedTokenName = (str: string) => {
  return str[0] === '{' && str[str.length - 1] === '}'
}