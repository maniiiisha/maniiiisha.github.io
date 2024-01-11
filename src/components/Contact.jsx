import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tilt } from 'react-tilt';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { contacts} from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6pljrrs",
        "template_2ls3p7x",
        {
          from_name: form.name,
          to_name: "Manisha Singh",
          from_email: form.email,
          to_email: "manisha.exe@gmail.com",
          message: form.message,
        },
        "KmqhR-eSErDu_TDM1"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  const ContactCard = ({ index, title, icon, paragraph, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
    
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
            <p className="text-white text-center">
              {paragraph}
            </p>
          </div>
        </motion.div>
      </Tilt>
    </a>
  );
  
  return (
    <>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>
      
      <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >  
        <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <h6 className={styles.sectionHeadText} style={{ lineHeight: '0.9' }}>Send<br />message.</h6>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {contacts.map((service, index, paragraph, url) => (
          <ContactCard key={service.title} paragraph={paragraph} url={url} index={index} {...service} />
        ))}
      </div>
    </div>
  </>
  );
};

export default SectionWrapper(Contact, "contact");