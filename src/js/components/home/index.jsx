import { connect } from 'react-redux'
import Home from "./home.jsx";


import mapDispatchToProps from "../../store/mapDispatch.js";
import { prodMapState } from "../../store/util.js";

const mapStateToProps = prodMapState(["todo"]);//生成mapStateToProps


const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Index
