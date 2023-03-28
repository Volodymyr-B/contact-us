import { FC, PropsWithChildren } from "react";

interface IconButtonProps {
  url: string;
}
// custom link that can be reuse , styling match with landing requirements
export const LinkButton: FC<PropsWithChildren<IconButtonProps>> = ({
  url,
  children,
}) => {
  return (
    <li
      className="w-7 h-7 bg-zinc-900 hover:bg-white child-path:hover:fill-black 
     rounded-full flex justify-center items-center"
    >
      <a target="_blank" rel="noreferrer" href={url}>
        {children}
      </a>
    </li>
  );
};
