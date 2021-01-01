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
    <div className='container '>
      <Intro />
      <div className='h-24'></div>
      <Background />
      <div className='h-44'></div>
      <Skills />
      <div className='h-44'></div>
      <Experience />
      <div className='h-44'></div>
      <Projects />
      <div className='h-44'></div>
      <Footer />
    </div>
  )
}
