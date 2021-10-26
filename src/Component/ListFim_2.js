import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const ComingSongList = ({ items }) => {
    return (
        <div className="main__right-item">
            <img src={items.img} alt="" />
            <div className="main__right-desc">
                <h4>{items.nameFim}</h4>
                <span className="main__right-year">{items.year}</span>
                <span className="main__right-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </span>
            </div>
        </div>
    )
}
export const TrendingList = ({ items }) => {
    return (
        <div className="main__right-item trending__item">
            <div className="main__right-index">{items.id}</div>
            <div className="main__right-desc">
                <h4>{items.nameFim}</h4>
                <span className="main__right-year slotCare">{items.care} lượt quan tâm</span>
            </div>
        </div>
    )
}