import Links from "./links/Links"
import localFont from 'next/font/local'
import styles from "./NavBar.module.css"
const myFont = localFont({
    src: '../../../../public/Empires.otf',
});
export default function Navbar() {
    return (
        <div>
            <div className={styles.container}>

                <div
                    className={`${myFont.className} ${styles.neonBlink}`}
                >
                    Devarshi
                </div>
                <div>
                    <Links />
                </div>
            </div>
        </div>
    )
}
