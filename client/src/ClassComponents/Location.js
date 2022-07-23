import React from 'react'
import SeasonDisplay from './SeasonDisplay'
class Location extends React.Component {
  state = { lat: null, error: false }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ error: error.message })
    )
  }
  // Try to keep only JSX inside the render method 
  render() {
    return (
      <div>
        <p>Hello from Location component</p>
        {
          this.state.lat ? <SeasonDisplay lat={this.state.lat} /> :
            this.state.error ?
              <p>Error: {this.state.error}</p>
              :
              ""
        }
      </div>
    )
  }
}

export default Location