import express from 'express';

import { logoRepo } from './config.js';
import { Path } from './types.js';
import { url } from './url.js';

const app = express();

app.get('/', (req, res) => {
    const { docs } = req.query;

    if (typeof docs === 'string') res.redirect('https://github.com/Tolga1452/kawaii?tab=readme-ov-file#about');
    else res.redirect(logoRepo);
});

app.get('/:logo', async (req, res) => {
    const logo = req.params.logo.toLowerCase();
    const lang = typeof req.query.lang === 'string' ? req.query.lang.toLowerCase() : undefined;
    const [name] = logo.split('.');

    switch (name) {
        case 'at': {
            res.redirect(url('ATProtocol/ATProtocol.png'));

            break;
        };
        case 'bsky': {
            res.redirect(url('Bluesky/BlueSky.png'));

            break;
        };
        case 'hs': {
            res.redirect(url('Haskell/haskell.png'));

            break;
        };
        case 'hono': {
            res.redirect(url('Hono/Hono.png'));

            break;
        };
        case 'react': {
            res.redirect(url('React/React.png'));

            break;
        };
        case 'replit': {
            res.redirect(url('Replit/Replit.png'));

            break;
        };
        case 'designer': {
            let path = '';

            switch (lang) {
                case 'jp': {
                    path = 'IamSeries/IamDesigner!.png';

                    break;
                };
                default: {
                    path = 'IamSeries/IamDesigner!English.png';

                    break;
                };
            };

            res.redirect(url(path as Path));

            break;
        };
        case 'programmer': {
            let path = '';

            switch (lang) {
                case 'jp': {
                    path = 'IamSeries/IamProgrammer!.png';

                    break;
                };
                default: {
                    path = 'IamSeries/IamProgrammerEnglish.png';

                    break;
                };
            };

            res.redirect(url(path as Path));

            break;
        };
        case 'intellij': {
            res.redirect(url('IntelliJ IDEA/IntelliJ IDEA.png'));

            break;
        };
        case 'kt': {
            res.redirect(url('Kotlin/Kotlin.png'));

            break;
        };
        case 'laravel': {
            res.redirect(url('Laravel/LaravelTransparent.png'));

            break;
        };
        case 'misskeyio': {
            res.redirect(url('MIsskey.io/Misskey.io.png'));

            break;
        };
        case 'misskey': {
            res.redirect(url('Misskey/Misskey.png'));

            break;
        };
        case 'node': {
            res.redirect(url('Node.js/Node.js.png'));

            break;
        };
        case '403': {
            res.redirect(url('ResponseCode/403 Forbidden.png'));

            break;
        };
        case '404': {
            res.redirect(url('ResponseCode/404 NotFound.png'));

            break;
        };
        case '418': {
            res.redirect(url("ResponseCode/418 I'm a teapot.png"));

            break;
        };
        case '500': {
            res.redirect(url('ResponseCode/500 InternalServerError.png'));

            break;
        };
        case '503': {
            res.redirect(url('ResponseCode/503 ServiceUnavailable.png'));

            break;
        };
        case 'ts': {
            res.redirect(url('TypeScript/TypeScript.png'));

            break;
        };
        case 'tailwind': {
            res.redirect(url('tailwind css/Tailwindcss.png'));

            break;
        };
        case 'moviemaker': {
            res.redirect(url('ゆっくりMovieMaker4/ゆっくりMovieMaker4.png'));

            break;
        };
        default: {
            res.status(404).send('Not found');

            break;
        };
    };
});

app.listen(30627, () => console.log('Server is running on http://localhost:30627'));
