import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import cssModules from 'react-css-modules'
import scss from './home.scss'

@cssModules(scss, { errorWhenNotFound: false })
class Home extends Component {
  render() {
    return (
      <div styleName="home">
        <Link to="/hello">hello</Link>
        <p>{`hello has been visited? ${this.props.visited}`}</p>
      </div>
    )
  }
}

Home.propTypes = {
  visited: PropTypes.string
}

const mapStateToProps = state => ({
  visited: state.hello.visited
})

export default connect(mapStateToProps)(Home)
