import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

function App() {
  const [data, setData] = useState([
    { day: "Mon", spend: 100 },
    { day: "Tue", spend: 200 },
    { day: "Wed", spend: 150 },
  ]);

  const [day, setDay] = useState("");
  const [spend, setSpend] = useState("");

  const handleAddData = () => {
    if (day && spend) {
      setData([...data, { day, spend: Number(spend) }]);
      setDay("");
      setSpend("");
    }
  };

  return (
    <div style={{
      backgroundColor: "#1e1e1e",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
      margin: "auto",
    }}>
      <h2 style={{ textAlign: "center", margin: "12px" }}>Spending Chart</h2>

      {/* Input Section */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Day (e.g., Thu)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{ padding: "6px", marginRight: "10px", border: "2px solid white", borderRadius:"8px"}}
        />
        <input
          type="number"
          placeholder="Spend"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
          style={{ padding: "6px", marginRight: "10px",border: "2px solid white", borderRadius:"8px" }}
        />
        <button onClick={handleAddData} style={{ padding: "6px 10px", background:"blue",  borderRadius:"8px"}}>
          Add
        </button>
      </div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "10px" }} labelStyle={{ color: "#fff" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Line type="monotone" dataKey="spend" stroke="#00C49F" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;