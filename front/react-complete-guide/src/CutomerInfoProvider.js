import { createContext, useState } from "react";

const CustomerInfo = createContext();

export function CustomerInfoProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({
    user: {
      id: null,
      password: null,
      createdDate: null,
      name: null,
      phoneNo: null,
      birthDay: null,
      gender: null,
    },
  });

  const logOut = () => {
    setCustomerInfo({
      user: {
        id: null,
        password: null,
        createdDate: null,
        name: null,
        phoneNo: null,
        birthDay: null,
        gender: null,
      },
    });
  };

  const value = {
    user: customerInfo.user,
    setCustomerInfo,
    logOut,
  };

  return (
    <CustomerInfo.Provider value={value}>{children}</CustomerInfo.Provider>
  );
}

export default CustomerInfo;
