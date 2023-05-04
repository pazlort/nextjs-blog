import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hace unos años redescubrí la programación y conocí JavaScript.
          Como apasionada que soy por estudiar empecé a hacer distintos cursos y a formarme para poder trabajar en lo que más me interesa y entretiene, que es programar.
        </p>
        <p>BACK END</p>

          <ul>
            <li>Node.js</li>
            <li>Web Servers y Express.js</li>
            <li>SQL</li>
            <li>Diseño de Esquemas en Base de Datos relacionales</li>
            <li>Postgres</li>
            <li>ORM y Sequelize</li>
            <li>Web Servers y Express.js</li>
            <li>Express y Sequelize</li>
            <li>Promises Avanzado</li>
          </ul>

        <p>FRONT-END</p>
          <ul>
            <li>HTML, SASS, CSS</li>
            <li>jQuery y AJAX</li>
            <li>Webpack</li>
            <li>Passport.js</li>
            <li>Testing React</li>
            <li>React</li>
            <li>React-Router</li>
            <li>Context</li>
            <li>Next.js</li>
          </ul>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}