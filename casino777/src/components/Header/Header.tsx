import style from './styles.module.css'
import logo from '../../../public/coins_d2.svg'
import ListLink from "../../UI/ListLink";
import {Button} from "../../UI/Button";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <header className={style.header}>
            <div className={style.leftSide}>
                <img className={style.logo} src={logo} alt=""/>
                <i className={`bx bx-menu ${style.menu}`}>
                    <div className={style.links}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/cases'}>Cases</Link>
                        <Link to={'/mines'}>Mines</Link>
                    </div>
                </i>
            </div>
            <div className={style.rightSide}>
                <ListLink count={100} value={'USDT'}/>
                <Button type='success' text='Deposit'/>
            </div>
        </header>
    )
}