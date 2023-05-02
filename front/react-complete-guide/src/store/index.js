import { createStore } from 'redux';

const initialState = { counter: 0, showCompareButton: false };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCompareButton: state.showCompareButton
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCompareButton: state.showCompareButton
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCompareButton: !state.showCompareButton
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;