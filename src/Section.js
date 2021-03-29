import React from 'react';
import characters from './characters';

class Section extends React.Component {
    constructor(props) {
        super(props);

        const params = new URLSearchParams(props.location.search);

        this.state = {
            章: params.get('章') || '生活',
            pages: characters[params.get('章')],
            page: characters[params.get('章')][0],
            pageChars: '',
            displayClass: 'd-none',
        };
    }

    showKanji = () => {
        this.setState({ displayClass: 'd-block' });
    }

    hideKanji = () => {
        this.setState({ displayClass: 'd-none'});
    }

    changePage = (event) => {
        console.log("page is " + event.target.value);
        console.log(characters[this.state.章][event.target.value]);
        this.setState({ 
            page: event.target.value,
            pageChars: characters[this.state.章][event.target.value] });
    }

    render() {
        const{ 章, page, pages, pageChars, displayClass } = this.state;
        const chars = Object.keys(pages).map(pgChoice => <option key={pgChoice} value={pgChoice}>{pgChoice}</option>)
        return(
            <React.Fragment>
                <h1 className="text-center py-3">{章}</h1>
                <form className="form-row p-3 justify-content-center">
                    <div className="form-group col-md-5 mb-0">
                        <select value={page} className="form-control form-control-lg mb-2" onChange={this.changePage}>
                            {chars}
                        </select>
                    </div>
                </form>
                {Object.keys(pageChars).map(kanji => 
                    <div className="py-3">
                        <h4 className={displayClass}>{kanji}</h4>
                        <h5 className="py-3">訓読み：{pageChars[kanji]['訓読み']}</h5>
                        <h5 className="py-3">音読み：{pageChars[kanji]['音読み']}</h5>
                    </div>
                )}
                <div className="container">
                    <div className="row justify-content-around">
                        <button onClick={this.showKanji}>Show</button>
                        <button onClick={this.hideKanji}>Hide</button>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Section;