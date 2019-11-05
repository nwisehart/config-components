import { BasicSetting } from '../../utils/utils';
export declare class BasicCard {
    /**
     * The title for the card
     */
    cardTitle: string;
    /**
     * The text to be displayed on the card
     */
    cardText: string;
    /**
     * If the card should be collapsed
     */
    collapsed: boolean;
    /**
     * Settings to be shown in card
     */
    settings: BasicSetting[];
    /**
     * Exportable prop for current json config
     */
    currentJson: {};
    private cycleSettings;
    render(): any;
}
/**
* What should be in the basic wrapper
* - Should take in a title, text, settings params
* - [expandable?] i.e. collapsed.
* - print title and text into card and cycle settings?
* - Styled text widget??
* - returns a object of settings altered
*/
