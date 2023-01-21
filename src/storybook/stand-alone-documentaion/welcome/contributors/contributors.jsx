import { Contributor } from "../contributor/contributor";
import { Contr } from "../assets";
import "./contributors.scss";

const CONTRIBUTERS = [
  {
    imgSrc: Contr,
    fullName: "Jelo Kokhodze",
    email: "jelo@l3vels.xyz",
    title: "Team Lead",
    className: "l3-storybook-welcome-contributors_contributor--bg-pattern-1"
  },
  {
    imgSrc: Contr,
    fullName: "Davit Bakutashvili",
    email: "dato@l3vels.xyz",
    title: "Design Lead",
    className: "l3-storybook-welcome-contributors_contributor--bg-pattern-2"
  },
  {
    imgSrc: Contr,
    fullName: "Levan Chanturia",
    email: "levan@l3vels.xyz",
    title: "Developer",
    className: "l3-storybook-welcome-contributors_contributor--bg-pattern-3"
  },
  {
    imgSrc: Contr,
    fullName: "Giga Chkhikvadze",
    email: "giga@l3vels.xyz",
    title: "Developer",
    className: "l3-storybook-welcome-contributors_contributor--bg-pattern-4"
  }
];

export const Contributors = () => (
  <div className="l3-storybook-welcome-contributors">
    {CONTRIBUTERS.map(({ imgSrc, fullName, email, title, className }) => (
      <Contributor key={email} imgSrc={imgSrc} fullName={fullName} email={email} title={title} className={className} />
    ))}
  </div>
);
