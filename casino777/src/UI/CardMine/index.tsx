import style from './styles.module.css'
import {useState} from "react";

export default function CardMine() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (!active) { // Изменение состояния только при первом клике
            setActive(true);
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`${style.card} ${active ? style.cardActive : ''}`}
        >
        </div>
    )
}
