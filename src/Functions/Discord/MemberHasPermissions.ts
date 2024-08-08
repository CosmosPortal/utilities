import type { Guild, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a member has the permissions listed
 * @param {Guild} guild - The guild class to check the permissions of the member
 * @param {Snowflake} memberId - The ID of the member to check
 * @param {PermissionResolvable} permissions - An array of permissions
 * @returns {Promise<boolean | undefined>} True if member has the permission, false otherwise
 */
export async function MemberHasPermissions(guild: Guild, memberId: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
	const member = await guild.members.fetch(memberId).catch(() => undefined);
	if (!member) return undefined;

	const memberPermissions = member.permissions;
	if (!memberPermissions) return undefined;

	return memberPermissions.has(permissions);
}
