import { initState } from "./initState.js";
function reducer(state = initState, action) {
    const temp = Object.assign({}, state);
    switch (action.type) {
        case "increase":
            temp.count++;
            break;
        case "changename":
            temp.name = "朱丽"
            break;
    }
    return temp;
}
export default reducer;