import { ButtonStyle, ComponentType, type APIActionRowComponent, type APIButtonComponent, type APIButtonComponentWithCustomId, type APIButtonComponentWithURL, type APIMessageActionRowComponent, type APIMessageComponent } from "discord.js";
import { ArrayShuffle } from "../../../Functions";
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
	 * @param {LinkButton} structure - The structure of data needed to create the Link Button component
	 * @returns {this} A link button component
	 */
	public CreateLinkButton(structure: LinkButton): this {
		const data: APIButtonComponentWithURL = {
			type: ComponentType.Button,
			style: ButtonStyle.Link,
			url: structure.customId,
			disabled: structure.disabled,
			emoji: structure.emoji,
			label: structure.label
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Creates a Regular Button component
	 * @param {RegularButton} structure - The structure of data needed to create the Regular Button component
	 * @returns {this} A regular button component
	 */
	public CreateRegularButton(structure: RegularButton): this {
		const data: APIButtonComponentWithCustomId = {
			type: ComponentType.Button,
			custom_id: structure.customId,
			style: structure.style,
			disabled: structure.disabled,
			emoji: structure.emoji,
			label: structure.label
		};

		this._data.push(data);

		return this;
	}

	/**
	 * Builds the action row containing the Link, Premium, and/or Regular Button components
	 * @param {boolean} shuffleButtons - Shuffles the buttons
	 * @returns {APIActionRowComponent<APIMessageActionRowComponent>} The action row containing the Link, Premium, and/or Regular Button components
	 */
	public BuildActionRow(shuffleButtons?: boolean): APIActionRowComponent<APIMessageActionRowComponent> {
		const data: APIMessageComponent = {
			type: ComponentType.ActionRow,
			components: !shuffleButtons ? this._data : ArrayShuffle(this._data)
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
