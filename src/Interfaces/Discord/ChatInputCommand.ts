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
	nameLocalizations?: LocalizationMap | null;
	/**
	 * Description for Chat Input command, 1-100 characters
	 */
	description: string;
	/**
	 * Localization dictionary for `description` field
	 *
	 * @note Value follows the same restrictions as `description`
	 */
	descriptionLocalizations?: LocalizationMap | null;
	/**
	 * Parameters for the command, max of 25
	 */
	options?: APIApplicationCommandOption[];
	/**
	 * Set of permissions represented as a bit set
	 */
	defaultMemberPermissions?: string | null | undefined;
	/**
	 * Indicates whether the command is available in DMs with the app, only for globally-scoped commands
	 *
	 * @default true
	 */
	dmPermission?: boolean;
	/**
	 * Indicates whether the command is age-restricted
	 *
	 * @default false
	 */
	nsfw?: boolean;
}
