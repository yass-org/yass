"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = exports.Rule = exports.Declaration = void 0;
class Declaration {
    constructor({ property, value }) {
        this.property = property;
        this.value = value;
    }
    json() {
        return {
            "raws": {
                "before": "\n  ",
                "between": ": "
            },
            "type": "decl",
            prop: this.property,
            value: this.value,
        };
    }
}
exports.Declaration = Declaration;
class Rule {
    constructor({ selector, declarations, className }) {
        this.selector = selector;
        this.declarations = declarations;
        this.className = className;
    }
    json() {
        return {
            "type": "rule",
            selector: this.selector,
            "raws": {
                "before": "\n",
                "between": " ",
                "semicolon": true,
                "after": "\n"
            },
            "nodes": this.declarations.map(declaration => declaration.json()),
        };
    }
}
exports.Rule = Rule;
class Root {
    constructor() {
        this._nodes = [];
    }
    appendNodes(nodes) {
        nodes.forEach((node) => {
            this._nodes.push(node.json());
        });
    }
    json() {
        return {
            "type": "root",
            "nodes": this._nodes,
        };
    }
}
exports.Root = Root;
