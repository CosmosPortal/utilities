import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIRoleSelectComponent } from "discord.js";
import type { RoleSelectMenu } from "../../../Interfaces";

export class RoleSelectMenuBuilder {
	private readonly _data: APIRoleSelectComponent[];

	constructor(structure: RoleSelectMenu) {
		this._data = [
			{
				type: ComponentType.RoleSelect,
				custom_id: structure.customId,
				default_values: structure.defaultValues,
				disabled: structure.disabled,
				max_values: structure.maxValues,
				min_values: structure.minValues,
				placeholder: structure.placeholder
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
