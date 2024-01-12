"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import contactSchema from "../api/send-email/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  type FormData = z.infer<typeof contactSchema>;
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FieldValues) => {
    setSubmitting(true);
    const resSubmit = await axios.post("/api/send-email", data);
    if (resSubmit.data.mesg == "success") {
      toast.success("Message sent!");
      reset();
    } else {
      toast.error("Message is not delivered. Something went wrong!");
    }
    setSubmitting(false);
  };

  return (
    <section className=" bg-slate-50" id="contact">
      <div className="max-w-[1000px] mx-auto p-6">
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
                <Link href="mailto:sachinlakshan04@gmail.com">
                  <BiLogoGmail size="20" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sachin-lakshan/"
                  target="_blank"
                >
                  <FaLinkedin size="20" />
                </Link>
                <Link href="https://github.com/gpslakshan" target="_blank">
                  <FaGithub size="20" />
                </Link>
                <Link href="https://medium.com/@gpslakshan" target="_blank">
                  <FaMedium size="20" />
                </Link>
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
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="h-40"></div> */}
    </section>
  );
};

export default Contact;
