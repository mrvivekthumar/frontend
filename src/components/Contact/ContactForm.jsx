import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
    return (
        <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
                Got an Artwork Vision? We've Got the Platform. Let's Collaborate
            </h1>
            <p className="">
                Tell us more about yourself and the art you're looking to showcase. Let's work together to bring your creative ideas to life.
            </p>

            <div className="mt-7">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactForm;