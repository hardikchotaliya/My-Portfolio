import HyperOne from '../customH1/HyperOne';
import SkillCard from './skillsCard/SkillsCard';
const Skills = () => {
  const skillsData = [
    { name: 'WebDriverIO', imageSrc: '/svg/skills/wdio.svg' },
    { name: 'JavaScript', imageSrc: '/svg/skills/javascript.svg' },
    { name: 'TypeScript', imageSrc: '/svg/skills/Typescript.svg' },
    { name: 'Selenium', imageSrc: '/svg/skills/selenium.svg' },
    { name: 'Cucumber', imageSrc: '/svg/skills/cucumber.svg' },
    { name: 'BrowserStack', imageSrc: '/svg/skills/browserstack.svg' },
    { name: 'Mocha', imageSrc: '/svg/skills/mocha.svg' },
    { name: 'AWS', imageSrc: '/svg/skills/aws.svg' },
    { name: 'Node', imageSrc: '/svg/skills/nodejs.svg' },
    { name: 'Git', imageSrc: '/svg/skills/git.svg' },
    { name: 'GitHub', imageSrc: '/svg/skills/github.svg' },
    { name: 'VSCode', imageSrc: '/svg/skills/vscode.svg' },
    { name: 'Jira', imageSrc: '/svg/skills/jira.svg' },
    { name: 'BitBucket', imageSrc: '/svg/skills/bitbucket.svg' },
    { name: 'Algolia', imageSrc: '/svg/skills/algolia.svg' },
    { name: 'Postman', imageSrc: '/svg/skills/postman.svg' },
    { name: 'Gatling', imageSrc: '/svg/skills/gatling.svg' },
    { name: 'MacOs', imageSrc: '/svg/skills/macos.svg' },
    { name: 'Figma', imageSrc: '/svg/skills/figma.svg' },
    { name: 'Slack', imageSrc: '/svg/skills/slack.svg' },
    { name: 'Hashnode', imageSrc: '/svg/skills/hashnode.svg' },
    { name: 'Trello', imageSrc: '/svg/skills/trello.svg' },
    { name: 'Discord', imageSrc: '/svg/skills/discord.svg' },
    { name: 'HTML5', imageSrc: '/svg/skills/html.svg' },
    { name: 'CSS', imageSrc: '/svg/skills/css.svg' },
    { name: 'Notion', imageSrc: '/svg/skills/notion.svg' },
  ];
  const skillstext = `These are the essential tools, libraries, and frameworks that
          constitute my current tech stack, enabling me to develop robust and
          innovative applications.`;
  return (
    <div id="skills" className="container lg:my-24">
      <div className="flex flex-col items-center">
        <HyperOne value="My Skills" />
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {skillstext}
        </p>
      </div>
      <div className="skillCard mt-12 flex justify-center flex-wrap lg:mx-32 z-1 gap-8 ">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            imageSrc={skill.imageSrc}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
