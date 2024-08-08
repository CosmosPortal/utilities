import { ComponentType, type APIActionRowComponent, type APIMessageActionRowComponent, type APIMessageComponent, type APIStringSelectComponent } from "discord.js";
import { ArrayShuffle } from "../../../Functions";
import type { StringSelectMenu } from "../../../Interfaces";

export class StringSelectMenuBuilder {
	private readonly _data: APIStringSelectComponent[];

	constructor(structure: StringSelectMenu) {
		this._data = [
			{
				type: ComponentType.StringSelect,
				custom_id: structure.customId,
				options: structure.selectOptions,
				disabled: structure.disabled,
				max_values: structure.maxValues,
				min_values: structure.minValues,
				placeholder: structure.placeholder
			}
		];
	}

	/**
	 * Builds the action row containing the String Select Menu component
	 * @param {boolean} shuffleOptions - Shuffles the options
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the String Select Menu component
	 */
	public BuildActionRow(shuffleOptions?: boolean): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: !shuffleOptions ? this._data : ArrayShuffle(this._data)
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
