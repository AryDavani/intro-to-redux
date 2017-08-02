export default function(state, action) {

  switch (action.type) {

    case "SELECTED_BOOK":
      return action.payload
      break;
    default:
      return state

  }
}
