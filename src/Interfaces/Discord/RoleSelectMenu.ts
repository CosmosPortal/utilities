import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { RoleDefaultValue } from "../../Types";

export interface RoleSelectMenu extends BaseSelectMenu {
	/**
	 * List of default values for auto-populated select menu
	 *
	 * @note Must be in the range defined in `minValues` and `maxValues`.
	 */
	defaultValues?: RoleDefaultValue[];
}
