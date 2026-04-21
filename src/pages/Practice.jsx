import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Practice Questions</h2>

      <p>Question will appear here</p>

      <div style={{ marginTop: "20px" }}>
        <button>Previous</button>
        <button>Next</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/result")}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Practice;