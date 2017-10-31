/* @flow */
import React, { Component } from 'react'
import axios from 'axios'
import './EmailFormContainer.css'

type State = {
  EMAIL: String,
  b_d643dcd42f277b3f147e60ac6_94e7e53569: String, // Bot Prevention
  isSubmitting: Boolean,
  errorResponse?: String,
  successResponse?: String,
}

export default class EmailFormContainer extends Component<State> {

  state = {
    EMAIL: '',
    b_d643dcd42f277b3f147e60ac6_94e7e53569: '',
    isSubmitting: false,
    errorResponse: null,
    successResponse: null,
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.state.email){
      this.setState({errorResponse: "Slowdown space cowboy, you must include your email address", successResponse: null})
      return null;
    }

    axios.get('https://novoprotocol.us17.list-manage.com/subscribe/post-json?u=d643dcd42f277b3f147e60ac6&amp&id=94e7e53569', {
      EMAIL: this.state.EMAIL,
      b_d643dcd42f277b3f147e60ac6_94e7e53569: this.state.b_d643dcd42f277b3f147e60ac6_94e7e53569
    })
    .then(response => {
      if (response.result === 'error'){
        this.setState({errorResponse: response.msg, successResponse: null})
      }else{
        this.setState({successResponse: response.msg, errorResponse: null})
      }

    })
    .catch(error => {
      this.setState({errorResponse: error, successResponse: null})
    })
  }

  render() {
    return (
      <div className='EmailFormContainer'>
        <form
          onSubmit={this.handleSubmit}
          action="https://novoprotocol.us17.list-manage.com/subscribe/post?u=d643dcd42f277b3f147e60ac6&amp;id=94e7e53569"
          method="post"
          name="email-form"
          target="_blank"
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
            <button type="submit" className="ui button big">Sign up for updates</button>
          </div>

          {/* Error messages */}
          { this.state.errorResponse &&
             <div className="email-form--response" >
               {this.state.errorResponse.toString()}
             </div>
          }
          { this.state.successResponse &&
             <div className="email-form--response" >
               {this.state.successResponse.toString()}
             </div>
          }

        </form>
      </div>
    );
  }
}
