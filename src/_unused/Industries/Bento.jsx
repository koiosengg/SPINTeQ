import img1 from "../../assets/Industries/Bento/Img1.png";
import img2 from "../../assets/Industries/Bento/Img2.png";
import img3 from "../../assets/Industries/Bento/Img3.png";
import img5 from "../../assets/Industries/Bento/Img5.png";
import img6 from "../../assets/Industries/Bento/Img6.png";
import img7 from "../../assets/Industries/Bento/Img7.png";
import img8 from "../../assets/Industries/Bento/Img8.png";
import img9 from "../../assets/Industries/Bento/Img9.png";
const sectors = [
  {
    img: img1,
    title: "Automobile",
    desc: "Unlock your creativity and bring ideas to life with AI-powered design utilities.",
    cardClass: "ind-bento-card--1",
    imgRadius: "8px",
  },
  {
    img: img2,
    title: "Manufacturing",
    desc: "Magic Icon generates infinitely scalable SVG icons to use anywhere in your design.",
    cardClass: "ind-bento-card--2",
    imgRadius: "8px 8px 0 0",
  },
  {
    img: img3,
    title: "Smart Infrastructure",
    desc: "Magician demystifies the creative process by magically turning your ideas into assets.",
    cardClass: "ind-bento-card--3",
    imgRadius: "8px 0px 0px 8px",
  },
  {
    dual: true,
    img: img8,
    img2: img9,
    title: "Logistics and Warehousing",
    desc: "With Magic Image, you can quickly generate images in Figma while you design.",
    cardClass: "ind-bento-card--4",
    imgRadius: "12px",
  },
  {
    img: img5,
    title: "Industrial Safety and Surveillance",
    desc: "Magic Copy writes, edits, and rewrites Figma text layers so you can design with real copy.",
    cardClass: "ind-bento-card--5",
    imgRadius: "8px 8px 0 0",
  },
  {
    img: img6,
    title: "Industrial Inspection",
    desc: "Get all the latest AI design advancements + future spells in one convenient plugin.",
    cardClass: "ind-bento-card--6",
    imgRadius: "8px 8px 0 0",
  },
  {
    img: img7,
    title: "High Value Retail & Distribution",
    desc: "Magic Rename intelligently names your layers so you can spend more time designing.",
    cardClass: "ind-bento-card--7",
  },
];

function Bento() {
  return (
    <section className="ind-bento">
      {/* Row 1 — three equal cards */}
      <div className="ind-bento-row ind-bento-row3">
        {sectors.slice(0, 3).map((s, i) => (
          <Card key={i} sector={s} />
        ))}
      </div>

      {/* Row 2 — two unequal cards */}
      <div className="ind-bento-row ind-bento-row2">
        <Card sector={sectors[3]} wide />
        <Card sector={sectors[4]} wide />
      </div>

      {/* Row 3 — two cards (narrow + wide) */}
      <div className="ind-bento-row ind-bento-row2b">
        <Card sector={sectors[5]} />
        <Card sector={sectors[6]} wide />
      </div>
    </section>
  );
}

function Card({ sector, wide }) {
  return (
    <div
      className={`ind-bento-card ${sector.cardClass}${wide ? " ind-bento-card--wide" : ""}`}
    >
      <div className="ind-bento-card-text">
        <h3 className="ind-bento-card-title">{sector.title}</h3>
        <p className="ind-bento-card-desc">{sector.desc}</p>
      </div>
      {sector.dual ? (
        <div className="ind-bento-card-dual-wrap">
          <div className="ind-bento-card-dual-frame ind-bento-card-dual-frame--left">
            <img
              src={sector.img}
              alt={sector.title}
              className="ind-bento-card-dual-img"
              style={{ borderRadius: sector.imgRadius }}
            />
          </div>
          <div className="ind-bento-card-dual-frame ind-bento-card-dual-frame--right">
            <img
              src={sector.img2}
              alt={sector.title}
              className="ind-bento-card-dual-img"
              style={{ borderRadius: sector.imgRadius }}
            />
          </div>
        </div>
      ) : sector.img ? (
        <div className="ind-bento-card-img-wrap">
          <img
            src={sector.img}
            alt={sector.title}
            className="ind-bento-card-img"
            style={{ borderRadius: sector.imgRadius }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Bento;
