import Image from "next/image";
import "./Header.css";
import Socials from "../Socials/Socials";

const headshot = "/images/headshot.jpg";


export default function Header() {
  return (
    <header>
      <Image id="headshot" src={headshot} alt="Eric W Carey Headshot" width={200} height={200}/>
      <h1>Eric W Carey</h1>
      <p>Software Engineer</p>
      <p>Specializing in Frontend Development</p>
      <Socials />
    </header>
  );
}


