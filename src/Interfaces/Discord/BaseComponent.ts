export interface BaseComponent {
	/**
	 * An identifier for the component
	 *
	 * @note
	 * - `customId` must be unquie per component and a maximum of 100 characters.
	 * - For link buttons only • We use `customId` for the `url` field.
	 * - For premium buttons only • We use `customId` for the `sku_id` field.
	 */
	customId: string;
}
