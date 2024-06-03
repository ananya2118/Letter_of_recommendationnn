import { useState } from "react";

function GetDetails({ state }) {
  const [id, setId] = useState("");
  const [details, setDetails] = useState(null);

  const handleGetDetails = async () => {
    try {
      const result = await state.contract.getStudentDetails(id);
      setDetails(result);
    } catch (error) {
      console.error(error);
      alert("Error fetching student details");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleGetDetails}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Student Details
      </button>
      <div className="mt-4">
        {details && (
          <div className="text-pink-600">
            <p>Name: {details[0]}</p>
            <p>University: {details[1]}</p>
            <p>Program: {details[2]}</p>
            <p>Approved: {details[3] ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetDetails;
