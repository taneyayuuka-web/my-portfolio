import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password === "tane2026") {
      localStorage.setItem("auth", "ok");
      navigate("/");
    } else {
      alert("パスワードが違います");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>鍵を開けてください</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        開く
      </button>
    </div>
  );
}
