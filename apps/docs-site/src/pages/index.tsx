import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Engineering Portal"
      description="Brian Short Apps Engineering Portal"
    >
      <main style={{ padding: '4rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 13 }}>
          Brian Short Apps
        </p>

        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Engineering Portal
        </h1>

        <p style={{ fontSize: '1.25rem', maxWidth: 720 }}>
          The central engineering handbook for Brian Short Apps standards,
          architecture, foundations, platform packages, and product systems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 40 }}>
          <Link className="button button--primary button--lg" to="/handbook/getting-started/overview">
            Engineering Handbook
          </Link>
          <Link className="button button--secondary button--lg" to="/handbook/developer-guides/overview">
            Developer Guides
          </Link>
          <Link className="button button--secondary button--lg" to="/handbook/onboarding/overview">
            Onboarding
          </Link>
        </div>
      </main>
    </Layout>
  );
}