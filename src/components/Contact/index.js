import React, { useState } from "react";
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ScrollReveal, ParallaxBand } from "../common/Animations";
import TiltCard from "../common/TiltCard";

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setResult("Sending message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7e8af641-7be5-4dd4-8f4b-8a8dc8c3877a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResult("Something went wrong. Please check your network and try again.");
    }
  };

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <div className="w-full flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow py-14 sm:py-20 relative overflow-hidden">
              {/* Kopiko Ambient Glow Wells */}
              <ParallaxBand speed={0.08} className="absolute top-[-5%] left-1/2 -translate-x-1/2 pointer-events-none opacity-50">
                <div className="w-[700px] h-[400px] bg-amber-600/10 rounded-full blur-[150px]" />
              </ParallaxBand>
              <ParallaxBand speed={0.05} className="absolute bottom-[5%] right-[-5%] pointer-events-none opacity-30">
                <div className="w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[110px]" />
              </ParallaxBand>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Asymmetric Section Header ── */}
                <ScrollReveal direction="up" className="mb-16">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 max-w-6xl mx-auto">
                    <div>
                      <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                        <Mail size={14} /> [ GET IN TOUCH ]
                      </div>
                      <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-[1.08]">
                        LET'S<br />
                        <span className="text-gradient-kopiko">CONNECT</span>
                      </h1>
                    </div>
                    <p className={`max-w-xs text-sm leading-relaxed ${isDark ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                      Have a project in mind, an opportunity to discuss, or just want to say hi? Send me a message and I'll get back to you promptly.
                    </p>
                  </div>
                </ScrollReveal>

                {/* 2-Column Grid: Info Cards + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
                  {/* Left Column: Direct Contact Info */}
                  <ScrollReveal direction="left" delay={80} className="lg:col-span-5 flex flex-col gap-4">
                    <TiltCard maxTilt={4} scale={1.005} glare={false}>
                      <div className={`p-6 sm:p-9 rounded-3xl border backdrop-blur-md transition-all h-full flex flex-col justify-between ${
                        isDark
                          ? "bg-[#180e0a]/85 border-amber-900/40 shadow-xl shadow-black/40"
                          : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/10"
                      }`}>
                        <div>
                          <h2 className={`text-xl font-bold font-display tracking-tight mb-2 ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>
                            Contact Information
                          </h2>
                          <p className={`text-sm mb-8 ${isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"}`}>
                            You can also reach me directly through any of these platforms:
                          </p>

                          <div className="space-y-4">
                            <a href="mailto:asiyasmuhammed18@gmail.com" className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark ? "bg-[#20110b]/70 border-amber-900/40 hover:border-amber-500/50 hover:bg-[#28150e]" : "bg-amber-50/60 border-amber-900/10 hover:border-amber-500/40 hover:bg-white"
                            }`}>
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/15 text-amber-500 border border-amber-500/25"><Mail size={20} /></div>
                              <div className="min-w-0">
                                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Email</p>
                                <p className={`text-sm font-bold truncate ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>asiyasmuhammed18@gmail.com</p>
                              </div>
                            </a>

                            <a href="tel:+919048999825" className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark ? "bg-[#20110b]/70 border-amber-900/40 hover:border-amber-500/50 hover:bg-[#28150e]" : "bg-amber-50/60 border-amber-900/10 hover:border-amber-500/40 hover:bg-white"
                            }`}>
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-orange-500/15 text-orange-500 border border-orange-500/25"><Phone size={20} /></div>
                              <div className="min-w-0">
                                <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold">Phone</p>
                                <p className={`text-sm font-bold truncate ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>+91 9048999825</p>
                              </div>
                            </a>

                            <a href="https://www.google.com/maps?q=Moorkkanad,+Kerala" target="_blank" rel="noreferrer" className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark ? "bg-[#20110b]/70 border-amber-900/40 hover:border-amber-500/50 hover:bg-[#28150e]" : "bg-amber-50/60 border-amber-900/10 hover:border-amber-500/40 hover:bg-white"
                            }`}>
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-600/15 text-amber-600 border border-amber-600/25"><MapPin size={20} /></div>
                              <div className="min-w-0">
                                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Location</p>
                                <p className={`text-sm font-bold truncate ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>Kerala, Malappuram</p>
                              </div>
                            </a>

                            <a href="https://linkedin.com/in/muhammed-asiyas" target="_blank" rel="noreferrer" className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark ? "bg-[#20110b]/70 border-amber-900/40 hover:border-amber-500/50 hover:bg-[#28150e]" : "bg-amber-50/60 border-amber-900/10 hover:border-amber-500/40 hover:bg-white"
                            }`}>
                              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/15 text-amber-500 border border-amber-500/25">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">LinkedIn</p>
                                <p className={`text-sm font-bold truncate ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>Muhammed Asiyas</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-amber-900/20 dark:border-amber-900/40">
                          <p className="text-xs text-amber-600/80 dark:text-amber-400/80">
                            Based in Malappuram, Kerala. Open to remote roles &amp; relocation worldwide.
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </ScrollReveal>

                  {/* Right Column: Web3Forms Contact Form */}
                  <ScrollReveal direction="right" delay={120} className="lg:col-span-7">
                    <TiltCard maxTilt={3} scale={1.005} glare={false}>
                      <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-md transition-all ${
                        isDark
                          ? "bg-[#180e0a]/85 border-amber-900/40 shadow-2xl shadow-black/60"
                          : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/10"
                      }`}>
                        <h2 className={`text-2xl font-bold font-display tracking-tight mb-2 ${isDark ? "text-[#fffaf5]" : "text-[#241209]"}`}>
                          Send a Direct Message
                        </h2>
                        <p className={`text-sm mb-8 ${isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"}`}>
                          Fill out the details below and I'll respond as soon as possible.
                        </p>

                        <form onSubmit={onSubmit} className="space-y-5">
                          <div>
                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                              Your Name
                            </label>
                            <input
                              type="text" name="name" required placeholder="e.g. John Doe"
                              className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all outline-none ${
                                isDark
                                  ? "bg-[#20110b]/80 border-amber-900/50 text-[#fffaf5] placeholder-amber-900/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                  : "bg-amber-50/50 border-amber-900/15 text-[#241209] placeholder-amber-800/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                              }`}
                            />
                          </div>

                          <div>
                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                              Your Email Address
                            </label>
                            <input
                              type="email" name="email" required placeholder="e.g. john@example.com"
                              className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all outline-none ${
                                isDark
                                  ? "bg-[#20110b]/80 border-amber-900/50 text-[#fffaf5] placeholder-amber-900/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                  : "bg-amber-50/50 border-amber-900/15 text-[#241209] placeholder-amber-800/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                              }`}
                            />
                          </div>

                          <div>
                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                              Message
                            </label>
                            <textarea
                              name="message" required rows={6} placeholder="Write your message here..."
                              className={`w-full px-4 py-3.5 rounded-2xl border text-sm transition-all outline-none resize-y ${
                                isDark
                                  ? "bg-[#20110b]/80 border-amber-900/50 text-[#fffaf5] placeholder-amber-900/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                  : "bg-amber-50/50 border-amber-900/15 text-[#241209] placeholder-amber-800/40 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                              }`}
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="water-sheen-btn w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 shadow-xl shadow-amber-900/35 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                          >
                            {status === "submitting" ? (
                              <><Loader2 size={18} className="animate-spin" />Sending Message...</>
                            ) : (
                              <><Send size={18} />Send Message</>
                            )}
                          </button>

                          {result && (
                            <div className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-semibold ${
                              status === "success"
                                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/25"
                                : status === "error"
                                ? "bg-rose-500/10 text-rose-500 border border-rose-500/25"
                                : "bg-amber-500/10 text-amber-500 border border-amber-500/25"
                            }`}>
                              {status === "success" && <CheckCircle2 size={18} />}
                              {status === "error" && <AlertCircle size={18} />}
                              <span>{result}</span>
                            </div>
                          )}
                        </form>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                </div>
              </div>
            </main>

            <footer className={`py-8 border-t text-center text-xs transition-colors duration-300 ${
              isDark
                ? "bg-[#0b0402] border-amber-900/25 text-[#917561]"
                : "bg-[#f4ebe0] border-amber-900/10 text-[#6d4e38]"
            }`}>
              <p>© {new Date().getFullYear()} Muhammed Asiyas. All rights reserved.</p>
            </footer>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
