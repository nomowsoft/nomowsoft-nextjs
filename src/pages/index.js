import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients, AboutUs } from "sections";

export const getStaticProps = async ({locale}) => {
  var lang;
  if (locale == "ar"){
    lang = "ar_001"
    console.log(locale)
  }else{
    lang = "en"
  }
  const res_about_us =  await fetch(`
      https://hr.nomowsoft.com/web/about_us?lang=${ lang }
  `)
  const data_about_us = await res_about_us.json();
  const res_our_services =  await fetch(`
      https://hr.nomowsoft.com/web/our_services?lang=${ lang }
  `)
  const data_our_services = await res_our_services.json();
  const res_clients =  await fetch(`
      https://hr.nomowsoft.com/web/clients?lang=${ lang }
  `)
  const data_clients = await res_clients.json();
  const res_about =  await fetch(`
      https://hr.nomowsoft.com/web/about_us?lang=${ lang }
  `)
  const data_about = await res_about.json();
  return {
    props: {
      posts_about_us: data_about_us,
      posts_our_services: data_our_services,
      posts_clients: data_clients,
      posts_about: data_about
    },
  }
}

export default function Home({
  posts_about_us, 
  posts_our_services, 
  posts_clients, 
  posts_about
}) {
  return (
    <PageTemplate title="Home">
      <Introduction />
      <Identity about_us={posts_about_us}/>
      <Services services={posts_our_services}/>
      <Clients clients={posts_clients}/>
      <AboutUs feedbacks={posts_about}/>
    </PageTemplate>
  );
}
