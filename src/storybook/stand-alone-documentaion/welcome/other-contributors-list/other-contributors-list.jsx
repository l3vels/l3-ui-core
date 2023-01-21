import { useEffect, useMemo, useState } from "react";
import { Link, Paragraph } from "../../../components";
import "./other-contributors-list.scss";

const BASE_CLASS = "l3-other-contributors-list";

const excludedDevelopers = new Set();
excludedDevelopers.add(41898282); // github-actions[bot]
excludedDevelopers.add(49699333); // dependabot[bot]

const STATIC_CONTRIBUTERS = [
  {
    name: "Giga Chkhikvadze",
    href: "mailto:devorahfr@l3vels.xyz"
  },
  {
    name: "Jelo kokhodze",
    href: "https://www.linkedin.com/in/jelokokhodze/"
  },
  {
    name: "Levan Chanturia",
    href: "mailto:leval@l3vels.xyz"
  },
  {
    name: "Davit Bakhutashivli",
    href: "mailto:dato@l3vels.xyz"
  }
];

export const OtherContributorsList = () => {
  const [contributorsJson, setContributorsJson] = useState();
  useEffect(() => {
    fetch("https://api.github.com/repos/l3vels/l3-ui-core/contributors")
      .then(response => response.json())
      .then(data => setContributorsJson(data));
  }, []);

  const contributors = useMemo(() => {
    if (contributorsJson && Array.isArray(contributorsJson)) {
      // developer contributors
      const developerContributors = contributorsJson
        .filter(contributor => !excludedDevelopers.has(contributor.id))
        .map(contributor => ({ name: contributor.login, href: contributor.html_url, key: contributor.id }));

      return STATIC_CONTRIBUTERS.concat(developerContributors).map(({ name, href, key }) => (
        <Link key={key || href} href={href} className={`${BASE_CLASS}_developer`}>
          {name}
        </Link>
      ));
    }
  }, [contributorsJson]);

  return (
    <Paragraph className={BASE_CLASS}>
      {contributors ? <>Thanks to all of our contributors {contributors}</> : null}
    </Paragraph>
  );
};
