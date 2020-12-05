import React, { Component } from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

import Header from '../../components/headers'
import Smallcard from '../../components/card'
import Table from '../../components/table'

import GetLatestShipmentByEmail from '../../services/get_shipment.service'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {

            },
            counters: {

            },
            tableData : [],
            loading: true,
            timeLineData: [],
        }
    }

    async componentDidMount() {
        const response = await GetLatestShipmentByEmail()
        const { data } = response
        this.setState({ data, loading:false })
        this._categoryCounter()
    }

    _categoryCounter = () => {
        const counters = this.state.data.reduce(
            (previousValue, currentValue) => {
                const { current_status_code } = currentValue
                if (previousValue.hasOwnProperty(current_status_code)) {
                    previousValue[current_status_code] += 1
                } else {
                    previousValue[current_status_code] = 1
                }
                return previousValue
            }, {}
        )
        this.setState({ counters })
        this._setTable("OOD")
    }

    _setTable = (category) => {
        const tableData = this.state.data.filter(item => {
            return item.current_status_code === category
        })
        this.setState({tableData})
    }

    _header = () => (
        <Header />
    )

    _categoryCard = () => {
        const keys = Object.keys(this.state.counters);
        return (
            <div style={{display: 'flex', flexDirection: 'row' , justifyContent:'center', marginTop : '20px'}}>
                 {keys.map(item => {
                return (
                    <Smallcard category = {item} count = {this.state.counters[item]} setTable = {this._setTable}/> 
                )
            })}
            </div>
           

        )
    }

    _setTimeLine = (id) => {
        const timeLineData = this.state.tableData.filter(item => {
            if( item._id === id ){
                return item
            }
        })
        this.setState({timeLineData})
    }

    _tableData = () => {
        return(
                <Table tableDetails = {this.state.tableData} setTimeLine={(id) => this._setTimeLine(id)}/>
        )
    }

    _timeline = () => {
        if(this.state.timeLineData.length){
            const timeLineData = this.state.timeLineData[0].scan
            return(
                <Timeline>
                    {
                        <>                        
                        
                        {timeLineData.map(item => {
                            return (
                                <>
                                <TimelineEvent>
                                    <span>
                                        {`${item.status_detail}  ${item.time}`}
                                    </span>
                                </TimelineEvent>
                            
                                </>
                            ) 
                        })}
                
                        </>
                    }
                </Timeline>
            )
        }
    }

    _dataInsight = () => {
        return (
            <>
                <div
                    style={{
                        display: 'flex', flexDirection: 'row' , justifyContent:'center'
                    }}
                >
                    <div style={{
                        height:"500px",
                        overflowX:"none",
                        flexBasis: "28%",
                        padding:"3%"
                    }}>
                    {this._timeline()}  
                    </div>
                    <div style={{
                        height:"500px",
                        overflowY:"auto",
                        overflowX:"auto",
                        flexBasis: "70%"
                    }}>
                    {this._tableData()}
                    </div>
                </div>
                
            </>
        )
    }

    _generateContainer = () => {
        
        return (
            <>
                {this._categoryCard()}
                {this._dataInsight()}
            </>
        )
    }
    render() {
        return (
            <> {this._header()}
            {
                this.state.loading? "Loading..." : this._generateContainer()
            }
            </>
        )
    }
}




export default Dashboard