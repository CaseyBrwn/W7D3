import ItemDetail from "./item_detail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


const msp = (state, ownProps) => {
    const item = state.entities.items[ownProps.match.params.itemId];
    return {
        item
    };

}

export default withRouter(connect(msp)(ItemDetail));