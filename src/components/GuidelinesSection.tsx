import { useState } from "react";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/effects/ParallaxSection";
import MagicBento from "@/components/MagicBento";

const GuidelinesSection = () => {
  const items = [
    {
      title: "1. Team Formation",
      content: (
        <p>Students must form a team consisting of a minimum of 1 and a maximum of 4 members.</p>
      ),
    },
    {
      title: "2. Team Limit",
      content: <p>Each team is allowed to register for only one Problem Statement.</p>,
    },
    {
      title: "3. Idea Nomination",
      content: (
        <div>
          <p>A maximum of 20 registrations are allowed per Problem Statement. Teams must complete the registration process within the given timeline by filling out the registration form link.</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Registration Start Date: 16.02.2026</li>
            <li>Idea Confirmation Date: 20.03.2026</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Selection and Shortlisting",
      content: (
        <div>
          <p>All registered teams are required to submit their proposed solution in PPT format with a maximum limit of 10 slides through the provided Google Forms link.</p>
          <p className="mt-2">After our evaluation, the top 5 teams per Problem Statement will be shortlisted and announced for the Grand Finale.</p>
        </div>
      ),
    },
    {
      title: "5. Registration Fee",
      content: (
        <div>
          <p>Only shortlisted teams can proceed with payment. After the shortlisted teams are announced, participants must pay a registration fee of ₹250 each to confirm their participation in the Grand Finale.</p>
          <p className="mt-2 text-xs text-muted-foreground">(Payment details and instructions will be shared with shortlisted teams through email by the organizers.)</p>
        </div>
      ),
    },
    {
      title: "6. Grand Finale (OFFLINE MODE)",
      content: (
        <div>
          <p>The Grand Finale will be conducted as a 10-hour OFFLINE Hackathon.</p>
          <p className="mt-2">All participating teams will be briefed about the evaluation process by the organizers at the start of the event. The evaluation will consist of multiple rounds conducted during the hackathon period.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="guidelines" className="section-padding relative overflow-hidden pb-2 md:pb-4">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <ParallaxSection speed={0.15}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border mb-6 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              RULES & GUIDELINES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Guidelines & <span className="text-gradient-green">Details</span>
            </h2>
          </motion.div>
        </ParallaxSection>

        <MagicBento items={items} />
      </div>
    </section>
  );
};

export default GuidelinesSection;
