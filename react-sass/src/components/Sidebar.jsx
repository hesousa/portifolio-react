import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Hugo Sousa" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1Pd6tIzF47z93Z-A5VGJHfRZCq0cwscuy/view?usp=sharing"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
