import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="p-6 max-w-[1000px] mx-auto" id="contact">
      <h1 className="text-4xl mb-5 lg:mt-[40px] lg:mb-[30px] text-blue-600">
        Contact Me
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="mb-4">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like to discuss. I'm also
            available for hire.
          </div>
          <div className="mb-4">
            <div className="">Email me at:</div>
            <div className="font-bold">sachinlakshan04@gmail.com</div>
          </div>
          <div>
            <div>Socials:</div>
            <div className="flex flex-row gap-x-3">
              <BiLogoGmail size="20" />
              <FaLinkedin size="20" />
              <FaGithub size="20" />
              <FaMedium size="20" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-3 w-full">
            <input type="text" placeholder="Your name" className="input" />
          </div>
          <div className="mb-3 w-full">
            <input type="text" placeholder="Your email" className="input" />
          </div>
          <div className="mb-3 w-full">
            <input type="text" placeholder="Subject" className="input" />
          </div>
          <div className="mb-3 w-full">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="textarea"
            ></textarea>
          </div>
          <div>
            <button className="btn-primary font-bold bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <div className="h-40"></div> */}
    </section>
  );
};

export default Contact;
