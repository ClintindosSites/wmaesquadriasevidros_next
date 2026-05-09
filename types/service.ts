export interface ServiceData {
  slug: string;

  title: string;

  metaDescription: string;

  keywords: string[];

  subtitle: string;

  ctaTitle: string;

  ctaDescription: string;

  description: string;

  heroImage: string;

  ctaImage: string;

  gallery: string[];

  longDescription: string;

  whatsappMessage: string;

  cities: string[];

  reviews: {
    name: string;
    text: string;
  }[];

  faq: {
    question: string;
    answer: string;
  }[];

  benefits: {
    title: string;

    subtitle: string;

    items: {
      title: string;
      description: string;
    }[];

    highlight: string;
  };
}
