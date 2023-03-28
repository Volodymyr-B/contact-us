import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { LinkButton } from "../UI/LinkButton";
import { ContactsList } from "./ContactsList";

//  component that render app information and send mail or call if clicked
export const ContactInformation = () => {
  return (
    <div
      className="bg-black w-full xl:w-[490px] xl:h-[650px] text-stone-300 flex flex-col 
      md:justify-between items-center md:items-start text-center md:text-left
       p-10 rounded-t-xl rounded-l-xl relative overflow-hidden"
    >
      <div className="pb-6 md:pb-0">
        <h5 className="text-xl md:text-3xl font-semibold text-white pb-1">
          Contact Information
        </h5>
        <span className="text-sm md:text-base">
          Say something to start a live chat!
        </span>
      </div>
      <ContactsList />
      <ul className="flex gap-6">
        <LinkButton url={"https://twitter.com/"}>
          <TwitterIcon />
        </LinkButton>
        <LinkButton url={"https://www.instagram.com/"}>
          <InstagramIcon />
        </LinkButton>
        <LinkButton url={"https://discord.com/"}>
          <DiscordIcon />
        </LinkButton>
      </ul>
      <div
        className="absolute bg-zinc-900 w-64 h-64 rounded-full 
      md:-bottom-20 -bottom-36 md:-right-20 -right-40"
      />
      <div
        className="absolute bg-[#4848487F] w-16  md:w-32 h-16 md:h-32 rounded-full
       bottom-12 md:bottom-16 right-5 md:right-20"
      />
    </div>
  );
};
