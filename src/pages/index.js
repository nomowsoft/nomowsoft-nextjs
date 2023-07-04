import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients, AboutUs } from "sections";

export const getStaticProps = async () => {
  const res =  await fetch("https://hr.nomowsoft.com/web/about_us?lang=00_ar")
  const data = await res.json();
  const res1 =  await fetch("https://hr.nomowsoft.com/web/our_services?lang=00_ar")
  const data1 = await res1.json();
  const res2 =  await fetch("https://hr.nomowsoft.com/web/clients?lang=00_ar")
  const data2 = await res2.json();
  const res3 =  await fetch("https://hr.nomowsoft.com/web/about_us?lang=00_ar")
  const data3 = await res3.json();
  return {
    props: {
      posts: data,
      posts1: data1,
      posts2: data2,
      posts3: data3,
    },
  }
}


export default function Home({posts, posts1, posts2, posts3}) {
  return (
    <PageTemplate title="Home">
      <Introduction />
      <Identity about_us={posts}/>
      <Services services={posts1}/>
      <Clients clients={posts2}/>
      <AboutUs feedbacks={posts3}/>
    </PageTemplate>
  );
}
