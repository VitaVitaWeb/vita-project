import './WishStyle.css';

function Wish() {
    return (
        <div class="wish">
            <span>
                <h4>찜 개수</h4>
            </span>
            <span>1234</span>
            <button type="button" class="wish-button">
                <img src="https://cdn-icons-png.flaticon.com/128/138/138533.png" alt="heart-icon" width="19px" height="19px"></img>
            </button>
        </div>
    );
}

export default Wish;