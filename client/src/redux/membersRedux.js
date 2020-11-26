/* selectors */
export const getConductor = ({ members }) => members.data.conductor;
export const getAllSopranos = ({ members }) => members.data.soprano;
export const getAllAltos = ({ members }) => members.data.alto;
export const getAllTenors = ({ members }) => members.data.tenor;
export const getAllBass = ({ members }) => members.data.bass;

/* action name creator */
// const reducerName = 'members';
// const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
// const FETCH_START = createActionName('FETCH_START');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    // case FETCH_START: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: true,
    //       error: false,
    //     },
    //   };
    // }
    // case FETCH_SUCCESS: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: false,
    //     },
    //     data: action.payload,
    //   };
    // }
    // case FETCH_ERROR: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: action.payload,
    //     },
    //   };
    // }
    default:
      return statePart;
  }
};
