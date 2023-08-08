/* eslint-disable no-unused-vars */
import PageTemplate from "components/Templates/PageTemplate";
import { Introduction, Identity, Services, Clients, AboutUs } from "sections";
import Goals from "sections/Goals";

export const getStaticProps = async ({ locale }) => {
  var lang;
  if (locale == "ar") {
    lang = "ar_001";
  } else {
    lang = "en";
  }
  const res_about_us = await fetch(`
      https://hr.nomowsoft.com/web/about_us?lang=${lang}
  `);
  const data_about_us = await res_about_us.json();

  const res_our_services = await fetch(`
      https://hr.nomowsoft.com/web/our_services?lang=${lang}
  `);
  const data_our_services = await res_our_services.json();

  const res_clients = await fetch(`
      https://hr.nomowsoft.com/web/clients?lang=${lang}
  `);
  const data_clients = await res_clients.json();

  const res_about = await fetch(`
      https://hr.nomowsoft.com/web/about_us?lang=${lang}
  `);
  const data_about = await res_about.json();

  const our_vision = await fetch(`
  https://hr.nomowsoft.com/web/our_vision?lang=${lang}
`);
  const data_our_vision = await our_vision.json();

  const our_message = await fetch(`
  https://hr.nomowsoft.com/web/our_message?lang=${lang}
`);
  const data_our_message = await our_message.json();

  const static_info = await fetch(`
  https://hr.nomowsoft.com/web/static_info?lang=${lang}
`);
  const data_static_info = await static_info.json();
  return {
    props: {
      posts_about_us: data_about_us,
      posts_our_services: data_our_services,
      posts_clients: data_clients,
      posts_about: data_about,
      posts_our_vision: data_our_vision,
      posts_our_message: data_our_message,
      facebook: data_static_info[0].facebook,
      linkedin: data_static_info[0].linkedin,
      twitter: data_static_info[0].twitter,
      whatsapps: data_static_info[0].whatsapp,
      email: data_static_info[0].email,
    },
  };
};

export default function Home({
  posts_about_us,
  posts_our_services,
  posts_clients,
  posts_about,
  posts_our_vision,
  posts_our_message,
  facebook,
  linkedin,
  twitter,
  whatsapps,
  email,
}) {
  return (
    <PageTemplate
      title="Home"
      facebook={facebook}
      linkedin={linkedin}
      twitter={twitter}
      whatsapps={whatsapps}
      email={email}
      services={posts_our_services}
    >
      <Introduction />
      <Identity about_us={posts_about_us} />
      <Goals our_vision={posts_our_vision} our_message={posts_our_message} />
      <Services services={posts_our_services} />
      <Clients clients={posts_clients} />
      <AboutUs feedbacks={posts_about} />
    </PageTemplate>
  );
}
