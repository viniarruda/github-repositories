import { AUTH } from "./action-types";

const INITIAL_STATE = {
  logged: false,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH: {
      return {
        logged: true,
      };
    }
    default:
      return state;
  }
}
