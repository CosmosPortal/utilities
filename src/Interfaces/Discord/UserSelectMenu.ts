import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { UserDefaultValue } from "../../Types";

export interface UserSelectMenu extends BaseSelectMenu {
	/**
	 * List of default values for auto-populated select menu
	 *
	 * @note Must be in the range defined in `minValues` and `maxValues`.
	 */
	defaultValues?: UserDefaultValue[];
}
