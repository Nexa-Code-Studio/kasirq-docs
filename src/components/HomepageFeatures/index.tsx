import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mudah Digunakan',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        KasirQ dirancang untuk langsung digunakan tanpa proses rumit. Antarmuka dibuat sederhana agar kasir dan supervisor dapat mulai bekerja dalam hitungan menit, tanpa perlu latar belakang teknis.
      </>
    ),
  },
  {
    title: 'Fokus ke Operasional Toko',
    Svg: require('@site/static/img/operasional.svg').default,
    description: (
      <>
        Dokumentasi ini membantu Anda memahami fitur KasirQ secara praktis. Mulai dari transaksi penjualan, pengelolaan produk & stok, hingga laporan dan keuangan. Anda dapat langsung fokus menjalankan toko, bukan mempelajari sistem yang berbelit.
      </>
    ),
  },
  {
    title: 'Aplikasi Terintegrasi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        KasirQ merupakan aplikasi terpusat yang menyatukan proses kasir, manajemen stok, laporan, dan keuangan dalam satu sistem. Panduan ini selalu diperbarui dan dapat diakses langsung dari aplikasi tanpa perlu membuka browser terpisah.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
