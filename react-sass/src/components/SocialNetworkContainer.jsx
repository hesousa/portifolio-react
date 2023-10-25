import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworkcontainer.sass";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/hugo-sousa-91204a174/",
  github: "https://github.com/hesousa",
  instagram: "https://www.instagram.com/hesousa___",
};

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={socialLinks[network.name]} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
