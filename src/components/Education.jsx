export default function Education() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      <div className="space-y-4">
        <article className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
          <h3 className="text-xl font-semibold">
            B.E. Mechanical Engineering
          </h3>
          <p className="text-[#5a627f] mt-1">
            CMS College of Engineering and Technology, Anna University
          </p>
          <p className="text-sm text-[#76809f] mt-2">Completed: 2017</p>
        </article>

        <article className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
          <h3 className="text-xl font-semibold">
            Higher Secondary (12th) - Computer Science
          </h3>
          <p className="text-[#5a627f] mt-1">Sree Narayana HSS, Vadakara</p>
          <p className="text-sm text-[#76809f] mt-2">Completed: 2013</p>
        </article>

        <article className="rounded-xl border border-[#cfd6e6] bg-white/70 p-5 shadow-sm">
          <h3 className="text-xl font-semibold">SSLC (10th) - Science</h3>
          <p className="text-[#5a627f] mt-1">Amrita Vidyalayam</p>
          <p className="text-sm text-[#76809f] mt-2">Completed: 2011</p>
        </article>
      </div>
    </section>
  );
}
