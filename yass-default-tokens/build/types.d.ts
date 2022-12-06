export interface TokenDefinitions {
    tokens: object;
    properties: string[];
}
export interface BaseTokens {
    scale: TokenDefinitions;
    color: TokenDefinitions;
    opacity: TokenDefinitions;
    "font-weight": TokenDefinitions;
    elevation: TokenDefinitions;
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
//# sourceMappingURL=types.d.ts.map