export interface TokenDefinitions {
  tokens: object; // TODO: Better types
  properties: string[];
}

export interface BaseTokens {
  scale: TokenDefinitions;
  color: TokenDefinitions;
  opacity: TokenDefinitions;
  fontWeight: TokenDefinitions;
  elevation: TokenDefinitions;
}
export interface ComponentTokens {
  box: TokenDefinitions[];
  button: TokenDefinitions[];
  grid: TokenDefinitions[];
  text: TokenDefinitions[];
}

export interface UtilityClassDefinition {
  name: string;
  declarations: {
    property: string;
    value: string;
  }[];
}

export interface Tokens {
  base: BaseTokens;
  components: ComponentTokens;
  utility: UtilityClassDefinition[];
}