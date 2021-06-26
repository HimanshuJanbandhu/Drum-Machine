import React from 'react';
import Pad from '../Pad/Pad';
import './DrumMachine.css';
import {connect} from 'react-redux'; 
import {path,COLORS} from '../../Constants';

class DrumMachine extends React.Component {
    
    constructor(props){
        super(props);
        this.renderPad = this.renderPad.bind(this);
    }

    renderPad (id) {
        return (
            <Pad id={id}/>
        );
    }

    render() {
        let row = [];
        for(let i=0;i<3;i++){
            let col = [];
            for(let j=0;j<3;j++){
                col.push(this.renderPad(3*i + j));
            }
            row.push(<div className="row">{col}</div>);
        }
        return (
            <div className="container">
                <div id="display" style = {{borderColor : COLORS[this.props.ID]}}>
                    {path[this.props.ID]}
                </div>
                {row}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ID : state.ID
    }
}

export default connect(
    mapStateToProps
    )(DrumMachine);
