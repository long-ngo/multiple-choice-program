import './App.css';
import { Component } from 'react';
import Question from './components/Question'

class App extends Component {
    render() {
        return (
            <div className="app">
               <Question />
            </div>
        );
    }
}

export default App;
