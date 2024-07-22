import type { Client } from "discord.js";
import type { ApplicationCommandData, ApplicationCommandFetchData } from "../../Types";

/**
 * Grabs certain data from a command
 * @param {Client<true>} client - Your client class to find the application command
 * @param {string} name - The name of the command to find
 * @param {ApplicationCommandData} fetch_data - The type of data to get
 * @returns {Promise<ApplicationCommandFetchData>} Returns {@link ApplicationCommandFetchData} output
 */
export async function ApplicationCommandInfo(client: Client<true>, name: string, fetch_data: ApplicationCommandData): Promise<ApplicationCommandFetchData> {
	const data = await client.application.commands.fetch().catch(() => {
		return undefined;
	});
	if (!data) return undefined;

	const command = data.find((x) => x.name === name);
	if (!command) return undefined;

	return command[fetch_data];
}
