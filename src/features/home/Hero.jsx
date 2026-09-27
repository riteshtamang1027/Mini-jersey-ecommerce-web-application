import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import "./Hero.css";

function CampaignTypography() {
  return (
    <motion.div
      className="campaign-art"
      initial={{ opacity: 0, y: 28, rotate: 3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      aria-hidden="true"
    >
      <div className="campaign-art-index">K · 026</div>
      <div className="campaign-art-number">10</div>
      <div className="campaign-art-rule" />
      <div className="campaign-art-pills">
        <span>HOME</span>
        <span>AWAY</span>
        <span>ARCHIVE</span>
      </div>
      <div className="campaign-art-caption">THE TERRACE EDITION <span>— 2026</span></div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="campaign-section">
      <div className="campaign-banner">
        <div aria-hidden="true" className="campaign-grid" />
        <div className="campaign-header">
          <span>KITHAUS <span className="campaign-header-slash">/</span> FOOTBALL CULTURE</span>
          <span className="campaign-header-season">HOME · AWAY · ALWAYS</span>
        </div>

        <div className="campaign-content">
          <motion.div
            className="campaign-copy"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            <motion.p
              className="campaign-kicker"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              <span className="campaign-kicker-dot" /> THE NEW SEASON COLLECTION
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              WEAR THE
              <br />
              <span>GAME.</span>
              <span className="campaign-headline-mark">’26</span>
            </motion.h1>
            <motion.p
              className="campaign-description"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45 }}
            >
              Matchday staples, terrace classics and the shirts that stay with
              you long after the final whistle.
            </motion.p>
            <motion.div
              className="campaign-actions"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/clubKits" className="campaign-primary-action">
                SHOP THE COLLECTION <ArrowRight size={16} />
              </Link>
              <Link to="/nationalTeam" className="campaign-secondary-action">
                EXPLORE NATIONAL KITS
              </Link>
            </motion.div>
            <div className="campaign-footnote">
              <span>01</span> KITS WITH A STORY. MADE FOR YOURS.
            </div>
          </motion.div>

          <CampaignTypography />
        </div>

        <div className="campaign-bottom">
          <span>CLUB SHIRTS <i>·</i> NATIONAL TEAMS <i>·</i> RETRO GRAILS</span>
          <a href="#featured-collections">
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
