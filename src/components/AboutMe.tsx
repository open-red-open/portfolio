'use client';
import { FadeIn, GlowCard, SectionHeader, Socials, Stars } from '@/components';
import { Accounts } from '@/icons';
import Image from 'next/image';
import { useEffect } from 'react';
import { Resend } from 'resend';
const resend = new Resend("re_EoynveUL_AghprLRpH1S8GadVZ7Be7Fma");

interface EmailTemplateProps {
  firstName: string;
}


const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default function AboutMe() {
  useEffect(() => {
    const send = async () => {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['jackwang.m483@gmail.com'],
          subject: "Hello world",
          react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
        });

        if (error) {
          console.log("error")
        }
        else console.log(data);
      } catch (error) {
        console.log("error1")
      }
    }
    send();
  }, [])
  return (
    <div className="relative z-10">
      <SectionHeader
        icon={
          <>
            <Accounts height="28" width="28" />
            <span className="bg-about_me_green icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            I&apos;m a <span className="text-about_me_green">Software Engineer</span> specialized on <span className="text-about_me_green">Web Developments</span>
          </div>
        }
      />
      <Stars id="about-me" />
      <div className="@container">
        <div className="flex flex-col gap-8 mt-24 @lg:flex-row justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Jack Wang</h3>
            <p className="text-base leading-7 text-about_me_green">Senior Software Enginner, Full-stack Web Developer</p>
            <p className="mt-4 text-lg text-gray-500">I&apos;m an experienced software engineer who constantly seeks out innovative solutions to everyday problems.</p>
            <p className="mt-4 text-lg text-gray-500">After 10 years in this industry I have worked with multiple front-end and back-end technologies.</p>
          </div>
          {/* <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/me.jpg" alt="" height={208} width={208} />
          </div> */}
        </div>
        <div className="@container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_green mb-1">| Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Italy</p> - <p className="text-gray-500">Native</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English1</p> - <p className="text-gray-500">Advanced</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
            <FadeIn
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <GlowCard className="hover:shadow-about_me_green/90" glowClassName="from-[#6bc072] to-[#6bc072]">
                <div className="flex flex-col gap-8 @lg:flex-row justify-between">
                  <div className="flex-none mx-auto self-center">
                    <Image className="rounded-2xl object-fill" src="/tech.jpeg" alt="" width={144} height={144} />
                  </div>
                  <div className="max-w-xl flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">M.S. in Computer Science and Technology</h3>
                    <p className="text-base leading-7 text-about_me_green">Università degli Studi di Padova</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
