import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIRoleSelectComponent } from "discord.js";
import type { RoleSelectMenu } from "../../../Interfaces";

export class RoleSelectMenuBuilder {
	private readonly _data: APIRoleSelectComponent[];

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
	}

	/**
	 * Builds the action row containing the Role Select Menu component
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the Role Select Menu component
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns the Role Select Menu component
	 * @returns {APIRoleSelectComponent[]} The Role Select Menu component
	 */
	public get Component(): APIRoleSelectComponent[] {
		return this._data;
	}
}
