import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-petrol-dark paper-grain">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
          Passons à l&apos;action
        </h2>
        <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />

        <p className="mt-8 text-lg text-white/70 leading-relaxed">
          Vous avez un projet, une difficulté ou une ambition ?
        </p>
        <p className="mt-2 text-xl text-white/90 font-medium">
          Discutons-en.
        </p>

        <Link
          href="https://calendly.com/regirip/30min?month=2026-04"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center px-10 py-4 bg-beige text-petrol-dark text-lg font-bold rounded-xl hover:bg-beige-warm transition-all hover:shadow-lg hover:shadow-beige/20 hover:scale-105"
        >
          Prendre rendez-vous
          <svg
            className="ml-3 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Link>

        <p className="mt-12 text-white/40 text-sm italic">
          Je ne suis pas là pour vous conseiller. Je suis là pour faire avec
          vous.
        </p>
      </div>
    </section>
  );
}
