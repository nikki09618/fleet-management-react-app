import { useState } from "react";

const AddFleetForm = ({}) => {
  const [form, setForm] = useState({
    regNo: "",
    category: "car",
    driverName: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.regNo.trim() || !form.driverName.trim()) {
      alert("All fields are required");
      return;
    }

    onAddFleet(form);
    setForm({
      regNo: "",
      category: "car",
      driverName: "",
      available: true,
    });
  };
  return (
    <div>
      <h3>Add Fleet</h3>
      <input
        name="regNo"
        placeholder="Vehicle Reg No"
        value={form.regNo}
        onChange={handleChange}
      />

      <br />

      <select name="category" value={form.category} onChange={handleChange}>
        <option>Auto</option>
        <option>Car</option>
        <option>Bus</option>
        <option>Truck</option>
      </select>

      <br />

      <input
        name="driverName"
        placeholder="Driver Name"
        value={form.driverName}
        onChange={handleChange}
      />

      <br />

      <button onClick={handleSubmit}>Add Fleet</button>
    </div>
  );
};

export default AddFleetForm;
