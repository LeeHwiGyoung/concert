import './css/modal.css'
function CalendarModal ({closeModal}) {
    const onClickXBtn = () =>{
        closeModal(false);
        console.log(closeModal)
    }

    return (
            <div className="modalContainer">
                <button onClick={onClickXBtn}>X</button>
                <div className="title">This is modal title</div>
                <div className="body">This is modal body</div>
                <div className="footer">This is modal footer</div>
            </div>
    )
}

export default CalendarModal;