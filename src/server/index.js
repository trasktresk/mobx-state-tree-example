import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "mobx-react"
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from 'Shared';
import store from 'Models';


const app = express();

app.use(express.static('./static'));

app.get('*', (req, res) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <StyleSheetManager sheet={sheet.instance}>
                    <App />
                </StyleSheetManager>
            </Provider>
        </StaticRouter>
    );
    const styleTags = sheet.getStyleTags();

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            ${styleTags}
        </head>
        <body>
        
        <div id="root">${markup}</div>
        
        <script src="/common.bundle.js"></script>
        </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server now working');
});