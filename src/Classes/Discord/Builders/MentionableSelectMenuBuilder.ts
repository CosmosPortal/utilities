import { ComponentType, type APIActionRowComponent, type APIMentionableSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import type { MentionableSelectMenu } from "../../../Interfaces";

export class MentionableSelectMenuBuilder {
    private readonly _data: APIMentionableSelectComponent[];

    /**
     * Creates the Mentionable Select Menu component
     * @param {MentionableSelectMenu} data - The structure of data needed to create the Mentionable Select Menu component
     * 
     * @example
     * ```ts
     * const SelectMenu = new MentionableSelectMenuBuilder({
     *     custom_id: "class_roles_and_members",
     *     placeholder: "Choose a class role or member"
     * });
     * ```
     */
    constructor(data: MentionableSelectMenu) {
        this._data = [
            {
                type: ComponentType.MentionableSelect,
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
     * Builds the action row containing the Mentionable Select Menu component
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
     * Returns the Mentionable Select Menu component
     * 
     * @example
     * ```ts
     * SelectMenu.Component;
     * ```
     */
    public get Component(): APIMentionableSelectComponent[] {
        return this._data;
    };
};