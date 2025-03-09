import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'SAP | Senior Software Engineer.',
    date: 'Apr 2021 - Feb 2025',
    description: [
      'Worked as Lead Engineer of 5-person team, driving high growth of early-stage FinTech Startup by delivering new features and timely updates',
      'Built large-scale microservice based mortgage platform in ExpressJS, Python, FastAPI, developed features for multiple projects across ECS, Lambda and legacy platforms',
      'Wrote front-end web/mobile applications using Next.js, Vue.js, implementing responsive design principles, and compatibility, lazy loading using.',
      'Lead software projects starting from spec doc review, writing tech designs, up until monitoring code which runs in production',
      'Working with CI/CD, unit-tests, and other software best practices. Utilized Docker, Jenkins, Jest, Cypress, Mocha, integrated with AWS, GCP'
    ],
    image: { url: '/work/sap_logo.jpg', height: 100, width: 100, className: 'rounded-none' },
  },
  {
    title: 'Revolut | Senior Software Engineer',
    date: 'May 2019 - Mar 2021',
    description: [
      'Ownership of code repositories and microservices written mainly in Typescript, Python, Ruby, conducted code reviews, and mentored fellow engineers',
      'Led the Development of Homeowners and Renters product lines in Angular, Python, Django, Node.js, PostgreSQL, leveraged AWS Cloud services',
      'Modernized data platform, integrated AI/ML models and machine learning pipelines, optimized performance and accuracy',
      'Migrated fundamental flows from a Ruby on Rails monolith to NestJS micro-services, diagnosed and resolved root causes, cutting open bug count by over 85%',
      'Spearheading the development of integrations with proprietary predictive data models, enhancing pricing accuracy and customer satisfaction',
      'Developed React + TypeScript frontend, API schemas, and Java-based microservices (REST API, event streaming, PSQL, DDD)',
      'Managed deployment & monitoring (GCP, Kubernetes, CI/CD), ensuring scalability & reliability'
    ],
    image: { url: '/work/revolut_logo.jpg', height: 100, width: 100, className: '' },
  },
  {
    title: 'Everli | Software Engineer.',
    date: 'Jul 2016 - May 2019',
    description: [
      'Designed and implemented features to enhance user experience by integrating 3rd parties for data analytics and marketing campaigns.',
      'Specialized in backend development using PHP, Laravel, MySQL, RabbitMQ, Redis, and Elasticsearch.',
      'Collaborated closely with designers, product designers, and developers to implement features as per requirements.',
      'Conducted stand-up meetings, retrospective meetings, sprint reviews & planning, and code reviews across squads and components.',

    ],
    image: { url: '/work/everliofficial_logo.jpg', height: 100, width: 100, className: '' },
  },
  {
    title: 'Google | Software Engineer.',
    date: 'Jan 2015 - Jun 2016',
    description: [
      'Worked in a cross-functional team focused on evangelizing and bringing our cloud infrastructure to users.',
      'Implemented this project from the ground up with WebXR, PWA, React, Three.js, TypeScript, Next.js, Google OAuth, and Google API.',
      'Fixed bugs in a Java-based datacenter software tool designed to manage maintenance workflows within physical data centers.',
      'Tested and gave feedback on experimental Client APIs. Quick-started on web development technologies.',
      'Prototyped a tool for managing a high-availability LAMP stack cluster deployed on GCE.'
    ],
    image: { url: '/work/google_logo.jpg', height: 100, width: 100, className: 'bg-white' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
