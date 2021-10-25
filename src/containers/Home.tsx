import { Header } from "../components/Header";
import DataTable from "react-data-table-component";
import { SetStateAction, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Persons } from "../components/interface";

const column = [
  {
    name: "id",
    selector: (row: any) => row.id
  },
  {
    name: "User Name",
    selector: (row: any) => row.userName
  },
  {
    name: "First Name",
    selector: (row: any) => row.firstName
  },
  {
    name: "Last Name",
    selector: (row: any) => row.lastName
  },
  {
    name: "Email",
    selector: (row: any) => row.email
  },
  {
    name: "Age",
    selector: (row: any) => row.age
  },
]

export function Home() {
  const [user, setUser]: SetStateAction<any> = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((res: AxiosResponse<Persons | any>): void => {
      console.log(setUser(res.data));
      // setUser(res.data.forEach((res: any) => { console.log(res) }));
    })
  }, [])
  console.log(user)

  return (
    <div>
      <Header />
      <div>
        <DataTable
          columns={column}
          data={user}
          selectableRows
        />
      </div>
    </div>
  );
};