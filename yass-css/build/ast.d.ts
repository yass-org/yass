export interface ResolvedDeclaration {
    type: "decl";
    raws: {
        before: string;
        between: string;
    };
    prop: string;
    value: string;
}
export declare class Declaration {
    property: string;
    value: string;
    constructor({ property, value }: {
        property: any;
        value: any;
    });
    json(): ResolvedDeclaration;
}
export interface ResolvedRule {
    type: "rule";
    selector: string;
    raws: {
        "before": string;
        "between": string;
        "semicolon": boolean;
        "after": string;
    };
    "nodes": ResolvedDeclaration[];
}
export declare class Rule {
    selector: string;
    declarations: Declaration[];
    className: string;
    constructor({ selector, declarations, className }: {
        selector: any;
        declarations: any;
        className: any;
    });
    json(): ResolvedRule;
}
interface ResolvedRoot {
    type: 'root';
    nodes: ResolvedRule[];
}
export declare class Root {
    _nodes: ResolvedRule[];
    constructor();
    appendNodes(nodes: Rule[]): void;
    json(): ResolvedRoot;
}
export {};
//# sourceMappingURL=ast.d.ts.map