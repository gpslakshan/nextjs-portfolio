"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const schema = z.object({
    name: z
      .string({ required_error: "Name is required." })
      .min(3, { message: "Name must be at least 3 characters." }),
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Please provide a valid email address." }),
    subject: z
      .string({ required_error: "Subject is required." })
      .min(3, { message: "Subject must be at least 3 characters." }),
    message: z
      .string({ required_error: "Message is required." })
      .min(3, { message: "Message must be at least 3 characters." }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 w-full">
              <input
                type="text"
                placeholder="Your name"
                className="input"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-3 w-full">
              <input
                type="text"
                placeholder="Your email"
                className="input"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-3 w-full">
              <input
                type="text"
                placeholder="Subject"
                className="input"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="mb-3 w-full">
              <textarea
                cols={30}
                rows={10}
                placeholder="Message"
                className="textarea"
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="btn-primary font-bold bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="h-40"></div> */}
    </section>
  );
};

export default Contact;
