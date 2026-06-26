import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { PlatformMark } from '../../../../packages/design-system/src';
import './index.css';

const statusItems = [
  { label: 'Foundation 001', value: 'Approved' },
  { label: 'Foundation 002', value: 'Active' },
  { label: 'Design Standards', value: '7' },
  { label: 'Architecture Decisions', value: '5' },
  { label: 'Applications', value: '1 Active' },
  { label: 'Portal', value: 'Online' },
];

export default function Home() {
  return (
    <Layout
      title="Engineering Portal"
      description="Brian Short Apps Engineering Portal"
    >
      <main className="portal">
        <section className="portalHero">
          <div className="portalIntro">
            <p className="eyebrow">Brian Short Apps</p>
            <h1>Engineering Portal</h1>
            <p className="mission">
              Build software that solves real-world problems through thoughtful
              engineering, intuitive user experiences, and dependable cloud architecture.
            </p>

            <div className="portalActions">
              <Link className="portalButton primary" to="/handbook/getting-started/overview">
                Engineering Handbook
              </Link>
              <Link className="portalButton secondary" to="/handbook/standards/foundations/overview">
                Foundations
              </Link>
            </div>
          </div>

          <div className="platformMarkWrap">
            <PlatformMark centerLabel="Portal" interactive />

            <div className="markLegend">
              <Link to="/handbook/standards/foundations/overview">
                <strong>Experience</strong>
                <span>Foundations & standards</span>
              </Link>
              <Link to="/handbook/product-guides/overview">
                <strong>Products</strong>
                <span>Applications & packages</span>
              </Link>
              <Link to="/handbook/standards/adr/overview">
                <strong>Progress</strong>
                <span>Architecture & roadmap</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="statusGrid" aria-label="Platform status">
          {statusItems.map((item) => (
            <div className="statusCard" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="portalSections">
          <Link className="sectionCard" to="/handbook/standards/foundations/overview">
            <span>Foundations</span>
            <p>Identity, platform architecture, and long-term operating principles.</p>
          </Link>

          <Link className="sectionCard" to="/handbook/standards/design-standards/overview">
            <span>Design Standards</span>
            <p>Brand, color, typography, layout, components, and design language.</p>
          </Link>

          <Link className="sectionCard" to="/handbook/standards/adr/overview">
            <span>Architecture Decisions</span>
            <p>The institutional memory behind major platform decisions.</p>
          </Link>
        </section>
      </main>
    </Layout>
  );
}