import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Login({ onLogin }) {
  const [utorid, setUtorid] = useState("millerel");
  const [password, setPassword] = useState("••••••••••••");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!utorid.trim() || !password.trim()) {
      setError("UTORid and Password are required.");
      return;
    }
    onLogin(utorid);
  };

  return (
    <div className="min-screen bg-slate-100 flex flex-col justify-between min-h-screen text-slate-800 font-sans">
      {/* Top Banner */}
      <div className="bg-[#002a5c] py-4 border-b-4 border-[#e3e9f3] px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <img src={logo} alt="UofT Crest" className="h-16 w-auto object-contain" />
          <div>
            <h1 className="text-white font-semibold text-lg tracking-wide leading-none">UNIVERSITY OF</h1>
            <h1 className="text-white font-bold text-xl tracking-wider leading-none">TORONTO</h1>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[460px] bg-white rounded border border-slate-200 shadow-md overflow-hidden">
          {/* WebLogin Header */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
            <h2 className="text-xl font-bold text-[#002a5c]">Weblogin</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded">
                {error}
              </div>
            )}

            {/* Warning Info box */}
            <div className="bg-[#fffbeb] border border-[#fef08a] rounded p-4 text-xs text-[#854d0e] flex flex-col gap-2">
              <p className="font-semibold">Important Security Notice:</p>
              <p>
                To protect your privacy, always log out and close all browser windows when you are finished.
              </p>
              <p>
                UTORid is your username, <span className="font-bold">NOT</span> your email address.
              </p>
            </div>

            {/* UTORid Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="utorid" className="text-sm font-semibold text-slate-700">
                UTORid
              </label>
              <input
                id="utorid"
                type="text"
                value={utorid}
                onChange={(e) => setUtorid(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#002a5c] focus:border-[#002a5c] transition-all text-sm"
                placeholder="e.g. millerel"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#002a5c] focus:border-[#002a5c] transition-all text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-[#002a5c] hover:bg-[#001b3f] text-white font-semibold py-2 px-4 rounded text-sm transition-colors shadow-sm active:translate-y-[1px]"
            >
              Log In
            </button>

            {/* Bottom Links */}
            <div className="mt-4 border-t border-slate-100 pt-4 flex flex-col gap-1 text-xs text-blue-800 font-medium">
              <a href="#" className="hover:underline">Forgot your password or UTORid?</a>
              <a href="#" className="hover:underline">Need help logging in?</a>
              <a href="#" className="hover:underline">What is my UTORid?</a>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-200 py-6 text-center text-xs text-slate-500 border-t border-slate-300">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 gap-2">
          <span>© University of Toronto</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
