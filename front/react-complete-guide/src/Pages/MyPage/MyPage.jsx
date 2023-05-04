import UserInfo from '../MyPage/conponents/UserInfo'
import { Select } from 'antd'
import Calculate from '../CalculatePage/Calculate'

const options = [
  {
    label: '스트레스케어',
    value: '스트레스케어',
  },
  {
    label: '탄력증진',
    value: '탄력증진',
  },
  {
    label: '눈건조감개선',
    value: '눈건조감개선',
  },
  {
    label: '관절및연골건강',
    value: '관절및연골건강',
  },
  {
    label: '항산화',
    value: '항산화',
  },
  {
    label: '시력 및 피로감 개선',
    value: '시력 및 피로감 개선',
  },
  {
    label: '피부건강',
    value: '피부건강',
  },
  {
    label: '체지방 감소',
    value: '체지방 감소',
  },
  {
    label: '면역력 감소',
    value: '면역력 감소',
  },
  {
    label: '장건강',
    value: '장건강',
  },
  {
    label: '혈압관리',
    value: '혈압관리',
  },
  {
    label: '혈행개선',
    value: '혈행개선',
  },
  {
    label: '뼈건강',
    value: '뼈건강',
  },
  {
    label: '콜레스테롤',
    value: '콜레스테롤',
  },
  {
    label: '수치개선',
    value: '수치개선',
  },
  {
    label: '간건강',
    value: '간건강',
  },
]

const options2 = [
  {
    label: '캡슐형태',
    value: '캡슐형태',
  },
  {
    label: '정 형태',
    value: '정 형태',
  },
  {
    label: '가루 형태',
    value: '가루 형태',
  },
  {
    label: '액상 형태',
    value: '액상 형태',
  },
  {
    label: '츄어블 형태',
    value: '츄어블 형태',
  },
]

const MyPage = () => {
  const handleChange = () => null
  return (
    <div>
      <UserInfo />
      <div>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          //options={options2}
        />
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '100%',
          }}
          placeholder="Please select"
          defaultValue={['스트레스케어']}
          onChange={handleChange}
          options={options}
        />
      </div>
      <Calculate/>
    </div>
    
  )
}



export default MyPage
