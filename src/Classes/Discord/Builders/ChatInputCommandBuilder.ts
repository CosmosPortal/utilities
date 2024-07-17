import type { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import type { ChatInputCommand } from "../../../Interfaces";

export class ChatInputCommandBuilder {
  private readonly _data: RESTPostAPIChatInputApplicationCommandsJSONBody;

  /**
   * Creaets the Chat Input application command
   * @param {ChatInputCommand} data - The structure of data needed to create the Chat Input application command
   *
   * @example
   * ```ts
   * const ChatInputCommand = new ChatInputCommandBuilder({
   *     name: "say",
   *     description: "Sends a message in the current channel",
   *     options: [
   *         {
   *             name: "message",
   *             description: "The text to say",
   *             type: ApplicationCommandOptionType.String,
   *             max_length: 2000,
   *             required: true
   *         }
   *     ]
   * });
   * ```
   */
  public constructor(data: ChatInputCommand) {
    this._data = {
      name: data.name,
      name_localizations: data.name_localizations,
      description: data.description,
      description_localizations: data.description_localizations,
      options: data.options,
      default_member_permissions: data.default_member_permissions,
      dm_permission: data.dm_permission,
      nsfw: data.nsfw,
    };
  }

  /**
   * Returns the Chat Input application command JSON body
   *
   * @example
   * ```ts
   * ChatInputCommand.BuildCommand();
   * ```
   */
  public BuildCommand(): RESTPostAPIChatInputApplicationCommandsJSONBody {
    return this._data;
  }
}
