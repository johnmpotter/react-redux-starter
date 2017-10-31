/* @flow */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './SubscribeForm.css'

type Props = {
  action: String,
  handleSubmit: Function,
  isSubmitting: Boolean,
  errorResponse: String,
  successResponse: String,
  hasSubscribed: Boolean,
}

export default class EmailFormContainer extends Component<Props> {

  state = {
    EMAIL: '',
    b_d643dcd42f277b3f147e60ac6_94e7e53569: '',
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.EMAIL.length < 1){
      this.setState({
        errorResponse: "Slowdown space cowboy, you must include your email address",
        successResponse: null
      })
      return null;
    }

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
        { this.props.errorResponse &&
           <div className="email-form--response" >
             {this.props.errorResponse.toString()}
           </div>
        }
        { this.props.successResponse &&
           <div className="email-form--response" >
             {this.props.successResponse.toString()}
           </div>
        }

      </form>
    );
  }
}
