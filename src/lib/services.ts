import teethCleaning from "@/assets/teeth-cleaning.jpg.asset.json";
import toothExtraction from "@/assets/tooth-extraction.jpg.asset.json";
import teethFilling from "@/assets/teeth-filling.jpg.asset.json";
import rootCanal from "@/assets/root-canal.jpg.asset.json";
import emergency from "@/assets/emergency.png.asset.json";
import childrens from "@/assets/childrens.jpg.asset.json";
import gumDisease from "@/assets/gum-disease.jpg.asset.json";
import braces from "@/assets/braces.jpg.asset.json";
import retainers from "@/assets/retainers.jpg.asset.json";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
  overview: string;
  benefits: string[];
  procedure: string[];
  recovery?: string;
  candidates: string;
  faqs: ServiceFAQ[];
}

export const SERVICES: Service[] = [
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    short:
      "Routine professional cleaning to remove plaque, tartar and surface stains for healthier gums.",
    image: teethCleaning.url,
    overview:
      "A professional dental cleaning (prophylaxis) removes hardened plaque and tartar that regular brushing cannot reach. Routine cleanings help prevent cavities, gum disease and bad breath while keeping your smile bright.",
    benefits: [
      "Removes tartar and stubborn plaque",
      "Helps prevent gum disease and cavities",
      "Freshens breath and lifts surface stains",
      "Allows early detection of dental issues",
    ],
    procedure: [
      "A gentle oral examination and gum assessment",
      "Ultrasonic scaling to remove tartar above and below the gumline",
      "Polishing to smooth the tooth surface",
      "Optional fluoride application and personalised hygiene guidance",
    ],
    recovery:
      "No downtime. Mild gum sensitivity may last a day. Avoid strongly coloured food or drink for a few hours after polishing.",
    candidates:
      "Recommended every six months for most patients, and more frequently for those with gum disease, orthodontic appliances or a history of heavy tartar build-up.",
    faqs: [
      {
        q: "Is professional cleaning painful?",
        a: "Most patients feel only mild vibration or cool water. If your gums are inflamed we can adjust the technique for comfort.",
      },
      {
        q: "How often should I have my teeth cleaned?",
        a: "Every six months is a common guideline, but your dentist will recommend an interval based on your oral health.",
      },
      {
        q: "Will cleaning whiten my teeth?",
        a: "Cleaning removes surface stains and restores natural brightness, but it is not the same as a whitening treatment.",
      },
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    short:
      "Careful removal of severely damaged or decayed teeth to protect your overall oral health.",
    image: toothExtraction.url,
    overview:
      "Tooth extraction is considered when a tooth is too damaged by decay, trauma or infection to be restored. Modern techniques and local anaesthesia make the procedure predictable and comfortable.",
    benefits: [
      "Relieves persistent pain and pressure",
      "Prevents infection from spreading",
      "Creates space for orthodontic or restorative treatment",
    ],
    procedure: [
      "Clinical examination and dental X-ray",
      "Local anaesthesia to numb the area",
      "Gentle loosening and removal of the tooth",
      "Guidance on aftercare and replacement options",
    ],
    recovery:
      "Initial healing takes 7–10 days. Avoid smoking, rinsing vigorously and hot drinks for the first 24 hours. Follow the aftercare instructions closely.",
    candidates:
      "Patients with unrestorable decay, advanced gum disease, fractured teeth or crowding that requires space.",
    faqs: [
      {
        q: "Will the extraction hurt?",
        a: "The area is fully numbed. You may feel pressure but not sharp pain. Mild soreness afterwards is managed with simple pain relief.",
      },
      {
        q: "Do I need to replace an extracted tooth?",
        a: "Back teeth affect chewing and alignment. We will discuss options such as bridges, dentures or implants where appropriate.",
      },
    ],
  },
  {
    slug: "teeth-filling",
    title: "Teeth Filling",
    short:
      "Tooth-coloured restorations that repair cavities and restore natural function and appearance.",
    image: teethFilling.url,
    overview:
      "Dental fillings restore teeth affected by decay, small fractures or wear. We use tooth-coloured composite materials that bond to the tooth and blend with your natural smile.",
    benefits: [
      "Restores chewing function",
      "Prevents further decay",
      "Blends naturally with surrounding teeth",
      "Preserves as much healthy tooth structure as possible",
    ],
    procedure: [
      "Assessment and, where needed, a small X-ray",
      "Gentle removal of the decayed area under local anaesthesia",
      "Layered placement and shaping of the composite material",
      "Curing, polishing and bite adjustment",
    ],
    recovery:
      "You can eat and drink normally once any numbness has worn off. Mild sensitivity to temperature may last a few days.",
    candidates:
      "Patients with cavities, minor chips, worn edges or older fillings that need replacement.",
    faqs: [
      {
        q: "How long do fillings last?",
        a: "Well-placed composite fillings often last many years with good oral hygiene and regular check-ups.",
      },
      {
        q: "Are white fillings safe?",
        a: "Yes. Modern composite materials are widely used and considered a safe, durable option.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    short:
      "A tooth-saving procedure that treats infection inside the tooth and relieves pain.",
    image: rootCanal.url,
    overview:
      "Root canal treatment (endodontics) removes infected or inflamed tissue from inside the tooth, then cleans, shapes and seals the root canals. It relieves pain and helps save a tooth that might otherwise need to be extracted.",
    benefits: [
      "Relieves severe toothache",
      "Preserves your natural tooth",
      "Stops the spread of infection",
      "Restores comfortable chewing",
    ],
    procedure: [
      "X-rays and diagnosis",
      "Local anaesthesia and isolation of the tooth",
      "Removal of infected pulp tissue",
      "Cleaning, shaping and sealing of the root canals",
      "Placement of a permanent filling and, when needed, a crown",
    ],
    recovery:
      "Most patients return to normal activities the next day. Mild tenderness for a few days is common and manageable with simple pain relief.",
    candidates:
      "Patients with deep decay, cracked teeth, dental abscess or persistent toothache and sensitivity.",
    faqs: [
      {
        q: "Is root canal treatment painful?",
        a: "The procedure itself is done under anaesthesia and is generally comfortable. It is designed to relieve pain, not cause it.",
      },
      {
        q: "How many visits does it take?",
        a: "Depending on the tooth, treatment may be completed in one or two visits.",
      },
      {
        q: "Do I need a crown afterwards?",
        a: "Molars and heavily restored teeth often benefit from a crown to protect them from fracture.",
      },
    ],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    short:
      "Same-day attention for dental pain, trauma and other urgent oral concerns.",
    image: emergency.url,
    overview:
      "Dental emergencies deserve prompt, calm and skilled attention. We offer same-day appointments for tooth pain, swelling, trauma, lost fillings and knocked-out teeth to help protect your long-term oral health.",
    benefits: [
      "Rapid relief from pain and discomfort",
      "Prompt management of infection or trauma",
      "Improved chances of saving damaged teeth",
    ],
    procedure: [
      "Focused assessment of the emergency",
      "Immediate pain management",
      "Targeted treatment: temporary or definitive",
      "Clear follow-up plan",
    ],
    candidates:
      "Anyone experiencing tooth pain, a broken or knocked-out tooth, a lost filling or crown, swelling of the face or jaw, or bleeding that will not stop.",
    faqs: [
      {
        q: "What counts as a dental emergency?",
        a: "Severe tooth pain, facial swelling, trauma to the teeth or jaw, uncontrolled bleeding and knocked-out teeth are all urgent.",
      },
      {
        q: "What should I do if a tooth is knocked out?",
        a: "Hold the tooth by the crown, gently rinse with milk or saline, keep it moist and contact us immediately.",
      },
    ],
  },
  {
    slug: "childrens-dentistry",
    title: "Children's Dentistry",
    short:
      "Gentle, age-appropriate dental care that helps children feel safe and confident.",
    image: childrens.url,
    overview:
      "Paediatric dental visits focus on prevention, education and building positive experiences. We create a calm, friendly environment where children can learn healthy habits from an early age.",
    benefits: [
      "Early detection of dental issues",
      "Prevention of cavities through sealants and fluoride",
      "Guidance on brushing, diet and habits such as thumb-sucking",
      "Positive introduction to dental care",
    ],
    procedure: [
      "A gentle check-up and gum assessment",
      "Cleaning suited to the child's age",
      "Preventive treatment such as fluoride varnish or fissure sealants",
      "Advice for parents on home care and diet",
    ],
    candidates:
      "Children from their first tooth through the teenage years, including those needing preventive, restorative or orthodontic assessment.",
    faqs: [
      {
        q: "At what age should my child first see a dentist?",
        a: "A first visit around the appearance of the first tooth, or by their first birthday, helps set a healthy foundation.",
      },
      {
        q: "How can I prepare my child for the visit?",
        a: "Speak positively about the dentist, avoid words like 'pain' and let us guide the introduction. Our team is experienced with anxious children.",
      },
    ],
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    short:
      "Care for bleeding, inflamed or receding gums to protect the foundations of your smile.",
    image: gumDisease.url,
    overview:
      "Gum disease (periodontitis) is a common cause of tooth loss and often develops without pain. Timely treatment stops progression, reduces inflammation and helps preserve the bone that supports your teeth.",
    benefits: [
      "Reduces bleeding and inflammation",
      "Freshens breath",
      "Slows or stops bone loss around teeth",
      "Improves overall oral and general health",
    ],
    procedure: [
      "Detailed gum and bone assessment",
      "Deep cleaning: scaling and root planing",
      "Personalised oral hygiene coaching",
      "Regular maintenance visits to monitor progress",
    ],
    candidates:
      "Patients with bleeding gums, persistent bad breath, gum recession, loose teeth or a family history of gum disease.",
    faqs: [
      {
        q: "Is bleeding when I brush normal?",
        a: "It is common, but it is not normal. Bleeding is usually an early sign of gum inflammation and should be assessed.",
      },
      {
        q: "Can gum disease be cured?",
        a: "Early gum disease can often be reversed. Advanced disease is managed to slow or stop progression and preserve your teeth.",
      },
    ],
  },
  {
    slug: "fixed-orthodontics-braces",
    title: "Fixed Orthodontics (Braces)",
    short:
      "Traditional braces that gradually align teeth for a healthier bite and balanced smile.",
    image: braces.url,
    overview:
      "Fixed braces use small brackets and archwires to gently guide teeth into their ideal position. Straighter teeth are easier to clean, function better and can improve confidence.",
    benefits: [
      "Corrects crowding, spacing and bite issues",
      "Improves long-term oral health",
      "Balances facial and smile aesthetics",
    ],
    procedure: [
      "Orthodontic assessment, records and treatment planning",
      "Placement of brackets and archwire",
      "Regular adjustments every 4–8 weeks",
      "Retention phase to maintain the result",
    ],
    recovery:
      "Mild discomfort for a few days after fitting and after adjustments is normal. Careful oral hygiene is essential throughout treatment.",
    candidates:
      "Teenagers and adults with crowding, spacing, protrusion or bite problems.",
    faqs: [
      {
        q: "How long does treatment take?",
        a: "Most treatments range from 12 to 24 months depending on complexity.",
      },
      {
        q: "Are braces painful?",
        a: "You may feel pressure or tenderness for a few days after each adjustment. Over-the-counter pain relief is usually enough.",
      },
    ],
  },
  {
    slug: "dental-retainers",
    title: "Dental Retainers",
    short:
      "Custom retainers that hold your teeth in place after orthodontic treatment.",
    image: retainers.url,
    overview:
      "Teeth naturally tend to shift over time. Retainers are worn after braces or aligner treatment to keep your smile aligned and protect the investment you have made in orthodontics.",
    benefits: [
      "Maintains orthodontic results",
      "Prevents relapse and re-crowding",
      "Custom-fitted for comfort",
    ],
    procedure: [
      "Digital or physical impressions of your teeth",
      "Fabrication of a fixed or removable retainer",
      "Fitting, adjustment and wear-schedule guidance",
    ],
    candidates:
      "Anyone who has recently completed orthodontic treatment, or patients with minor shifting who want to maintain alignment.",
    faqs: [
      {
        q: "How long do I need to wear my retainer?",
        a: "Full-time wear is usually recommended initially, followed by long-term night-time wear to maintain results.",
      },
      {
        q: "What if I lose my retainer?",
        a: "Contact us promptly. A replacement can be made from records or a new impression to prevent your teeth from shifting.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
