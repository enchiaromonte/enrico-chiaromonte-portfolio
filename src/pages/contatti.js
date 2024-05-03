import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import ContactsMainContent from '@/components/contactsMainContent';

function ContactsPage() {
  return (
    <div>
        <Head>
            <title>Contattami | Enrico Chiaromonte - Front End Developer Portfolio</title>
        </Head>
        <EntranceEffect topPositionStart="100%" topPositionEnd="0" />
        <section className='main-content main-content-contacts' >
            <ContactsMainContent />
        </section>
    </div>
  )
}
 
export default ContactsPage