import { SubmitHandler, useForm } from "react-hook-form";
import { contactFormSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";

type formData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(contactFormSchema),
  });

  const OnSubmit: SubmitHandler<formData> = (value) => {
    console.log(value);
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Connect With Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have a question or inquire, please drop a message.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            className="flex flex-wrap -m-2"
            onSubmit={handleSubmit(OnSubmit)}
          >
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-xs font-medium text-red-500 inline-block w-[200px] text-wrap">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-xs font-medium text-red-500 inline-block w-[200px] text-wrap">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <span className="text-xs font-medium text-red-500 inline-block w-[250px] text-wrap">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
