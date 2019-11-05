import { h, r as registerInstance } from './core-07cbf83b.js';

class BasicString {
    render() {
        return (h("label", null,
            this.label,
            h("input", { type: "text", value: this.current, class: "modifier-class", ref: this.itemRef, required: true })));
    }
    static get is() { return "basic-string"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["basic-string.css"]
    }; }
    static get styleUrls() { return {
        "$": ["basic-string.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The label for the input"
            },
            "attribute": "label",
            "reflect": false
        },
        "tooltip": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The tooltip for the input"
            },
            "attribute": "tooltip",
            "reflect": false
        },
        "current": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The current value for the input"
            },
            "attribute": "current",
            "reflect": false
        },
        "itemRef": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "() => {}",
                "resolved": "() => {}",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Function to handle input change and affect state"
            }
        }
    }; }
}

const BasicCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Exportable prop for current json config
         */
        // Use prop if need to be accessed externally; but will make accessible in HTML
        // @Prop({ mutable: true }) current: {};
        // Use state as only internal but will trigger re-rendering on change
        // @State() currentState: {};
        // Acts like interal state that doesn't trigger re-render
        this.currentJson = {};
    }
    // changeState(state: any) {
    //   this.currentState = {...this.currentState, state};
    //   console.log(this.currentState);
    // }
    cycleSettings() {
        // ...
        this.settings.forEach((setting) => {
            console.log(setting);
            switch (setting.type) {
                case "string":
                    console.log("string");
                    return (h(BasicString, { label: setting.label, tooltip: setting.tooltip, ref: (el) => this.currentJson[setting.fieldName] = el.value }));
                case "boolean": console.log("boolean");
                case "options": console.log("options");
                default: console.log("default");
            }
            console.log(this.currentJson);
        });
        //return elements
        return this.settings;
    }
    render() {
        return (h("div", { class: "card block trailer-1" }, h("div", { class: "card-content" }, h("h4", null, this.cardTitle), this.cardText ? (h("p", { class: "font-size--1" }, this.cardText)) : (''), this.settings ? this.cycleSettings() : '')));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { BasicCard as basic_card };
