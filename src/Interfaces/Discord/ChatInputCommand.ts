import type { APIApplicationCommandOption, LocalizationMap } from "discord.js";

export interface ChatInputCommand {
	/**
	 * Name of command, 1-32 characters
	 */
	name: string;
	/**
	 * Localization dictionary for `name` field
	 *
	 * @note Value follows the same restrictions as `name`
	 */
	name_localizations?: LocalizationMap | null;
	/**
	 * Description for Chat Input command, 1-100 characters
	 */
	description: string;
	/**
	 * Localization dictionary for `description` field
	 *
	 * @note Value follows the same restrictions as `description`
	 */
	description_localizations?: LocalizationMap | null;
	/**
	 * Parameters for the command, max of 25
	 */
	options?: APIApplicationCommandOption[];
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions?: string | null | undefined;
	/**
	 * Indicates whether the command is available in DMs with the app, only for globally-scoped commands
	 *
	 * @default true
	 */
	dm_permission?: boolean;
	/**
	 * Indicates whether the command is age-restricted
	 *
	 * @default false
	 */
	nsfw?: boolean;
}
