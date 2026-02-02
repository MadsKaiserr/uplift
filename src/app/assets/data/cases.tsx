import case1 from "@/app/assets/images/Case1.jpg"
import case2 from "@/app/assets/images/Case2.jpg"
import case3 from "@/app/assets/images/Case3.jpg"

export const cases = [
  {
    slug: "corazon",
    title: "Corazon",
    description: "Sådan forenklede Frama deres B2B-løsning og gav kunderne en inspirerende shoppingoplevelse.",
    fullContent: `
      Corazon projektet handlede om at transformere en kompleks B2B-platform til en intuitiv og visuel oplevelse. 
      Vi implementerede en ny checkout-proces, der reducerede friktion og øgede konverteringen markant.
      Resultatet var ikke kun en smukkere shop, men en platform der understøtter international vækst.
    `,
    highlights: [
      {
        label: "cr",
        value: "7,5%"
      },
      {
        label: "roi",
        value: "12x"
      }
    ],
    image: case1,
  },
  {
    slug: "corazon",
    title: "Luksusbaby",
    description: "Sådan fik Luksusbaby en webshop der matcher ambitionerne.",
    fullContent: `
      Luksusbaby havde brug for en platform, der kunne håndtere ekstrem trafik under udsalg og kampagner. 
      Ved at flytte dem til en headless Shopify-løsning, sikrede vi lynhurtige svartider og en mobiloplevelse i verdensklasse.
    `,
    highlights: [
      {
        label: "cr",
        value: "7,5%"
      },
      {
        label: "roi",
        value: "12x"
      }
    ],
    image: case2,
  },
  {
    slug: "corazon",
    title: "Ortofon",
    description: "Fra Umbraco til Shopify og nul disharmonier.",
    fullContent: `
      Ortofon ønskede at modernisere deres digitale tilstedeværelse. Vi migrerede over 1.000 produkter fra Umbraco 
      til Shopify Plus, optimerede deres SEO-struktur og skabte et design, der hylder deres arv inden for high-end lyd.
    `,
    highlights: [
      {
        label: "cr",
        value: "7,5%"
      },
      {
        label: "roi",
        value: "12x"
      }
    ],
    image: case3,
  }
];