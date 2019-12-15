import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchSave } from '../../actions/save_actions';
import { fetchDecks, deleteDeck  } from '../../actions/deck_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearAllCards } from '../../actions/card_actions' 

const mSTP = state => ({
    session: state.session.id,
    saves: Object.values(state.entities.saves),
    decks: state.entities.decks
});

const mDTP = dispatch => ({
    fetchSave: saveId => dispatch(fetchSave(saveId)),
    fetchDecks: () => dispatch(fetchDecks()),
    // closeModal: () => dispatch(closeModal()),
    // openModal: (modal, data) => dispatch(openModal(modal, data)),
    // deleteDeck: deckId => dispatch(deleteDeck(deckId)),
    // clearAllCards: () => dispatch(clearAllCards())
})

export default connect(mSTP, mDTP)(UserShow)