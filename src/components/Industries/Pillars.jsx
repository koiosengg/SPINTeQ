import Asset from "../Solutions/Asset";
import a1 from "../../assets/Industries/Asset/A1.png";
import a2 from "../../assets/Industries/Asset/A2.png";
import a3 from "../../assets/Industries/Asset/A3.png";
import a4 from "../../assets/Industries/Asset/A4.png";
import a5 from "../../assets/Industries/Asset/A5.png";
import a6 from "../../assets/Industries/Asset/A6.png";
import a7 from "../../assets/Industries/Asset/A7.png";

const pillarTabs = [
  {
    label: "Industrial Safety",
    subtitle: "",
    points: [
      {
        title: "Dynamic PPE Verification",
        desc: "Algorithmic validation of helmets and high-vis gear to enforce absolute compliance.",
      },
      {
        title: "Kinematic Anomaly Detection",
        desc: "Sub-second identification of slips, falls, or gestural distress, triggering instant medical dispatch.",
      },
      {
        title: "Collision-Avoidance Matrices",
        desc: "Predictive trajectory mapping of forklifts and personnel to neutralize collision risks before they occur.",
      },
      {
        title: "Spatial Occupancy Analytics",
        desc: "Precision tracking of zone utilization and canteen duration logs to optimize workforce flow.",
      },
    ],
    image: a1,
    imageAlt: "Industrial Safety – PPE and anomaly detection dashboard",
    fit: "contain",
  },
  {
    label: "Perimeter Security",
    subtitle: "",
    points: [
      {
        title: "Autonomous Intrusion & Breach Detection",
        desc: "Continuous monitoring of restricted perimeters with instantaneous unauthorized access alerts.",
      },
      {
        title: "Virtual Tripwire Analytics",
        desc: "Real-time line-crossing and fence-jumping recognition deployed at critical infrastructure boundaries.",
      },
      {
        title: "Navigational Zone Enforcement",
        desc: "Geofencing sensitive data environments and tracking employee spatial movements to optimize secure workspaces.",
      },
      {
        title: "Tamper-Proof Hardware Shield",
        desc: "Instant algorithmic spotting of blocked, blurred, or damaged lenses, ensuring uninterrupted surveillance.",
      },
    ],
    image: a2,
    imageAlt: "Perimeter Security – Intrusion detection system",
    fit: "none",
  },
  {
    label: "Traffic Monitoring",
    subtitle: "",
    points: [
      {
        title: "High-Velocity Plate Recognition(ALPR)",
        desc: "Automated, high-speed credential extraction to enforce road safety and access control.",
      },
      {
        title: "Predictive Congestion Modeling",
        desc: "Advanced vehicle counting and flow analysis for dynamic urban mobility and smart city planning.",
      },
      {
        title: "Behavioral Traffic Anomalies",
        desc: "Instantaneous detection of wrong-way driving, erratic lane shifts, and congestion bottlenecks.",
      },
      {
        title: "In-Cabin Compliance Scanning",
        desc: "Precision identification of seatbelt and helmet violations to elevate public safety standards.",
      },
    ],
    image: a3,
    imageAlt: "Traffic Monitoring – Vehicle flow analytics",
    fit: "cover",
  },
  {
    label: "Queue Management",
    subtitle: "",
    points: [
      {
        title: "Crowd Density Heatmapping",
        desc: "Continuous analysis of human flow to identify underused zones and eliminate operational bottlenecks.",
      },
      {
        title: "Predictive Wait-Time Telemetry",
        desc: "Real-time queue length tracking that automatically triggers staff redeployment to minimize friction.",
      },
      {
        title: "Spatial Proximity Enforcement",
        desc: "Algorithmic measurement of interpersonal distances to ensure safety compliance in high-traffic hubs.",
      },
      {
        title: "Overcrowding Dispersal Alerts",
        desc: "Automated threat-level notifications dispatched to security when density exceeds safe thresholds.",
      },
    ],
    image: a4,
    imageAlt: "Queue Management – Wait time estimation system",
    fit: "cover",
  },
  {
    label: "Biometric Identity",
    subtitle: "",
    points: [
      {
        title: "Frictionless Biometric Access",
        desc: "Sub-second facial mapping for seamless, highly secure facility entry and attendance verification.",
      },
      {
        title: "Demographic Indexing",
        desc: "Aggregate age and gender analysis to drive hyper-tailored engagement and environmental optimization.",
      },
      {
        title: "Target Acquisition & Threat Alerts",
        desc: "Immediate identification of known offenders or wanted individuals against centralized database.",
      },
      {
        title: "Obscured Feature Reconstruction",
        desc: "Advanced neural detection capable of identifying individuals despite heavy facial masking.",
      },
    ],
    image: a5,
    imageAlt: "Biometric Identity – Facial recognition system",
    fit: "contain",
  },
  {
    label: "Operational Integrity",
    subtitle: "",
    points: [
      {
        title: "Cognitive Fatigue & Idle Tracking",
        desc: "Scans for sleeping, mobile phone overuse, or checkout idleness to optimize resource allocation.",
      },
      {
        title: "Detect Unscanned Item & Adding to Cart",
        desc: "Potentially detecting unscanned items in cart, AI can prevent shrinkage in sales and send alerts.",
      },
      {
        title: "Predictive Shoplifting Analytics",
        desc: "Monitors behavioral micro-expressions and suspicious movements to pre-empt retail loss.",
      },
      {
        title: "Detect Employee Fraud",
        desc: "AI is empowered to detect checkout theft through video analytics reducing overall losses and improving store integrity.",
      },
    ],
    image: a6,
    imageAlt: "Operational Integrity – Process compliance dashboard",
    fit: "contain",
  },
  {
    label: "Specialized Threat Detection",
    subtitle: "",
    points: [
      {
        title: "Anomalous Object & Asset Tracking",
        desc: "Real-time tracking of abandoned luggage, roaming wildlife, hygiene tools, or structural defects like wind-turbine micro-fractures.",
      },
      {
        title: "Environmental & Chemical Hazards",
        desc: "Pre-emptive identification of smoke, fire, and illicit substance use (smoking/liquor) in public zones.",
      },
      {
        title: "Lethal Threat Identification",
        desc: "Instantaneous algorithmic detection of firearms, aggression, and physical altercations.",
      },
      {
        title: "Vulnerable Person Protection",
        desc: "Context-aware spatial monitoring (e.g., demographic isolation, women's safety alerts) to ensure continuous physical security.",
      },
    ],
    image: a7,
    imageAlt: "Specialized Threat Detection – Weapon and fire detection",
    fit: "cover",
  },
];

function Pillars() {
  return (
    <Asset
      label="TURNING IDLE ASSETS INTO GROWTH."
      title={
        <>
          The 7 Pillars Of <br />
          Autonomous Operations
        </>
      }
      tabs={pillarTabs}
      className="solutions-asset-pillars"
    />
  );
}

export default Pillars;
