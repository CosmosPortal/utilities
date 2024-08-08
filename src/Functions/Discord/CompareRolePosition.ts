import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Compares the two users roles and checks who has the highest role
 * @param {Guild} guild - The guild class to compare the two IDs
 * @param {Snowflake} userId - The ID of the user to compare
 * @param {Snowflake} targetId - The ID of the target user to compare
 * @param {boolean} customBoolean - If an error occurs, returns the boolean you entered
 * @returns {Promise<boolean>} True if the user is higher, false otherwise
 */
export async function CompareRolePosition(guild: Guild, userId: Snowflake, targetId: Snowflake, customBoolean: boolean = false): Promise<boolean> {
	const member = await guild.members.fetch(userId).catch(() => undefined);
	if (!member) return customBoolean;

	const target = await guild.members.fetch(targetId).catch(() => undefined);
	if (!target) return customBoolean;

	return guild.roles.cache.size - member.roles.highest.position < guild.roles.cache.size - target.roles.highest.position;
}
