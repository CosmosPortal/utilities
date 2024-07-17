import type { BaseComponent } from "./BaseComponent";

export interface Modal extends BaseComponent {
    /**
     * The title of the popup modal, max 45 characters
     */
    title: string;
};