"use client";

import Button from "../../Atoms/Button/Button";
import Container from "../../Atoms/Container/Container";
import Typography from "../../Atoms/Typography/Typography";
import Input from "../../Atoms/Input/Input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import styles from "./contactUs.module.scss";
import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useAnimOnScroll from "@/app/utils/useAnimOnScroll";

const ContactUs = () => {
  const [formData, setData] = useState({
    from_name: "",
    from_company: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const form = useRef();

  const [currentPosition, setPosition] = useState({});
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  useAnimOnScroll(ref, setTop, setPosition, currentPosition, 0.7);

  const notify = () =>
    toast.success("Form sent successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const inputHandler = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6cpnnsj",
        "template_oue6kxb",
        form.current,
        process.env.local.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setData({
            from_name: "",
            from_company: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setData({
            from_name: "",
            from_company: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        }
      );
  };

  return (
    <div ref={ref} id="contact" className={styles.contactUs}>
      <div
        style={{
          transform: `translate(${0}%, ${top / 3}%) rotate(${0}deg)`,
        }}
        className={styles.parallax}
      ></div>
      <div data-section id="contac" className={styles.anchor}></div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Container className={styles.contactUs_wrapper}>
        <div className={styles.contactUs_wrapper_content}>
          <Typography
            className={styles.contactUs_wrapper_content_title}
            component="h2"
            variant="h2Title"
          >
            Contact us
          </Typography>
          <Typography
            className={styles.contactUs_wrapper_content_description}
            variant="body1"
          >
            We will get back to you as soon as possible
          </Typography>
        </div>

        <form
          ref={form}
          id="form"
          onSubmit={sendEmail}
          name="form"
          className={styles.contactUs_wrapper_form}
        >
          <div className={styles.contactUs_wrapper_form_inputs}>
            <Input
              className={styles.contactUs_wrapper_form_inputs_input}
              value={formData.from_name}
              isRequired={true}
              inputHandler={inputHandler}
              label={"Name"}
              name="from_name"
            ></Input>
            <Input
              inputHandler={inputHandler}
              value={formData.from_company}
              className={styles.contactUs_wrapper_form_inputs_input}
              isRequired={true}
              name="from_company"
              label={"Company"}
            ></Input>
            <Input
              inputHandler={inputHandler}
              value={formData.from_email}
              className={styles.contactUs_wrapper_form_inputs_input}
              isRequired={true}
              type="email"
              name="from_email"
              label={"Email"}
            ></Input>
            <Input
              inputHandler={inputHandler}
              value={formData.from_phone}
              className={styles.contactUs_wrapper_form_inputs_input}
              type="tel"
              name="from_phone"
              label={"Phone (optional)"}
            ></Input>
          </div>

          <Input
            inputHandler={inputHandler}
            label={"Message"}
            value={formData.message}
            className={styles.contactUs_wrapper_form_textArea}
            isRequired={true}
            textArea={true}
            name="message"
          ></Input>
          <Button form="form" type="submit">
            Send message
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ContactUs;
