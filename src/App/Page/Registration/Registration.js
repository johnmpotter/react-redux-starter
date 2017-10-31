import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Icon, Divider } from 'semantic-ui-react'
import './Registration.css'

export default class Registration extends Component {
  render() {
    return (
      <div className='Registration'>
        <Grid textAlign='center' >
          <Grid.Column largeScreen={6} tablet={8} mobile={16}>
            <Header as='h2' textAlign='center'>
              Lucid - Log In
            </Header>
            <Form size='large'>
              <Segment>
                <Button color="blue" size="large" fluid><Icon name='lock' /> Login with Civic</Button>
                <Divider horizontal>Or</Divider>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='green' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              Not a user yet? <a href='#signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
