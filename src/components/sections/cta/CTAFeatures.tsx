import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { ctaFeatures } from "./ctaData";

export default function CTAFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {ctaFeatures.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            whileHover={{ y: -6 }}
            className="group h-full"
          >
            <GlowCard
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-7
                transition-all
                duration-500
                group-hover:border-cyan-400/30
                group-hover:bg-white/[0.05]
                group-hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              "
            >
              {/* Glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/15 transition-all duration-500 group-hover:bg-cyan-500/20">
                    <Icon
                      size={30}
                      className="text-cyan-300 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-500 transition-all duration-500 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-cyan-400/30 via-cyan-300/10 to-transparent" />
              </div>
            </GlowCard>
          </motion.div>
        );
      })}
    </div>
  );
}