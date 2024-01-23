import Image from "next/image";
import bingus from "@/../public/bingus.jpeg";

export default function Home(){
  return(
    <div>
      <h2>Home</h2>
      <Image src={bingus} alt="the most beautiful image you have every seen" placeholder="blur" />
      <p>text text text</p>
    </div>
  )
}