import { useState } from "react";
import { loginUser } from "../api/user";

// = // atama yaparken sagdaki degeri sola atar
// == // karsilastirma yapar ama tipinine bakmak
// === // karsilastirma yapar tipine bakars

//   console.log(2 === "2"); // false
//   console.log(2 == "2"); // true

// ------------------------------------------------

//   destructuring - yikarak alma
//   const obj = {
//     name: "test",
//     age: 20,
//   };
//   console.log(obj.name)
//   const { age, name } = obj;
//   console.log(name, age);

//   const arr = [1, 2, 3, 4, 5];
//   const [first, birinciIndex] = arr;
//   console.log(first, birinciIndex);

// ------------------------------------------------

// () => {} arrow function
// function test(){} normal function
// const test = function(){} function expression

// 7
// 6

// persembe 19, cumartesi 11

export default function Login() {
  // built in hook - useState
  const [username, setUsername] = useState(""); // initial state ne gonderirsek type o olur
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<null | { email: string; username: string }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // statelerin initial degerlerini ekledik boylelikle her form submit isleminde tum state temizlenmis olucak.
    setLoading(true);
    setError(null);
    setUser(null);

    const response = await loginUser(username, password);
    console.log(response);

    if (response.success && response.data) {
      setUser(response.data);
    } else {
      setError(response?.error || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Login component old</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">{loading ? "Loading.." : "Login"}</button>
      </form>
      {user && <p style={{ color: "green" }}>{user.email}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}