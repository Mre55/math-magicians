import React from 'react';
import calculate from './logic/calculate';
/* eslint-disable react/destructuring-assignment */

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '0',
      operation: '',
    };
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onOperatorClicked = this.onOperatorClicked.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
  }

  onNumberChange(number) {
    if (this.state.operation === '') {
      this.setState({
        total: number,
      });
    } else {
      this.setState({
        next: number,
      });
    }
  }

  onCalculate() {
    calculate(this.state, '=');
  }

  onOperatorClicked(operator) {
    this.setState({
      operation: operator,
    });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calculator-container">
        <article className="article-class">
          <div className="result-display">
            {total + this.state.operation + next}
          </div>
        </article>
        <article className="article-class">
          <button onClick={() => this.onOperatorClicked('AC')} type="button" className="one-fourth-class">AC</button>
          <button onClick={() => this.onOperatorClicked('+/-')} type="button" className="one-fourth-class">+/-</button>
          <button onClick={() => this.onOperatorClicked('%')} type="button" className="one-fourth-class">%</button>
          <button onClick={() => this.onOperatorClicked('÷')} type="button" className="last-one-fourth-class">÷</button>
        </article>
        <article className="article-class">
          <button onClick={() => this.onNumberChange(7)} type="button" className="one-fourth-class">7</button>
          <button onClick={() => this.onNumberChange(8)} type="button" className="one-fourth-class">8</button>
          <button onClick={() => this.onNumberChange(9)} type="button" className="one-fourth-class">9</button>
          <button onClick={() => this.onOperatorClicked('x')} type="button" className="last-one-fourth-class">x</button>
        </article>
        <article className="article-class">
          <button onClick={() => this.onNumberChange(4)} type="button" className="one-fourth-class">4</button>
          <button onClick={() => this.onNumberChange(5)} type="button" className="one-fourth-class">5</button>
          <button onClick={() => this.onNumberChange(6)} type="button" className="one-fourth-class">6</button>
          <button onClick={() => this.onOperatorClicked('-')} type="button" className="last-one-fourth-class">-</button>
        </article>
        <article className="article-class">
          <button onClick={() => this.onNumberChange(1)} type="button" className="one-fourth-class">1</button>
          <button onClick={() => this.onNumberChange(2)} type="button" className="one-fourth-class">2</button>
          <button onClick={() => this.onNumberChange(3)} type="button" className="one-fourth-class">3</button>
          <button onClick={() => this.onOperatorClicked('+')} type="button" className="last-one-fourth-class">+</button>
        </article>
        <article className="article-class">
          <button onClick={() => this.onOperatorClicked('0')} type="button" className="first-one-fourth-class">0</button>
          <button onClick={() => this.onOperatorClicked('.')} type="button" className="one-fourth-class">.</button>
          <button onClick={this.onCalculate} type="button" className="last-one-fourth-class">=</button>
        </article>
      </div>
    );
  }
}

export default Calculator;
