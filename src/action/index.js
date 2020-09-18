export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        Payload: nr
    };
};

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    };
};