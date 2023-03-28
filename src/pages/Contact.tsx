import { ContactForm } from "../components/contacts/ContactForm";
import { ContactInformation } from "../components/contacts/ContactInformation";

import letterSendPic from "../assets/icons/letter-send.png";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center py-4 xl:py-8">
      <h3 className="font-bold text-2xl xl:text-4xl pb-2">Contact Us</h3>
      <h5 className="font-medium text-sm xl:text-lg text-neutral-500 pb-12">
        Any question or remarks? Just write us a message!
      </h5>
      <div
        className="bg-white rounded-xl pb-14 xl:pb-0 p-3 flex flex-wrap
       md:flex-nowrap justify-center relative overflow-hidden"
      >
        <ContactInformation />
        <ContactForm />
        <div
          className="absolute -bottom-[4%] md:-bottom-[7%] xl:-bottom-[10%]
           md:right-[5%] xl:right-[15%]"
        >
          <img
            src={letterSendPic}
            alt="letter send pic"
            className="w-[50%] xl:w-full"
          />
        </div>
      </div>
    </section>
  );
};
