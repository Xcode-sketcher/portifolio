import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Home() {
  const stackerProject = projectsData.filter(p => p.category === "Destaque");
  const fullStackProjects = projectsData.filter(p => p.category === "Full Stack");
  const backendProjects = projectsData.filter(p => p.category === "Back-end");

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Aprendendo a construir <span className={styles.highlight}>soluções web</span> eficientes.
            </h1>
            <p className={styles.heroSubtitle}>
              Sou um estudante apaixonado por desenvolvimento web. Busco minha primeira oportunidade como estagiário ou desenvolvedor júnior para crescer, contribuir com a equipe e evoluir minhas habilidades práticas.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className="btn btn-primary">Ver Meus Projetos</a>
              <a href="https://www.linkedin.com/in/eduardo-barbosa-silva-dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/1775070770712.jpg" alt="Eduardo Barbosa Silva" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                Sou estudante na iminência de ingressar estritamente no mercado de trabalho em formato de <strong>estágio ou atuação júnior</strong>, porém com experiência prática profunda. Tenho dedicado a maior parte do meu currículo de aprendizado para construir conhecimento industrial pragmático transitando entre o Back-end arquitetural e Front-end reativo.
              </p>
              <p>
                <strong>No Back-end</strong>, possuo domínio maduro do ecossistema C# e .NET Core. Construo sistemas com forte fundamentação nas regras Clean Architecture, padrões eficientes do CQRS, Domain-Driven Design (DDD) e criação pragmática de multi-inquilinos utilizando EF Core de forma otimizada.
              </p>
              <p>
                <strong>No Front-end</strong>, domino o fluxo e consumo de UI/UX entregando aplicações via React, Next.js ou Angular atreladas estritamente ao TypeScript. Meu fluxo de trabalho não depende de frameworks prontos de design genéricos, mas de HTML semântico e Vanilla CSS nativo extraindo a performance máxima da renderização do navegador.
              </p>
            </div>
            <div className={styles.skillsGrid}>
              <div className={styles.roadmapBox}>
                <h3 className={styles.roadmapTitle}>O que venho estudando e aplicando</h3>
                <ul className={styles.roadmapList}>
                  <li>
                    <span className={styles.tagRoadmap}>Core Back-end</span> 
                    C#, .NET Core 10, Entity Framework, Dapper, SQL Server/PostgreSQL.
                  </li>
                  <li>
                    <span className={styles.tagRoadmap}>Arquitetura</span> 
                    Hexagonal, Clean Arch, DDD, CQRS, Design Patterns Essenciais.
                  </li>
                  <li>
                    <span className={styles.tagRoadmap}>Front-end Avançado</span> 
                    React JS, Next.js (App Router), Blazor Wasm/Server, TypeScript.
                  </li>
                  <li>
                    <span className={styles.tagRoadmap}>Design & UI</span> 
                    Figma Base, Vanilla CSS, CSS Modules, Metodologia BEM, Acessibilidade.
                  </li>
                  <li>
                    <span className={styles.tagRoadmap}>DevOps & Ferramentas</span> 
                    Git Avançado, CI/CD, XUnit, FluentValidation, Docker Basics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          
          <h2 className={styles.sectionTitle}>Projeto em Destaque</h2>
          <div className={styles.projectsGrid}>
            {stackerProject.map((project, idx) => (
              <ProjectCard 
                key={`destaque-${idx}`} 
                title={project.title} 
                description={project.shortDescription} 
                tags={project.tags} 
                slug={project.slug} 
                imageUrl={project.coverImage} 
                featured={true} 
              />
            ))}
          </div>

          <h2 className={styles.sectionTitle} style={{ marginTop: '5rem' }}>Projetos Full Stack</h2>
          <div className={styles.projectsGrid}>
            {fullStackProjects.map((project, idx) => (
               <ProjectCard 
               key={`fullstack-${idx}`} 
               title={project.title} 
               description={project.shortDescription} 
               tags={project.tags} 
               slug={project.slug} 
               imageUrl={project.coverImage} 
             />
            ))}
          </div>

          <h2 className={styles.sectionTitle} style={{ marginTop: '5rem' }}>Especialidades em Back-end</h2>
          <div className={styles.projectsGrid}>
            {backendProjects.map((project, idx) => (
                <ProjectCard 
                key={`backend-${idx}`} 
                title={project.title} 
                description={project.shortDescription} 
                tags={project.tags} 
                slug={project.slug} 
                imageUrl={project.coverImage} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={`container ${styles.contactContainer}`}>
          <h2 className={styles.sectionTitle}>Vamos conversar</h2>
          <p className={styles.contactText}>
            Sinta-se à vontade para me mandar um e-mail ou conectar no GitHub e LinkedIn.
          </p>
          <a href="https://www.linkedin.com/in/eduardo-barbosa-silva-dev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Acessar Meu LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
