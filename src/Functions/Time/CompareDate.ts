/**
 * Compares two dates and returns how old is the time
 * @param {number} old_date - The old date to compare
 * @param {number} new_date - The new date to compare
 * 
 * @example
 * ```ts
 * if (CompareDate(message.createdTimestamp, Date.now()) > 5) return;
 * ```
 */
export function CompareDate(old_date: number, new_date: number): number {
    const old = new Date(old_date);
    const current = new Date(new_date);

    return current.getTime() - old.getTime() / (1000 * 3600 * 24);
};