import type { Guild } from "discord.js";
import type { GuildChannelCountType } from "../../Types";

/**
 * Returns the total amount of channels from a guild
 * @param {Guild} guild - The guild class to check the permissions of the member
 * @param {GuildChannelCountType} type - Filter the channels to count
 * 
 * @example
 * Checks the amount of categories the server has. This example uses ChannelType type:
 * ```ts
 * console.log(await GuildChannelCount(guild, ChannelType.PrivateThread));
 * ```
 * @example
 * Checks the amount of channels of each type the server has. This example uses the "all" type:
 * ```ts
 * console.log(await GuildChannelCount(guild, "all"));
 * ```
 * @example
 * Checks the amount of threads the server has. This example uses the ChannelType type in an array:
 * ```ts
 * console.log(await GuildChannelCount(guild, [ ChannelType.PrivateThread, ChannelType.PublicThread ]));
 * ```
 */
export function GuildChannelCount(guild: Guild, type: GuildChannelCountType): number {
    const channels = guild.channels.cache;

    if (type === "all") return channels.size;
    if (!Array.isArray(type)) return channels.filter((x) => x.type === type).size;

    return type.reduce((count, channel_type) => count + channels.filter((x) => x.type === channel_type).size, 0);
};