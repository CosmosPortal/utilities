import {
  ComponentType,
  type APIActionRowComponent,
  type APIMessageActionRowComponent,
  type APIMessageComponent,
  type APIStringSelectComponent,
} from "discord.js";
import type { StringSelectMenu } from "../../../Interfaces";

export class StringSelectMenuBuilder {
  private readonly _data: APIStringSelectComponent[];

  /**
   * Creates the String Select Menu component
   * @param {StringSelectMenu} data - The structure of data needed to create the String Select Menu component
   *
   * @example
   * ```ts
   * const SelectMenu = new StringSelectMenuBuilder({
   *     custom_id: "class_desks",
   *     select_options: [
   *         {
   *             label: "Desk 1",
   *             value: "desk_1"
   *         },
   *         {
   *             label: "Desk 2",
   *             value: "desk_2"
   *         }
   *     ],
   *     placeholder: "Choose a desk"
   * });
   * ```
   */
  constructor(data: StringSelectMenu) {
    this._data = [
      {
        type: ComponentType.StringSelect,
        custom_id: data.custom_id,
        options: data.select_options,
        disabled: data.disabled,
        max_values: data.max_values,
        min_values: data.min_values,
        placeholder: data.placeholder,
      },
    ];
  }

  /**
   * Builds the action row containing the String Select Menu component
   *
   * @example
   * ```ts
   * SelectMenu.BuildActionRow();
   * ```
   */
  public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
    const data: APIMessageComponent = {
      type: ComponentType.ActionRow,
      components: this._data,
    };

    return data;
  }

  /**
   * Returns the String Select Menu component
   *
   * @example
   * ```ts
   * SelectMenu.Component;
   * ```
   */
  public get Component(): APIStringSelectComponent[] {
    return this._data;
  }
}
