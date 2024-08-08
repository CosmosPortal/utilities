import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a channel exits in a guild
 * @param {Guild} guild - The guild class to check for the channel
 * @param {Snowflake} channelId - The ID of the channel to check
 * @returns {Promise<boolean>} True if the guild channel exist, false otherwise
 */
export async function GuildChannelExist(guild: Guild, channelId: Snowflake): Promise<boolean> {
	const channel = await guild.channels.fetch(channelId, { force: true }).catch(() => undefined);

	return !!channel;
}
