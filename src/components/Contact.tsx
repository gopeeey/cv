import { ReactElement } from "react";

type Props = {
  link: string;
  display?: string;
  icon: ReactElement;
};

export default function Contact({ link, display, icon }: Props) {
  return (
    <a href={link} target="_blank" className="flex items-center mr-2.5">
      <span className="mr-1 mt-0.5">{icon}</span>
      <span className="text-accent">{display ? display : link}</span>
    </a>
  );
}
