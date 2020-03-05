import * as api from "./api/index";
import * as components from "./components/index";

'use strict';

const App = { 'components': components, 'api': api };


let cards = document.createElement('m-card', App.components.default.Card)
document.body.appendChild(cards);
api.createCard(url, params)
    .then(data, () => {
        return data
    })