import { ContactForm } from "../components/contact-me";
import { DotBackground } from "../components/global/dot-bg";



const ContactPage = () => {
    // const {} = useForm()
  return (
    <DotBackground>
      <section className="h-fit  flex items-center justify-center">
        <ContactForm />
      </section>
    </DotBackground>
  );
};

export default ContactPage;
