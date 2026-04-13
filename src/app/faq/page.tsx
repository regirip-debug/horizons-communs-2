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
