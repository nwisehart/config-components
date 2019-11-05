export declare class BasicString {
    /**
     * The label for the input
     */
    label: string;
    /**
     * The tooltip for the input
     */
    tooltip: string;
    /**
     * The current value for the input
     */
    current: string;
    /**
     * Function to handle input change and affect state
     */
    itemRef: () => {};
    render(): any;
}
