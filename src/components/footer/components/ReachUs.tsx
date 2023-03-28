import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone.svg";
import { ReactComponent as AdressIcon } from "../../../assets/icons/adress.svg";
import { ReactComponent as MailIcon } from "../../../assets/icons/mail.svg";

export const ReachUs = () => {
  //contact information

  return (
    <>
      <div className="flex flex-col gap-6 mt-3 max-w-[48%] md:max-w-full">
        <h3 className="text-white text-base">Reach us</h3>
        <ul className="flex flex-col gap-3 md:gap-12 pb-12 md:pb-0">
          <li
            className="flex   gap-6 flex-col md:flex-row
         z-10 text-xs md:text-base"
          >
            <PhoneIcon />
            <a href="tel:+10123456789"> +1012 3456 789</a>
          </li>
          <li
            className="flex  gap-6 flex-col md:flex-row
         z-10 text-xs md:text-base"
          >
            <MailIcon />
            <a href="mailto:demo@gmail.com">demo@gmail.com</a>
          </li>

          <li
            className="flex gap-6 flex-col md:flex-row 
        z-10 text-xs md:text-base "
          >
            <AdressIcon className="h-7" />
            132 Dartmouth Street Boston, <br className="hidden md:block" />
            Massachusetts 02156 United States
          </li>
        </ul>
      </div>
    </>
  );
};
