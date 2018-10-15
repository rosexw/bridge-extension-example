import React, {Component} from 'react';
import './App.css';

class App extends Component {
    sendMesssage(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
              console.log(response.farewell);
            });
        });
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Cats</h1>
                </header>
                <p>Ready for fun!</p>
                <button>test</button>
            </div>
        );
    }
}

export default App;
