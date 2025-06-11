import Image from 'next/image';
import { MapPin } from 'lucide-react';

import ChiagozieHeadshot from '/public/images/chiagozie-headshot.jpeg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={ChiagozieHeadshot}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m David{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
             I&apos;m a <strong>creative frontend engineer</strong> who turns complex ideas into seamless digital realities.<br />
  With a deep love for <strong>clean code and captivating interfaces</strong>, I blend the art of design with the science of development.<br /><br />

  From rapid prototypes to production-ready apps, I specialize in <strong>building delightful user experiences</strong> using Webflow, HTML, CSS, JavaScript, and TypeScript.<br /><br />

  I&apos;m not just passionate about writing functional code &mdash; I care deeply about how products <strong>feel</strong>, <strong>perform</strong>, and <strong>evolve</strong>.<br />
  My strength lies in using <strong>modern frameworks like React</strong> to create scalable, maintainable, and accessible solutions that users genuinely enjoy.

            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Lagos, Nigeria</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
