import style from './styles.module.css'

interface Props {
    value: "BTC" | "ETH" | "USDT",
    count: number,

}

export default function ListLink({value, count}: Props) {

    return (
        <div className={style.balance}>
            {value === "BTC" && <i className='bx bxl-bitcoin' style={{color:'#dcb200'}}></i>}
            {value === "ETH" && <i className='bx bxl-xing' style={{color: '#30ffca'}}></i>}
            {value === "USDT" && <i className='bx bxs-dollar-circle' style={{color:'#029a1f'}}></i>}
            <span>{value}</span>
            <span>{count}</span>
        </div>
    )
}