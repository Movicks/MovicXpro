import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName) {
      toast.error("Full name is required.");
      return;
    }

    if (!formData.email) {
      toast.error("Email address is required.");
      return;
    }

    if (!formData.title) {
      toast.error("Title is required.");
      return;
    }

    if (!formData.message) {
      toast.error("Message is required.");
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          full_name: formData.fullName, // Use your EmailJS template variable names
          email: formData.email,
          phone: formData.phone,
          title: formData.title,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        // Clear the form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          title: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section className="w-full my-10 flex items-center justify-center px-3">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <span className="px-2 py-1 bg-[#d7dbffd0] text-[#6371f6] text-xs mb-2">
            CONTACT ME
          </span>
          <h1 className="text-xl font-bold">Write me a message</h1>
        </div>
        <form
          className="w-full max-w-[60rem] h-auto flex flex-col items-center gap-5 mt-5 shadow-custom px-3 pt-10 pb-4 rounded-xl"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="flex lg:flex-row justify-center gap-3 w-full lg:gap-9">
            <div className="flex-1 min-w-[9.7rem] md:w-[20rem]">
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-2 border-none rounded bg-[#d7dbffd0] focus:outline-none"
                aria-label="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 min-w-[9.7rem] lg:w-[18rem]">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border-none rounded bg-[#d7dbffd0] focus:outline-none"
                aria-label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex lg:flex-row justify-center gap-3 w-full lg:gap-9">
            <div className="flex-1 min-w-[9.7rem] lg:w-[18rem]">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border-none rounded bg-[#d7dbffd0] focus:outline-none"
                aria-label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 min-w-[9.7rem] lg:w-[18rem]">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border-none rounded bg-[#d7dbffd0] focus:outline-none"
                aria-label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex lg:flex-row justify-center gap-3 w-full lg:gap-9">
            <div className="flex-1 min-w-[9.7rem] lg:w-[18rem]">
              <textarea
                placeholder="Message"
                className="w-full bg-[#d7dbffd0] h-[7rem] p-2 border-none flex flex-wrap resize-none focus:outline-none rounded"
                aria-label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button
            className="bg-[#6371f6] px-20 py-3 rounded text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
