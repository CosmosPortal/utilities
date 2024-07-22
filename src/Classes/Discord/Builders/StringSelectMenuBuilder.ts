import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIStringSelectComponent } from "discord.js";
import type { StringSelectMenu } from "../../../Interfaces";

export class StringSelectMenuBuilder {
	private readonly _data: APIStringSelectComponent[];

	constructor(data: StringSelectMenu) {
		this._data = [
			{
				type: ComponentType.StringSelect,
				custom_id: data.custom_id,
				options: data.select_options,
				disabled: data.disabled,
				max_values: data.max_values,
				min_values: data.min_values,
				placeholder: data.placeholder
			}
		];
	}

	/**
	 * Builds the action row containing the String Select Menu component
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the String Select Menu component
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns the String Select Menu component
	 * @returns {APIStringSelectComponent[]} The String Select Menu component
	 */
	public get Component(): APIStringSelectComponent[] {
		return this._data;
	}
}
