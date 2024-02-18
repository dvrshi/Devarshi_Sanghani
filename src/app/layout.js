import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./compoments/navbar/NavBar";
import Footer from "./compoments/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devarshi Sanghani",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="as big as possible"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=BhuTuka+Expanded+One&family=Comforter+Brush&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Licorice&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Patrick+Hand+SC&family=Protest+Revolution&family=Rosarivo:ital@0;1&family=Yellowtail&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=BhuTuka+Expanded+One&family=Comforter+Brush&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Licorice&family=Monoton&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&family=Patrick+Hand+SC&family=Protest+Revolution&family=Rosarivo:ital@0;1&family=Yellowtail&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>

        <div className="container">
          <NavBar />
          {children}
          <Footer />


        </div>
      </body>
    </html>
  );
}
