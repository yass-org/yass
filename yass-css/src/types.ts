export interface Config {
  includeBaseClasses: boolean;
  pseudoClasses: string[]; // TODO: Think more about value of stricter typing here
  stylesheet?: {
    buildPath?: string;
    filename?: string;
  },
  types?: {
    buildPath?: string;
    filename?: string;
  },
}

type Value = string;

export interface Theme {
  [theme: string]: Value;
}

export interface YassToken {
  name: string;
  value: Value;
  theme?: Theme;
  properties?: string[];
  // comment?: string; // TODO
}

export interface DesignToken extends YassToken {
  category?: 'color' | 'elevation' | 'motion' | 'font-weight' | 'opacity' | 'scale';
}
