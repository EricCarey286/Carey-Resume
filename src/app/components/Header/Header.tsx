import Image from "next/image";
import "./Header.css";
import Socials from "../Socials/Socials";

interface HeaderProps {
  image: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <Image id="headshot" src={props.image} alt="Eric W Carey Headshot" width={200} height={200}/>
      <h1>Eric W Carey</h1>
      <p>Software Engineer</p>
      <p>Specializing in Frontend Development</p>
      <Socials />
    </header>
  );
}


