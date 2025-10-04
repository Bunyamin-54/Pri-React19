import { useActionState } from "react";
import { loginAction } from "../api/user";

export default function Loginv3() {
    
  const [state, action, loading] = useActionState(loginAction, null);

  return (
    <div>
      <h2>Login component old</h2>
      <form action={action}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
        </div>

        <button type="submit">{loading ? "Loading.." : "Login"}</button>
      </form>
      {state?.user && <p style={{ color: "green" }}>{state.user.email}</p>}
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}