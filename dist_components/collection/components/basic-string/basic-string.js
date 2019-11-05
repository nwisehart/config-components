import { h } from "@stencil/core";
export class BasicString {
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
