// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0, timerRunning: false}

  onClickStopButton = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInSeconds: 0, timerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({timerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {timerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container ">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="time">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartButton}
              disabled={timerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
