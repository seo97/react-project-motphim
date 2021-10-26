import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export default function ListFim({ items }) {
    return (
        <div className="main__item-list" key={items.id}>
            <div className="main__item-img">
                <img src={items.img} alt={items.name} />
            </div>
            <div className="main__item-fimName">
                <span>{items.name}</span>
            </div>
            <div className="main__item-fimPart">
                <span>Tập {items.parts} Vietsub</span>
            </div>
            <div className="main__item-play">
                <FontAwesomeIcon icon={faPlay} />
            </div>
        </div>
    )
}