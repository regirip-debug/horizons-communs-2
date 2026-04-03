import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Horizons Communs",
  description: "Conditions Générales de Vente des prestations de conseil, formation et management de transition d'Horizons Communs.",
};

export default function CGV() {
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
          Conditions Générales de Vente
        </h1>
        <p className="text-sm text-charcoal/50 mb-8">Dernière mise à jour : avril 2026</p>
        <div className="w-16 h-1 bg-beige rounded-full mb-10" />

        <div className="space-y-8 text-charcoal/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 1 — Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
              entre <strong>Horizons Communs</strong> (ci-après &laquo;&nbsp;le Prestataire&nbsp;&raquo;),
              représenté par Régis Pio, et tout client professionnel ou personne morale
              (ci-après &laquo;&nbsp;le Client&nbsp;&raquo;) souhaitant bénéficier de ses prestations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 2 — Prestations</h2>
            <p>Le Prestataire propose les services suivants :</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Management de transition</strong> : prise de fonction temporaire pour stabiliser, restructurer ou relancer une organisation.</li>
              <li><strong>Formation terrain</strong> : formations pratiques adaptées aux équipes (encadrement technique, gestion d&apos;équipe, IA appliquée, structuration).</li>
              <li><strong>Structuration & conseil</strong> : accompagnement sur le modèle économique, la gouvernance, l&apos;organisation interne et la stratégie de développement.</li>
              <li><strong>Conférences & interventions</strong> : keynotes, tables rondes et ateliers participatifs sur les thématiques de l&apos;ESS, des tiers-lieux et de l&apos;innovation sociale.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 3 — Devis et commande</h2>
            <p>
              Toute prestation fait l&apos;objet d&apos;un devis personnalisé établi après un échange préalable
              (rendez-vous Calendly ou entretien). Le devis est valable <strong>30 jours</strong> à compter
              de sa date d&apos;émission. La commande est considérée comme ferme après acceptation écrite
              du devis par le Client (e-mail, signature).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 4 — Tarifs</h2>
            <p>
              Les prix sont indiqués en euros hors taxes (HT). La TVA applicable sera ajoutée conformément
              à la réglementation en vigueur, sauf en cas d&apos;exonération (article 293 B du CGI pour les
              micro-entreprises le cas échéant). Les tarifs peuvent varier selon la nature, la durée
              et la complexité de la mission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 5 — Modalités de paiement</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Paiement par virement bancaire.</li>
              <li>Un <strong>acompte de 30 %</strong> est demandé à la signature du devis pour les missions de management de transition et de structuration.</li>
              <li>Le solde est dû à réception de la facture, avec un délai de paiement de <strong>30 jours</strong>.</li>
              <li>Pour les formations, le paiement est dû selon les conditions convenues avec l&apos;organisme financeur (OPCO) ou directement par le Client.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 6 — Retard de paiement</h2>
            <p>
              Tout retard de paiement entraînera l&apos;application de pénalités de retard au taux
              d&apos;intérêt légal majoré de 3 points, ainsi qu&apos;une indemnité forfaitaire de
              <strong> 40 euros</strong> pour frais de recouvrement, conformément aux articles
              L.441-10 et D.441-5 du Code de commerce.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 7 — Annulation et report</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Toute annulation doit être notifiée par écrit (e-mail).</li>
              <li>Annulation <strong>plus de 15 jours</strong> avant le début de la mission : aucun frais.</li>
              <li>Annulation <strong>entre 7 et 15 jours</strong> : 50 % du montant total est dû.</li>
              <li>Annulation <strong>moins de 7 jours</strong> ou absence : 100 % du montant total est dû.</li>
              <li>Un report est possible d&apos;un commun accord, sous réserve de disponibilité.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 8 — Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des supports, documents, méthodologies et outils créés par le Prestataire
              dans le cadre de ses missions reste sa propriété intellectuelle. Le Client bénéficie
              d&apos;un droit d&apos;utilisation non exclusif, limité à un usage interne, sauf accord
              écrit contraire.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 9 — Confidentialité</h2>
            <p>
              Les deux parties s&apos;engagent à respecter la confidentialité de toutes les informations
              échangées dans le cadre de la mission. Cette obligation perdure <strong>2 ans</strong> après
              la fin de la prestation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 10 — Responsabilité</h2>
            <p>
              Le Prestataire s&apos;engage à mettre en œuvre tous les moyens nécessaires à la bonne
              exécution de ses missions (obligation de moyens). Sa responsabilité ne pourra être
              engagée qu&apos;en cas de faute prouvée et sera limitée au montant de la prestation concernée.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-petrol-dark mb-3">Article 11 — Droit applicable et litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les parties
              s&apos;engagent à rechercher une solution amiable. À défaut, le litige sera porté
              devant les tribunaux compétents du ressort du siège social du Prestataire.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
