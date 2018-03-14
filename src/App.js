import React, { Component } from 'react';
import {Form, IntField, TextField} from './Form.js';
import './App.css';

const onlyNumbers = (arg) => arg.match(/^ *\d* *$/);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: {
        id: 123,
        maker: "Volkswagen",
        model: "Golf",
        mileage: 90000
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Form example</h1>

        <Form edit={true} value={this.state.auction} onChange={(val) => this.setState({auction: val})}>
          <TextField label="Hersteller" attr="maker" />
          <TextField label="Modell" attr="model" />
          <IntField label="Laufleistung" attr="mileage" validate={onlyNumbers} />
        </Form>

      </div>
    );
  }
}

export default App;
