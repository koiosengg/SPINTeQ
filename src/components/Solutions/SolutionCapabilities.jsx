import React from "react";

const capabilitiesData = [
  {
    id: 1,
    title: "Computer Vision Systems",
    desc: "Automated visual inspection for quality control",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g clipPath="url(#clip0_315_1586)">
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.1578 12C29.155 12 25.91 15.2449 25.91 19.2478C25.91 22.5912 28.1739 25.4059 31.2524 26.2425C27.0244 26.7064 23.8113 28.9208 21.618 32.1613C19.1638 35.7873 18 40.6674 18 45.7927C18 46.2566 18.3761 46.6327 18.84 46.6327H47.0412C47.5051 46.6327 47.8812 46.2566 47.8812 45.7927C47.8812 40.5432 47.0795 35.6508 44.7905 32.048C42.7528 28.8409 39.5879 26.7363 35.0109 26.2565C38.116 25.4377 40.4056 22.6101 40.4056 19.2478C40.4056 15.2449 37.1606 12 33.1578 12ZM18.8508 44.9527C18.9916 39.4791 20.5166 34.4485 23.4941 31.1125C20.365 34.6185 18.8402 39.9961 18.8402 45.7925C18.8402 45.5114 18.8436 45.2316 18.8508 44.9527Z"
            fill="url(#paint0_radial_315_1586)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.1163 7C21.1135 7 17.8685 10.2449 17.8685 14.2478C17.8685 17.5912 20.1324 20.4059 23.2109 21.2425C18.9829 21.7064 15.7698 23.9208 13.5765 27.1613C11.1223 30.7873 9.9585 35.6674 9.9585 40.7927C9.9585 41.2566 10.3346 41.6327 10.7985 41.6327H38.9997C39.4636 41.6327 39.8397 41.2566 39.8397 40.7927C39.8397 35.5432 39.038 30.6508 36.749 27.048C34.7113 23.8409 31.5464 21.7363 26.9694 21.2565C30.0745 20.4377 32.3641 17.6101 32.3641 14.2478C32.3641 10.2449 29.1191 7 25.1163 7ZM10.8093 39.9527C10.9501 34.4791 12.4751 29.4485 15.4526 26.1125C12.3235 29.6185 10.7987 34.9961 10.7987 40.7925C10.7987 40.5114 10.8021 40.2316 10.8093 39.9527Z"
            fill="url(#paint1_radial_315_1586)"
          />
          <mask
            id="mask0_315_1586"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="0"
            width="32"
            height="37"
          >
            <path d="M30.604 0H-0.395996V37H30.604V0Z" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5342 1C11.4925 1 8.21603 4.27643 8.21603 8.31812C8.21603 12.3598 11.4925 15.6362 15.5342 15.6362C19.5759 15.6362 22.8523 12.3598 22.8523 8.31812C22.8523 4.27643 19.5759 1 15.5342 1ZM29.6039 35.7924C29.6039 26.8809 26.3805 19.6566 15.3664 19.6566C5.73617 19.6566 1.12891 27.1867 1.12891 35.7924H29.6039Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_315_1586)">
            <path
              d="M29.6039 35.7924H30.6039C30.6039 36.3447 30.1562 36.7924 29.6039 36.7924V35.7924ZM1.12891 35.7924V36.7924C0.576621 36.7924 0.128906 36.3447 0.128906 35.7924H1.12891ZM7.21603 8.31812C7.21603 3.72415 10.9402 0 15.5342 0V2C12.0448 2 9.21603 4.82872 9.21603 8.31812H7.21603ZM15.5342 16.6362C10.9402 16.6362 7.21603 12.9121 7.21603 8.31812H9.21603C9.21603 11.8075 12.0448 14.6362 15.5342 14.6362V16.6362ZM23.8523 8.31812C23.8523 12.9121 20.1281 16.6362 15.5342 16.6362V14.6362C19.0236 14.6362 21.8523 11.8075 21.8523 8.31812H23.8523ZM15.5342 0C20.1281 0 23.8523 3.72415 23.8523 8.31812H21.8523C21.8523 4.82872 19.0236 2 15.5342 2V0ZM15.3664 18.6566C21.1121 18.6566 25.0034 20.5558 27.4164 23.784C29.7874 26.956 30.6039 31.2467 30.6039 35.7924H28.6039C28.6039 31.4266 27.8087 27.6494 25.8144 24.9814C23.8622 22.3696 20.6347 20.6566 15.3664 20.6566V18.6566ZM0.128906 35.7924C0.128906 31.3248 1.3234 27.0525 3.85402 23.8745C6.40791 20.6672 10.2607 18.6566 15.3664 18.6566V20.6566C10.8418 20.6566 7.57588 22.4111 5.4186 25.1203C3.23804 27.8587 2.12891 31.6543 2.12891 35.7924H0.128906ZM29.6039 36.7924H1.12891V34.7924H29.6039V36.7924Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_315_1586"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(33.0415 -30.5) rotate(90) scale(84 171.739)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_315_1586"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25 -35.5) rotate(90) scale(84 171.739)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </radialGradient>
          <clipPath id="clip0_315_1586">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Predictive Analytics",
    desc: "Data-driven insights for smarter decision-making",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M30 14H18V46H30V14Z" fill="url(#paint0_linear_315_1601)" />
        <path d="M15 31H3V46H15V31Z" fill="url(#paint1_linear_315_1601)" />
        <path d="M45 1H33V46.0001H45V1Z" fill="url(#paint2_linear_315_1601)" />
        <path
          d="M3 39H6.09953C11.6338 39 16.7752 36.14 19.6938 31.4378L28.3062 17.5622C31.2248 12.86 36.3662 10 41.9005 10H45"
          stroke="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_315_1601"
            x1="35"
            y1="-12.8571"
            x2="21.7024"
            y2="48.9681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_315_1601"
            x1="15"
            y1="8.49996"
            x2="15"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_315_1601"
            x1="60"
            y1="-13"
            x2="43.5"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Workflow Automation",
    desc: "Streamlining operations through intelligent automation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M30 14H18V46H30V14Z" fill="url(#paint0_linear_315_1601)" />
        <path d="M15 31H3V46H15V31Z" fill="url(#paint1_linear_315_1601)" />
        <path d="M45 1H33V46.0001H45V1Z" fill="url(#paint2_linear_315_1601)" />
        <path
          d="M3 39H6.09953C11.6338 39 16.7752 36.14 19.6938 31.4378L28.3062 17.5622C31.2248 12.86 36.3662 10 41.9005 10H45"
          stroke="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_315_1601"
            x1="35"
            y1="-12.8571"
            x2="21.7024"
            y2="48.9681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_315_1601"
            x1="15"
            y1="8.49996"
            x2="15"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_315_1601"
            x1="60"
            y1="-13"
            x2="43.5"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Smart Dashboards",
    desc: "Centralized monitoring with actionable insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M30 14H18V46H30V14Z" fill="url(#paint0_linear_315_1601)" />
        <path d="M15 31H3V46H15V31Z" fill="url(#paint1_linear_315_1601)" />
        <path d="M45 1H33V46.0001H45V1Z" fill="url(#paint2_linear_315_1601)" />
        <path
          d="M3 39H6.09953C11.6338 39 16.7752 36.14 19.6938 31.4378L28.3062 17.5622C31.2248 12.86 36.3662 10 41.9005 10H45"
          stroke="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_315_1601"
            x1="35"
            y1="-12.8571"
            x2="21.7024"
            y2="48.9681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_315_1601"
            x1="15"
            y1="8.49996"
            x2="15"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_315_1601"
            x1="60"
            y1="-13"
            x2="43.5"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#191919" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const SolutionCapabilities = () => {
  return (
    <section className="solutions-capabilities">
      <div className="solutions-capabilities-header">
        <p className="solutions-capabilities-label">Solution Capabilities</p>
        <h2 className="solutions-capabilities-title">Explore Our Solutions</h2>
      </div>
      <div className="solutions-capabilities-grid">
        {capabilitiesData.map((item) => (
          <div key={item.id} className="solutions-capability-card">
            <div className="solutions-capability-icon">{item.icon}</div>
            <div className="solutions-capability-card-content">
              <h3 className="solutions-capability-card-title">{item.title}</h3>
              <p className="solutions-capability-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionCapabilities;
