import React, { useState } from "react";
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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

            <main className="flex-grow py-12 sm:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Title */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <Mail size={15} />
                    <span>Get In Touch</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                    LET'S CONNECT
                  </h1>
                  <p
                    className={`mt-3 text-sm sm:text-base ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Have a project in mind, an opportunity to discuss, or just want to say hi? Send me a message and I'll get back to you promptly.
                  </p>
                </div>

                {/* 2-Column Grid: Info Cards + Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
                  {/* Left Column: Direct Contact Info */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-md transition-all h-full flex flex-col justify-between ${
                        isDark
                          ? "bg-slate-900/60 border-slate-800"
                          : "bg-white border-slate-200 shadow-md"
                      }`}
                    >
                      <div>
                        <h2
                          className={`text-xl font-bold tracking-tight mb-2 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Contact Information
                        </h2>
                        <p
                          className={`text-sm mb-8 ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          You can also reach me directly through any of these platforms:
                        </p>

                        <div className="space-y-4">
                          <a
                            href="mailto:asiyasmuhammed18@gmail.com"
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark
                                ? "bg-slate-800/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-800/80"
                                : "bg-slate-50 border-slate-200/80 hover:border-indigo-300 hover:bg-white"
                            }`}
                          >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500">
                              <Mail size={20} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-slate-400 font-medium">Email</p>
                              <p
                                className={`text-sm font-semibold truncate ${
                                  isDark ? "text-slate-200" : "text-slate-800"
                                }`}
                              >
                                asiyasmuhammed18@gmail.com
                              </p>
                            </div>
                          </a>

                          <a
                            href="tel:+919048999825"
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark
                                ? "bg-slate-800/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-800/80"
                                : "bg-slate-50 border-slate-200/80 hover:border-indigo-300 hover:bg-white"
                            }`}
                          >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-500">
                              <Phone size={20} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-slate-400 font-medium">Phone</p>
                              <p
                                className={`text-sm font-semibold truncate ${
                                  isDark ? "text-slate-200" : "text-slate-800"
                                }`}
                              >
                                +91 9048999825
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://www.google.com/maps?q=Moorkkanad,+Kerala"
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark
                                ? "bg-slate-800/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-800/80"
                                : "bg-slate-50 border-slate-200/80 hover:border-indigo-300 hover:bg-white"
                            }`}
                          >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-500">
                              <MapPin size={20} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-slate-400 font-medium">Location</p>
                              <p
                                className={`text-sm font-semibold truncate ${
                                  isDark ? "text-slate-200" : "text-slate-800"
                                }`}
                              >
                                Kerala, Malappuram
                              </p>
                            </div>
                          </a>

                          <a
                            href="https://linkedin.com/in/muhammed-asiyas"
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group hover:-translate-y-0.5 ${
                              isDark
                                ? "bg-slate-800/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-800/80"
                                : "bg-slate-50 border-slate-200/80 hover:border-indigo-300 hover:bg-white"
                            }`}
                          >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-500">
                              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                              <p
                                className={`text-sm font-semibold truncate ${
                                  isDark ? "text-slate-200" : "text-slate-800"
                                }`}
                              >
                                Muhammed Asiyas
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
                        <p className="text-xs text-slate-500">
                          Based in Malappuram, Kerala. Open to remote roles & relocation worldwide.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Web3Forms Contact Form */}
                  <div className="lg:col-span-7">
                    <div
                      className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-md transition-all ${
                        isDark
                          ? "bg-slate-900/60 border-slate-800 shadow-2xl shadow-indigo-950/20"
                          : "bg-white border-slate-200 shadow-xl"
                      }`}
                    >
                      <h2
                        className={`text-2xl font-bold tracking-tight mb-2 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Send a Direct Message
                      </h2>
                      <p
                        className={`text-sm mb-8 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        Fill out the details below and I'll respond as soon as possible.
                      </p>

                      <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                          <label
                            className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. John Doe"
                            className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${
                              isDark
                                ? "bg-slate-800/50 border-slate-700/80 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                            }`}
                          />
                        </div>

                        <div>
                          <label
                            className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Your Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. john@example.com"
                            className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none ${
                              isDark
                                ? "bg-slate-800/50 border-slate-700/80 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                            }`}
                          />
                        </div>

                        <div>
                          <label
                            className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                              isDark ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Message
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={6}
                            placeholder="Write your message here..."
                            className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all outline-none resize-y ${
                              isDark
                                ? "bg-slate-800/50 border-slate-700/80 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                            }`}
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send Message
                            </>
                          )}
                        </button>

                        {/* Status notification */}
                        {result && (
                          <div
                            className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                              status === "success"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : status === "error"
                                ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                                : "bg-slate-500/10 text-slate-500"
                            }`}
                          >
                            {status === "success" && <CheckCircle2 size={18} />}
                            {status === "error" && <AlertCircle size={18} />}
                            <span>{result}</span>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <footer
              className={`py-8 border-t text-center text-xs transition-colors duration-300 ${
                isDark
                  ? "bg-[#070b16] border-slate-800 text-slate-500"
                  : "bg-slate-100 border-slate-200 text-slate-500"
              }`}
            >
              <p>© {new Date().getFullYear()} Muhammed Asiyas. All rights reserved.</p>
            </footer>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
