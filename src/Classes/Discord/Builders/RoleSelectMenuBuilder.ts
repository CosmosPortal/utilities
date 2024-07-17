import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIRoleSelectComponent } from "discord.js";
import type { RoleSelectMenu } from "../../../Interfaces";

export class RoleSelectMenuBuilder {
    private readonly _data: APIRoleSelectComponent[];

    /**
     * Creates the Role Select Menu component
     * @param {RoleSelectMenu} data - The structure of data needed to create the Role Select Menu component
     * 
     * @example
     * ```ts
     * const SelectMenu = new RoleSelectMenuBuilder({
     *     custom_id: "class_roles",
     *     placeholder: "Choose a class role"
     * });
     * ```
     */
    constructor(data: RoleSelectMenu) {
        this._data = [
            {
                type: ComponentType.RoleSelect,
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
     * Builds the action row containing the Role Select Menu component
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
     * Returns the Role Select Menu component
     * 
     * @example
     * ```ts
     * SelectMenu.Component;
     * ```
     */
    public get Component(): APIRoleSelectComponent[] {
        return this._data;
    };
};