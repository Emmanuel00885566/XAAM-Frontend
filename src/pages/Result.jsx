import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Result Summary</h2>

      <p>Your score: --</p>

      <button onClick={() => navigate("/home")}>
        Return to Dashboard
      </button>
    </div>
  );
};

export default Result;