import { ComponentType, type APIActionRowComponent, type APIModalInteractionResponseCallbackData, type APITextInputComponent } from "discord.js";
import type { Modal, TextInput } from "../../../Interfaces";

export class ModalBuilder {
	private readonly _title: string;
	private readonly _custom_id: string;
	private readonly _data: APIActionRowComponent<APITextInputComponent>[];

	constructor(data: Modal) {
		this._title = data.title;
		this._custom_id = data.custom_id;
		this._data = [];
	}

	/**
	 * Creates the Text Input component for the Modal
	 * @param {TextInput} component_data - The structure of data needed to create the Text Input component
	 * @returns {this} A Text Input component
	 */
	public CreateTextInput(component_data: TextInput): this {
		const data: APIActionRowComponent<APITextInputComponent> = {
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.TextInput,
					custom_id: component_data.custom_id,
					label: component_data.label,
					style: component_data.style,
					max_length: component_data.max_length,
					min_length: component_data.min_length,
					placeholder: component_data.placeholder,
					required: component_data.required,
					value: component_data.value
				}
			]
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Builds the Modal response containing the Text Input components
	 * @returns {APIModalInteractionResponseCallbackData} The Modal response containing the Text Input components
	 */
	public BuildResponse(): APIModalInteractionResponseCallbackData {
		const data: APIModalInteractionResponseCallbackData = {
			title: this._title,
			custom_id: this._custom_id,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns all the Text Input components
	 * @returns {APIActionRowComponent<APITextInputComponent>[]} The Text Input components
	 */
	public get Components(): APIActionRowComponent<APITextInputComponent>[] {
		return this._data;
	}
}
