import React from 'react'
class SeasonDisplay extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>hello from season display</p>
        <p>The season is</p>
        <p>Lat is: {this.props.lat}</p>
      </div>
    )
  }
}

export default SeasonDisplay