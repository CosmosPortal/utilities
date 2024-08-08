import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIUserSelectComponent } from "discord.js";
import type { UserSelectMenu } from "../../../Interfaces";

export class UserSelectMenuBuilder {
	private readonly _data: APIUserSelectComponent[];

	constructor(structure: UserSelectMenu) {
		this._data = [
			{
				type: ComponentType.UserSelect,
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
	 * Builds the action row containing the User Select Menu component
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the User Select Menu component
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns the User Select Menu component
	 * @returns {APIUserSelectComponent[]} The User Select Menu component
	 */
	public get Component(): APIUserSelectComponent[] {
		return this._data;
	}
}
