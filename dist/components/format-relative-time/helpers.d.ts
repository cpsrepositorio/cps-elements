export declare const availableUnits: {
    max: number;
    value: number;
    unit: Intl.RelativeTimeFormatUnit;
}[];
export declare function getTimeUntilNextUnit(unit: 'second' | 'minute' | 'hour' | 'day'): number;
