import { assets } from "@/assets/assets";
import toast from "react-hot-toast";
import Image from "next/image";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const FORM_URL = process.env.NEXT_PUBLIC_WEB3FORMS_URL;

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto]'
    >
      <h2 className="text-center mb-2 text-lg font-ovo">Connect with me</h2>
      <p className="text-center text-5xl font-ovo">Get in touch</p>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="flex-1 px-3 py-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="flex-1 px-3 py-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          name="message"
          required
          className="w-full px-3 py-2 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>

        <button
          className="py-3 px-12 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        <p></p>
      </form>
    </div>
  );
};

export default Contact;
