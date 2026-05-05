import ExpandableProjectCard from "../components/ExpandableProjectCard";
import styles from "./page.module.css";

const pipeline = [
  "EEG acquisition using OpenBCI",
  "Bandpass filtering from 1–10 Hz",
  "Blink/rest segmentation",
  "CSP spatial filtering",
  "Log-variance feature extraction",
  "LDA classification",
  "Prediction converted into a Flappy Bird jump command",
];

const techTags = [
  "EEG",
  "OpenBCI",
  "Python",
  "CSP",
  "LDA",
  "scikit-learn",
  "HCI",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Projects</p>
            <h1 className={styles.headline}>Signals, models, and interaction.</h1>
            <p className={styles.lede}>
              This sample project card recreates the kind of compact-to-detailed
              interaction I liked in Mahdi Beitollahi&apos;s portfolio. The
              collapsed state stays scannable, then opens into a more technical
              explanation with a clearer machine-learning pipeline.
            </p>
            <div className={styles.heroChips} aria-label="Project themes">
              <span className={styles.heroChip}>Interface Design</span>
              <span className={styles.heroChip}>Signal Processing</span>
              <span className={styles.heroChip}>Applied Machine Learning</span>
            </div>
          </div>

          <aside className={styles.heroMeta} aria-label="Inspiration details">
            <div>
              <p className={styles.metaLabel}>Inspired By</p>
              <p className={styles.metaValue}>Mahdi Beitollahi&apos;s portfolio</p>
            </div>
            <div>
              <p className={styles.metaLabel}>Interaction Goal</p>
              <p className={styles.metaValue}>
                Reveal deeper technical detail on demand without making the
                default project grid feel heavy or crowded.
              </p>
            </div>
            <div>
              <p className={styles.metaLabel}>Design Direction</p>
              <p className={styles.metaValue}>
                Soft blue gradients, strong spacing, and progressive disclosure
                so the portfolio feels polished before the user even opens a
                project.
              </p>
            </div>
          </aside>
        </section>

        <section className={styles.projectsSection} aria-labelledby="projects-heading">
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.sectionEyebrow}>Selected Interaction</p>
              <h2 id="projects-heading" className={styles.sectionHeading}>
                Expandable BCI project card
              </h2>
            </div>
            <p className={styles.sectionText}>
              Click the card to expand the project details, inspect the EEG
              classification pipeline, and collapse it again when you want to
              return to a compact portfolio view.
            </p>
          </div>

          <div className={styles.projectGrid}>
            <ExpandableProjectCard
              title="EEG Blink-Controlled Flappy Bird"
              subtitle="Brain-Computer Interface / Signal Processing / Machine Learning"
              shortDescription="A real-time BCI project that translates EEG blink activity into game-control commands."
              pipeline={pipeline}
              techTags={techTags}
              links={[
                {
                  label: "View GitHub",
                  href: "https://github.com/mahdibeit/EEG-BasedBCI",
                },
                {
                  label: "Read Case Study",
                  href: "https://mahdibeit.github.io/",
                },
              ]}
            />

            <aside className={styles.projectSidebar} aria-label="Project summary">
              <div className={styles.sidebarPanel}>
                <p className={styles.panelLabel}>What opens up</p>
                <p className={styles.panelText}>
                  The expanded state reveals the technical pipeline, tools, and
                  supporting links without forcing that detail into the default
                  browsing view.
                </p>
              </div>
              <div className={styles.sidebarPanel}>
                <p className={styles.panelLabel}>Why it helps</p>
                <p className={styles.panelText}>
                  Recruiters can scan quickly, while classmates or instructors
                  can open the card to see the real modeling workflow.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.notes} aria-labelledby="notes-heading">
          <h2 id="notes-heading" className={styles.notesTitle}>
            Why this interaction works
          </h2>
          <ol className={styles.notesList}>
            <li>
              It preserves visual hierarchy by keeping the default project state
              short and scannable.
            </li>
            <li>
              It introduces progressive disclosure, so technical depth only
              appears when the user asks for it.
            </li>
            <li>
              It makes a portfolio feel more alive without distracting from the
              content itself.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
