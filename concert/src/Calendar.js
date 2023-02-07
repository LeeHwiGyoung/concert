import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/Calender.css'
import mocksdata from './MOCK_DATA.json';

class s extends Component {
    state = {}
    
    componentDidMount() {
      this.getEvents();
    }

    getEvents = async () => {
      const events = this.mockList(); //this.axiosEvents();
      console.log("events" , events)
        this.setState({
          events
        })
    }
    ListItem = (props) => {
      return <li>{props.title}{props.start}{props.end}</li>
    }

    mockList =  () => {
        const mockdata = mocksdata.map((item)=>
        <this.ListItem key = {item.id} title = {item.title} start = {item.start_date} end = {item.end_date}/>);
        console.log("mockdata" , mockdata)
        console.log("mocksdata" , mocksdata)
        return mockdata;
    }


    render() {
        let { events } = this.state;
        return (
          <div className="MyCalender">
            <FullCalendar 
              initialView="dayGridMonth" 
              plugins={[ dayGridPlugin , interactionPlugin ]}
              timeZone = 'Asia/Seoul'
              events = {this.state.events}  
              dateClick = {this.handleDateClick}
            />
          </div>
        );
    }


    

    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
    
}



export default s;
