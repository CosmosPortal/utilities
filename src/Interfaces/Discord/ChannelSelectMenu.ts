import type { ChannelType } from "discord.js";
import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { ChannelDefaultValue } from "../../Types";

export interface ChannelSelectMenu extends BaseSelectMenu {
    /**
     * List of channel types to include in the channel select menu
     */
    channel_types?: ChannelType[];
    /**
     * List of default values for auto-populated select menu
     * 
     * @note Must be in the range defined in `min_values` and `max_values`.
     */
    default_values?: ChannelDefaultValue[];
};