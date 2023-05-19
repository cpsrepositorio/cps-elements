/* cSpell:ignore yxxx */
/* eslint-disable no-bitwise */

/**
 * Generates a universally unique identifier (UUID v4) in case no strict identifier were provided.
 * @param id Strict identifier instead of generating an UUID.
 */
export function uuid(id?: string) {
  let timestamp = new Date().getTime();

  return (
    id ||
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (timestamp + Math.random() * 16) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    })
  );
}
