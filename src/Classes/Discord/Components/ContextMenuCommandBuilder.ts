import type { RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord.js";
import type { ContextMenuCommand } from "../../../Interfaces";

/**
 * Creates a Context Menu application command
 */
export class ContextMenuCommandBuilder {
	private readonly _data: RESTPostAPIContextMenuApplicationCommandsJSONBody;

	public constructor(structure: ContextMenuCommand) {
		this._data = {
			type: structure.type,
			name: structure.name,
			name_localizations: structure.nameLocalizations,
			default_member_permissions: structure.defaultMemberPermissions,
			dm_permission: structure.dmPermission,
			nsfw: structure.nsfw
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
