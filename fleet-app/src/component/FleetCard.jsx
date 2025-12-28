const FleetCard =React.memo(({fleet,onUpdateDriver,onToggleAvailability,onDelete})=>{
    return(
        <div style={{border:"1px solid black", padding:"10px"}}>
            <p>Reg No: {fleet.regNo}</p>
            <p>Category: {fleet.category}</p>
            <p>Driver: {fleet.driverName}</p>
            <p>Status: {fleet.available ? "Available" : "Unavailable"}</p>

            <button onClick={()=>onUpdateDriver(fleet.id)}>Update Driver</button>
            <button onClick={()=>onToggleAvailability(fleet.id)}>Toggle Availability</button>
            <button onClick={()=>onDelete(fleet.id)}>Delete</button>
        </div>
    )
});
export default FleetCard;