import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h3> 임시 홈페이지 </h3>
            <Link to='/InfoPage'><button>정보 페이지</button></Link>
            <Link to='/ComparePage'><button>비교 페이지</button></Link>
        </div>
    );
}

export default HomePage;