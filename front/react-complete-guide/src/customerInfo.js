import { createContext, useState } from "react";

const CustomerInfo = createContext();

export function CustomerInfoProvider({ children }) {
  const [isLogined, setIsLogined] = useState(false);

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
    setIsLogined(false); // 로그아웃 시 로그인 상태를 false로 변경합니다
  };

  const value = {
    user: customerInfo.user,
    setCustomerInfo,
    logOut,
    isLogined, // 추가
    setIsLogined, // 추가
  };

  return (
    <CustomerInfo.Provider value={value}>{children}</CustomerInfo.Provider>
  );
}

export default CustomerInfo;
