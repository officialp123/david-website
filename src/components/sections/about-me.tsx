import Image from 'next/image';

import SagarFullPose from '/public/images/chiagozie-full-pose.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              creative and detail-oriented developer
            </Link>{' '} wWith over 5 years of experience in front-end development, including 5 years of specialized expertise in Webflow, I bring a strong focus on creating user-centric, conversion-driven designs for complex single-page applications (SPAs).

I’m deeply passionate about uniting the technical and visual layers of digital products, transforming ideas into intuitive, high-impact experiences. Pixel-perfect design, seamless user experience, and writing clean, readable, high-performance code aren’t just goals, they’re the standards I live by.

I thrive in environments where design meets code, and where every detail contributes to building fast, accessible, and visually striking applications.
          </Typography>
          <Typography>
            I&apos;m committed to adhering to best practices in accessibility, performance optimization, and production monitoring, ensuring that my projects are both user-friendly and performant. I thrive in collaborative environments and am a strong communicator, always eager to share knowledge and learn from others I&apos;m building cutting-edge web applications using
            modern technologies such as HTML, CSS, JS, TypeScript, Reactjs and much more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            I&apos;m constantly seeking new challenges and pushing the boundaries of what&apos;s possible in web development. I believe that technology has the power to make a positive impact on the world, and I&apos;m excited to contribute my skills to projects that make a difference. you can take a look at my{' '}
            
          </Typography>
         <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Sc. in Computer Science
              </Typography>
              <Typography component="li">Detail-oriented and Problem solving</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring creative Individual</Typography>
            </ul>
          </div>
     
          <Typography>
            One last thing, I&apos;m available for full time or contract work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
          </div>
      
      </div>
    </Container>
  );
};

export default AboutMeSection;
