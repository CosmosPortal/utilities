import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Compares the two users roles and checks who has the highest role
 * @param {Guild} guild - The guild class to compare the two IDs
 * @param {Snowflake} user_id - The ID of the user to compare
 * @param {Snowflake} user_id - The ID of the target user to compare
 * @param {boolean} custom_boolean - If an error occurs, returns the boolean you entered
 * @returns {Promise<boolean>} True if the user is higher, false otherwise
 */
export async function CompareRolePosition(guild: Guild, user_id: Snowflake, target_id: Snowflake, custom_boolean: boolean = false): Promise<boolean> {
	const member = await guild.members.fetch(user_id).catch(() => {
		return undefined;
	});
	if (!member) return custom_boolean;

	const target = await guild.members.fetch(target_id).catch(() => {
		return undefined;
	});
	if (!target) return custom_boolean;

	return guild.roles.cache.size - member.roles.highest.position < guild.roles.cache.size - target.roles.highest.position;
}
