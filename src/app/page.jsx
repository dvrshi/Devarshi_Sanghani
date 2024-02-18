import Image from "next/image";
import localFont from "next/font/local";
import Styles from "./Home.module.css";
const myFont = localFont({
  src: '../../public/Creattion Demo.otf',
});
export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <div>
          <div className={Styles.fname}>Devarshi</div>
          <div className={Styles.name}>Sanghani</div>
        </div>
        <div className={Styles.desc}>{`Hey, I'm the software engineer you want in your corner.
          I don't just write lines,
          I sculpt solutions that stand out. I'm all about the details and delivering nothing but the best.
          Let's team up and take your digital dreams to the next level.
          Trust me, we'll make some serious waves in the realm of software.`}</div>
        <div className={`${Styles.myFont} ${myFont.className}`}>Mind Over Matter</div>
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
