import type { BaseComponent } from "./BaseComponent";

export interface BaseSelectMenu extends BaseComponent {
    /**
     * Whether select menu is disabled
     * 
     * @default false
     */
    disabled?: boolean;
    /**
     * Maximum number of items that must be chosen, max 25
     * 
     * @default 1
     */
    max_values?: number;
    /**
     * Minimum number of items that must be chosen, min 0, max 25
     * 
     * @default 1
     */
    min_values?: number;
    /**
     * Placeholder text if nothing is selected, max 150 characters
     */
    placeholder?: string;
};