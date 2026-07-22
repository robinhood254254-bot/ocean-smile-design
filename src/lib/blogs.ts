export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  minutes: string;
  content: { heading?: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "brushing-and-flossing-daily-routine",
    title: "Brushing and flossing: a simple daily routine that works",
    category: "Oral Health",
    excerpt:
      "Consistent brushing twice a day and daily flossing remain the foundation of good oral health. Here's how to make the most of them.",
    minutes: "4 min read",
    content: [
      { body: "A healthy smile doesn't come from expensive gadgets — it comes from a consistent, correctly done daily routine. Two minutes of brushing, twice a day, plus one round of flossing, is enough to keep most people cavity- and gum-disease-free." },
      { heading: "How to brush effectively", body: "Use a soft-bristled toothbrush and a fluoride toothpaste. Angle the brush at 45 degrees to the gum line and use short, gentle circular strokes. Cover the outer, inner and chewing surfaces of every tooth. Don't scrub hard — pressure damages enamel and gums." },
      { heading: "Why flossing matters", body: "A toothbrush cannot reach between teeth, and that is where cavities and gum disease commonly start. Floss once a day, gently curving the floss around each tooth in a C-shape. If traditional floss is difficult, interdental brushes or a water flosser work well." },
      { heading: "Small habits that compound", body: "Replace your toothbrush every 3 months, avoid sugary snacks between meals, and drink water after coffee, tea or juice. These small habits, done consistently, protect your smile for decades." },
    ],
  },
  {
    slug: "how-often-should-you-visit-the-dentist",
    title: "How often should you really visit the dentist?",
    category: "Preventive Care",
    excerpt:
      "For most adults, a check-up every six months helps prevent problems early. Some patients benefit from a shorter interval — here's why.",
    minutes: "3 min read",
    content: [
      { body: "The six-month check-up is a well-known guideline, but the ideal interval depends on your individual risk. Some patients need a visit every 3–4 months; others can safely go once a year." },
      { heading: "Who needs more frequent visits", body: "People with gum disease, a history of frequent cavities, orthodontic appliances, dry mouth, diabetes, or those who smoke usually benefit from shorter intervals — often every 3 or 4 months." },
      { heading: "What happens at a check-up", body: "A dental exam is more than a quick look. Your dentist screens for cavities, gum disease, bite issues and even early signs of oral cancer. A professional cleaning removes tartar that daily brushing cannot." },
      { heading: "Prevention pays", body: "Small issues caught early are simpler, less painful and less expensive to treat. Regular check-ups are the single most cost-effective step you can take for your oral health." },
    ],
  },
  {
    slug: "childs-first-dental-visit",
    title: "Your child's first dental visit: what to expect",
    category: "Children",
    excerpt:
      "A calm, positive first visit sets the tone for a lifetime of comfortable dental care. Practical tips for parents.",
    minutes: "5 min read",
    content: [
      { body: "Your child's first dental visit is not just about teeth — it's about building trust. A gentle, positive early experience shapes how they feel about dental care for the rest of their life." },
      { heading: "When to schedule it", body: "The general recommendation is a first visit around the appearance of the first tooth, or by the first birthday. This early visit lets us check development, spot risks early, and coach parents on home care." },
      { heading: "How to prepare your child", body: "Speak positively about the dentist. Avoid words like 'pain', 'shot' or 'drill'. Read a friendly book about visiting the dentist, and let them bring a comforting toy. Choose a visit time when your child is normally rested and fed." },
      { heading: "What we do at the visit", body: "The first visit is relaxed and unhurried: a friendly introduction, a ride in the chair, a gentle look at the teeth and gums, and a chat with parents about brushing, feeding and habits like thumb-sucking." },
      { heading: "After the visit", body: "Celebrate the visit — a sticker, a small treat (non-sugary!) or simply praise. Positive reinforcement makes the next visit even easier." },
    ],
  },
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs clear aligners: understanding the options",
    category: "Orthodontics",
    excerpt:
      "Both approaches can produce excellent results. The right choice depends on your bite, lifestyle and treatment goals.",
    minutes: "6 min read",
    content: [
      { body: "Braces and clear aligners can both create beautifully straight, healthy smiles. Choosing between them comes down to the complexity of your case, your lifestyle and your personal preferences." },
      { heading: "Fixed braces", body: "Traditional braces use small brackets bonded to each tooth, connected by an archwire. They are extremely versatile and can correct complex bite problems, severe crowding and rotations that aligners may struggle with." },
      { heading: "Clear aligners", body: "Clear aligners are a series of removable, transparent trays worn 20–22 hours a day. They are nearly invisible and can be removed for eating and brushing, but they rely on strict compliance to work." },
      { heading: "Which is right for you", body: "Complex bite corrections, severe rotations and cases in growing teenagers often do best with fixed braces. Mild-to-moderate crowding, spacing and cosmetic-focused adult cases are excellent aligner candidates." },
      { heading: "The bottom line", body: "A thorough orthodontic assessment — including X-rays, photos and a bite analysis — is the only way to recommend the right option. Book a consultation and we'll walk you through the plan that fits your smile." },
    ],
  },
  {
    slug: "toothache-at-night",
    title: "Toothache at night: what to do before you can see a dentist",
    category: "Emergencies",
    excerpt:
      "Simple steps to manage dental pain safely while you arrange an emergency appointment.",
    minutes: "4 min read",
    content: [
      { body: "Dental pain often flares up at night. Lying down increases blood pressure in the head, which can make throbbing pain feel worse. The good news: there are safe, simple steps that can bring relief until you can be seen." },
      { heading: "Immediate steps at home", body: "Rinse gently with warm salt water. Take an over-the-counter pain reliever (like ibuprofen or paracetamol) according to the label. Apply a cold compress to the outside of the cheek in 15-minute intervals to reduce swelling." },
      { heading: "Sleep with your head elevated", body: "Prop your head up with an extra pillow. This reduces blood flow to the tooth and often eases the throbbing enough to sleep." },
      { heading: "What to avoid", body: "Do not place aspirin directly on the gum — it can burn the tissue. Avoid very hot or very cold foods and drinks. Do not ignore the pain hoping it will pass; toothache is a signal, not the problem itself." },
      { heading: "When to call us urgently", body: "Severe pain, facial swelling, fever or a knocked-out tooth need immediate care. Call our emergency line and we'll see you the same day." },
    ],
  },
  {
    slug: "truth-about-teeth-whitening",
    title: "The truth about teeth whitening",
    category: "Oral Health",
    excerpt:
      "What professional whitening can and can't do — and how to protect your enamel while brightening your smile.",
    minutes: "5 min read",
    content: [
      { body: "Whitening is one of the most requested cosmetic treatments in dentistry, but it is also one of the most misunderstood. Here's an honest look at what it can and cannot achieve." },
      { heading: "What whitening can do", body: "Professional whitening effectively lifts surface stains and internal discolouration from coffee, tea, wine, tobacco and normal ageing. Results are noticeable within a few sessions and can last months to years with good habits." },
      { heading: "What whitening cannot do", body: "Whitening does not change the colour of crowns, veneers or fillings. It also cannot fix deep intrinsic stains (like tetracycline staining) — those cases usually need masking or veneers." },
      { heading: "In-office vs at-home kits", body: "Professional in-office whitening uses higher-strength, carefully monitored gels for faster, safer results. At-home strips and gels are gentler and slower — and much more likely to cause uneven results or gum irritation if used incorrectly." },
      { heading: "Protecting your enamel", body: "Always whiten under professional guidance, avoid overuse, and use a fluoride toothpaste for sensitivity. Whitening does not damage enamel when done correctly." },
    ],
  },
  {
    slug: "root-canal-facts-vs-fiction",
    title: "Root canal treatment: separating fact from fiction",
    category: "Preventive Care",
    excerpt:
      "Root canals have a scary reputation, but modern techniques make them a comfortable, tooth-saving option.",
    minutes: "6 min read",
    content: [
      { body: "Ask anyone about a root canal and you'll hear dramatic stories. The truth? Modern root canal treatment is one of the most effective, comfortable and important procedures in dentistry — designed to relieve pain, not cause it." },
      { heading: "What actually happens", body: "When the pulp inside a tooth becomes infected or inflamed — from deep decay, a crack or trauma — a root canal removes the infected tissue, cleans and shapes the canals, then seals them. This eliminates the source of pain and saves the tooth." },
      { heading: "Is it painful?", body: "With modern anaesthesia and techniques, a root canal today is typically no more uncomfortable than getting a filling. The pain patients usually associate with root canals is the pain that led them to need one." },
      { heading: "Why saving the tooth matters", body: "Extracting a tooth may seem simpler, but it comes with consequences: neighbouring teeth can drift, bite alignment changes, and replacements (bridges or implants) are often more expensive than a root canal." },
      { heading: "The crown afterwards", body: "Molars and heavily restored teeth usually need a crown after a root canal to protect them from fracture and give them years of reliable function." },
    ],
  },
  {
    slug: "diet-sugar-and-your-teeth",
    title: "Diet, sugar and your teeth",
    category: "Preventive Care",
    excerpt:
      "How the frequency of sugary snacks matters more than the amount, and small changes that protect your enamel.",
    minutes: "4 min read",
    content: [
      { body: "You already know sugar isn't great for your teeth. But the surprising part is that it's not the total amount of sugar that matters most — it's how often you eat it." },
      { heading: "Why frequency matters", body: "Every time you eat or drink something sugary, oral bacteria produce acid for about 20 minutes. Sipping a sugary drink over an hour keeps your teeth under acid attack the whole time — much worse than drinking it all at once." },
      { heading: "Hidden culprits", body: "Fruit juices, sports drinks, sweetened coffee, granola bars and even 'healthy' smoothies are common sources of frequent sugar exposure. Read labels — 'natural' sugars still feed the same bacteria." },
      { heading: "Small changes with big impact", body: "Drink water between meals. Rinse (don't brush) immediately after acidic drinks. Save sweet treats for after meals rather than as standalone snacks. Chew sugar-free gum to boost saliva flow." },
      { heading: "The long view", body: "Good diet habits protect not just your teeth but your overall health. Small, consistent choices matter far more than occasional strict restrictions." },
    ],
  },
];

export const getBlog = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
