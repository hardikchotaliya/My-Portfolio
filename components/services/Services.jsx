import ServicesCard from './ServiceCard';
import HyperOne from '../customH1/HyperOne';

const cards = [
  {
    src: '/svg/frontend.svg',
    alt: 'Agile Testing & Sprint Management',
    title: 'Agile Testing & Sprint Management',
    description:
      'Streamline QA processes in Agile to ensure timely and well-tested feature deliveries.',
  },
  {
    src: '/svg/automation.svg',
    alt: 'Test Automation',
    title: 'Test Automation',
    description:
      'Automate testing for web, mobile, and APIs to ensure consistent quality and save manual effort.',
  },
  {
    src: '/svg/api.svg',
    alt: 'API Testing',
    title: 'API Testing',
    description:
      'Validate APIs for seamless communication and reliable data exchange across systems.',
  },
  {
    src: '/svg/framework.svg',
    alt: 'Framework Design',
    title: 'Framework Design',
    description:
      'Develop scalable automation frameworks using tools like WebdriverIO and TypeScript.',
  },
  // {
  //   src: '/svg/frontend.svg',
  //   alt: 'Continuous Integration & Delivery',
  //   title: 'Continuous Integration & Delivery',
  //   description:
  //     'Implement automation in CI/CD pipelines for rapid and reliable software releases.',
  // },
  // {
  //   src: '/svg/frontend.svg',
  //   alt: 'Performance Testing',
  //   title: 'Performance Testing',
  //   description:
  //     'Enhance system performance using tools like K6 and Grafana for fast and stable experiences.',
  // },
];

const Services = () => {
  // const breif = `As an Automation Test Engineer, I provide comprehensive test automation services, including framework development, test script creation, and CI/CD integration. With expertise in leading automation tools and a focus on efficiency and reliability, I deliver robust testing solutions that ensure high-quality software and faster release cycles.`;
  const breif = `As a highly skilled Automation Test Engineer/SDET, I specialize in ensuring seamless, high-quality software releases through robust test automation, precise quality assurance, and advanced testing strategies. With expertise in designing scalable automation frameworks, implementing CI/CD pipelines, and leveraging modern testing tools, I deliver reliable software systems that enhance user satisfaction and drive business success.`;
  return (
    <div id="services">
      <HyperOne value={'Services'} />
      <div className="my-5">
        <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
          {breif}
        </p>
      </div>
      <div className="my-12 grid lg:grid-cols-4 sm:grid-cols-1 m-5 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            className={`logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
