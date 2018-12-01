import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
    
  }
  
  componentDidMount () {
    this.handle = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount () {
    clearInterval(this.handle);
  }
  
  tick () {
    this.setState({time: new Date()});
  }
  
  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    
    let dateString = this.state.time.toDateString();
    
    return (
      <div className="clock">
        <h1>Clock</h1>
        <div className="clock-inner">
          <label className="time">
            Time:
            <div>
              {hours}:{minutes}:{seconds} PDT
            </div>
          </label>
          
          <label className="date">
            Date:
            <div>
              {dateString}
            </div>
          </label>
        </div>
      </div>
    );
  }
}


export default Clock;