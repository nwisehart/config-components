import { r as registerInstance, h } from './core-07cbf83b.js';

const BasicString = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("label", null, this.label, h("input", { type: "text", value: this.current, class: "modifier-class", ref: this.itemRef, required: true })));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { BasicString as basic_string };
