import type { Client } from "discord.js";

/**
 * Checks if a webhook exists
 * @param {Client<true>} client - Your client class to check for the webhook
 * @param {string} webhookId - The ID of the webhook to check
 * @param {string} webhookToken - The token of the webhook to check
 * @returns {Promise<undefined>} True if webhook exist, false otherwise
 */
export async function WebhookExist(client: Client<true>, webhookId: string, webhookToken: string): Promise<boolean> {
	const webhook = await client.fetchWebhook(webhookId, webhookToken).catch(() => undefined);

	return !!webhook;
}
