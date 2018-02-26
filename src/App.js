import React, { Component } from 'react';
import logo from './logo.svg';

//components
import Emoji from './Emoji';

//styles
import './App.css';

//modules
import cssStyles from './First.module.css';
import sassStyles from './Second.module.scss';
import lessStyles from './Third.module.less';
import stylusStyles from './Fourth.module.styl';

import { observer, inject } from 'mobx-react';

import DevTools from 'mobx-react-devtools';

@inject('myStore')
@observer
class App extends Component {

  handleChangeText(text) {
    this.props.myStore.label = text;
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="label">
            <input onChange={ event => event.target.value} />
          </div>
        </div>
        <div>
          <div className="label"></div>
          <div className="label">{this.props.myStore.result}</div>
        </div>

        <DevTools/>
      </div>
    );
  }
}

export default App;
