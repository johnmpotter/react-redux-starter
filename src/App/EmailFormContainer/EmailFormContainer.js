/* @flow */
import React, { Component } from 'react'
import { Container, Transition, Icon } from 'semantic-ui-react'
import jsonp from 'jsonp'

import SubscribeSuccess from './SubscribeSuccess/SubscribeSuccess'
import SubscribeForm from './SubscribeForm/SubscribeForm'

import './EmailFormContainer.css'

type Props = {
  action: string,
}

type State = {
  isSubmitting: boolean,
  status: string,
  message: string,
  subscribedEmail: string,
}

export default class EmailFormContainer extends Component<Props, State> {

  static defaultProps = {
    action: 'https://novoprotocol.us17.list-manage.com/subscribe/post-json?u=d643dcd42f277b3f147e60ac6&amp;id=2dc7a654de',
  }

  state = {
    isSubmitting: false,
    status: '',
    message: '',
    subscribedEmail: '',
  }

  handleSubmit = (formData: Object) => {

    if (this.state.isSubmitting) return null;

    if (formData.EMAIL.length < 1){
      this.setState({
        status: 'error',
        message: "Slowdown space cowboy, you must include your email address"
      })
      return null;
    }

    this.setState({isSubmitting: true});

    const url = this.props.action + `&EMAIL=${encodeURIComponent(formData.EMAIL)}`

    jsonp(url, {
        param: "c"
    }, (err, data) => {
      if (err){
        this.setState({
          status: 'error',
          message: err.message,
          isSubmitting: false
        })
      }else if(data.result === "error"){
        this.setState({
          status: 'error',
          message: data.msg,
          isSubmitting: false,
          subscribedEmail: ''
        })
      }else{
        this.setState({
          status: 'success',
          message: data.msg,
          isSubmitting: false,
          subscribedEmail: formData.EMAIL
        })
      }
    })

  }

  render() {
    return (
      <div className='EmailFormContainer'>

        <p className="EmailFormContainer--cta">
          {this.state.status === 'success' ?
            <span>
              <Icon name="checkmark" />Success! You're all set to receive updates to {this.state.subscribedEmail}.
            </span>
            :
            "Be the first to receive mission updates and announcements"
          }
        </p>

        { this.state.status !== 'success' &&
          <SubscribeForm
            action={this.props.action}
            handleSubmit={this.handleSubmit}
            isSubmitting={this.state.isSubmitting}
            status={this.state.status}
            message={this.state.message}
          />
        }

        <Transition visible={this.state.status === 'success'} animation="scale" duration={500}>
          <Container>
            <SubscribeSuccess />
          </Container>
        </Transition>

      </div>
    );
  }
}
