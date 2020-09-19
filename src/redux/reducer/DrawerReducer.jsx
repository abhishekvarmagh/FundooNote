import { OPEN_DRAWER, CLOSE_DRAWER} from '../action/DrawerAction';

const initialState = {
  visible: false
};

function DrawerReducer(state = initialState, action) {
  switch(action.type) {
    case OPEN_DRAWER:
      return {
        ...state, visible: true
      };
      case CLOSE_DRAWER:
        return {
            ...state, visible: false
        };
    default:
      return state;
  };
}

export default DrawerReducer;