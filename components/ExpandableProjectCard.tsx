"use client";

import { useId, useState } from "react";
import styles from "./ExpandableProjectCard.module.css";

type ProjectLink = {
  label: string;
  href: string;
};

type ExpandableProjectCardProps = {
  title: string;
  subtitle: string;
  shortDescription: string;
  pipeline: string[];
  techTags: string[];
  links: ProjectLink[];
};

export default function ExpandableProjectCard({
  title,
  subtitle,
  shortDescription,
  pipeline,
  techTags,
  links,
}: ExpandableProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <article className={styles.card}>
      <div className={styles.cardShell}>
        <div className={styles.summary}>
          <p className={styles.eyebrow}>Featured Interaction</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.description}>{shortDescription}</p>
        </div>

        {/* The toggle is a real button so keyboard users get Enter/Space support automatically. */}
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={() => setIsExpanded((currentValue) => !currentValue)}
        >
          <span className={styles.toggleLabel}>
            {isExpanded ? "Hide technical pipeline" : "Show technical pipeline"}
          </span>
          <span
            className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M6 9.5 12 15.5 18 9.5" />
            </svg>
          </span>
        </button>
      </div>

      {/* The details wrapper animates between collapsed and expanded states without JS measurements. */}
      <div
        id={detailsId}
        className={`${styles.detailsWrapper} ${
          isExpanded ? styles.detailsWrapperOpen : ""
        }`}
      >
        <div className={styles.detailsInner}>
          <div className={styles.section}>
            <p className={styles.sectionLabel}>Pipeline</p>
            <ol className={styles.pipelineList}>
              {pipeline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>Tech</p>
            <ul className={styles.tagList}>
              {techTags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.actions}>
            {links.map((link) => (
              <a
                key={link.label}
                className={styles.actionLink}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
