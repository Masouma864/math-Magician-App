import React from 'react';
import Calculator from './components/calculator';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='App'>
                <Calculator />

            </div>
        );
    }
}

export default App;