import { logoRepo } from './config.js';
import { File, Path, Url } from './types.js';

export function url(logo: Path): Url {
    const [part1, part2] = logo.split('/');

    return `${logoRepo}/blob/main/${encodeURIComponent(part1)}/${encodeURIComponent(part2) as File}?raw=true`;
};
