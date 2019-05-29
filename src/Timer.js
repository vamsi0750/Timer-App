import React,{Component} from 'react';

class Timer extends Component{
    componentDidMount(){
        this.timer = setInterval(this.ticker,1000)
    }
    ticker(){
        this.setState({clock: new Date() -this.props.start})
    }
    constructor(props){
        super(props);
        this.state={
            clock:0

        };
        this.ticker=this.ticker.bind(this);
        
    }
    render(){
        var clock=Math.round(this.state.clock / 1000 );
        
        return(
            <div>
                <h1>you have been on this site:</h1><br />
                <span>{clock}</span>
                <p>seconds</p>
                </div>
        );
    }
}


export default Timer;