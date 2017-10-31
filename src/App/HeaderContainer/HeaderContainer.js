/* @flow */
import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Menu } from 'semantic-ui-react'
import './HeaderContainer.css'

type Props = {
	changePage: Function,
}

class HeaderContainer extends Component<Props> {
  render() {
    return (
			<header className="HeaderContainer">
				<Container>
		      <Menu inverted pointing secondary size='large'>
						<Menu.Item as='a' onClick={() => this.props.changePage('/')} active>Home</Menu.Item>
			      <Menu.Item as='a' onClick={() => this.props.changePage('/signup')}>Signup</Menu.Item>
		      </Menu>
		    </Container>
			</header>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => push(path)
}, dispatch)

export default connect(null, mapDispatchToProps)(HeaderContainer)
