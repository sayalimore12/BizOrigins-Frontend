import React from "react";
import {
  IoBusinessOutline,
  IoBusinessSharp,
} from "react-icons/io5";
import { MdOutlineBusiness, MdOutlineAppRegistration, MdCorporateFare, MdManageAccounts, MdOutlineTipsAndUpdates, MdAccountTree } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { FaWpforms, FaPersonCircleQuestion } from "react-icons/fa6";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { BsBank, BsCardChecklist } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import { TbFileReport, TbLicense } from "react-icons/tb";
import { LuMonitorCheck } from "react-icons/lu";
import { GrSteps } from "react-icons/gr";
import { CgSearchFound } from "react-icons/cg";
import { RiBookShelfLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const services = [
  { icon: <IoBusinessOutline />, title: "LLC Formation", desc: "Form your Limited Liability Company quickly and correctly in any state." },
  { icon: <IoBusinessSharp />, title: "S-Corporation Formation", desc: "Set up an S-Corp for tax advantages and efficient business structure." },
  { icon: <MdOutlineBusiness />, title: "C-Corporation Formation", desc: "Establish a C-Corp for startups seeking investors and scalable growth." },
  { icon: <GoOrganization />, title: "Nonprofit Organization Formation", desc: "Register your nonprofit to gain tax-exempt status and operate legally." },
  { icon: <MdOutlineAppRegistration />, title: "DBA / Fictitious Name Registration", desc: "Register your trade name to legally operate under a different business name." },
  { icon: <FaWpforms />, title: "EIN Filing", desc: "Obtain your federal Tax ID required for banking, taxes, and hiring." },
  { icon: <HiOutlineDocumentCheck />, title: "Operating Agreement", desc: "Customize your LLC’s ownership and operational rules for clarity and protection." },
  { icon: <MdCorporateFare />, title: "Corporate Bylaws", desc: "Define your corporation’s internal management and decision-making structure." },
  { icon: <BsBank />, title: "Banking Resolution", desc: "Prepare official documentation needed to open your business bank account." },
  { icon: <SiTicktick />, title: "Initial Resolutions", desc: "Document your company’s first official decisions and actions." },
  { icon: <TbFileReport />, title: "Annual Report Filing", desc: "Stay compliant with state requirements by filing your yearly reports on time." },
  { icon: <FaPersonCircleQuestion />, title: "Registered Agent Service", desc: "Receive legal and government documents on behalf of your business securely." },
  { icon: <TbLicense />, title: "Business License & Permit Research", desc: "Identify necessary licenses and permits for your business type and location." },
  { icon: <LuMonitorCheck />, title: "State Compliance Monitoring", desc: "Keep track of important deadlines, fees, and regulatory changes in your state." },
  { icon: <MdManageAccounts />, title: "BOI (Beneficial Ownership Information) Filing", desc: "Assist with federal reporting requirements to disclose ownership information." },
  { icon: <BsCardChecklist />, title: "Startup Checklists", desc: "Step-by-step guides to help you navigate forming and launching your business." },
  { icon: <GrSteps />, title: "State-by-State Business Guides", desc: "Detailed formation rules and fees specific to your state." },
  { icon: <CgSearchFound />, title: "Business Name Search Tool", desc: "Check if your desired business name is available before filing." },
  { icon: <MdOutlineTipsAndUpdates />, title: "Email Tips & Webinars", desc: "Get regular advice on compliance, taxes, and growing your business." },
  { icon: <MdAccountTree />, title: "Business Bank Account Referrals", desc: "Connect with banking partners for easy setup of your business account." },
  { icon: <RiBookShelfLine />, title: "Bookkeeping/Accounting Referrals", desc: "Access trusted professionals to help manage your business finances." },
];

const OurServices = () => {
  const navigate = useNavigate(); // navigation
  return (
    <>
    {/* Skip Link (visible only on focus) */}
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive business formation and compliance services to help you start, grow, and manage your business.
        </p>
        <div id="main-content" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 border-t-4 border-[#fb8500]"
            >
              <div className="text-[#fb8500] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          {/* Button */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 py-2 px-8 rounded-md font-semibold transition-all duration-300 shadow-md bg-[#fb8500] text-black
                  hover:bg-black hover:text-[#fb8500] hover:shadow-[0_0_15px_#fb8500]"
          >
            Get Started
          </button>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default OurServices;
