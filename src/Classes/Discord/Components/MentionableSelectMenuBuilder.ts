import { ComponentType, type APIActionRowComponent, type APIMentionableSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import type { MentionableSelectMenu } from "../../../Interfaces";

/**
 * Creates an action row containing Mentionable Select Menu component
 */
export class MentionableSelectMenuBuilder {
	private readonly _data: APIMentionableSelectComponent[];

	constructor(structure: MentionableSelectMenu) {
		this._data = [
			{
				type: ComponentType.MentionableSelect,
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
	 * Builds the action row containing the Mentionable Select Menu component
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the Mentionable Select Menu component
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns the Mentionable Select Menu component
	 * @returns {APIMentionableSelectComponent[]} The Mentionable Select Menu component
	 */
	public get Component(): APIMentionableSelectComponent[] {
		return this._data;
	}
}
