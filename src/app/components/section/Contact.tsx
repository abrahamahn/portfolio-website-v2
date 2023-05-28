import React, { RefObject, FormEvent } from "react";
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";

interface ContactProps {
  form: RefObject<HTMLFormElement>;
  register: UseFormRegister<{ name: string; email: string; message: string }>;
  setValue: UseFormSetValue<{ name: string; email: string; message: string }>;
  errors: FieldErrors<{ name: string; email: string; message: string }>;
  sendEmail: (e: FormEvent) => void;
  contactSectionRef: RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
  contactSectionRef,
}) => {
  return (
    <div className="contact" id="contact" ref={contactSectionRef}>
      <div className="container">
        <div className="title">
          <h3>Contact</h3>
        </div>
        <div className="extra_info">
          <ul className="wrapper">
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="icon">
                  <img src="assets/contact/phone.png" alt="icon" />
                </div>
                <div className="content">
                  <h3>Phone</h3>
                  <ul>
                    <li>
                      <a href="Tel: +1 650 254 6342">+1 650 254 6342</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="list_inner">
                <div className="icon">
                  <img src="assets/contact/email.png" alt="icon" />
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <ul>
                    <li>
                      <a href="mailto:satmorningrain@gmail.com">
                        satmorningrain@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mainpart">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="title">
              <p>
                Please send me a message for
                <br />
                <span> resume request or new projects.</span>
              </p>
            </div>
            <div className="fields">
              <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <div className="first_row">
                  <input
                    {...register("name", {
                      required: true,
                      maxLength: {
                        value: 30,
                        message:
                          "Please enter a name with fewer than 30 characters.",
                      },
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue("name", e.target.value);
                      },
                    })}
                    type="text"
                    placeholder="Name *"
                    className="text"
                    defaultValue="Your name"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className="invalid-feedback">Name is required</span>
                  )}
                </div>
                <div className="second">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue("email", e.target.value);
                      },
                    })}
                    type="email"
                    placeholder="Email *"
                    className="text"
                    defaultValue="Your email"
                  />
                  {errors.email && (
                    <span className="invalid-feedback">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="third">
                  <textarea
                    {...register("message", {
                      required: true,
                      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setValue("message", e.target.value);
                      },
                    })}
                    placeholder="Message *"
                    className="text"
                    defaultValue="Your message"
                  ></textarea>
                  {errors.message && (
                    <span className="invalid-feedback">
                      Message is required
                    </span>
                  )}
                </div>
                <div className="button">
                  <button type="submit" className="color" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
