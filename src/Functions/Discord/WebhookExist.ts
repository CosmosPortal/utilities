import type { Client } from "discord.js";

/**
 * Checks if a webhook exists
 * @param {Client<true>} client - Your client class to check for the webhook
 * @param {string} webhook_id - The ID of the webhook to check
 * @param {string} webhook_token - The token of the webhook to check
 * 
 * @example
 * ```ts
 * if (!await WebhookExist(client, webhook.id, webhook.token)) return;
 * ```
 */
export async function WebhookExist(client: Client<true>, webhook_id: string, webhook_token: string): Promise<boolean> {
    const webhook = await client.fetchWebhook(webhook_id, webhook_token).catch((error) => { return undefined });

    return !!webhook;
};