import { r as registerInstance, h } from './core-07cbf83b.js';

const TestComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    // @Prop() first: string;
    render() {
        return (h("div", null, "Hello, World!"));
    }
    static get style() { return ""; }
};

export { TestComponent as test_component };
