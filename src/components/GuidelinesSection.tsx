import { useState } from "react";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/effects/ParallaxSection";
import MagicBento from "@/components/MagicBento";
import { FileDown } from "lucide-react";

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
          <p>Teams must briefly describe their idea and submit it in both Word and PPT (maximum 10 slides) formats using the provided templates.</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <a
              href="/Team_Name-Idea_Title.docx"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/40 bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
            >
              <FileDown size={13} />
              Download Word Template
            </a>
            <a
              href="/TechZeal2k26 Template.pptx"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-secondary/40 bg-secondary/10 text-secondary text-xs font-medium hover:bg-secondary/20 transition-colors"
            >
              <FileDown size={13} />
              Download PPT Template
            </a>
          </div>
          <p className="mt-3">All teams should complete their registration and upload the files through the registration form within the specified timeline. (<a href="https://forms.gle/259zjaLWZGnamYa7A" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Registration form</a>)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Registration Start Date: <span className="text-primary font-semibold">01.03.2026</span></li>
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
            <li>Idea Submission Date: <span className="text-primary font-semibold">24.03.2026</span></li> 
            <li>Shortlist Announcement: <span className="text-primary font-semibold">26.03.2026</span></li>
            <li>Grand Finale: <span className="text-primary font-semibold">28.03.2026</span></li>
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
          <p>The Grand Finale will be held as a 10-hour offline hackathon, from <span className="text-primary font-semibold">09:00 AM</span> to <span className="text-primary font-semibold">07:00 PM</span>.</p>
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
