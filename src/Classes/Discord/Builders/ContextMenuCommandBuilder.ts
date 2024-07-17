import type { RESTPostAPIContextMenuApplicationCommandsJSONBody } from "discord.js";
import type { ContextMenuCommand } from "../../../Interfaces";

export class ContextMenuCommandBuilder {
  private readonly _data: RESTPostAPIContextMenuApplicationCommandsJSONBody;

  /**
   * Creaets the Context Menu application command
   * @param {ContextMenuCommand} data - The structure of data needed to create the Context Menu application command
   *
   * @example
   * ```ts
   * const ContextMenuCommand = new ContextMenuCommandBuilder({
   *     type: ApplicationCommandType.Message,
   *     name: "Report Message"
   * });
   * ```
   */
  public constructor(data: ContextMenuCommand) {
    this._data = {
      type: data.type,
      name: data.name,
      name_localizations: data.name_localizations,
      default_member_permissions: data.default_member_permissions,
      dm_permission: data.dm_permission,
      nsfw: data.nsfw,
    };
  }

  /**
   * Returns the Context Menu application command JSON body
   *
   * @example
   * ```ts
   * ContextMenuCommand.BuildCommand();
   * ```
   */
  public BuildCommand(): RESTPostAPIContextMenuApplicationCommandsJSONBody {
    return this._data;
  }
}
