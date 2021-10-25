import { name, address, company, animal } from 'faker'
import { v4 as uuidv4 } from 'uuid'

export const Person: Array<PersonType> = [
  {
    id: uuidv4().toUpperCase(),
    prefix: name.prefix(),
    findName: name.findName(),
    jobArea: name.jobArea(),
    jobDescriptor: name.jobDescriptor(),
    companySuffix: company.companySuffix(),
    company: company.companyName(),
    pet: animal.dog().toUpperCase(),
    address: {
      cityPrefix: address.cityPrefix(),
      cityName: address.cityName(),
      citySuffix: address.citySuffix(),
      state: address.state(),
      country: address.country(),
      zipcode: address.zipCode()
    }
  },
]

type AddressType = {
  cityPrefix: string
  cityName: string
  citySuffix: string
  state: string
  country: string
  zipcode: string
}

export type Persons = {
  id: number,
  age: number,
  email: string,
  userName: string,
  firstName: string
  lastName: string,
}

export type PersonType = {
  id: string
  prefix: string,
  findName: string
  jobArea: string
  jobDescriptor: string
  address: AddressType
  companySuffix: string
  company: string
  pet: string
}
