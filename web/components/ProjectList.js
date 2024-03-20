import Link from "next/link";
import linkResolver from "../utils/linkResolver";
import Container from "./Container";
import styles from "./ProjectList.module.scss";
import OptimizedImage from "./OptimizedImage";

export default function ProjectList({ block }) {
  return (
    <section className={styles.block}>
      <Container>
        {block.projects.length > 0 && (
          <div className={styles.projects}>
            {block.projects.map((project) => {
              return (
                <Link
                  key={project._key}
                  className={styles.card}
                  href={linkResolver(project)}
                  title={project.title}
                >
                  <div key={project._key}>
                    <div className={styles.background}>
                      <OptimizedImage image={project.featured_image} />
                    </div>
                    <div className={styles.logo}>
                      <OptimizedImage image={project.company.logo} />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.copy}>
                        {project.company && (
                          <h5 className={styles.company}>{project.company.name}</h5>
                        )}
                        {project.title && <h2>{project.title}</h2>}
                        {project.tools.length > 0 && (
                          <div className={styles.meta}>
                            {project.roles.length > 0 && (
                              <div>
                                <h5>Role{project.roles.length > 1 && `s`}:</h5>
                                {project.roles.map((role) => {
                                  return <p key={role._key}>{role.title}</p>;
                                })}
                              </div>
                            )}

                            {project.tools.length > 0 && (
                              <div>
                                <h5>Tool{project.tools.length > 1 && `s`}:</h5>
                                {project.tools.map((tool) => {
                                  return <p key={tool._key}>{tool.title}</p>;
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
