import teethCleaning from "@/assets/teeth-cleaning.jpg.asset.json";
import toothExtraction from "@/assets/tooth-extraction.jpg.asset.json";
import teethFilling from "@/assets/teeth-filling.jpg.asset.json";
import rootCanal from "@/assets/root-canal.jpg.asset.json";
import emergency from "@/assets/emergency.png.asset.json";
import childrens from "@/assets/childrens.jpg.asset.json";
import gumDisease from "@/assets/gum-disease.jpg.asset.json";
import braces from "@/assets/braces.jpg.asset.json";
import retainers from "@/assets/dental-retainers-new.jpg.asset.json";
import oralHabits from "@/assets/oral-habits-management.jpg.asset.json";
import teethGrinding from "@/assets/teeth-grinding-management.jpg.asset.json";
import removableOrtho from "@/assets/removable-orthodontic.jpg.asset.json";
import wisdomTeeth from "@/assets/wisdom-teeth.jpg.asset.json";
import fixedDentures from "@/assets/fixed-dentures.jpg.asset.json";
import removableDentures from "@/assets/removable-dentures.jpg.asset.json";
import veneers from "@/assets/veneers.jpg.asset.json";
import teethMasking from "@/assets/teeth-masking.jpg.asset.json";
import smileMakeovers from "@/assets/smile-makeovers.jpg.asset.json";

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
  {
    slug: "removable-orthodontic-appliances",
    title: "Removable Orthodontic Appliances",
    short:
      "Custom, removable devices that guide jaw growth and correct minor alignment issues.",
    image: removableOrtho.url,
    overview:
      "Removable orthodontic appliances are custom-made devices that can be taken in and out of the mouth. They are used to correct mild alignment issues, guide jaw development in growing patients, and support early interceptive orthodontic treatment.",
    benefits: [
      "Comfortable and easy to clean",
      "Ideal for early interceptive treatment",
      "Removable for eating and brushing",
      "Cost-effective alternative for select cases",
    ],
    procedure: [
      "Orthodontic assessment and impressions",
      "Fabrication of a custom appliance in the lab",
      "Fitting and wear-schedule guidance",
      "Regular reviews to monitor progress",
    ],
    candidates:
      "Growing children with developing bites, patients with mild crowding or spacing, and cases where a fixed appliance is not yet indicated.",
    faqs: [
      { q: "How long do I wear it each day?", a: "Most removable appliances need to be worn full-time (except when eating and brushing). Your orthodontist will confirm your exact schedule." },
      { q: "Will it affect my speech?", a: "Speech usually adapts within a few days of consistent wear." },
    ],
  },
  {
    slug: "surgical-extraction-wisdom-teeth",
    title: "Surgical Extraction of Wisdom Teeth",
    short:
      "Safe surgical removal of impacted or problematic wisdom teeth to protect your oral health.",
    image: wisdomTeeth.url,
    overview:
      "Wisdom teeth often lack the space to erupt normally and can become impacted, causing pain, infection or damage to neighbouring teeth. Surgical extraction is a controlled procedure performed under local anaesthesia with careful planning based on dental X-rays.",
    benefits: [
      "Relieves pain from impaction",
      "Prevents infection and cyst formation",
      "Protects adjacent teeth from damage",
      "Reduces risk of crowding relapse",
    ],
    procedure: [
      "Clinical exam and panoramic X-ray",
      "Personalised surgical plan and consent",
      "Local anaesthesia and sterile technique",
      "Gentle surgical removal and suturing",
      "Detailed aftercare instructions",
    ],
    recovery:
      "Swelling and mild discomfort are normal for 3–5 days. Follow the aftercare plan, use ice packs and prescribed medication, and stick to soft foods.",
    candidates:
      "Adults with impacted, partially erupted or symptomatic wisdom teeth, or those referred for orthodontic reasons.",
    faqs: [
      { q: "Will I be awake during the procedure?", a: "Yes. It is done under local anaesthesia. You will feel pressure but not sharp pain." },
      { q: "How long is the recovery?", a: "Most patients return to normal activities within a week. Full soft-tissue healing takes 2–3 weeks." },
    ],
  },
  {
    slug: "fixed-dentures-crowns-bridges",
    title: "Fixed Dentures (Crowns & Bridges)",
    short:
      "Permanent crowns and bridges that restore missing or damaged teeth with natural aesthetics.",
    image: fixedDentures.url,
    overview:
      "Crowns cap damaged teeth to protect and restore them, while bridges replace missing teeth by anchoring to adjacent teeth. Both are custom-crafted for a natural look and stable long-term function.",
    benefits: [
      "Restores natural chewing and speech",
      "Blends with surrounding teeth",
      "Fixed in place — no removal needed",
      "Protects and stabilises adjacent teeth",
    ],
    procedure: [
      "Diagnosis, X-rays and treatment planning",
      "Tooth preparation and impressions",
      "Temporary crown or bridge placement",
      "Fabrication in the dental lab",
      "Fitting, adjustment and cementation",
    ],
    recovery:
      "Mild sensitivity is common for a few days. Normal brushing and flossing (with floss threaders under bridges) will keep them healthy for years.",
    candidates:
      "Patients with heavily damaged, cracked or root-canal-treated teeth, and those missing one or a few teeth in a row with healthy neighbours.",
    faqs: [
      { q: "How long do crowns and bridges last?", a: "With good oral hygiene, well-made crowns and bridges commonly last 10–15 years or more." },
      { q: "Are they noticeable?", a: "Modern porcelain restorations are colour-matched to your natural teeth and are usually indistinguishable." },
    ],
  },
  {
    slug: "removable-dentures",
    title: "Removable Dentures",
    short:
      "Comfortable full or partial dentures that restore your smile and everyday function.",
    image: removableDentures.url,
    overview:
      "Removable dentures replace missing teeth using a custom-fitted acrylic or metal-framework base. They restore chewing, speech and facial support, and can be taken out for easy cleaning.",
    benefits: [
      "Restores smile aesthetics and confidence",
      "Improves chewing and clear speech",
      "Non-invasive and cost-effective",
      "Easy to clean and maintain",
    ],
    procedure: [
      "Assessment of remaining teeth and gums",
      "Precise impressions and bite records",
      "Try-in for shade, shape and comfort",
      "Final fitting and adjustments",
      "Follow-up reviews to ensure comfort",
    ],
    recovery:
      "A short adaptation period is normal. Speech and chewing usually feel natural within 2–4 weeks of consistent wear.",
    candidates:
      "Patients missing several or all teeth in an arch, and those seeking a non-surgical, cost-effective replacement option.",
    faqs: [
      { q: "How do I care for my dentures?", a: "Clean them daily with a soft brush and denture cleaner, and remove them at night to let your gums rest." },
      { q: "Will they slip when I talk or eat?", a: "Well-fitted dentures are stable. Denture adhesives or clasps can add extra security." },
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    short:
      "Ultra-thin porcelain shells that reshape and brighten the front teeth for a stunning smile.",
    image: veneers.url,
    overview:
      "Veneers are custom-made shells bonded to the front surface of teeth to improve shape, colour, size and alignment. They deliver a natural, bright and balanced smile with minimal tooth reduction.",
    benefits: [
      "Transforms colour, shape and alignment",
      "Natural-looking, translucent finish",
      "Stain-resistant and long-lasting",
      "Conservative tooth preparation",
    ],
    procedure: [
      "Smile consultation and digital preview",
      "Minimal tooth preparation and impressions",
      "Temporary veneers while yours are crafted",
      "Bonding of the final custom veneers",
      "Bite check and polish",
    ],
    recovery:
      "No downtime. Mild sensitivity for a few days is normal. Avoid biting hard objects to protect the veneers.",
    candidates:
      "Adults with discoloured, chipped, worn, mildly misaligned or gapped front teeth who want a lasting cosmetic result.",
    faqs: [
      { q: "How long do veneers last?", a: "High-quality porcelain veneers commonly last 10–15 years with good care." },
      { q: "Are veneers reversible?", a: "Because a small amount of enamel is removed, veneers are generally considered a permanent restoration." },
    ],
  },
  {
    slug: "teeth-masking",
    title: "Teeth Masking",
    short:
      "Advanced cosmetic masking that conceals stains, chips and irregularities for a flawless finish.",
    image: teethMasking.url,
    overview:
      "Teeth masking uses cosmetic bonding and thin ceramic overlays to conceal deep discolouration, white spots, minor chips and surface irregularities — creating a uniform, natural-looking smile.",
    benefits: [
      "Hides stubborn stains and white spots",
      "Evens out shape and colour",
      "Minimally invasive procedure",
      "Immediate cosmetic improvement",
    ],
    procedure: [
      "Cosmetic assessment and shade planning",
      "Gentle surface preparation",
      "Layered bonding or ceramic overlay",
      "Sculpting, curing and high-shine polish",
    ],
    recovery:
      "No downtime. Avoid strongly staining foods and drinks for the first 24 hours to lock in colour.",
    candidates:
      "Patients with fluorosis, tetracycline staining, enamel defects or irregular tooth shapes who want a natural-looking cosmetic fix.",
    faqs: [
      { q: "How is masking different from whitening?", a: "Whitening lifts natural stain from within the tooth. Masking covers stains and defects that whitening cannot reach." },
      { q: "How long does it last?", a: "Bonded masking typically lasts 5–8 years; ceramic options last longer with good care." },
    ],
  },
  {
    slug: "smile-makeovers",
    title: "Smile Makeovers",
    short:
      "A fully personalised plan that combines treatments to design the smile of your dreams.",
    image: smileMakeovers.url,
    overview:
      "A smile makeover is a bespoke combination of cosmetic and restorative treatments — such as whitening, veneers, crowns, bonding and gum contouring — designed together to deliver a balanced, radiant smile that suits your face and personality.",
    benefits: [
      "Fully customised to your goals",
      "Addresses colour, shape, alignment and gum line",
      "Long-lasting, natural-looking results",
      "Boosts confidence and self-esteem",
    ],
    procedure: [
      "In-depth smile consultation and photography",
      "Digital smile design and treatment plan",
      "Staged treatments in a comfortable sequence",
      "Final refinements and long-term care plan",
    ],
    recovery:
      "Recovery depends on the treatments used, but most smile makeovers involve minimal downtime and predictable, comfortable results.",
    candidates:
      "Adults who want to transform multiple aspects of their smile at once — colour, shape, spacing, gum line or overall harmony.",
    faqs: [
      { q: "How long does a smile makeover take?", a: "Simple makeovers can be completed in 2–4 visits. Complex cases may take a few months of planned treatment." },
      { q: "Is it painful?", a: "Most steps are comfortable under local anaesthesia. We plan the sequence around your comfort." },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
