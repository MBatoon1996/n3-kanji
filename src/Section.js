import React from 'react';
import characters from './characters';

class Section extends React.Component {
    constructor(props) {
        super(props);

        const params = new URLSearchParams(props.location.search);

        this.myRef = React.createRef();

        this.state = {
            章: params.get('章') || '生活',
            pages: characters[params.get('章')],
            page: characters[params.get('章')][0],
            pageChars: '',
            displayClass: 'd-none',
            readClass: 'py-2 d-block',
            mode: '読み',
            kanjiArray: [],
        };
    }

    showKanji = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass: 'd-block' });
        else if (this.state.mode === '漢字')
            this.setState({ readClass: 'd-block' });
    }

    hideKanji = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass: 'd-none' });
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
        console.log("page is " + this.myRef.current.value);
        console.log(characters[this.state.章][this.myRef.current.value]);
        this.setState({ 
            page: this.myRef.current.value,
            pageChars: characters[this.state.章][this.myRef.current.value],
            kanjiArray: Object.keys(characters[this.state.章][this.myRef.current.value]),
        });
        if(this.state.mode==="読み")
            this.setState({ displayClass: 'd-none' });
        else if (this.state.mode === "漢字")
            this.setState({ readClass: 'd-none' });
    }

    render() {
        const{ 章, page, pages, pageChars, displayClass, readClass, mode, kanjiArray} = this.state;
        const chars = Object.keys(pages).map(pgChoice => <option key={pgChoice} value={pgChoice}>{pgChoice}</option>);

        let kunyomi1, onyomi1, onyomi2, kunyomi2, kunyomi3, kunyomi4, onyomi3, onyomi4;

        if(kanjiArray.length){
            kunyomi1 = <h5 className={readClass}>訓読み：{pageChars[kanjiArray[0]]['訓読み']}</h5>
            onyomi1 = <h5 className={readClass}>音読み：{pageChars[kanjiArray[0]]['音読み']}</h5>
            kunyomi2 = <h5 className={readClass}>訓読み：{pageChars[kanjiArray[1]]['訓読み']}</h5>
            onyomi2 = <h5 className={readClass}>音読み：{pageChars[kanjiArray[1]]['音読み']}</h5>
            kunyomi3 = <h5 className={readClass}>訓読み：{pageChars[kanjiArray[2]]['訓読み']}</h5>
            onyomi3 = <h5 className={readClass}>音読み：{pageChars[kanjiArray[2]]['音読み']}</h5>
            kunyomi4 = <h5 className={readClass}>訓読み：{pageChars[kanjiArray[3]]['訓読み']}</h5>
            onyomi4 = <h5 className={readClass}>音読み：{pageChars[kanjiArray[3]]['音読み']}</h5>
        }
        else{
            kunyomi1 = '';
            onyomi1 = '';
            kunyomi2 = '';
            onyomi2 = '';
            kunyomi3 = '';
            onyomi3 = '';
            kunyomi4 = '';
            onyomi4 = '';
        }

        return(
            <React.Fragment>
                <h1 className="text-center py-3" onClick={this.changePage}>{章}</h1>
                <form className="form-row p-3 justify-content-center">
                    <div className="form-group col-8 mb-0">
                        <select ref={this.myRef} value={page} className="form-control form-control-lg mb-2" onChange={this.changePage}>
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

                <div className="py-3">
                    <h3 className={displayClass}>{kanjiArray[0]}</h3>
                    {kunyomi1}
                    {onyomi1}
                </div>

                <div className="py-3">
                    <h3 className={displayClass}>{kanjiArray[1]}</h3>
                    {kunyomi2}
                    {onyomi2}
                </div>

                <div className="py-3">
                    <h3 className={displayClass}>{kanjiArray[2]}</h3>
                    {kunyomi3}
                    {onyomi3}
                </div>

                <div className="py-3">
                    <h3 className={displayClass}>{kanjiArray[3]}</h3>
                    {kunyomi4}
                    {onyomi4}
                </div>


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