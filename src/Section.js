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
            displayClass1: 'd-none',
            displayClass2: 'd-none',
            displayClass3: 'd-none',
            displayClass4: 'd-none',
            readClass: 'py-2 d-block',
            readClass1: 'py-2 d-block',
            readClass2: 'py-2 d-block',
            readClass3: 'py-2 d-block',
            readClass4: 'py-2 d-block',
            buttonClass: 'd-none',
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

    showKanji1 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass1: 'd-block' });
        else if (this.state.mode === '漢字')
            this.setState({ readClass1: 'd-block' });
    }

    showKanji2 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass2: 'd-block' });
        else if (this.state.mode === '漢字')
            this.setState({ readClass2: 'd-block' });
    }

    showKanji3 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass3: 'd-block' });
        else if (this.state.mode === '漢字')
            this.setState({ readClass3: 'd-block' });
    }

    showKanji4 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass4: 'd-block' });
        else if (this.state.mode === '漢字')
            this.setState({ readClass4: 'd-block' });
    }

    hideKanji = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass: 'd-none' });
    }

    hideKanji1 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass1: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass1: 'd-none' });
    }

    hideKanji2 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass2: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass2: 'd-none' });
    }

    hideKanji3 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass3: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass3: 'd-none' });
    }

    hideKanji4 = () => {
        if(this.state.mode === '読み')
            this.setState({ displayClass4: 'd-none'});
        else if (this.state.mode === '漢字')
            this.setState({ readClass4: 'd-none' });
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
            this.setState({ readClass1: "d-none", readClass2: "d-none", readClass3: "d-none", readClass4: "d-none", displayClass1: 'd-block', displayClass2: 'd-block', displayClass3: 'd-block', displayClass4: 'd-block', });
        }
        else if(event.target.value === "読み"){
            this.setState({ readClass1: "py-2 d-block", readClass2: "py-2 d-block", readClass3: "py-2 d-block", readClass4: "py-2 d-block", displayClass1: 'd-none', displayClass2: 'd-none', displayClass3: 'd-none', displayClass4: 'd-none', });
        }
    }

    changePage = (event) => {
        console.log("page is " + this.myRef.current.value);
        console.log(characters[this.state.章][this.myRef.current.value]);
        this.setState({ 
            page: this.myRef.current.value,
            pageChars: characters[this.state.章][this.myRef.current.value],
            kanjiArray: Object.keys(characters[this.state.章][this.myRef.current.value]),
            buttonClass: "mx-3",
        });
        if(this.state.mode==="読み")
            this.setState({ displayClass1: 'd-none', displayClass2: 'd-none', displayClass3: 'd-none', displayClass4: 'd-none', });
        else if (this.state.mode === "漢字")
            this.setState({ readClass1: 'd-none', readClass2: 'd-none', readClass3: 'd-none', readClass4: 'd-none', });
    }

    render() {
        const{ 章, page, pages, pageChars, displayClass1, displayClass2, displayClass3, displayClass4, buttonClass, readClass1, readClass2, readClass3, readClass4, mode, kanjiArray} = this.state;
        const chars = Object.keys(pages).map(pgChoice => <option key={pgChoice} value={pgChoice}>{pgChoice}</option>);

        let kunyomi1, onyomi1, onyomi2, kunyomi2, kunyomi3, kunyomi4, onyomi3, onyomi4;

        if(kanjiArray.length){
            kunyomi1 = <h5 className={readClass1}>訓読み：{pageChars[kanjiArray[0]]['訓読み']}</h5>
            onyomi1 = <h5 className={readClass1}>音読み：{pageChars[kanjiArray[0]]['音読み']}</h5>
            kunyomi2 = <h5 className={readClass2}>訓読み：{pageChars[kanjiArray[1]]['訓読み']}</h5>
            onyomi2 = <h5 className={readClass2}>音読み：{pageChars[kanjiArray[1]]['音読み']}</h5>
            kunyomi3 = <h5 className={readClass3}>訓読み：{pageChars[kanjiArray[2]]['訓読み']}</h5>
            onyomi3 = <h5 className={readClass3}>音読み：{pageChars[kanjiArray[2]]['音読み']}</h5>
            kunyomi4 = <h5 className={readClass4}>訓読み：{pageChars[kanjiArray[3]]['訓読み']}</h5>
            onyomi4 = <h5 className={readClass4}>音読み：{pageChars[kanjiArray[3]]['音読み']}</h5>
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
                    <h3 className={displayClass1}>{kanjiArray[0]}</h3>
                    {kunyomi1}
                    {onyomi1}
                    <button className={buttonClass} onClick={this.showKanji1}>Show</button>
                    <button className={buttonClass} onClick={this.hideKanji1}>Hide</button>
                </div>

                <div className="py-3">
                    <h3 className={displayClass2}>{kanjiArray[1]}</h3>
                    {kunyomi2}
                    {onyomi2}
                    <button className={buttonClass} onClick={this.showKanji2}>Show</button>
                    <button className={buttonClass} onClick={this.hideKanji2}>Hide</button>
                </div>

                <div className="py-3">
                    <h3 className={displayClass3}>{kanjiArray[2]}</h3>
                    {kunyomi3}
                    {onyomi3}
                    <button className={buttonClass} onClick={this.showKanji3}>Show</button>
                    <button className={buttonClass} onClick={this.hideKanji3}>Hide</button>
                </div>

                <div className="py-3">
                    <h3 className={displayClass4}>{kanjiArray[3]}</h3>
                    {kunyomi4}
                    {onyomi4}
                    <button className={buttonClass} onClick={this.showKanji4}>Show</button>
                    <button className={buttonClass} onClick={this.hideKanji4}>Hide</button>
                </div>

            </React.Fragment>
        )
    }
}

export default Section;