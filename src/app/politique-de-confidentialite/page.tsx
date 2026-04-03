import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Horizons Communs",
  description: "Politique de confidentialité et protection des données personnelles d'Horizons Communs.",
};

export default function PolitiqueConfidentialite() {
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

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark mb-4">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-charcoal/50 mb-8">Dernière mise à jour : avril 2026</p>
        <div className="w-16 h-1 bg-beige rounded-full mb-10" />

        <div className="space-y-8 text-charcoal/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur le site
              horizons-communs.vercel.app est Régis Pio, exerçant sous le nom commercial
              <strong> Horizons Communs</strong>.
            </p>
            <p className="mt-2">
              Contact : via le formulaire de prise de rendez-vous ou par LinkedIn.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">2. Données collectées</h2>
            <p>Dans le cadre de son activité, Horizons Communs peut être amené à collecter les données suivantes :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Données de contact</strong> : nom, prénom, adresse e-mail, numéro de téléphone (via Calendly lors de la prise de rendez-vous).</li>
              <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées, durée de visite (via les outils d&apos;analyse du fournisseur d&apos;hébergement).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Répondre aux demandes de contact et de rendez-vous.</li>
              <li>Assurer le suivi de la relation commerciale.</li>
              <li>Améliorer l&apos;expérience utilisateur sur le site.</li>
              <li>Établir des statistiques de fréquentation anonymes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">4. Base légale</h2>
            <p>
              Le traitement des données repose sur le <strong>consentement</strong> de l&apos;utilisateur
              (article 6.1.a du RGPD) et sur l&apos;<strong>intérêt légitime</strong> du responsable de
              traitement (article 6.1.f du RGPD) pour la gestion de la relation client.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">5. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pour une durée maximale de <strong>3 ans</strong> à
              compter du dernier contact, conformément aux recommandations de la CNIL.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">6. Destinataires des données</h2>
            <p>Les données personnelles ne sont transmises à aucun tiers, sauf :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Calendly</strong> (prise de rendez-vous) — hébergé aux États-Unis, conforme aux clauses contractuelles types de la Commission européenne.</li>
              <li><strong>Vercel</strong> (hébergement du site) — hébergé aux États-Unis, conforme au Data Privacy Framework.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">7. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>Droit d&apos;accès à vos données personnelles.</li>
              <li>Droit de rectification des données inexactes.</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli).</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit à la portabilité de vos données.</li>
              <li>Droit d&apos;opposition au traitement.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous via LinkedIn ou via la prise de rendez-vous Calendly.
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission
              Nationale de l&apos;Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-petrol underline">www.cnil.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">8. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site.
              Aucun cookie publicitaire ou de traçage n&apos;est utilisé.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
