import Image from "next/image";
import Styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <div>
      <div className={Styles.fname}>Devarshi</div>
      <div className={Styles.name}>Sanghani</div>
      </div>
      <div className={Styles.desc}></div>
      <div className={Styles.desc} ></div>
      </div>
      <div className={Styles.imgContainer}>
        <Image
          src="/homepage.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
