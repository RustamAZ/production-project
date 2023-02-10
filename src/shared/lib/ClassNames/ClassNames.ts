type Mods = Record<string, boolean | string>;

export function ClassNames(cls: string, mods?: Mods, additional?: string[]) {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional,
    ].join(' ');
}
