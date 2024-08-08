import type { Client } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a channel exists
 * @param {Client<true>} client - Your client class to check for the channel
 * @param {Snowflake} channelId - The ID of the channel to check
 * @returns {Promise<boolean>} True if the channel exist, false otherwise
 */
export async function ChannelExist(client: Client<true>, channelId: Snowflake): Promise<boolean> {
	const channel = await client.channels.fetch(channelId, { force: true }).catch(() => undefined);

	return !!channel;
}
