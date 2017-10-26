import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, Divider } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App" style={{background: 'linear-gradient(to bottom right, #ECE9E6, #FFFFFF)'}}>
        <div className='login-form'>
          {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
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
                Not a user yet? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
