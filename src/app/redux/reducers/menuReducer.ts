interface MenuAction {
  type: string;
  payload: any;
}

interface MenuState {
  isMenuVisible: boolean;
}

const initialState: MenuState = {
  isMenuVisible: true,
};

const menuReducer = (state = initialState, action: MenuAction) => {
  switch (action.type) {
    case 'TOGGLE_MENU_VISIBILITY':
      return { ...state, isMenuVisible: !state.isMenuVisible };

    default:
      return state;
  }
};

export default menuReducer;