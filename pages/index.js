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
      <div className="fixed-header font-medium">
        ✨&nbsp;My work on&nbsp;<a href="https://sports.kayacorp.com.np/" target="_blank" rel="noopener noreferrer" className='font-bold underline'>Kaya Sports</a>&nbsp;got featured on&nbsp;<a href="https://www.designrush.com/best-designs/websites" target="_blank" rel="noopener noreferrer" className='font-bold underline'>Design Rush</a>&nbsp;✨
      </div>
      <Head>
        <title>Ayush Bajra | Software Developer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container' style={{ paddingTop: '20px' }}>
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
