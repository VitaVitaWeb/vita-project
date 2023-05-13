import './ComparePopupStyle.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ComparePopup({ onSelectedProduct }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업창 여부
    const [searchKeyword, setSearchKeyword] = useState(''); // 검색어
    const [isAddImageVisible, setIsImageVisible] = useState(true); // 선택 이미지 여부
    const [products, setProducts] = useState([]); // 검색된 상품 목록

    // 검색 기능
    useEffect(() => {
        if (searchKeyword) {
            searchProducts(searchKeyword);
        }
    }, [searchKeyword]);

    // api로 상품 정보 받아오기
    const searchProducts = async (keyword) => {
        try {
            const response = await axios.get('/search', { params: { q: keyword } });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // 팝업 여는 버튼
    const handleSearchButtonClick = () => {
        setIsPopupOpen(true);
    };

    // 검색하기 버튼
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setIsPopupOpen(false);
    };

    // 상품 선택하기 버튼
    function handleSelectProduct(product) {
        console.log('Selected Product in popup:', product);
        onSelectedProduct(product);
        setIsPopupOpen(false);
        setIsImageVisible(false);
    }

    return (
        <>
            {isAddImageVisible && (
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbTLeo4LDVGQRQgOJ7iF1O6HDhG0B53OSdQ&usqp=CAU"
                    alt="영양제를 추가해주세요"
                    className="vita-need-choice-image"
                    onClick={handleSearchButtonClick}
                />
            )}
            {
                isPopupOpen && (
                    <div id="popup">
                        <div id="popup-top-space">
                            <div><h2>찾고 싶은 영양제의 <br /> 브랜드명 혹은 제품명을 <br /> 검색해주세요!</h2></div>
                            <button id="popup-close-button" onClick={() => setIsPopupOpen(false)}>
                                <img
                                    src="https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_close_24.f7ecbaef.svg&w=32&q=75"
                                    alt="icon-X" />
                            </button>
                        </div>
                        <form id="popup-form" onSubmit={handleSearchSubmit}>
                            <input
                                id="search-form"
                                type="text"
                                value={searchKeyword}
                                onChange={(event) => setSearchKeyword(event.target.value)}
                            />
                            <button id="search-button" type="submit">
                                <img
                                    src="https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_search_gray_16.d6c9f000.svg&w=32&q=75"
                                    alt="search-icon" />
                            </button>
                        </form>
                        <div id="popup-bottom-space">
                            {products.map((product) => (
                                <button
                                    key={product.id}
                                    className="temporary-product"
                                    onClick={() => handleSelectProduct(product)}
                                >
                                    {product.name}
                                </button>
                            ))}
                        </div>
                    </div >
                )
            }
        </>
    );
}

export default ComparePopup;