import type { APIMessageComponentEmoji } from "discord.js";
import type { BaseComponent } from "./BaseComponent";

export interface LinkButton extends BaseComponent {
	/**
	 * Whether the button is disabled
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Emoji that appears on the button
	 */
	emoji?: APIMessageComponentEmoji;
	/**
	 * Text that appears on the button, max 80 characters
	 */
	label?: string;
}
