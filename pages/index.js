import Head from 'next/head'
import {
  Intro,
  Background,
  Skills,
  Experience,
  Projects,
  Footer
} from '../components';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Intro />
        <div className='h-6 md:h-24'></div>
        <Background />
        <div className='h-20 md:h-44'></div>
        <Skills />
        <div className='h-20 md:h-44'></div>
        <Experience />
        <div className='h-20 md:h-44'></div>
        <Projects />
        <div className='h-20 md:h-44'></div>
        <Footer />
      </div>
    </>
  )
}
