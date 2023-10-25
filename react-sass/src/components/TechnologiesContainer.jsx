import {    
    DiAws,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiJava,
    DiLinux,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "java", name: "Java", icon: <DiJava /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "aws", name: "Aws", icon: <DiAws /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "linux", name: "Linux", icon: <DiLinux /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;