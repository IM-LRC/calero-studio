import type { ReactElement } from "react";

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  featured: boolean;
  customQuote?: boolean;
};

const plans: readonly Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "590 €",
    description: "Pour lancer votre présence en ligne.",
    features: [
      "Landing page responsive",
      "Design personnalisé",
      "Formulaire de contact",
      "Référencement SEO de base",
      "Mise en ligne",
    ],
    featured: false,
  },
  {
    id: "business",
    name: "Business",
    price: "1 190 €",
    description: "Pour développer votre activité.",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design responsive personnalisé",
      "Formulaire de contact",
      "Optimisation SEO initiale",
      "Mise en ligne",
      "2 séries de retouches",
    ],
    featured: true,
  },
  {
    id: "sur-mesure",
    name: "Sur mesure",
    price: "Sur devis",
    description: "Pour vos projets web spécifiques.",
    features: [
      "Application ou plateforme web",
      "Fonctionnalités personnalisées",
      "Intégration API",
      "Base de données si nécessaire",
      "Accompagnement personnalisé",
    ],
    featured: false,
    customQuote: true,
  },
];

function PricingCard({ plan }: { plan: Plan }): ReactElement {
  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={[
        "pricing-card relative flex h-full flex-col rounded-3xl border",
        "bg-white p-8",
        plan.featured ? "border-blue-600 shadow-lg" : "border-gray-200",
      ].join(" ")}
    >
      {plan.featured && (
        <span className="absolute -top-4 left-6 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
          RECOMMANDÉ
        </span>
      )}

      <h3 id={`plan-${plan.id}`} className="text-xl font-semibold text-black">
        {plan.name}
      </h3>

      <p className="mt-3 min-h-12 text-sm text-gray-600">{plan.description}</p>

      <div className="mt-6">
        <p className="h-5 text-sm text-gray-500">
          {!plan.customQuote && "À partir de"}
        </p>

        <p className="mt-1 text-4xl font-bold tracking-tight text-black">
          {plan.price}
        </p>
      </div>

      <div className="my-8 border-t border-gray-100" aria-hidden="true" />

      <ul className="mb-10 flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-gray-700"
          >
            <span
              aria-hidden="true"
              className="shrink-0 font-bold text-blue-600"
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={`/?forfait=${plan.id}#contact`}
        aria-label={`Demander un devis pour le forfait ${plan.name}`}
        className={[
          "block rounded-full px-6 py-3 text-center",
          "text-sm font-semibold text-white",
          "transition-colors duration-300",
          "focus-visible:outline-2 focus-visible:outline-offset-4",
          "focus-visible:outline-blue-600",
          plan.featured
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-black hover:bg-blue-600",
        ].join(" ")}
      >
        Demander un devis
      </a>
    </article>
  );
}

export default function Pricing(): ReactElement {
  return (
    <section
      id="forfaits"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium text-blue-600">NOS FORFAITS</p>

          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight text-black md:text-5xl"
          >
            Une solution pour chaque projet.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Des offres transparentes pour accompagner les indépendants, TPE et
            PME dans leur développement numérique.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Hébergement, maintenance et suivi technique disponibles dès{" "}
            <span className="font-semibold text-blue-600">49 €/mois</span>.
          </p>

          <p className="mt-3 text-xs text-gray-500">
            Tarifs indicatifs, sur devis personnalisé. Prestations de
            maintenance et d'hébergement facturées séparément.
          </p>
        </div>
      </div>
    </section>
  );
}
