import { h } from "@stencil/core";
export class TestComponent {
    /**
     * The first name
     */
    // @Prop() first: string;
    render() {
        return h("div", null, "Hello, World!");
    }
    static get is() { return "test-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["test-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["test-component.css"]
    }; }
}
