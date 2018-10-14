import React, {Component} from 'react';
// import './App.css';

class App extends Component {
    test() {
        console.log('test')
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Cats</h1>
                </header>
                <p>Ready for fun!</p>
                <button onClick={this.test}>test</button>
            </div>
        );
    }
}

export default App;
