import type { BaseSelectMenu } from "./BaseSelectMenu";
import type { MentionableDefaultValue } from "../../Types";

export interface MentionableSelectMenu extends BaseSelectMenu {
    /**
     * List of default values for auto-populated select menu
     * 
     * @note Must be in the range defined in `min_values` and `max_values`.
     */
    default_values?: MentionableDefaultValue[];
};