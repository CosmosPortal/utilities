import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks the banned status of a user
 * @param {Guild} guild - The guild class to check the banned status of the user
 * @param {Snowflake} userId - The ID of the user to check
 * @returns {Promise<boolean>} True if the user is banned, false otherwise
 */
export async function MemberBannedStatus(guild: Guild, userId: Snowflake): Promise<boolean> {
	const data = await guild.bans.fetch(userId).catch(() => undefined);

	return !!data;
}
