import { Header } from "../components/Header"
import { Card, Typography } from "@mui/material";
import PersonType, { Person } from "../components"

export function Employes() {
  return (
    <div>
      <Header />
      <div>
        <Typography variant="h5">Total No of items in List:{Person.length}</Typography>
        {Person.map((res: PersonType) =>
          <Card sx={{ minWidth: 275 }} className="m-5 pagination page-link" key={res.id}>
            <Typography variant="h5" component="div">
              <strong>Person Name</strong>: {res.prefix} {res.findName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="mx-5" color="text.primary">
              <strong>Comapny Name</strong>: {res.company}<br />
              <strong>Company Suffix</strong>: {res.companySuffix}<br />
              <strong>Job Area</strong>: {res.jobArea}<br />
              <strong>Job Descriptor</strong>: {res.jobDescriptor}
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="mx-5" color="text.primary">
              <strong>Address</strong>:{res.address.cityPrefix}, {res.address.cityName}, {res.address.citySuffix}, {res.address.state}, {res.address.country}, {res.address.zipcode}.
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="mx-5" color="text.primary">
              <strong>Pet</strong>: <br /><div className="my-1 mx-5"><b>Animal Type</b>: Dog,<br /><b>Dog Type</b>: {res.pet}.</div>
            </Typography>
          </Card>
        )}
      </div>
    </div>
  );
};