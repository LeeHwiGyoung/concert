import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/Calender.css'

class MyCalendar extends Component {
    render() {
        return (
          <div className="MyCalender">
            <FullCalendar 
              initialView="dayGridMonth" 
              id = "Calendar"
              plugins={[ dayGridPlugin , interactionPlugin ]}
              events={[
                {title : 'Meeting' , start : new Date() }
              ]}
              dateClick = {this.handleDateClick}
            />
          </div>
        );
    }

    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
}
export default MyCalendar;