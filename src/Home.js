import React from 'react';
import characters from './characters';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="list-group">
                    {Object.keys(characters).map(section => <button type="button" className="list-group-item list-group-item-action text-center" key={section}>{section}</button>)}
                </div>
            </React.Fragment>
        )
    }
}

export default Home;