import { useState } from "react";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/effects/ParallaxSection";
import MagicBento from "@/components/MagicBento";

const GuidelinesSection = () => {
  const items = [
    {
      title: "1. Team Formation",
      content: (
        <p>Each team must consist of a minimum of 2 members and a maximum of 4 members.</p>
      ),
    },
    {
      title: "2. Team Registration Limit",
      content: <p>A team is permitted to register for only one Problem Statement.</p>,
    },
    {
      title: "3. Idea Submission",
      content: (
        <div>
          <p>Teams must briefly describe their idea and submit it in both Word and PPT (maximum 10 slides) formats using the provided templates (Word template and PPT template).</p>
          <p className="mt-2">All teams should complete their registration and upload the files through the registration form within the specified timeline. (Registration form)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Registration Start Date: 01.03.2026</li>
            <li>Idea Submission Deadline: 20.03.2026</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Selection & Shortlisting Process",
      content: (
        <div>
          <p>All registered teams will present their idea in an online presentation. The meeting link will be shared via email.</p>
          <p className="mt-2">After the online presentations, shortlisted teams will be notified via email along with payment instructions for the Grand Finale.</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Online Presentation Dates: 21.03.2026 & 22.03.2026</li>
            <li>Idea Confirmation Date: 24.03.2026</li>
            <li>Grand Finale: 28.03.2026</li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Registration Fee",
      content: (
        <div>
          <p>Only the shortlisted teams are required to pay the registration fee.</p>
          <p className="mt-2">Each participant must pay ₹250 to confirm their participation in the Grand Finale.</p>
        </div>
      ),
    },
    {
      title: "6. Grand Finale (Offline Mode)",
      content: (
        <div>
          <p>The Grand Finale will be held as a 10-hour offline hackathon, from 09:00 AM to 07:00 PM.</p>
          <p className="mt-2">At the start of the event, organizers will brief all teams about the evaluation criteria and process. Multiple evaluation rounds will be conducted throughout the hackathon duration.</p>
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
