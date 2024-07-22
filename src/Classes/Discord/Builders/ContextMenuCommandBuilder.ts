import type { RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord.js";
import type { ContextMenuCommand } from "../../../Interfaces";

/**
 * Creates a Context Menu application command
 */
export class ContextMenuCommandBuilder {
	private readonly _data: RESTPostAPIContextMenuApplicationCommandsJSONBody;

	public constructor(data: ContextMenuCommand) {
		this._data = {
			type: data.type,
			name: data.name,
			name_localizations: data.name_localizations,
			default_member_permissions: data.default_member_permissions,
			dm_permission: data.dm_permission,
			nsfw: data.nsfw
		};
	}

	/**
	 * Returns the Context Menu application command JSON body
	 * @returns {RESTPostAPIContextMenuApplicationCommandsJSONBody} Context Menu application command JSON body
	 */
	public BuildCommand(): RESTPostAPIContextMenuApplicationCommandsJSONBody {
		return this._data;
	}
}
