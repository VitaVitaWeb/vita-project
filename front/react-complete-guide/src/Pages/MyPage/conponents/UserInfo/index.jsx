import { useState, useEffect, useContext } from 'react';
import LabelInput from '../LabelInput/index';
import dayjs from 'dayjs';
import CustomerInfo from '../../../../customerInfo'
import { useNavigate } from 'react-router-dom';
import DateInput from "../DateInput/index"
import RadioBoxInput from '../RadioBoxInput/index'
// get user Context api
// const { userInfo } = useContext(UserContext);


const UserInfo = () => {
  const getGender = (gender) => gender === 0 ? '남자' : '여자';
  const [isChange, setIsChange] = useState(false);
  const navigate = useNavigate();
  const userInfo = useContext(CustomerInfo);

  const onSubmit = (userInfo) => {
    // api에 던지는 로직을 작성
    console.log(userInfo);
    // 정보처리 로직 작성
    return;
  }


  // useEffect(() => { 
  //   if (!userInfo.id) {
  //     navigate('/');
  //   };
  // },[userInfo.id])

  // if (!userInfo.id) return null;
 // 닉네임 추가 ----------
  return (
    <div>
      <div>
        <p>회원 정보</p>
        <button
          onClick={() => {
            if (isChange) {
              onSubmit(userInfo);
            }
            setIsChange(!isChange);
          }}
        >{isChange ? '저장하기' : '변경하기'}</button>
      </div>
      <div>
          

        <LabelInput
          label="아이디" 
          onChange={(value) => {
            // setUserInfo({
            //   ...userInfo,
            //   id: value
            // })
          }}
          readOnly={!isChange}
          value={userInfo.id}
        />
        <LabelInput
          label="비밀번호"
          onChange={(value) => {
            // setUserInfo({
            //   ...userInfo,
            //   password: value
            // })
          }}
          readOnly={!isChange}
          value={userInfo.password}
        />
        <LabelInput
          label="전화번호"
          readOnly={!isChange}
          onChange={(value) => {
            // setUserInfo({
            //   ...userInfo,
            //   phoneNo: value
            // })
          }}
          value={userInfo.phoneNo}
        />

        {/* date입력받을 수 있도록 컴포넌트 변경 */}
        {/* type="date"? */}
        <DateInput
          label="생일"
          readOnly={!isChange}
          value={userInfo.birthDay}
        />
        <DateInput
          label="가입일자"
          readOnly={!isChange}
          value={userInfo.createdDate}
        />
        {/* checkBox 공통 컴포넌트 분리 */}
        <RadioBoxInput 
          options={[
            { label: '남자', value: 0, disabled: !(userInfo.gender === 0 || isChange) },
            { label: '여자', value: 1, disabled: !(userInfo.gender === 1 || isChange) },
          ]}
          label="성별"
          value={userInfo.gender}
        />
      </div>
    </div>
  )

}

export default UserInfo;