import Head from 'next/head';
import EntranceEffect from '@/components/entrance';
import WorksHeroMenu from '@/components/worksHeroMenu'; 
import WorksMainContent from '@/components/worksMainContent';

function WorksPage() {
  return (
    <div>
      <Head>
        <title>Works - Enrico Chiaromonte Portfolio</title>
      </Head>
      <EntranceEffect topPositionStart="100%" topPositionEnd="0" />
      <section className='main-content main-content-works' >
        <div className='content-left'>
          <WorksMainContent />
        </div>
        <div className='content-right'>
          <WorksHeroMenu />
        </div>
      </section>
    </div>
  )
}
 
export default WorksPage