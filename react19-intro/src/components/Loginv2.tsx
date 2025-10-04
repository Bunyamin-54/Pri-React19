import { useActionState } from "react";
import { loginUser } from "../api/user";

interface initialState {
  error: null | string;
  user: null | { email: string; username: string };
}

export default function Loginv2() {

    
  const handleSubmit = async (prevState: initialState, formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const response = await loginUser(username, password);

    if (response.success && response.data) {
      return { error: null, user: response.data };
    } else {
      return { error: response.error || "Login failed", user: null };
    }
  };

  // useActionState(action, initialState)
  const [state, action, loading] = useActionState(handleSubmit, {
    error: null,
    user: null,
  } as initialState);

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
      {state.user && <p style={{ color: "green" }}>{state.user.email}</p>}
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
