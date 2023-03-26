export type Mods = Record<string, boolean | string | undefined>;

export function ClassNames(cls: string, mods: Mods = {}, additional: string[] = []) {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
