import React, { Component } from 'react'
import { userData } from './data/Constant'

export default class MainContainer extends Component {
  state = {
    data: [],
    appTitle: process.env.REACT_APP_TITLE,
  }

  componentDidMount = () => {
    console.log('Before state change', this.state.data)

    this.setState({ data: userData }, () => {
      console.log('Data in callback', this.state.data)
    })

    console.log('After state change', this.state.data)
  }

  renderDetailsDangerously = details => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: details,
        }}
      ></div>
    )
  }

  renderDesignation = position => {
    return {
      'Data Scientist': <span className="status-hr">{position}</span>,
      'People Manager': <span className="status-sc">{position}</span>,
      'DevOps Engineer': <span className="status-de">{position}</span>,
      'VoiceOver Artist': <span className="status-va">{position}</span>,
    }[position]
  }

  render() {
    const { data, appTitle } = this.state
    return (
        <h1 className="align-center">{appTitle}</h1>
        <div className="main-container align-left">
          {data.length !== 0 &&
            data.map(eachUser => (
              <div className="user-details" key={eachUser.id}>
                <img
                  src={eachUser.image}
                  className="image-frame"
                  width="100"
                  height="100"
                  alt="user"
                />
                <div className="description">
                  <h3 className="margin-0">{eachUser.name}</h3>
                  <span>{this.renderDesignation(eachUser.position)}</span>
                  {this.renderDetailsDangerously(eachUser.details)}
                </div>
              </div>
            ))}
        </div>
    )
  }
}
