"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postcss_1 = __importDefault(require("postcss"));
const base_css_1 = __importDefault(require("./base_css"));
const ast_1 = require("./ast");
const json = {}; // TODO: Scope this better
exports.default = (tokens) => {
    const processor = (0, postcss_1.default)([]);
    const root = new ast_1.Root();
    root.appendNodes(generateBaseCSSClasses(base_css_1.default));
    root.appendNodes(generateBaseTokens(tokens.base));
    root.appendNodes(generateComponentTokens(tokens.components));
    root.appendNodes(generateUtilityClasses(tokens.utility));
    // Turn the JSON AST representation into an actual AST
    let rehydrated = postcss_1.default.fromJSON(root.json());
    // Render the AST as actual CSS
    const css = processor.process(rehydrated).css;
    return {
        css,
        json,
    };
};
/**
 * Converts something like:
 * ```
 *  tokens: {
 *    '0': '0px',
 *    '100': '2px',
 *    ...
 *  },
 *  properties: [
 *    'gap',
 *    'margin',
 *    ...
 *  ]
 * ```
 *
 * into vanilla CSS that looks like:
 * ```
 *  .gap\:0 { gap:0; }
 *  .gap\:100 { gap:100; }
 *  .margin\:0 { margin:0; }
 *  .margin\:100 { margin:100; }
 *  ...
 * ```
 */
const generateFromTokenDefinitions = ({ tokens, properties }) => {
    const rules = [];
    properties.forEach((propertyName) => {
        for (const [tokenName, tokenValue] of Object.entries(tokens)) {
            if (!json[propertyName]) {
                json[propertyName] = [];
            }
            json[propertyName].push(`${propertyName}:${tokenName}`);
            const className = `${propertyName}\\:${tokenName}`;
            const rule = new ast_1.Rule({
                selector: `.${className}`,
                declarations: [new ast_1.Declaration({ property: propertyName, value: tokenValue })],
                className,
            });
            const pseudoSelectorClasses = generatePseudoSelectorClasses(rule);
            rules.push(...[rule, ...pseudoSelectorClasses]);
        }
    });
    return rules;
};
/**
 * Converts something like:
 * ```
 * fontSize: {
 *  tokens: {
 *    'small': base.scale.tokens['300'],
 *    'medium': base.scale.tokens['500'],
 *    ...
 *  },
 *  properties: [
 *    'font-size',
 *  ]
 * }
 *
 * ```
 *
 * into vanilla CSS that looks like:
 * ```
 *  .font-size\:small { font-size: 6px; }
 *  .font-size\:medium { font-size:16px; }
 *  ...
 * ```
 */
const generateBaseTokens = (base) => {
    const group = Object.values(base);
    const rules = [];
    group.forEach((definition) => {
        rules.push(...generateFromTokenDefinitions(definition));
    });
    return rules;
};
/**
 * Converts something like:
 * ```
 *  tokens: {
 *    'small': base.scale.tokens['300'],
 *    'medium': base.scale.tokens['500'],
 *    ...
 *  },
 *  properties: [
 *    'font-size',
 *  ]
 * ```
 *
 * into vanilla CSS that looks like:
 * ```
 *  .font-size\:small { font-size: 6px; }
 *  .font-size\:medium { font-size:16px; }
 *  ...
 * ```
 */
const generateComponentTokens = (components) => {
    const component = Object.values(components);
    const rules = [];
    component.forEach((definitions) => {
        definitions.forEach(definition => {
            rules.push(...generateFromTokenDefinitions(definition));
        });
    });
    return rules;
};
/**
 * Converts something like:
 * ```
 *  {
 *    property: "display",
 *    values: [ "block", "inline", ... ]
 *  }
 * ```
 *
 * into vanilla CSS that looks like:
 * ```
 *  .display\:block { display: block; }
 *  .display\:inline { display: inline; }
 *  ...
 * ```
 */
const generateBaseCSSClasses = (declarations) => {
    const rules = [];
    declarations.forEach((declaration) => {
        const { property, values } = declaration;
        values.forEach((value) => {
            if (!json[property]) {
                json[property] = [];
            }
            json[property].push(`${property}:${value}`);
            const className = `${property}\\:${value}`;
            const rule = new ast_1.Rule({
                selector: `.${className}`,
                declarations: [new ast_1.Declaration({ property: property, value: value })],
                className,
            });
            const pseudoSelectorClasses = generatePseudoSelectorClasses(rule);
            rules.push(...[rule, ...pseudoSelectorClasses]);
        });
    });
    return rules;
};
/**
 * Converts something like:
 * ```
 * {
 *   name: 'debug',
 *   declarations: [
 *     {
 *       property: 'background-color',
 *       value: base.color.tokens['red-900']
 *     },
 *     {
 *       property: 'opacity',
 *       value: base.opacity.tokens['10']
 *     },
 *   ],
 * },
 * ```
 *
 * into vanilla CSS that looks like:
 * ```
 * .debug {
 *   background-color: hsl(0, 100%, 15%);
 *   opacity: 10%;
 * }
 * ```
 */
const generateUtilityClasses = (definitions) => {
    const rules = [];
    definitions.forEach((definition) => {
        const { name: className, declarations } = definition;
        const resolvedDeclarations = declarations.map((declaration) => new ast_1.Declaration(declaration));
        const rule = new ast_1.Rule({ selector: `.${className}`, declarations: resolvedDeclarations, className });
        const pseudoSelectorClasses = generatePseudoSelectorClasses(rule);
        rules.push(...[rule, ...pseudoSelectorClasses]);
    });
    return rules;
};
const pseudoSelectors = ['hover', 'focus', 'active', 'visited'];
const generatePseudoSelectorClasses = (rule) => {
    return pseudoSelectors.map((pseudoSelector) => {
        const selector = `.${pseudoSelector}\\(${rule.className}\\):${pseudoSelector}`;
        return new ast_1.Rule({
            selector,
            declarations: rule.declarations,
            className: `${pseudoSelector}\\(${rule.className}\\)`
        });
    });
};
