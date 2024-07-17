import type { Guild } from "discord.js";
import type { Snowflake } from "../../Types";

/**
 * Checks the banned status of a user
 * @param {Guild} guild - The guild class to check the banned status of the user
 * @param {Snowflake} user_id - The ID of the user to check
 *
 * @example
 * ```ts
 * if (!await MemberBannedStatus(guild, user.id)) return;
 * ```
 */
export async function MemberBannedStatus(
  guild: Guild,
  user_id: Snowflake,
): Promise<boolean> {
  const ban_data = await guild.bans.fetch(user_id).catch((error) => {
    return undefined;
  });

  return !!ban_data;
}
