import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { hello as helloAction } from '../../actions'

class Hello extends Component {

  componentDidMount() {
    this.props.visiteHello()
  }

  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <p>Welcome</p>
      </div>
    )
  }
}

Hello.propTypes = {
  visiteHello: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  visiteHello() {
    dispatch(helloAction.visiteHello())
  }
})

export default connect(null, mapDispatchToProps)(Hello)
