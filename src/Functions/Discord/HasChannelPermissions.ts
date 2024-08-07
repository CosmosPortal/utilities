import type { Client, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a member or role has the permissions listed in the entered channel
 * @param {Client<true>} client - Your client class to check the permissions of the snowflake
 * @param {Snowflake} channelId - The ID of the channel to check the permission from
 * @param {Snowflake} memberOrRoleId - The ID of the member or role to check
 * @param {PermissionResolvable} permissions - An array of permissions
 * @returns {Promise<boolean | undefined>} True if member/role has the permission, false otherwise
 */
export async function HasChannelPermissions(client: Client<true>, channelId: Snowflake, memberOrRoleId: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
	const channel = await client.channels.fetch(channelId, { force: true }).catch(() => undefined);

	if (!channel) return undefined;
	if (channel.isDMBased()) return undefined;

	const channelPerms = channel.permissionsFor(memberOrRoleId);
	if (!channelPerms) return undefined;

	return channelPerms.has(permissions);
}
