"use client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactPage from "../components/Contact";

const Contact = () => {
  return (
    <>
      <NavBar />
      <ContactPage onSubmit={(data) => console.log("Form submitted:", data)} />
      <Footer />
    </>
  );
};

export default Contact;
