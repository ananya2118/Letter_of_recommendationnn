import { useState, useEffect } from "react";

function RequestLetter({ state }) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [id, setId] = useState(9); // Initialize ID to 7
  const { contract } = state;

  useEffect(() => {
    // This effect will run only once, on component mount
    setId(9); // Initialize ID to 7
  }, []);

  const handleRequest = async () => {
    try {
      // Request recommendation from the contract
      await contract.requestRecommendation(name, university, program);

      // Increment the ID after a successful request
      setId((prevId) => prevId + 1);

      alert("Recommendation requested successfully!");
    } catch (error) {
      console.error(error);
      alert("Error requesting recommendation");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="University"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="mb-2 w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleRequest}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Request Recommendation
      </button>
      {id !== "" && (
        <div className="mt-2 text-gray-300">Recommendation ID: {id}</div>
      )}
    </div>
  );
}

export default RequestLetter;
