/* @flow */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './SubscribeForm.css'

type Props = {
  action: string,
  handleSubmit: Function,
  isSubmitting: boolean,
  status: string,
  message: string,
}

type State = {
  EMAIL: string,
  b_d643dcd42f277b3f147e60ac6_94e7e53569: string,
}

export default class EmailFormContainer extends Component<Props, State> {

  state = {
    EMAIL: '',
    b_d643dcd42f277b3f147e60ac6_94e7e53569: '',
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const state = this.state
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  }

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      EMAIL: this.state.EMAIL,
      b_d643dcd42f277b3f147e60ac6_94e7e53569: this.state.b_d643dcd42f277b3f147e60ac6_94e7e53569
    }

    this.props.handleSubmit(formData);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        action={this.props.action}
        method="post"
        name="email-form"
      >

        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
          <input
            onChange={this.onChange}
            value={this.state.b_d643dcd42f277b3f147e60ac6_94e7e53569}
            type="text"
            name="b_d643dcd42f277b3f147e60ac6_94e7e53569"
            tabIndex="-1"
          />
        </div>

        {/* Email Input */}
        <div className="ui input big input-action">
        	<input
            onChange={this.onChange}
            value={this.state.EMAIL}
            type="email"
            name="EMAIL"
            placeholder="Email address"
          />
          <Button type="submit" size="big" loading={this.props.isSubmitting}>Sign up for updates</Button>
        </div>

        {/* Error messages */}
        { this.props.status === 'error' &&
           <div className="email-form--response" >
             {this.props.message}
           </div>
        }

      </form>
    );
  }
}
