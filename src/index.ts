import express from 'express';

const app = express();

app.get('/:logo', async (req, res) => {
    const { logo } = req.params;
    const [name] = logo.split('.');

    switch (name) {
        case '403': {
            res.redirect('403Forbidden/Forbidden.png');

            break;
        };
        case '404': {
            res.redirect('404Notfound/NotFound.png');

            break;
        };
        case '418': {
            res.redirect("418I'mateapot/418I'mateapot.png");

            break;
        };
        case '503': {
            res.redirect('503ServiceUnavailable.png/ServiceUnavailable.png');

            break;
        };
        case 'angular': {
            res.redirect('Angular/Angular.png');

            break;
        };
        case 'angular_old': {
            res.redirect('Angular/Angular_Old.png');

            break;
        };
        case 'arch_linux': {
            res.redirect('ArchLinux/ArchLinux.png');

            break;
        };
        case 'bluesky': {
            res.redirect('Bluesky/Bluesky.png');

            break;
        };
        case 'cs_purple': {
            res.redirect('C#/C# Purple.png');

            break;
        };
        case 'cs': {
            res.redirect('C#/C#.png');

            break;
        };
        case 'cpp': {
            res.redirect('C++/C++.png');

            break;
        };
        case 'c_all': {
            res.redirect('C,C#,C++/All.png');

            break;
        };
        case 'c': {
            res.redirect('C/C.png');

            break;
        };
        default: {
            res.status(404).send('Not found');

            break;
        };
    };
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
