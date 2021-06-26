import React from 'react';
import {path, keys, keyLetter} from '../../Constants.js';
import {connect} from 'react-redux';
import {setID} from '../../Actions/displayActions';
import './Pad.css';

class Pad extends React.Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }
    

    togglePlay = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.setID(this.props.id);
    }

    handleKeyPress = (event) => {
        if(event.keyCode === keys[this.props.id]){
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.setID(this.props.id);
        }
    }

    render() {
        return (
            <div className="col" >
                <div className="drum-pad" id ={path[this.props.id]} onClick={this.togglePlay} >
                    <div className="card"> 
                        <div className="card-body">
                            <audio 
                                ref={ref => (this.audio = ref)} 
                                className="clip" id={keyLetter[this.props.id]} 
                                src={path[this.props.id]} 
                                type="audio/wav" />
                            <p className="card-text">{keyLetter[this.props.id]}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ID : state.ID
    }
}

const actionCreators = {
    setID
}

export default connect(
    mapStateToProps,
    actionCreators)(Pad);