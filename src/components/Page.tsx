import { CiGlobe } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { personalInfo } from "../data/personal-info";
import { ResumeData } from "../types";
import Contact from "./Contact";
import Section from "./Section";

type Props = {
  data: ResumeData;
};

export default function Page({ data }: Props) {
  return (
    <div>
      <div className="mt-6 border-b-[1.5px] pb-3">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
          <span className="text-2xl inline-block mx-2">|</span>
          <h4 className="text-[2rem]">{data.title}</h4>
        </div>

        <div className="mt-2 flex">
          <Contact
            display={personalInfo.contact.email}
            link={`mailto:${personalInfo.contact.email}`}
            icon={<MdMailOutline />}
          />

          <Contact
            display={personalInfo.contact.tel}
            link={`tel:${personalInfo.contact.tel.replace("+", "")}`}
            icon={<LuPhone />}
          />

          {/* <Contact
            display={personalInfo.contact.whatsapp}
            link={`https://wa.me/${personalInfo.contact.whatsapp.replace(
              "+234",
              "0"
            )}`}
            icon={<FaWhatsapp />}
          /> */}

          <Contact
            display={personalInfo.portfolioLink.replace("https://", "")}
            link={personalInfo.portfolioLink}
            icon={<CiGlobe />}
          />

          <Contact
            display={personalInfo.location}
            link={personalInfo.locationLink}
            icon={<SlLocationPin />}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12 mt-10">
        <div className="col-span-8">
          <Section title="SUMMARY">
            <p className="text-sm">{data.summary}</p>
          </Section>

          <Section title="WORK EXPERIENCE">
            {data.work.map((role) => (
              <div key={role.company} className="mb-4">
                <h3 className="text-md font-bold">
                  {role.title},{" "}
                  <span className="font-medium ml-1">
                    {role.start} - {role.end}
                  </span>
                </h3>

                <a
                  className="text-sm text-accent"
                  href={role.link}
                  target="_blank"
                >
                  {role.company}
                </a>

                <ul className="list-disc pl-6 text-sm">
                  {role.accomplishments.map((acc) => (
                    <li key={acc}>{acc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>
        </div>

        <div className="col-span-4">
          <Section title="SKILLS">
            <ul className="text-sm grid grid-cols-2">
              {data.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </ul>
          </Section>

          <Section title="PERSONAL PROJECTS">
            <div>
              {data.projects.map((project) => (
                <div key={project.title} className="mb-4">
                  <h3 className="font-bold text-md">{project.title}</h3>
                  <p className="text-sm">{project.shortDescription}</p>
                  <a
                    href={project.link.href}
                    target="_blank"
                    className="text-sm text-accent"
                  >
                    {project.link.href}
                  </a>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
