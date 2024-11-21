import style from './styles.module.css'

interface Props {
    type: "success" | "error" | "warning" | "info",
    text: string
}

export const Button = ({ type, text } : Props) => {

    return (
        <button className={style[type]}>{text}</button>
    )
}