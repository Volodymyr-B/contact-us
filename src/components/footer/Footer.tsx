import { NewsLetter } from "./components/NewsLetter";
import { ReachUs } from "./components/ReachUs";
import { Company } from "./components/Company";
import { Legal } from "./components/Legal";
import { QuickLinks } from "./components/QuickLinks";

import { Divider, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <section className="max-w-[1440px] w-full text-stone-300 md:py-9 px-3 md:px-20">
      <Typography
        className=" text-2xl font-extrabold text-center 
      py-7 md:py-11 text-white"
      >
        Logo Here
      </Typography>
      <Divider className="w-full mb-5 bg-stone-300 " />
      <div
        className="flex flex-wrap justify-between sm:justify-center
       xl:flex-nowrap gap-7 md:gap-14"
      >
        <ReachUs />
        <Company />
        <Legal />
        <QuickLinks />
        <NewsLetter />
      </div>
    </section>
  );
};
