import type { Guild, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a member has the permissions listed
 * @param {Guild} guild - The guild class to check the permissions of the member
 * @param {Snowflake} member_id - The ID of the member to check
 * @param {PermissionResolvable} permissions - An array of permissions
 * @returns {Promise<boolean | undefined>} True if member has the permission, false otherwise
 */
export async function MemberHasPermissions(guild: Guild, member_id: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
	const member = await guild.members.fetch(member_id).catch((error) => {
		return undefined;
	});
	if (!member) return undefined;

	const member_permissions = member.permissions;
	if (!member_permissions) return undefined;

	return member_permissions.has(permissions);
}
