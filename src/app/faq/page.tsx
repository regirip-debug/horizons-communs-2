"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Quels types de structures accompagnez-vous ?",
    answer:
      "J'accompagne les associations, les structures d'insertion (ACI, chantiers d'insertion), les tiers-lieux (ressourceries, fablabs, cafés associatifs), les collectivités territoriales, les porteurs de projets à impact social et les entreprises engagées (PME, ETI, groupes RSE).",
  },
  {
    question: "Qu'est-ce que le management de transition concrètement ?",
    answer:
      "Le management de transition consiste à prendre un rôle opérationnel temporaire au sein de votre structure (direction, coordination, pilotage de projet) pour stabiliser une situation de crise, accompagner une restructuration ou lancer un nouveau projet. Je m'intègre directement dans vos équipes pour une durée déterminée.",
  },
  {
    question: "Quelle est la durée typique d'une mission ?",
    answer:
      "Cela dépend du besoin. Une mission de management de transition dure généralement entre 3 et 12 mois. Un accompagnement en structuration peut prendre 2 à 6 mois. Les formations sont sur des formats courts (1 à 5 jours répartis sur plusieurs semaines). Nous définissons ensemble la durée optimale lors du premier échange.",
  },
  {
    question: "Comment se déroule un premier contact ?",
    answer:
      "Vous prenez rendez-vous via Calendly pour un appel de 30 minutes gratuit et sans engagement. Cet échange permet de comprendre votre situation, vos enjeux et de voir si et comment je peux vous aider. Si nous décidons de travailler ensemble, je vous envoie un devis personnalisé.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Oui, j'interviens sur l'ensemble du territoire français. Selon la nature de la mission, l'accompagnement peut combiner des temps de présence sur site et du travail à distance. Pour les conférences, je me déplace également à l'international.",
  },
  {
    question: "Vos formations sont-elles finançables par un OPCO ?",
    answer:
      "Mes formations ne sont pas encore éligibles à une prise en charge OPCO, mais les démarches de certification sont en cours. En attendant, je vous propose des solutions de financement adaptées et reste disponible pour en discuter.",
  },
  {
    question: "Quelle est la différence avec un cabinet de conseil classique ?",
    answer:
      "Je viens du terrain. J'ai dirigé des tiers-lieux, encadré des équipes en insertion, géré des projets complexes. Je ne livre pas un rapport puis je pars. Je m'implique opérationnellement dans vos équipes, je forme vos collaborateurs et je m'assure que les changements sont durables et autonomes.",
  },
  {
    question: "Travaillez-vous avec les entreprises privées ?",
    answer:
      "Oui. J'interviens auprès des entreprises engagées dans une démarche RSE, des PME et ETI qui souhaitent renforcer leur impact social, structurer leurs projets d'engagement ou former leurs équipes sur les enjeux de l'ESS et de la transition.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Les tarifs varient selon la nature et la durée de la mission. Chaque projet fait l'objet d'un devis personnalisé après un premier échange. Je m'adapte aux réalités budgétaires des structures de l'ESS tout en garantissant la qualité de l'accompagnement.",
  },
  {
    question: "Proposez-vous des conférences pour des événements ?",
    answer:
      "Oui, j'interviens en keynote, table ronde ou atelier participatif sur des thématiques liées à l'économie circulaire, l'insertion, les tiers-lieux, l'IA adaptée au terrain et le management associatif. Contactez-moi pour discuter de votre événement.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-beige/30 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white/60 hover:bg-white transition-colors"
      >
        <span className="font-semibold text-petrol-dark pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-petrol flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 bg-white/40">
          <p className="text-charcoal/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <article className="pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-petrol text-sm font-medium hover:text-petrol-dark transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Questions fréquentes
          </h1>
          <p className="mt-3 text-charcoal/60">
            Les réponses aux questions les plus courantes
          </p>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 p-8 bg-beige-light rounded-2xl border border-beige/50 text-center paper-grain">
          <p className="font-serif text-xl font-bold text-petrol-dark mb-2">
            Vous avez une autre question ?
          </p>
          <p className="text-charcoal/60 mb-6">
            Discutons-en directement.
          </p>
          <Link
            href="https://calendly.com/regirip/30min?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-petrol text-white font-semibold rounded-lg hover:bg-petrol-dark transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </article>
  );
}
