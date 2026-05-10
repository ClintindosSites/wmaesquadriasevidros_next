"use client";

import Link from "next/link";
import { event } from "@/lib/gtag";
import Image from "next/image";

export default function WhatsappFloat() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento."
  );

  return (
    <Link
      href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onClick={() =>
        event({
          action: "click_whatsapp_cta_final",
          category: "Contato",
          label: "CTA Final",
          value: 1,
        })
      }
    >
      <Image
        src={"/icons/whatssapp-2.svg"}
        width={100}
        height={100}
        alt="Botão do Whatsapp de WMA Esquadrias e Vidros"
      />
    </Link>
  );
}
