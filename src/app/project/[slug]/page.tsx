import { getProjectBySlug, projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./ProjectPage.module.css";
import Carousel from "@/components/Carousel/Carousel";

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.pageContainer}>
      <div className="container">
        
        <div className={styles.backNav}>
          <Link href="/" className={styles.backLink}>&larr; Voltar para o Início</Link>
        </div>

        <header className={styles.header}>
          <div className={styles.headerCategory}>{project.category}</div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.shortDescription}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </header>

        {project.carouselImages && project.carouselImages.length > 0 && (
          <section className={styles.mediaSection}>
            <Carousel images={project.carouselImages} />
          </section>
        )}

        <div className={styles.contentGrid}>
          
          <div className={styles.mainColumn}>
            <section className={styles.articleSection}>
              <h2>Visão Geral do Projeto</h2>
              <p className={styles.fullDescription}>{project.fullDescription}</p>
            </section>

            {project.tradeOffs && project.tradeOffs.length > 0 && (
              <section className={styles.articleSection}>
                <h2>Decisões Arquiteturais e Trade-offs</h2>
                <div className={styles.tradeoffList}>
                  {project.tradeOffs.map((trade, idx) => (
                    <div key={idx} className={styles.tradeoffBox}>
                      <h3>{trade.title}</h3>
                      <p><strong>Cenário:</strong> {trade.description}</p>
                      <div className={styles.verdict}>
                        <strong>Avaliação:</strong> {trade.verdict}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            
            <div className={styles.sidebarBox}>
              <h3>Links e Repositórios</h3>
              <div className={styles.links}>
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginBottom: '0.5rem' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Bibliotecas</h3>
              <div className={styles.libTagsGrid}>
                {project.libraries.map((lib, idx) => (
                  <span key={idx} className={styles.libTag}>{lib}</span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Metodologias</h3>
              <ul className={styles.sidebarList}>
                {project.methodologies.map((met, idx) => (
                  <li key={idx}>✓ {met}</li>
                ))}
              </ul>
            </div>

          </aside>
        </div>

      </div>
    </main>
  );
}
