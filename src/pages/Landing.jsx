import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>XAAM</h1>
      <p>Practice smarter. Score higher.</p>

      <button onClick={() => navigate("/home")}>
        Start Practice
      </button>
    </div>
  );
};

export default Landing;