import React, { Component } from 'react'

//使用方式：
// import SearchContainer from 'bundle-loader?lazy!./containers/Search/searchContainer';
// const Search = () => (
//   <Bundle load={SearchContainer}>
//     {(Search) => <Search />}
//   </Bundle>
// )

// componentDidMount() {
//   Search(() => { })
// }

// 然后就可以用了

export default class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    if (!this.state.mod)
      return false
    return this.props.children(this.state.mod)
  }
}