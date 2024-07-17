import type { Client, PermissionResolvable } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks if a member or role has the permissions listed in the entered channel
 * @param {Client<true>} client - Your client class to check the permissions of the snowflake
 * @param {Snowflake} channel_id - The ID of the channel to check the permission from
 * @param {Snowflake} member_or_role_id - The ID of the member or role to check
 * @param {PermissionResolvable} permissions - An array of permissions
 * 
 * @note If you want to check the `@everyone` role, use the guild ID in `member_or_role_id`.
 * 
 * @example
 * ```ts
 * if (!await HasChannelPermissions(client, channel.id, role.id, [ PermissionFlagsBits.ViewChannel ])) return;
 * ```
 */
export async function HasChannelPermissions(client: Client<true>, channel_id: Snowflake, member_or_role_id: Snowflake, permissions: PermissionResolvable[]): Promise<boolean | undefined> {
    const channel = await client.channels.fetch(channel_id).catch((error) => { return undefined });
    if (!channel) return undefined;
    if (channel.isDMBased()) return undefined;

    const channelPerms = channel.permissionsFor(member_or_role_id);
    if (!channelPerms) return undefined;

    return channelPerms.has(permissions);
};