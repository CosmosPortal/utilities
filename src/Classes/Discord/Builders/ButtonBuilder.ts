import { ButtonStyle, ComponentType, type APIActionRowComponent, type APIButtonComponent, type APIButtonComponentWithCustomId, type APIButtonComponentWithURL, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import type { LinkButton, RegularButton } from "../../../Interfaces";

/**
 * Creates an action row containing Link, Premium, and/or Regular Button components
 */
export class ButtonBuilder {
	private readonly _data: APIButtonComponent[];

	constructor() {
		this._data = [];
	}

	/**
	 * Creates a Link Button component
	 * @param {LinkButton} component_data - The structure of data needed to create the Link Button component
	 * @returns {this} A link button component
	 */
	public CreateLinkButton(component_data: LinkButton): this {
		const data: APIButtonComponentWithURL = {
			type: ComponentType.Button,
			style: ButtonStyle.Link,
			url: component_data.custom_id,
			disabled: component_data.disabled,
			emoji: component_data.emoji,
			label: component_data.label
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Creates a Regular Button component
	 * @param {RegularButton} component_data - The structure of data needed to create the Regular Button component
	 * @returns {this} A regular button component
	 */
	public CreateRegularButton(component_data: RegularButton): this {
		const data: APIButtonComponentWithCustomId = {
			type: ComponentType.Button,
			custom_id: component_data.custom_id,
			style: component_data.style,
			disabled: component_data.disabled,
			emoji: component_data.emoji,
			label: component_data.label
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Builds the action row containing the Link, Premium, and/or Regular Button components
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the Link, Premium, and/or Regular Button components
	 */
	public BuildActionRow(): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: this._data
		};

		return data;
	}

	/**
	 * Returns all the Button components
	 * @returns {APIButtonComponent[]} The Button components
	 */
	public get Components(): APIButtonComponent[] {
		return this._data;
	}
}
