import { ComponentType, type APIActionRowComponent, type APIChannelSelectComponent, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import type { ChannelSelectMenu } from "../../../Interfaces";

/**
 * Creates an action row containing Channel Select Menu component
 */
export class ChannelSelectMenuBuilder {
	private readonly _data: APIChannelSelectComponent[];

	constructor(structure: ChannelSelectMenu) {
		this._data = [
			{
				type: ComponentType.ChannelSelect,
				custom_id: structure.customId,
				channel_types: structure.channelTypes,
				default_values: structure.defaultValues,
				disabled: structure.disabled,
				max_values: structure.maxValues,
				min_values: structure.minValues,
				placeholder: structure.placeholder
			}
		];
	}

	/**
	 * Builds the action row containing the Channel Select Menu component
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the Channel Select Menu component
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns the Channel Select Menu component
	 * @returns {APIChannelSelectComponent[]} The Channel Select Menu component
	 */
	public get Component(): APIChannelSelectComponent[] {
		return this._data;
	}
}
