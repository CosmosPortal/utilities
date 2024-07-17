import type { APISelectMenuOption } from "discord.js";
import type { BaseSelectMenu } from "./BaseSelectMenu";

export interface StringSelectMenu extends BaseSelectMenu {
    /**
     * Specified choices in a select menu, max 25 options
     * 
     * @note Only required and available for string select menu.
     */
    select_options: APISelectMenuOption[];
};