import { Header } from "../components/Header"
import { users } from "../db.json"

interface UserData {
  id: number
  firstName: string
  LastName: string
  userName: string,
  password: string,
  confirmPassword?: string,
  email: string,
  age: number
}

export function Home() {
  return (
    <>
      <Header />
      namasta<br />
      {/* {users.forEach((val: UserData) => <p>{val}</p>)} */}
      bah
    </>
  );
};