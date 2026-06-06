import React from "react";

const details = [
  {
    id: "mail",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
          fill="#FAFAFA"
        />
      </svg>
    ),
    title: "Mail Us",
    subtitle: "Speak to Our Friendly Team",
    action: "info@spinteq.in",
    href: "mailto:info@spinteq.in",
  },
  {
    id: "location",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
      >
        <path
          d="M9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.074 16.324 14.59 14.558 16.395C13.6757 17.2871 12.7129 18.0958 11.682 18.811L11.256 19.101L11.056 19.234L10.679 19.474L10.343 19.679L9.927 19.921C9.64463 20.0822 9.32513 20.1669 9 20.1669C8.67487 20.1669 8.35537 20.0822 8.073 19.921L7.657 19.679L7.137 19.359L6.945 19.234L6.535 18.961C5.42283 18.2085 4.3869 17.3491 3.442 16.395C1.676 14.589 0 12.074 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0ZM9 6C8.60603 6 8.21593 6.0776 7.85195 6.22836C7.48797 6.37913 7.15726 6.6001 6.87868 6.87868C6.6001 7.15726 6.37913 7.48797 6.22836 7.85195C6.0776 8.21593 6 8.60603 6 9C6 9.39397 6.0776 9.78407 6.22836 10.1481C6.37913 10.512 6.6001 10.8427 6.87868 11.1213C7.15726 11.3999 7.48797 11.6209 7.85195 11.7716C8.21593 11.9224 8.60603 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6Z"
          fill="#FAFAFA"
        />
      </svg>
    ),
    title: "Location",
    subtitle: "Visit us",
    action: "View on Google Maps",
    href: "https://maps.google.com",
  },
  {
    id: "phone",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
          fill="#FAFAFA"
        />
      </svg>
    ),
    title: "Call Us",
    subtitle: "Mon - Fri 9AM - 5PM",
    action: "9876543210",
    href: "tel:9876543210",
  },
];

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="contact-details-grid">
        {details.map((item) => (
          <div key={item.id} className="contact-details-item">
            <div className="contact-details-text">
              <div className="contact-details-icon">{item.icon}</div>
              <h3 className="contact-details-title">{item.title}</h3>
              <p className="contact-details-subtitle">{item.subtitle}</p>
            </div>
            <a
              href={item.href}
              className="contact-details-btn"
              target={item.id === "location" ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {item.action}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
