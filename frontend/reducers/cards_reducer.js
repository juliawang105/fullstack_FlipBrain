import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions'
import { RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions'

export const cardsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    
    switch (action.type) {
        case RECEIVE_DECK:
            for (let i = 0; i < action.payload.cards.length; i++) {
                newState[action.payload.cards[i].id] = action.payload.cards[i]
            };
            return newState;

        case RECEIVE_CARD:
            // debugger
            newState[action.card.id] = action.card 
            return newState;
    
        case REMOVE_CARD:
            delete newState[action.cardId];
            return newState;
        default:
            return state;
    };
};