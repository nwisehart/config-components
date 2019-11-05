import { h } from "@stencil/core";
import { BasicString } from '../basic-string/basic-string';
export class BasicCard {
    constructor() {
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
        return (h("div", { class: "card block trailer-1" },
            h("div", { class: "card-content" },
                h("h4", null, this.cardTitle),
                this.cardText ? (h("p", { class: "font-size--1" }, this.cardText)) : (''),
                this.settings ? this.cycleSettings() : '')));
    }
    static get is() { return "basic-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["basic-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["basic-card.css"]
    }; }
    static get properties() { return {
        "cardTitle": {
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
                "text": "The title for the card"
            },
            "attribute": "card-title",
            "reflect": false
        },
        "cardText": {
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
                "text": "The text to be displayed on the card"
            },
            "attribute": "card-text",
            "reflect": false
        },
        "collapsed": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If the card should be collapsed"
            },
            "attribute": "collapsed",
            "reflect": false
        },
        "settings": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "BasicSetting[]",
                "resolved": "BasicSetting[]",
                "references": {
                    "BasicSetting": {
                        "location": "import",
                        "path": "../../utils/utils"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Settings to be shown in card"
            }
        }
    }; }
}
//interface for currentState
// type ExportJson = {
//   fieldName: string | number | boolean | {};
// }
/**
* What should be in the basic wrapper
* - Should take in a title, text, settings params
* - [expandable?] i.e. collapsed.
* - print title and text into card and cycle settings?
* - Styled text widget??
* - returns a object of settings altered
*/
