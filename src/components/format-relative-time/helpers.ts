/**
 * Configuration for the available time units.
 * Each unit has a maximum time difference it can represent, a value in milliseconds, and the unit name.
 */
export const availableUnits: {
  max: number;
  value: number;
  unit: Intl.RelativeTimeFormatUnit;
}[] = [
  { max: 2760000, value: 60000, unit: 'minute' }, // max 46 minutes
  { max: 72000000, value: 3600000, unit: 'hour' }, // max 20 hours
  { max: 518400000, value: 86400000, unit: 'day' }, // max 6 days
  { max: 2419200000, value: 604800000, unit: 'week' }, // max 28 days
  { max: 28512000000, value: 2592000000, unit: 'month' }, // max 11 months
  { max: Infinity, value: 31536000000, unit: 'year' }
];

/**
 * Calculates the time remaining until the next occurrence of a specified time unit.
 *
 * @param unit - The time unit to calculate until ('second', 'minute', 'hour', or 'day').
 * @returns The number of milliseconds until the next occurrence of the specified unit.
 */
export function getTimeUntilNextUnit(unit: 'second' | 'minute' | 'hour' | 'day') {
  const units = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };
  const value = units[unit];
  return value - (Date.now() % value);
}
