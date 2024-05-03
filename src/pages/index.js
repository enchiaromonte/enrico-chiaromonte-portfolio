import Head from 'next/head';
import EntranceEffect from '@/components/entrance';
import HomeHeroMenu from '@/components/homeHeroMenu';
import HomeMainContent from '@/components/homeMainContent';

function IndexPage() {

  return (
    <div>
      <Head>
        <title>Enrico Chiaromonte Portfolio</title>
      </Head>
      <EntranceEffect topPositionStart="0" topPositionEnd="100%" />
      <section className='main-content main-content-home' >
          <div className='content-left'>
            <HomeMainContent />
          </div>
          <div className='content-right'>
            <HomeHeroMenu />
          </div>
      </section>
    </div>
  )

}
 
export default IndexPage