import Nav2 from "../Components/Nav2";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav2 />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
