import Image from "next/image";

import "./Socials.css";

const githubImg = "/images/github.png";
const linkedinImg = "/images/linkedin.png";

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://github.com/ericcarey286" target="_blank" rel="noopener" title="Github Link">
        <Image src={githubImg} alt="Github Logo" width={25} height={25}/>
      </a>
      <a href="https://linkedin.com/in/ericcarey1" target="_blank" rel="noopener" title="LinkedIn Link">
        <Image src={linkedinImg} alt="LinkedIn Logo" width={25} height={25}/>
      </a>
    </div>
  );
}
