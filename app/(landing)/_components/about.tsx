import { Section } from "@/components/section";
import { profile } from "@/content/profile";

import { Reveal } from "./reveal";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="space-y-5 text-lg leading-relaxed sm:text-xl lg:col-span-7">
          <p>
            I’m a Computer Science undergraduate in Bhopal who ships AI products, not just notebooks: an agentic
            voice-support system built on RAG and LangChain, an end-to-end LLM video-generation pipeline, and a
            deepfake CNN classifier, all three deployed.
          </p>
          <p className="text-pencil">
            I also build websites; the eight on this page are all live. My roles: partner in K2Aqua, and technical head
            at Samarth Rao Studio and at Uniqform. I’ve done two ML and data internships, at FoCDoT Technologies and AI
            Bricks Realtors.
          </p>
          <p className="text-pencil">Next, I want to build agentic and LLM-backed features on a real product team.</p>
        </Reveal>

        <Reveal index={1} className="lg:col-span-4 lg:col-start-9">
          <h3 className="subhead mb-4">Education</h3>
          <ul className="border-t border-seam">
            {profile.education.map((e) => (
              <li key={e.school} className="border-b border-seam py-5">
                <p className="font-medium">{e.degree}</p>
                <p className="text-pencil">{e.school}</p>
                <p className="mt-1 font-mono text-[0.8125rem] text-pencil">{e.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
