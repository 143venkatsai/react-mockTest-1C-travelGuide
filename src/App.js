import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelItem from './components/TravelItem'

import './App.css'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  initial: 'Initial',
}

class App extends Component {
  state = {apiStatus: apiStatusConstants.initial, travelList: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.packages.map(eachPackage => ({
        id: eachPackage.id,
        description: eachPackage.description,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
      }))
      this.setState({
        travelList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderTravelSuccessView = () => {
    const {travelList} = this.state
    return (
      <ul className="travel-list-container">
        {travelList.map(eachPackage => (
          <TravelItem travelDetails={eachPackage} key={eachPackage.id} />
        ))}
      </ul>
    )
  }

  renderTravelLoadingView = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuideStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderTravelLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="travel-container">
        <div className="travel-heading-container">
          <h1 className="travel-heading">Travel Guide</h1>
          <hr className="horizontal-line" />
        </div>
        {this.renderTravelGuideStatus()}
      </div>
    )
  }
}

export default App
