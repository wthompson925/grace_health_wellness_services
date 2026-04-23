export default function GraceHealthWebsiteMockup() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-slate-800 font-sans">
      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white shadow-sm">
        <h1 className="text-5xl font-semibold tracking-tight">
          Grace Health & Wellness Services
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Primary • Preventive • Wellness
        </p>
        <p className="mt-2 text-sm text-slate-500">Welcoming New Patients</p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-md hover:opacity-90">
            Request Appointment
          </button>
          <button className="border border-slate-300 px-6 py-3 rounded-2xl hover:bg-slate-100">
            Call 787-609-6573
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">A Modern Approach to Care</h2>
        <p className="mt-4 text-slate-600 leading-7">
          At Grace Health & Wellness Services, we deliver personalized,
          compassionate care focused on prevention, education, and long-term
          wellness for every patient.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl text-center font-semibold mb-10">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Primary Care",
            "Preventive Care",
            "Chronic Condition Management",
            "Health Screenings",
          ].map((service) => (
            <div className="bg-[#f9f6f1] p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Medical Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">Dr. Abigail Lopez Diaz</h3>
            <p className="text-slate-500 mt-2">Primary Care Physician</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">
              Dr. Victor M. Lasalle Colon
            </h3>
            <p className="text-slate-500 mt-2">Primary Care Physician</p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="bg-slate-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold">Request an Appointment</h2>
        <p className="mt-4 text-slate-300">
          Schedule your visit or message us directly via WhatsApp.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl">
            WhatsApp Request
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl">
            Call Now
          </button>
        </div>
      </section>

      {/* INSURANCE PREMIUM */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Insurance Accepted</h2>
        <p className="text-slate-600 mb-10">
          We partner with leading insurance providers across Puerto Rico.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Triple-S", link: "https://www.ssspr.com" },
            { name: "MMM Healthcare", link: "https://www.mmm-pr.com" },
            { name: "MCS", link: "https://www.mcs.com.pr" },
            { name: "First Medical", link: "https://www.firstmedicalpr.com" },
            { name: "Menonita", link: "https://www.menonita.com" },
            { name: "MAPFRE", link: "https://www.mapfre.pr" },
            {
              name: "Auxilio Salud Plus",
              link: "https://www.auxiliosaludplus.com",
            },
            { name: "Bella Vista", link: null },
          ].map((ins) => (
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              {ins.link ? (
                <a
                  href={ins.link}
                  target="_blank"
                  className="font-medium text-slate-800"
                >
                  {ins.name}
                </a>
              ) : (
                <span className="text-slate-500">{ins.name}</span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Don’t see your insurance? Contact us and we’ll gladly assist you.
        </p>
      </section>

      {/* CONTACT */}
      <section className="text-center py-12">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2">787-609-6573</p>
      </section>
    </div>
  );
}
