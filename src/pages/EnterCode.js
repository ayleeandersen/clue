import React from 'react';
import ReactCodeInput from 'react-code-input';

import ClueCard from '../components/ClueCard';

import { CODES, CLUES } from '../utils/constants';
import { addToLocalStorage } from '../utils/helpers';

class EnterCode extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    code: '',
    valid: true,
    clues: null,
  };

  clearInput = () => {
    if (this.inputRef.current.textInput[0]) {
      this.inputRef.current.textInput[0].focus();
    }
    for (let i = 0; i < 5; i++) {
      this.inputRef.current.state.input[i] = '';
    }
  }

  submit = () => {
    const { code } = this.state;
    const finalCode = code.toLowerCase()
    if (CODES.includes(finalCode)) {
      this.setState({ code: '', clues: CLUES[finalCode] });
      this.clearInput();
      addToLocalStorage(CLUES[finalCode]);
    } else {
      this.setState({ valid: false, clues: null });
      this.inputRef.current.textInput[0].focus();
    }
  }

  change = val => {
    this.setState({ code: val, valid: true });
  }

  render() {
    const { code, valid, clues } = this.state;

    return (
      <div className='body'>
        <p>Enter the code you found from a puzzle to get your next clue</p>
        <ReactCodeInput
          ref={this.inputRef}
          fields={5}
          className='code-input'
          value={code}
          onChange={this.change}
          isValid={valid}
          inputStyleInvalid={{ border: '2px solid #9F2D33' }}
        />
        <button className='submit' onClick={this.submit}>
          Submit
        </button>
        {!valid && (
          <>
            <h1 className='result'>Incorrect</h1>
            <p>If you get stuck, ask one of the helpers for a hint!</p>
          </>
        )}
        {clues && (
          <ClueCard clues={clues} />
        )}
      </div>
    );
  }
}

export default EnterCode