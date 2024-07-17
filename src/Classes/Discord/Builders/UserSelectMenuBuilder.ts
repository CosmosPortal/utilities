import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIUserSelectComponent } from "discord.js";
import type { UserSelectMenu } from "../../../Interfaces";

export class UserSelectMenuBuilder {
    private readonly _data: APIUserSelectComponent[];

    /**
     * Creates the User Select Menu component
     * @param {UserSelectMenu} data - The structure of data needed to create the User Select Menu component
     * 
     * @example
     * ```ts
     * const SelectMenu = new UserSelectMenuBuilder({
     *     custom_id: "class_members",
     *     placeholder: "Choose a class member"
     * });
     * ```
     */
    constructor(data: UserSelectMenu) {
        this._data = [
            {
                type: ComponentType.UserSelect,
                custom_id: data.custom_id,
                default_values: data.default_values,
                disabled: data.disabled,
                max_values: data.max_values,
                min_values: data.min_values,
                placeholder: data.placeholder
            }
        ];
    };

    /**
     * Builds the action row containing the User Select Menu component
     * 
     * @example
     * ```ts
     * SelectMenu.BuildActionRow();
     * ```
     */
    public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
        const data: APIMessageComponent = {
            type: ComponentType.ActionRow,
            components: this._data
        };

        return data;
    };

    /**
     * Returns the User Select Menu component
     * 
     * @example
     * ```ts
     * SelectMenu.Component;
     * ```
     */
    public get Component(): APIUserSelectComponent[] {
        return this._data;
    };
};