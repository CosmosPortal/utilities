import { ComponentType, type APIActionRowComponent, type APIModalInteractionResponseCallbackData, type APITextInputComponent } from "discord.js";
import { ArrayShuffle } from "../../../Functions";
import type { Modal, TextInput } from "../../../Interfaces";

export class ModalBuilder {
	private readonly _title: string;
	private readonly _custom_id: string;
	private readonly _data: APIActionRowComponent<APITextInputComponent>[];

	constructor(structure: Modal) {
		this._title = structure.title;
		this._custom_id = structure.customId;
		this._data = [];
	}

	/**
	 * Creates the Text Input component for the Modal
	 * @param {TextInput} structure - The structure of data needed to create the Text Input component
	 * @returns {this} A Text Input component
	 */
	public CreateTextInput(structure: TextInput): this {
		const data: APIActionRowComponent<APITextInputComponent> = {
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.TextInput,
					custom_id: structure.customId,
					label: structure.label,
					style: structure.style,
					max_length: structure.maxLength,
					min_length: structure.minLength,
					placeholder: structure.placeholder,
					required: structure.required,
					value: structure.value
				}
			]
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Builds the Modal response containing the Text Input components
	 * @param {boolean} shuffleTextInputs - Shuffles the text inputs
	 * @returns {APIModalInteractionResponseCallbackData} The Modal response containing the Text Input components
	 */
	public BuildResponse(shuffleTextInputs?: boolean): APIModalInteractionResponseCallbackData {
		const data: APIModalInteractionResponseCallbackData = {
			title: this._title,
			custom_id: this._custom_id,
			components: !shuffleTextInputs ? this._data : ArrayShuffle(this._data)
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
