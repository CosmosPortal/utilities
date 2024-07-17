import type { SelectMenuDefaultValueType } from "discord.js";

export type MentionableDefaultValue = {
  id: string;
  type: SelectMenuDefaultValueType.Role | SelectMenuDefaultValueType.User;
};
