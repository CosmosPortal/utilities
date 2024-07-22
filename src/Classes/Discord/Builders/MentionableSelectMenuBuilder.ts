import { ComponentType, type APIActionRowComponent, type APIMentionableSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import type { MentionableSelectMenu } from "../../../Interfaces";

/**
 * Creates an action row containing Mentionable Select Menu component
 */
export class MentionableSelectMenuBuilder {
	private readonly _data: APIMentionableSelectComponent[];

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
