export interface TokenDefinitions {
  tokens: object; // TODO: Better types
  properties: string[];
}

export interface UtilityClassDefinition {
  name: string;
  declarations: {
    property: string;
    value: string;
  }[];
}

export interface BaseCSSDeclarations {
  property: string;
  values: string[];
}
