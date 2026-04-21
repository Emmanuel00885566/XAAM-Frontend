import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome back 👋</h2>

      <button onClick={() => navigate("/practice")}>
        Continue Practice
      </button>
    </div>
  );
};

export default Home;