import React from 'react';
import { TechCareLogo } from './Icons';
import {
  Activity,
  ShieldCheck,
  LineChart,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  Stethoscope,
  ChevronRight,
  HeartPulse,
  LayoutDashboard,
  Home,
} from 'lucide-react';

interface HomePageProps {
  onEnterDashboard: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen bg-[#F6F7F8] text-[#072635] selection:bg-[#00D9C6]/20">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E6E9EC] py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TechCareLogo />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#072635]">
            <a href="#features" className="hover:text-[#00D9C6] transition flex items-center gap-1.5">
              <span>Features</span>
            </a>
            <a href="#monitoring" className="hover:text-[#00D9C6] transition">Vitals & Analytics</a>
            <a href="#records" className="hover:text-[#00D9C6] transition">Clinical Records</a>
            <a href="#about" className="hover:text-[#00D9C6] transition">About Platform</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onEnterDashboard}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] text-[#072635] text-[14px] font-bold shadow-xs transition transform active:scale-98 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Launch Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF4FC] text-[#072635] text-[13px] font-bold">
                <Sparkles className="w-4 h-4 text-[#00D9C6]" />
                <span>Next-Generation Patient Health Monitoring</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#072635] leading-[1.12]">
                Intelligent Clinical Care & Real-Time Patient Analytics
              </h1>

              <p className="text-lg text-[#6B7C86] font-normal leading-relaxed max-w-xl">
                Tech.Care provides medical practitioners with a unified clinical suite to track vital signs, dynamic blood pressure trends, medical histories, and laboratory records in real time.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onEnterDashboard}
                  className="px-8 py-4 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] text-[#072635] text-[16px] font-extrabold shadow-md flex items-center justify-center gap-3 transition transform active:scale-98 cursor-pointer"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Open Clinician Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#features"
                  className="px-6 py-4 rounded-full bg-white hover:bg-slate-50 border border-[#E6E9EC] text-[#072635] text-[15px] font-bold flex items-center justify-center gap-2 transition"
                >
                  <span>Explore Features</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E6E9EC]">
                <div>
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#072635] block">99.9%</span>
                  <span className="text-xs text-[#6B7C86] font-medium">Uptime Reliability</span>
                </div>
                <div>
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#072635] block">6-Month</span>
                  <span className="text-xs text-[#6B7C86] font-medium">Trend Graphing</span>
                </div>
                <div>
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#072635] block">100%</span>
                  <span className="text-xs text-[#6B7C86] font-medium">HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Backdrop Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#01F0D0]/30 to-[#8066D9]/20 rounded-3xl blur-2xl opacity-70"></div>
                
                {/* Main Hero Showcase Card */}
                <div className="relative bg-white rounded-2xl shadow-xl border border-[#E6E9EC] overflow-hidden">
                  
                  {/* Visual Image Banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80"
                      alt="Healthcare professional examining patient diagnostics on tablet"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072635]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#01F0D0] block">
                          Active Patient Record
                        </span>
                        <h2 className="text-xl font-bold">Jessica Taylor (Age 28)</h2>
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium border border-white/30">
                        Live Data Feed
                      </span>
                    </div>
                  </div>

                  {/* Micro stats banner */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#DDF4FC] p-3 rounded-xl">
                        <span className="text-[11px] text-[#707070] block font-medium">Respiratory</span>
                        <span className="text-lg font-extrabold text-[#072635]">20 bpm</span>
                      </div>
                      <div className="bg-[#FFE3E8] p-3 rounded-xl">
                        <span className="text-[11px] text-[#707070] block font-medium">Temperature</span>
                        <span className="text-lg font-extrabold text-[#072635]">98.6°F</span>
                      </div>
                      <div className="bg-[#FCE4F0] p-3 rounded-xl">
                        <span className="text-[11px] text-[#707070] block font-medium">Heart Rate</span>
                        <span className="text-lg font-extrabold text-[#072635]">78 bpm</span>
                      </div>
                    </div>

                    <div className="bg-[#F4F0FE] p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#8066D9]/20 flex items-center justify-center">
                          <HeartPulse className="w-5 h-5 text-[#8066D9]" />
                        </div>
                        <div>
                          <span className="text-xs text-[#707070] font-medium block">Blood Pressure (Systolic / Diastolic)</span>
                          <span className="text-base font-extrabold text-[#072635]">160 / 78 mmHg</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={onEnterDashboard}
                        className="px-4 py-2 rounded-full bg-[#01F0D0] text-[13px] font-bold text-[#072635] hover:bg-[#00d8bc] transition cursor-pointer"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-16 bg-white border-y border-[#E6E9EC] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#00D9C6] uppercase">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-[#072635]">
              Built for Modern Medical Workflows
            </h2>
            <p className="text-[#6B7C86] text-base">
              Comprehensive patient tracking features modeled directly from clinician requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-[#F6F7F8] p-8 rounded-2xl border border-[#E6E9EC]/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#DDF4FC] flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-[#00D9C6]" />
              </div>
              <h3 className="text-xl font-bold text-[#072635] mb-2">
                Dynamic 6-Month Charting
              </h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Interactive Chart.js visualizations tracking systolic and diastolic trends with historical thresholds and custom scales.
              </p>
              <ul className="space-y-2 text-[13px] text-[#072635] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Dual systolic & diastolic curves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Configurable timeframe filtering</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F6F7F8] p-8 rounded-2xl border border-[#E6E9EC]/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#FFE3E8] flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-[#072635] mb-2">
                Automated Vitals Diagnostics
              </h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Instantly compute status indicators for respiratory rate, body temperature, and heart rhythm with anomaly flags.
              </p>
              <ul className="space-y-2 text-[13px] text-[#072635] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Live status trend badges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Unit-verified medical metrics</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F6F7F8] p-8 rounded-2xl border border-[#E6E9EC]/60 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#F4F0FE] flex items-center justify-center mb-6">
                <FileSpreadsheet className="w-6 h-6 text-[#8066D9]" />
              </div>
              <h3 className="text-xl font-bold text-[#072635] mb-2">
                Diagnostic & Lab Records
              </h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Structured condition tables detailing diagnosis history, clinical descriptions, observation status, and downloadable lab reports.
              </p>
              <ul className="space-y-2 text-[13px] text-[#072635] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Observation & cured state tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>One-click lab report downloads</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Diagnostic & Clinical Records Section */}
      <section id="records" className="py-16 bg-[#F0F4F8] border-b border-[#E6E9EC] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#00D9C6] uppercase">
              Patient Data Management
            </span>
            <h2 className="text-3xl font-extrabold text-[#072635]">
              Diagnostic & Clinical Records
            </h2>
            <p className="text-[#6B7C86] text-base">
              Centralized record-keeping ensuring physicians, nurses, and lab technicians maintain complete clinical visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Record Item 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E9EC] shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#DDF4FC] flex items-center justify-center mb-5">
                <FileSpreadsheet className="w-6 h-6 text-[#00D9C6]" />
              </div>
              <h3 className="text-lg font-bold text-[#072635] mb-2">Structured Diagnostic List</h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Record exact problem names, clinical definitions, and diagnostic observations (e.g., Hypertension, Type 2 Diabetes, Asthma) with standardized status tags.
              </p>
              <div className="bg-[#F6F7F8] p-3.5 rounded-xl text-xs space-y-2 border border-[#E6E9EC]/50">
                <div className="flex items-center justify-between text-[#072635] font-semibold">
                  <span>Hypertension</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px]">Under Observation</span>
                </div>
                <div className="flex items-center justify-between text-[#072635] font-semibold">
                  <span>Type 2 Diabetes</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px]">Cured</span>
                </div>
              </div>
            </div>

            {/* Record Item 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E9EC] shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#FFE3E8] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold text-[#072635] mb-2">Lab Test Archives & Downloads</h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Seamless digital storage of blood counts, CT scans, radiology, lipid panels, and pathology reports ready for immediate one-click downloading.
              </p>
              <div className="bg-[#F6F7F8] p-3.5 rounded-xl text-xs space-y-2 border border-[#E6E9EC]/50">
                <div className="flex items-center justify-between text-[#072635] font-medium">
                  <span>Blood Tests (Full Panel)</span>
                  <span className="text-[#00D9C6] font-bold">PDF Ready</span>
                </div>
                <div className="flex items-center justify-between text-[#072635] font-medium">
                  <span>CT Scans - Thorax</span>
                  <span className="text-[#00D9C6] font-bold">DICOM / PDF</span>
                </div>
              </div>
            </div>

            {/* Record Item 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6E9EC] shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#F4F0FE] flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-[#8066D9]" />
              </div>
              <h3 className="text-lg font-bold text-[#072635] mb-2">Comprehensive Patient Demographics</h3>
              <p className="text-[#6B7C86] text-[14px] leading-relaxed mb-4">
                Instantly retrieve verified contact info, date of birth, emergency contacts, insurance carriers, and primary physician assignments in one pane.
              </p>
              <div className="bg-[#F6F7F8] p-3.5 rounded-xl text-xs space-y-2 border border-[#E6E9EC]/50">
                <div className="flex items-center justify-between text-[#072635] font-medium">
                  <span className="text-[#707070]">Emergency Contact:</span>
                  <span className="font-bold">Philip Taylor</span>
                </div>
                <div className="flex items-center justify-between text-[#072635] font-medium">
                  <span className="text-[#707070]">Insurance Provider:</span>
                  <span className="font-bold">Sunrise Health Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Integration Banner */}
      <section id="monitoring" className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#072635] to-[#123E56] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="px-3 py-1 rounded-full bg-[#01F0D0]/20 text-[#01F0D0] text-xs font-bold uppercase tracking-wider">
              Real-Time API Sync
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Direct Coalition Technologies API Integration
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Powered by dynamic Basic Authentication and real-time JSON parsing. Seamlessly retrieve records for Jessica Taylor and all registered clinic patients.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onEnterDashboard}
                className="px-8 py-3.5 rounded-full bg-[#01F0D0] hover:bg-[#00d8bc] text-[#072635] text-[15px] font-extrabold transition shadow-lg cursor-pointer"
              >
                Access Live Patient Dashboard
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 -bottom-8 w-96 h-96 opacity-20">
            <Activity className="w-full h-full text-[#01F0D0]" />
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section id="about" className="py-16 bg-white border-t border-[#E6E9EC] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF4FC] text-[#072635] text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#00D9C6]" />
                <span>Enterprise Grade Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072635] leading-tight">
                About the Tech.Care Healthcare Platform
              </h2>
              <p className="text-[#6B7C86] text-base leading-relaxed">
                Tech.Care was engineered to reduce physician charting fatigue and eliminate data silos. By combining live telemetry streams with structured historical diagnostic charts, clinicians can identify critical patient trends in seconds.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#01F0D0]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9C6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072635]">Zero-Latency Vitals Synchronisation</h4>
                    <p className="text-xs text-[#6B7C86] mt-0.5">Automated updates across temperature, pulse, respiratory rate, and blood pressure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#01F0D0]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9C6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072635]">HIPAA & SOC-2 Compliant Architecture</h4>
                    <p className="text-xs text-[#6B7C86] mt-0.5">End-to-end encryption for diagnostic notes, lab assets, and patient communications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#01F0D0]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00D9C6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#072635]">Multi-Specialty Care Coordination</h4>
                    <p className="text-xs text-[#6B7C86] mt-0.5">Enabling general practitioners, cardiologists, and lab specialists to collaborate on a single unified chart.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F6F7F8] p-8 rounded-3xl border border-[#E6E9EC] space-y-6">
              <h3 className="text-xl font-bold text-[#072635]">Clinical Performance Metrics</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#072635] mb-1">
                    <span>Diagnostic Speed</span>
                    <span className="text-[#00D9C6]">4x Faster</span>
                  </div>
                  <div className="h-2 w-full bg-[#E6E9EC] rounded-full overflow-hidden">
                    <div className="h-full bg-[#01F0D0] rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#072635] mb-1">
                    <span>Charting Accuracy</span>
                    <span className="text-[#00D9C6]">99.8%</span>
                  </div>
                  <div className="h-2 w-full bg-[#E6E9EC] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8066D9] rounded-full w-[99%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#072635] mb-1">
                    <span>Clinician Satisfaction</span>
                    <span className="text-[#00D9C6]">98.4%</span>
                  </div>
                  <div className="h-2 w-full bg-[#E6E9EC] rounded-full overflow-hidden">
                    <div className="h-full bg-rose-400 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E9EC] flex items-center justify-between">
                <span className="text-xs text-[#6B7C86]">Assessment Prototype v2.4</span>
                <button
                  type="button"
                  onClick={onEnterDashboard}
                  className="text-xs font-bold text-[#072635] hover:text-[#00D9C6] flex items-center gap-1 cursor-pointer transition"
                >
                  <span>Launch Clinician View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#072635] text-white py-10 px-4 sm:px-8 text-center text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TechCareLogo />
          </div>
          <p className="text-slate-400">© 2026 Tech.Care Clinical Health Solutions. Front-End Developer Skill Assessment.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onEnterDashboard}
              className="text-[#01F0D0] font-bold hover:underline cursor-pointer"
            >
              Open Dashboard
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
