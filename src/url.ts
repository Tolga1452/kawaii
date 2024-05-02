import { File, Path, Url } from './types.js';

export function url(logo: Path): Url {
    const [part1, part2] = logo.split('/');

    return `https://github.com/SAWARATSUKI/Logos/blob/main/${encodeURIComponent(part1)}/${encodeURIComponent(part2) as File}?raw=true`;
};
