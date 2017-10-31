/* @flow */
import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

import SubscribeSuccess from './SubscribeSuccess/SubscribeSuccess'
import SubscribeForm from './SubscribeForm/SubscribeForm'

import './EmailFormContainer.css'

type Props = {
  action: String,
}

type State = {
  isSubmitting: Boolean,
  errorResponse: String,
  successResponse: String,
  hasSubscribed: Boolean,
  subscribedEmail: String,
}

export default class EmailFormContainer extends Component<State> {

  static defaultProps = {
    action: 'https://novoprotocol.us17.list-manage.com/subscribe/post-json?u=d643dcd42f277b3f147e60ac6&amp&id=94e7e53569',
  }

  state = {
    isSubmitting: false,
    errorResponse: null,
    successResponse: null,
    hasSubscribed: false,
    subscribedEmail: '',
  }

  handleSubmit = (formData) => {

    if (this.state.isSubmitting) return null;

    this.setState({isSubmitting: true});

    axios.get(this.props.action, formData)
    .then(response => {
      if (response.result === 'error'){
        this.setState({
          errorResponse: response.msg,
          successResponse: null,
          isSubmitting: false
        })
      }else{
        this.setState({
          successResponse: response.msg,
          errorResponse: null,
          isSubmitting: false,
          hasSubscribed: true,
          subscribedEmail: formData.EMAIL,
        })
      }
    })
    .catch(error => {
      this.setState({
        errorResponse: error,
        successResponse: null,
        isSubmitting: false
      })
    })
  }

  render() {
    return (
      <div className='EmailFormContainer'>

        <p className="EmailFormContainer--cta">
          {this.state.hasSubscribed ?
            `Success! You're all set to receive updates to ${this.state.EMAIL}.`
            :
            "Be the first to receive mission updates and announcements"
          }
        </p>

        { this.state.hasSubscribed ?
          <SubscribeSuccess />
          :
          <SubscribeForm
            action={this.props.action}
            handleSubmit={this.handleSubmit}
            isSubmitting={this.state.isSubmitting}
            errorResponse={this.state.errorResponse}
            successResponse={this.state.successResponse}
            hasSubscribed={this.state.hasSubscribed}
          />
        }
      </div>
    );
  }
}
