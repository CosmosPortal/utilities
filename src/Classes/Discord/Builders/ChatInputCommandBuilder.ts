import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import type { ChatInputCommand } from "../../../Interfaces";

/**
 * Creates a Chat Input application command
 */
export class ChatInputCommandBuilder {
	private readonly _data: RESTPostAPIChatInputApplicationCommandsJSONBody;

	public constructor(data: ChatInputCommand) {
		this._data = {
			name: data.name,
			name_localizations: data.name_localizations,
			description: data.description,
			description_localizations: data.description_localizations,
			options: data.options,
			default_member_permissions: data.default_member_permissions,
			dm_permission: data.dm_permission,
			nsfw: data.nsfw
		};
	}

	/**
	 * Returns the Chat Input application command JSON body
	 * @returns {RESTPostAPIChatInputApplicationCommandsJSONBody} The Chat Input application command JSON body
	 */
	public BuildCommand(): RESTPostAPIChatInputApplicationCommandsJSONBody {
		return this._data;
	}
}
