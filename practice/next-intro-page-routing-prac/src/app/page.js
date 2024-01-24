import Image from "next/image";
import bingus from "@/../public/bingus.jpeg";

export default function Home(){
 return ( <div>
    <h1>Home</h1>
    <Image src={bingus} alt="the most beautiful cat" placeholder="blur" />
  </div>
 );
}