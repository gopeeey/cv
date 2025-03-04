import { CiGlobe } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { resumeData } from "../data/resume-data";
import Contact from "./Contact";
import Section from "./Section";

export default function Page() {
  return (
    <div>
      <div className="mt-6 border-b-[1.5px] pb-3">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">{resumeData.name}</h1>
          <span className="text-2xl inline-block mx-2">|</span>
          <h4 className="text-[2rem]">Full Stack Developer</h4>
        </div>

        <div className="mt-2 flex">
          <Contact
            display={resumeData.contact.email}
            link={`mailto:${resumeData.contact.email}`}
            icon={<MdMailOutline />}
          />

          <Contact
            display={resumeData.contact.tel}
            link={`tel:${resumeData.contact.tel.replace("+", "")}`}
            icon={<LuPhone />}
          />

          {/* <Contact
            display={resumeData.contact.whatsapp}
            link={`https://wa.me/${resumeData.contact.whatsapp.replace(
              "+234",
              "0"
            )}`}
            icon={<FaWhatsapp />}
          /> */}

          <Contact
            display={resumeData.portfolioLink.replace("https://", "")}
            link={resumeData.portfolioLink}
            icon={<CiGlobe />}
          />

          <Contact
            display={resumeData.location}
            link={resumeData.locationLink}
            icon={<SlLocationPin />}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12 mt-10">
        <div className="col-span-8">
          <Section title="SUMMARY">
            <p className="text-sm">{resumeData.summary}</p>
          </Section>

          <Section title="WORK EXPERIENCE">
            {resumeData.work.map((role) => (
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
              {resumeData.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </ul>
          </Section>

          <Section title="PERSONAL PROJECTS">
            <div>
              {resumeData.projects.map((project) => (
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
