import type { ApplicationCommandType, LocalizationMap } from "discord.js";

export interface ContextMenuCommand {
    /**
     * The type of context menu
     */
    type: Exclude<ApplicationCommandType, ApplicationCommandType.ChatInput>;
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
     * Localization dictionary for `description` field
     * 
     * @note Value follows the same restrictions as `description`
     */
    description_localizations?: LocalizationMap | null;
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
};