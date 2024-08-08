import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import type { ChatInputCommand } from "../../../Interfaces";

/**
 * Creates a Chat Input application command
 */
export class ChatInputCommandBuilder {
	private readonly _data: RESTPostAPIChatInputApplicationCommandsJSONBody;

	public constructor(structure: ChatInputCommand) {
		this._data = {
			name: structure.name,
			name_localizations: structure.nameLocalizations,
			description: structure.description,
			description_localizations: structure.descriptionLocalizations,
			options: structure.options,
			default_member_permissions: structure.defaultMemberPermissions,
			dm_permission: structure.dmPermission,
			nsfw: structure.nsfw
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
