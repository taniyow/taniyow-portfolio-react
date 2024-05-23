import React, { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import { TextDecrypt } from "../content/TextDecrypt";
import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields before sending the message.",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xyyrapod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have sent an email!",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong: ${error.message}. Please try again later.`,
      });
    }
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                id="outlined-message-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
