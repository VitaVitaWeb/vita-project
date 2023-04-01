import { createContext } from "react";
const CustomerInfo = createContext({
  id: null,
  password: null,
  createdDate: null,
  name: null,
  phoneNo: null,
  birthDay: null,
  gender: null,
  setContext: () => {},
});
export default CustomerInfo;
