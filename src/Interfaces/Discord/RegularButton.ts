import type { APIMessageComponentEmoji, ButtonStyle } from "discord.js";
import type { BaseComponent } from "./BaseComponent";

export interface RegularButton extends BaseComponent {
	/**
	 * A button style
	 *
	 * @note `ButtonStyle.Link` cannot be used here.
	 */
	style: Exclude<ButtonStyle, ButtonStyle.Link>;
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
