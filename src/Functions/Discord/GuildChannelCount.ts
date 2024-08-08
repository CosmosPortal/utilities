import type { Guild } from "discord.js";
import type { GuildChannelCountType } from "../../Types";

/**
 * Returns the total amount of channels from a guild
 * @param {Guild} guild - The guild class to check the permissions of the member
 * @param {GuildChannelCountType} type - Filter the channels to count
 * @returns {number} The amount of channel a guild has
 */
export function GuildChannelCount(guild: Guild, type: GuildChannelCountType): number {
	const channels = guild.channels.cache;

	if (type === "all") return channels.size;
	if (!Array.isArray(type)) return channels.filter((x) => x.type === type).size;

	return type.reduce((count, channelType) => count + channels.filter((x) => x.type === channelType).size, 0);
}
