import { createContext } from "react";
const CustomerInfo = createContext({
  Id: "testId",
  password: "testPassword",
  setContext: () => {},
});
export default CustomerInfo;
