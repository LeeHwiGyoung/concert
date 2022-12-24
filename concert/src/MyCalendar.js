import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './css/Calender.css'

class MyCalendar extends Component {
    render() {
        return (
          <div className="MyCalender">
            <FullCalendar 
              defaultView="dayGridMonth" 
              id = "Calendar"
              plugins={[ dayGridPlugin ]}
            />
          </div>
        );
    }
}
export default MyCalendar;