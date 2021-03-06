/* @flow */
/*global $:true*/

/*eslint max-len: [2, 200, 4]*/ // extend the maximum allowed characters

import React from 'react'
import {Box} from '../../components/Box'
// import {loadJSON} from '../../redux/utils/fetchData'
import {generateUUID} from '../../redux/utils/generateUUID'
import {showChart} from '../../charts/chartUtilities'
import {talent_data_url, jobs_data_url, real_estate_data_url} from '../../config/dataURLs'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.

var panelStates = {}
var currentShownPanelID

panelStates['unemp-panel'] = {
  name: 'unemp-panel',
  state: 'hidden',
  group: 'jobs'
}
panelStates['jobs-panel'] = {
  name: 'jobs-panel',
  state: 'hidden',
  group: 'jobs'
}

export default class DashboardView extends React.Component {

  handleBoxClick (event) {
    console.log('handleUnemploymentRateClick (' + event.currentTarget.id + ')')

    var panelID = null
    var chartID = null
    // Get the current id from the element
    switch (event.currentTarget.id) {
      case 'unemp-rate':
        panelID = 'unemp-panel'
        chartID = 'unemp-chart'
        break
      case 'total-jobs' :
        panelID = 'jobs-panel'
        chartID = 'jobs-chart'
    }

    // Check if one of the available panels was selected
    if (panelID) {
      // Get the item
      var selectedPanelItem = panelStates[panelID]

      // Check if a current panel is showing and that it is different from the selected panel
      if (currentShownPanelID !== panelID && currentShownPanelID != null) {
        // Get the currently selected panel item
        var panelItem = panelStates[currentShownPanelID]

        // Hide any currently showing panels in the same group
        if (selectedPanelItem.group === panelItem.group) {
          var showingID = '#' + currentShownPanelID
          $(showingID).slideUp()
          panelStates[currentShownPanelID].state = 'hidden'
          currentShownPanelID = null
        }
      }

      // handle the selected panel id
      var id = '#' + panelID
      if (selectedPanelItem.state === 'hidden') {
        showChart(chartID)
        $(id).slideDown()
        selectedPanelItem.state = 'shown'
        currentShownPanelID = panelID
      } else {
        $(id).slideUp()
        selectedPanelItem.state = 'hidden'
        currentShownPanelID = null
      }
    }
  }

  // Retrieve the data for the dashboard
  componentDidMount () {
    // Get the talent data
    this.serverRequest = $.get(talent_data_url, function (result) {
      this.setState({
        talentData: JSON.parse(result)
      })
    }.bind(this))

    // Get the jobs data
    this.serverRequest = $.get(jobs_data_url, function (result) {
      this.setState({
        jobsData: JSON.parse(result)
      })
    }.bind(this))

    // Get the real estate data
    this.serverRequest = $.get(real_estate_data_url, function (result) {
      this.setState({
        realEstateData: JSON.parse(result)
      })
    }.bind(this))
  }

  // don't update if the data hasn't finished being retrieved
  shouldComponentUpdate () {
    var returnStatus = true
    if (!this.state) {
      returnStatus = false
    }
    console.log('shouldcomponentUpdate ' + returnStatus)
    return returnStatus
  }

  render () {
    // If the data isn't defined - just show loading
    if (this.state === null ||
        this.state.talentData === undefined ||
        this.state.jobsData === undefined ||
        this.state.realEstateData === undefined) {
      return (<h1>Loading data</h1>)
    }

    // Create the collection of talent boxes
    var talentBoxes = this.state.talentData.data.map((item) => {
      var uuid = generateUUID()
      return (
        <Box boxType={'talent'}
          headline={item.title}
          content={item.value}
          footer={item.trend_label}
          trend={item.trend}
          key={uuid}
          idName={item.id}
          clickHandler={this.handleBoxClick}
        />
      )
    })

    // Create the collection of jobs boxes
    var jobsBoxes = this.state.jobsData.data.map((item) => {
      var uuid = generateUUID()
      return (
        <Box boxType={'jobs'}
          headline={item.title}
          content={item.value}
          footer={item.trend_label}
          trend={item.trend}
          key={uuid}
          idName={item.id}
          clickHandler={this.handleBoxClick}
        />
      )
    })

    // Create the collection of real estate boxes
    var realEstateBoxes = this.state.realEstateData.data.map((item) => {
      var uuid = generateUUID()
      return (
        <Box boxType={'real_estate'}
          headline={item.title}
          content={item.value}
          footer={item.trend_label}
          trend={item.trend}
          key={uuid}
          idName={item.id}
          clickHandler={this.handleBoxClick}
        />
      )
    })

    return (
      <div>
        <div className={'row-fluid row-eq-height'}>
          <div className={'talent dashboard-label  col-xs-1 '}>
            <div className={'image-holder'}>
              <div className={'talent-overlay label-overlay'}></div>
              <div className={'title'}>
                <h4>TALENT </h4>
              </div>
            </div>
          </div>
          <div>
            {talentBoxes}
          </div>
        </div>
        <div className={'source col-lg-offset-1 col-md-offset-1'}>
          {this.state.talentData.source}
        </div>
        <div className={'row-fluid row-eq-height'}>
          <div className={'jobs dashboard-label  col-xs-1 '}>
            <div className={'image-holder'}>
              <div className={'jobs-overlay label-overlay'}></div>
              <div className={'title'}>
                <h4>JOBS </h4>
              </div>
            </div>
          </div>
          <div>
            {jobsBoxes}
          </div>
        </div>
        <div className={'row-fluid'}>
          <div className={'source col-lg-offset-1 col-md-offset-1'}>
            {this.state.jobsData.source}
          </div>
        </div>
        <div className={'row'}>
          <div id='unemp-panel' className={'col-xs-11  jobs-chart-panel '}>
            <h5>Unemployment Rate</h5>
            <div id='unemp-chart' className='jobs-plot'>
              <svg></svg>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div id='jobs-panel' className={'col-xs-11  jobs-chart-panel'}>
            <h5>Number of Jobs</h5>
            <div id='jobs-chart' className='jobs-plot'>
              <svg></svg>
            </div>
            <div id='sector-title' className='sector-title'></div>
            <div id='sector-chart' className='sector-plot'>
              <svg></svg>
            </div>
          </div>
        </div>
        <div className={'row-fluid row-eq-height'}>
          <div className={'real_estate dashboard-label col-xs-1'}>
            <div className={'image-holder'}>
              <div className={'real-estate-overlay label-overlay'}></div>
              <div className={'title'}>
                <h4>REAL ESTATE </h4>
              </div>
            </div>
          </div>
          <div>
            {realEstateBoxes}
          </div>
        </div>
        <div className={'source col-lg-offset-1 col-md-offset-1'}>
          {this.state.realEstateData.source}
        </div>
      </div>
    )
  }
}
