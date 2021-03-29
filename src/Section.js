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
            readClass: 'py-2 d-block',
            mode: '読み',
        };
    }

    showKanji = () => {
        this.setState({ displayClass: 'd-block' });
    }

    hideKanji = () => {
        this.setState({ displayClass: 'd-none'});
    }

    changeMode = (event) => {
        this.setState({ mode: event.target.value });
        if(event.target.value === "漢字"){
            this.setState({ readClass: "d-none", displayClass: 'd-block' });
        }
        else if(event.target.value === "読み"){
            this.setState({ readClass: "py-2 d-block", displayClass: 'd-none' });
        }
    }

    changePage = (event) => {
        console.log("page is " + event.target.value);
        console.log(characters[this.state.章][event.target.value]);
        this.setState({ 
            page: event.target.value,
            pageChars: characters[this.state.章][event.target.value], });
        if(this.state.mode==="読み")
            this.setState({ displayClass: 'd-none' });
    }

    render() {
        const{ 章, page, pages, pageChars, displayClass, readClass, mode} = this.state;
        const chars = Object.keys(pages).map(pgChoice => <option key={pgChoice} value={pgChoice}>{pgChoice}</option>)
        return(
            <React.Fragment>
                <h1 className="text-center py-3">{章}</h1>
                <form className="form-row p-3 justify-content-center">
                    <div className="form-group col-8 mb-0">
                        <select value={page} className="form-control form-control-lg mb-2" onChange={this.changePage}>
                            {chars}
                        </select>
                    </div>
                    <div className="form-group col-4 mb-0">
                        <select value={mode} className="form-control form-control-lg mb-2" onChange={this.changeMode}>
                            <option value="読み">読み</option>
                            <option value="漢字">漢字</option>
                        </select>
                    </div>
                </form>
                {Object.keys(pageChars).map(kanji => 
                    <div className="py-3">
                        <h3 className={displayClass}>{kanji}</h3>
                        <h5 className={readClass}>訓読み：{pageChars[kanji]['訓読み']}</h5>
                        <h5 className={readClass}>音読み：{pageChars[kanji]['音読み']}</h5>
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