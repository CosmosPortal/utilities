import type { TextInputStyle } from "discord.js";
import type { BaseComponent } from "./BaseComponent";

export interface TextInput extends BaseComponent {
    /**
     * Label for this text input, max 45 characters
     */
    label: string;
    /**
     * The text input style
     */
    style: TextInputStyle;
    /**
     * Maximum input length for a text input, min 1, max 4000
     */
    max_length?: number;
    /**
     * Minimum input lenght for a text input, min 0, max 4000
     */
    min_length?: number;
    /**
     * Custom placeholder text if the input is empty, max 100 characters
     */
    placeholder?: string;
    /**
     * Whether this text input is required to be filled
     * 
     * @default true
     */
    required?: boolean;
    /**
     * Pre-filled value for this text input, max 4000 characters
     */
    value?: string;
};