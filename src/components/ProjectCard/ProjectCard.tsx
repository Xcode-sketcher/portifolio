import Link from "next/link";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  imageUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  slug,
  imageUrl,
  featured,
}: ProjectCardProps) {

  return (
    <article className={`${styles.card} ${featured ? styles.featuredCard : ""}`}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={`Preview de ${title}`} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>
            {title}
            {featured && <span className={styles.featuredBadge}>⭐ Estrela do Show</span>}
          </h3>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href={`/project/${slug}`} className={`btn btn-outline ${styles.moreBtn}`}>
            Ver Todos os Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
