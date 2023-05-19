export function uuid(id) {
    let timestamp = new Date().getTime();
    return (id ||
        'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (timestamp + Math.random() * 16) % 16 | 0;
            timestamp = Math.floor(timestamp / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        }));
}
