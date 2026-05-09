// app/esquadrias-de-aluminio/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceHero from "../components/ServiceHero";

import Reviews from "../components/Reviews";
import ServiceDetails from "../components/ServiceDetails";
import ServiceCTA from "../components/ServiceCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(item => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,

    description: service.metaDescription,

    keywords: service.keywords,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find(item => item.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <ServiceDetails service={service} />

      <Reviews service={service} />

      <ServiceCTA service={service} />
    </>
  );
}
