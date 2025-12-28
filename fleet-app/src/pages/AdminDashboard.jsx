import { useSearchParams } from "react-router-dom";
import AddFleetForm from "../component/AddFleetForm";
import FleetCard from "../component/FleetCard";
import { useCallback, useState } from "react";

const AdminDashboard =()=>{
    const [fleets,setFleets]=useState([]);

    const [addFleet,setAddFleets] =useCallback((fleet)=>{
        setFleets((prev) =>[...prev,{...fleet, id: Date.now()}]);
    },[]);

    const updateDriver =useCallback((id)=>{
        const name = prompt("Enter driver name");
        if (name===null) return;

        const trimmed=name.trim();
        if(!trimmed){
            alert("Driver name cannot be empty");
            return;
        }
        setFleets((prev)=>{
            prev.map((f)=>
            f.id===id ? {...f, driverName: trimmed}:f
        )
        },[]);

        const toggleAvailability=useCallback((id)=>{
            setFleets((prev)=>
            f.id===id ? {...f, available:!f.available}:f
        )
        },[]);

        const deleteFleet=useCallback((id)=>{
            if(!window.confirm("Delet this vehicale")) return;

            setFleets((prev)=> prev.filter((f)=> f.id==id));
        },[]);
    });

    return(
        <div>
            <h2>Admin Dashboard</h2>
            <AddFleetForm  onAddFleet={addFleet}/>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
                {fleets.map((fleet) => (
                    <FleetCard
                    key={fleet.id}
                    fleet={fleet}
                    onUpdateDriver={updateDriver}
                    onToggleAvailability={toggleAvailability}
                    onDelete={deleteFleet}
                    />
                ))}

            </div>

        </div>
    )
};

export default AdminDashboard;