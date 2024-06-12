import React from 'react';

class Lesson30 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
      // this.setState({ count: this.state.count + 1 });
      // this.setState({ count: this.state.count + 1 });
      // this.setState({ count: this.state.count + 1 });

      this.setState({ count: this.state.count + 1 }, () => {
        console.log(">>> check count = ", this.state.count);
        this.setState({ count: this.state.count + 1 }, () => {
          console.log(">>> check count = ", this.state.count);
          this.setState({ count: this.state.count + 1 }, () => {
            console.log(">>> check count = ", this.state.count);
          });
        });
      });
    }

    render() {
        return (
            <div>
                <div>Lesson 30: Getting next state</div>
                <div>Count = {this.state.count}</div>
                <button onClick={() => this.handleClick()}>
                    +3 unit
                </button>
            </div>
        )
    }
}

export default Lesson30;