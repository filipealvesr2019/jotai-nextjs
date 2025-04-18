import CartIcon from "../CartIcon/CartIcon";
import styles from './Header.module.css'
export default function Header(){
    return (
        <header className={styles.container}>
            <section className={styles.section}>
            <span>Logo</span>
            <div>
            <CartIcon />

            </div>

            </section>
        </header>
    )
}