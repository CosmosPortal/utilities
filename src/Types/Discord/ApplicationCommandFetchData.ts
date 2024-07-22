import type { ApplicationCommandType, PermissionsBitField } from "discord.js";

export type ApplicationCommandFetchData = ApplicationCommandType | boolean | null | Readonly<PermissionsBitField> | string | undefined;
