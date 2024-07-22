import type { Client } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a channel exists
 * @param {Client<true>} client - Your client class to check for the channel
 * @param {Snowflake} channel_id - The ID of the channel to check
 * @returns {Promise<boolean>} True if the channel exist, false otherwise
 */
export async function ChannelExist(client: Client<true>, channel_id: Snowflake): Promise<boolean> {
	const channel = await client.channels.fetch(channel_id, { force: true }).catch(() => {
		return undefined;
	});

	return !!channel;
}
