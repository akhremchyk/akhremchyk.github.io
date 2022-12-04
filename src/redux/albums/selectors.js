export const all = state => state.albums;

export const data = state => all(state).data;

export const status = state => all(state).status;

export const error = state => all(state).error;