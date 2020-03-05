import Fetch from './fetch.js';

// GET
async function getAllCardData() {
    const cards = await Fetch.get('/getCardData');
}

// POST
async function createCard() {
    const request = await Fetch.create('/card', {
        //add properties
    });
}

// PUT
async function updateCard(cardId) {
    const request = await Fetch.update('/card/' + cardId, {
        //add properties
    });
}

// DELETE
async function removeCard(cardId) {
    const request = await Fetch.remove('/cards/' + cardId);
}

export { getAllCardData, createCard, updateCard, removeCard };