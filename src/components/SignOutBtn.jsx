import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const SignOutBtn = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
    window.location.reload();
  };
  return (
    <button className="btn btn-ghost" onClick={handleSignOut}>
      sign Out
    </button>
  );
};

export default SignOutBtn;
