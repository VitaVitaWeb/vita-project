import { createContext } from "react";
const initState = {
  id: null,
  password: null,
  createdDate: null,
  name: null,
  phoneNo: null,
  birthDay: null,
  gender: null,
  setContext: () => {},
}

const CustomerInfo = createContext(initState);
export default CustomerInfo;
