import React from 'react';
import characters from './characters';
import { Link } from 'react-router-dom';

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
                    {Object.keys(characters).map(section => <Link to={`/section?章=${section}`} key={section}><button type="button" className="list-group-item list-group-item-action text-center" value={section} >{section}</button></Link>)}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Home;