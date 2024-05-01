import express from 'express';

import { url } from './url.js';

const app = express();

app.get('/:logo', async (req, res) => {
    const { logo } = req.params;
    const [name] = logo.split('.');

    switch (name) {
        case '403': {
            res.redirect(url('403Forbidden/Forbidden.png'));

            break;
        };
        case '404': {
            res.redirect(url('404Notfound/NotFound.png'));

            break;
        };
        case '418': {
            res.redirect(url("418I'mateapot/418I'mateapot.png"));

            break;
        };
        case '503': {
            res.redirect(url('503ServiceUnavailable.png/ServiceUnavailable.png'));

            break;
        };
        case 'angular': {
            res.redirect(url('Angular/Angular.png'));

            break;
        };
        case 'angular_old': {
            res.redirect(url('Angular/Angular_Old.png'));

            break;
        };
        case 'arch_linux': {
            res.redirect(url('ArchLinux/ArchLinux.png'));

            break;
        };
        case 'bluesky': {
            res.redirect(url('Bluesky/Bluesky.png'));

            break;
        };
        case 'cs_purple': {
            res.redirect(url('C#/C# Purple.png'));

            break;
        };
        case 'cs': {
            res.redirect(url('C#/C#.png'));

            break;
        };
        case 'cpp': {
            res.redirect(url('C++/C++.png'));

            break;
        };
        case 'c_all': {
            res.redirect(url('C,C#,C++/All.png'));

            break;
        };
        case 'c': {
            res.redirect(url('C/C.png'));

            break;
        };
        default: {
            res.status(404).send('Not found');

            break;
        };
    };
});

app.listen(30627, () => console.log('Server is running on http://localhost:30627'));
