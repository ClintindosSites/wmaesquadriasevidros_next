import Link from "next/link";

interface Review {
  name: string;
  text: string;
}

interface Service {
  title: string;
  longDescription: string;
  gallery: string[];
  reviews: Review[];
  benefits?: any;
}

export default function Reviews({ service }: { service: Service }) {
  return (
    <section className="review-section">
      <div className="container">
        {" "}
        <h2 className="review-title">
          O que nossos clientes dizem sobre nosso <br />{" "}
          <span>{service.title}</span>
        </h2>
        {/* ⭐ REVIEWS */}
        <div className="reviews">
          {service.reviews.map((review, index) => {
            const initials = review.name
              .split(" ")
              .map(n => n[0])
              .join("");

            return (
              <div className="review" key={index}>
                <div className="review-header">
                  <div className="avatar">{initials}</div>
                  <div>
                    <strong>{review.name}</strong>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <p className="reviewtext">{review.text}</p>
              </div>
            );
          })}
        </div>
        <Link
          href={"https://share.google/ApnB9Rps7zf48NLTW"}
          className="cta-button"
          target="_blank"
        >
          Fazer avaliação no Google{" "}
        </Link>
      </div>
    </section>
  );
}
