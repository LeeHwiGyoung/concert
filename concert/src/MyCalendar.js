import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from "react";
import CalendarModal from "./CalendarModal";
import mocksdata from './MOCK_DATA.json';

function MyCalendar() {
    const [event , setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }
    
    const handleEventEnter = (e) => {
        console.log(e)
    }

    const handleEventClick = (e) => {
        console.log(e)
        setOpenModal(true)
        //alert(e.event._def.publicId + e.event._def.title)
    }

    const changeProperty = () => {
        let mockdata = mocksdata.map((item)=>{
            let obj = {
                id : item.id,
                title : item.title,
                start : item.start_date,
                end : item.end_date + "T23:59:00",
            }  
            return obj;
        })
        return mockdata;
    }

    useEffect( () => {
        const events = changeProperty();
        console.log(events)
        setEvents(events);
    }, [] );

    return (
        <>
            { openModal && <CalendarModal closeModal={setOpenModal}/> }
            <FullCalendar
                initialView="dayGridMonth" 
                plugins={[ dayGridPlugin , interactionPlugin ]}
                timeZone = 'Asia/Seoul'
                events = {event}
                height = {1200}
                contentHeight = {1000}
                dayMaxEvents = {3}
                dateClick = {handleDateClick}
                eventClick = {handleEventClick}
                eventMouseEnter = {handleEventEnter}
            />
            
        </>
    )

}

export default MyCalendar;