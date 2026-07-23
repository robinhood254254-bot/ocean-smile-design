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
    minutes: "7 min read",
    content: [
      { body: "A healthy smile doesn't come from expensive gadgets — it comes from a consistent, correctly done daily routine. Two minutes of brushing, twice a day, plus one round of flossing, is enough to keep most people cavity- and gum-disease-free." },
      { heading: "How to brush effectively", body: "Use a soft-bristled toothbrush and a fluoride toothpaste. Angle the brush at 45 degrees to the gum line and use short, gentle circular strokes. Cover the outer, inner and chewing surfaces of every tooth. Don't scrub hard — pressure damages enamel and gums, and over time creates sensitive, notched areas near the gum line that are much harder to reverse than to prevent." },
      { heading: "Why flossing matters", body: "A toothbrush cannot reach between teeth, and that is where roughly 40 percent of cavities and most gum disease begins. Floss once a day, gently curving the floss around each tooth in a C-shape and sliding it just under the gum line. If traditional floss is difficult, interdental brushes or a water flosser work extremely well — the best tool is the one you'll actually use every day." },
      { heading: "Manual or electric toothbrush?", body: "Electric brushes — especially oscillating-rotating and sonic models — consistently remove more plaque than manual brushing, according to independent Cochrane reviews. That said, a manual brush used with correct technique for a full two minutes is still excellent. Choose based on your habits: if you struggle to brush long enough, the built-in timer on an electric brush is a genuine upgrade." },
      { heading: "Fluoride: what to look for", body: "Look for a toothpaste with 1350–1500 ppm fluoride for adults, and follow the label for children by age. After brushing, spit the paste out but do not rinse with water — leaving a thin fluoride film on the teeth continues to strengthen enamel for hours afterwards." },
      { heading: "Small habits that compound", body: "Replace your toothbrush every 3 months (or sooner if the bristles splay), avoid sugary snacks between meals, and drink water after coffee, tea or juice. Chew sugar-free gum after meals to boost saliva flow, which naturally neutralises acid. None of these habits is dramatic on its own — but done consistently for years, they protect your smile for decades." },
      { heading: "When home care isn't enough", body: "Even the best home routine cannot remove hardened tartar, and it cannot spot early cavities between teeth. A professional cleaning and exam every six months catches problems while they're small and easy to fix. If you notice bleeding gums, persistent bad breath or sensitivity that won't settle, book a visit — those are signals worth listening to." },
    ],
  },
  {
    slug: "how-often-should-you-visit-the-dentist",
    title: "How often should you really visit the dentist?",
    category: "Preventive Care",
    excerpt:
      "For most adults, a check-up every six months helps prevent problems early. Some patients benefit from a shorter interval — here's why.",
    minutes: "6 min read",
    content: [
      { body: "The six-month check-up is a well-known guideline, but the ideal interval depends on your individual risk. Some patients need a visit every 3–4 months; others can safely go once a year. The right cadence is the one that keeps your mouth healthy without unnecessary appointments." },
      { heading: "Who needs more frequent visits", body: "People with gum disease, a history of frequent cavities, orthodontic appliances, dry mouth, diabetes, pregnancy, or those who smoke usually benefit from shorter intervals — often every 3 or 4 months. Immunocompromised patients and people on medications that reduce saliva also need closer monitoring." },
      { heading: "What happens at a check-up", body: "A dental exam is much more than a quick look. Your dentist screens for cavities (including between teeth using bitewing X-rays where appropriate), measures gum pocket depths, checks your bite, examines soft tissues for early signs of oral cancer, and reviews any changes since your last visit. A professional cleaning then removes hardened tartar that no toothbrush can shift." },
      { heading: "Why early detection matters", body: "A cavity caught early is a small filling. Left another year, it can become a root canal and a crown. Gum disease follows the same pattern: reversible in its earliest stage (gingivitis), but bone loss from advanced periodontitis cannot be reversed once it happens. Regular visits are, quite literally, the difference between simple and complex dentistry." },
      { heading: "Children and teens", body: "Kids should also visit every six months. Their mouths change rapidly — new teeth erupting, baby teeth wobbling, orthodontic issues appearing — and short intervals let us guide development, apply protective fluoride varnish, and build a lifetime of positive dental habits." },
      { heading: "Prevention pays", body: "Small issues caught early are simpler, less painful and much less expensive to treat. Regular check-ups are the single most cost-effective step you can take for your oral health — and for your overall health, since oral inflammation is linked to heart disease, diabetes control and pregnancy outcomes." },
    ],
  },
  {
    slug: "childs-first-dental-visit",
    title: "Your child's first dental visit: what to expect",
    category: "Children",
    excerpt:
      "A calm, positive first visit sets the tone for a lifetime of comfortable dental care. Practical tips for parents.",
    minutes: "7 min read",
    content: [
      { body: "Your child's first dental visit is not just about teeth — it's about building trust. A gentle, positive early experience shapes how they feel about dental care for the rest of their life, and children who see the dentist early are far less likely to develop dental anxiety as adults." },
      { heading: "When to schedule it", body: "The general recommendation is a first visit around the appearance of the first tooth, or by the first birthday. This early visit lets us check development, spot risks like early childhood caries, and coach parents on home care, feeding and habits." },
      { heading: "How to prepare your child", body: "Speak positively about the dentist. Avoid words like 'pain', 'shot', 'drill' or 'hurt' — even to reassure. Read a friendly picture book about visiting the dentist, play pretend at home with a toothbrush and a doll, and let them bring a comforting toy on the day. Schedule the visit for a time when your child is normally rested and fed, not tired or hungry." },
      { heading: "What we do at the visit", body: "The first visit is deliberately relaxed and unhurried: a friendly introduction, a ride in the chair, a gentle 'tooth count' with a mirror, a soft polish if appropriate, and a chat with parents about brushing, feeding, thumb-sucking, dummy use and fluoride. We work at your child's pace — never forcing." },
      { heading: "Building good habits at home", body: "Brush your child's teeth for them (or with them) until they can tie their own shoelaces reliably — usually around age seven or eight. Use a smear of fluoride toothpaste for under-3s and a pea-sized amount from age 3. Avoid bottles of milk or juice at bedtime, which are the single biggest cause of decay in toddlers." },
      { heading: "After the visit", body: "Celebrate the visit — a sticker, a small non-sugary treat or simply enthusiastic praise. Positive reinforcement makes the next visit even easier. If your child was nervous, that's completely normal — a few gentle visits usually build lasting confidence." },
      { heading: "When to come sooner", body: "Book earlier than the six-month interval if you notice white or brown spots on the teeth, chipped teeth, swollen or bleeding gums, or persistent bad breath. Injuries to baby teeth also deserve a quick check, as they can affect the developing adult tooth underneath." },
    ],
  },
  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs clear aligners: understanding the options",
    category: "Orthodontics",
    excerpt:
      "Both approaches can produce excellent results. The right choice depends on your bite, lifestyle and treatment goals.",
    minutes: "8 min read",
    content: [
      { body: "Braces and clear aligners can both create beautifully straight, healthy smiles. Choosing between them comes down to the complexity of your case, your lifestyle, your budget and your personal preferences — and often, either option would work." },
      { heading: "Fixed braces", body: "Traditional braces use small brackets bonded to each tooth, connected by an archwire that gently guides teeth into position. They are extremely versatile and can correct complex bite problems, severe crowding, deep rotations and vertical movements that aligners may struggle with. Modern brackets are smaller and more comfortable than the braces most adults remember from their own childhoods." },
      { heading: "Clear aligners", body: "Clear aligners are a series of removable, transparent trays worn 20–22 hours a day, each set shifting the teeth a small amount before being replaced with the next. They are nearly invisible, comfortable, and can be removed for eating and brushing — but they rely on strict compliance to work. Missing wear time delays your result and can even mean starting a stage over." },
      { heading: "Which is right for you", body: "Complex bite corrections, severe rotations, impacted teeth and cases in growing teenagers often do best with fixed braces. Mild-to-moderate crowding, spacing and cosmetic-focused adult cases are excellent aligner candidates. If you play contact sports or a wind instrument, aligners may suit your lifestyle better; if you tend to forget or lose things, fixed braces remove that risk." },
      { heading: "Treatment time and cost", body: "Simple cases can finish in 6–9 months with either option; complex cases can take 18–30 months. Cost varies with complexity and appliance type, but the two options are often closer in price than people expect. A consultation with X-rays and photos gives an accurate estimate for your specific case." },
      { heading: "What life is like during treatment", body: "With braces, expect some tenderness for a few days after each adjustment, and be careful with sticky or very hard foods that can damage brackets. With aligners, expect mild pressure with each new tray and get comfortable removing them before every meal. Both require excellent brushing and flossing — orthodontic patients need extra attention to hygiene to protect enamel." },
      { heading: "Retention: the part everyone forgets", body: "Teeth naturally want to drift back after treatment. Retainers — fixed wires behind the teeth, removable clear trays, or both — are what preserve your result for life. Wearing retainers as instructed is arguably the most important part of orthodontics." },
      { heading: "The bottom line", body: "A thorough orthodontic assessment — including X-rays, digital scans and a bite analysis — is the only way to recommend the right option. Book a consultation and we'll walk you through the plan, timeline and cost that fits your smile." },
    ],
  },
  {
    slug: "toothache-at-night",
    title: "Toothache at night: what to do before you can see a dentist",
    category: "Emergencies",
    excerpt:
      "Simple steps to manage dental pain safely while you arrange an emergency appointment.",
    minutes: "6 min read",
    content: [
      { body: "Dental pain often flares up at night. Lying down increases blood pressure in the head, which can make throbbing pain feel worse, and there are fewer distractions to take your mind off it. The good news: there are safe, simple steps that can bring meaningful relief until you can be seen." },
      { heading: "Immediate steps at home", body: "Rinse gently with warm salt water (half a teaspoon of salt in a glass of warm water) to soothe the tissues and clear any food debris. Take an over-the-counter pain reliever such as ibuprofen or paracetamol according to the label — used correctly, ibuprofen also reduces inflammation, which is often the underlying cause of the throbbing." },
      { heading: "Cold compress", body: "Apply a cold compress or a bag of frozen peas wrapped in a thin cloth to the outside of the cheek in 15-minute intervals. This reduces swelling and slows nerve conduction, which dulls the pain. Never place ice directly on the tooth itself." },
      { heading: "Sleep with your head elevated", body: "Prop your head up with an extra pillow, or sleep in a reclined chair. This reduces blood flow to the tooth and often eases the throbbing enough to fall asleep. Avoid lying flat on the affected side." },
      { heading: "What to avoid", body: "Do not place aspirin directly on the gum — it burns the tissue and creates a chemical ulcer. Avoid very hot or very cold foods and drinks. Do not use a heat pack on the face if there is any swelling — heat can spread infection. And do not ignore the pain hoping it will pass; toothache is a signal, not the problem itself." },
      { heading: "What might be causing it", body: "The most common causes are a deep cavity that has reached the nerve, a cracked tooth, an abscess (a pocket of infection at the root tip), a wisdom tooth pressing against its neighbour, or sinus pressure referring pain to upper teeth. Only an exam and, usually, an X-ray can tell them apart — but the treatment for each is very different, which is why self-diagnosis rarely helps." },
      { heading: "When to call us urgently", body: "Severe pain that isn't controlled by over-the-counter medication, facial swelling, fever, difficulty swallowing or breathing, or a knocked-out tooth all need immediate care. Call our emergency line and we'll see you the same day. A knocked-out adult tooth in particular has the best chance of survival if it's replanted within the first hour." },
    ],
  },
  {
    slug: "truth-about-teeth-whitening",
    title: "The truth about teeth whitening",
    category: "Oral Health",
    excerpt:
      "What professional whitening can and can't do — and how to protect your enamel while brightening your smile.",
    minutes: "7 min read",
    content: [
      { body: "Whitening is one of the most requested cosmetic treatments in dentistry, but it is also one of the most misunderstood. Here's an honest look at what it can and cannot achieve, and how to whiten safely." },
      { heading: "How whitening actually works", body: "Professional whitening gels contain hydrogen peroxide or carbamide peroxide, which break down stain molecules inside the enamel and dentine. The tooth structure isn't removed or damaged — it's the stains within it that fade. That's why properly done whitening does not weaken teeth." },
      { heading: "What whitening can do", body: "Professional whitening effectively lifts surface stains and internal discolouration from coffee, tea, red wine, tobacco, curry, dark berries and normal ageing. Results are noticeable within a few sessions and, with good habits, can last months to years before a top-up is needed." },
      { heading: "What whitening cannot do", body: "Whitening does not change the colour of crowns, veneers, composite fillings or bridges — they stay the shade they were made. It also cannot fix deep intrinsic stains (like tetracycline staining from childhood antibiotics) — those cases usually need masking, bonding or veneers. If your front teeth have visible fillings, those may need to be replaced after whitening to match your new shade." },
      { heading: "In-office vs at-home kits", body: "Professional in-office whitening uses higher-strength, carefully monitored gels for faster, safer results — often a full shade change in a single visit. Custom-fitted home trays supplied by a dentist are also very effective and let you top up over time. Over-the-counter strips and generic mouth-guard kits are gentler and slower, and are more likely to cause uneven results, gum irritation or sensitivity if used incorrectly." },
      { heading: "Managing sensitivity", body: "Some short-term sensitivity to cold is common during whitening and usually settles within a few days. Using a toothpaste for sensitive teeth for two weeks before and during treatment, and taking breaks between sessions, keeps most people comfortable. Persistent pain isn't normal — pause and check in with us." },
      { heading: "Keeping your results", body: "Rinse with water after coffee, tea and red wine. Use a straw for very dark drinks. Don't smoke — nothing stains teeth faster. And schedule a short top-up whitening session every 6–12 months if you like the brightest possible shade." },
    ],
  },
  {
    slug: "root-canal-facts-vs-fiction",
    title: "Root canal treatment: separating fact from fiction",
    category: "Preventive Care",
    excerpt:
      "Root canals have a scary reputation, but modern techniques make them a comfortable, tooth-saving option.",
    minutes: "8 min read",
    content: [
      { body: "Ask anyone about a root canal and you'll hear dramatic stories. The truth is that modern root canal treatment is one of the most effective, comfortable and important procedures in dentistry — designed to relieve pain, not cause it, and to save a tooth that would otherwise be lost." },
      { heading: "What a root canal is (and isn't)", body: "Every tooth contains a soft tissue core — the pulp — with nerves and blood vessels. When the pulp becomes infected or inflamed from deep decay, a crack, a leaking filling or trauma, it does not heal on its own. A root canal (also called endodontic treatment) removes that damaged pulp, cleans and disinfects the internal canals, and seals them to prevent re-infection. The outside of the tooth stays exactly as it was." },
      { heading: "Is it painful?", body: "With modern anaesthesia, magnification and rotary instruments, a root canal today is typically no more uncomfortable than getting a filling. Most patients are surprised at how uneventful it feels. The pain patients usually associate with root canals is the pain that led them to need one — and that pain almost always disappears once treatment is complete." },
      { heading: "How many visits it takes", body: "Many root canals are completed in a single visit of 60–90 minutes; more complex teeth (typically molars with curved canals, or teeth with existing infection) may need two visits. Between visits, the tooth is sealed with a temporary filling and, if needed, a course of antibiotics if there's active infection." },
      { heading: "Why saving the tooth matters", body: "Extracting a tooth may seem simpler and cheaper, but it comes with real long-term consequences: neighbouring teeth drift into the gap, the opposing tooth over-erupts, the bite changes, chewing becomes less efficient, and jawbone in the area shrinks over time. Replacements — a bridge or an implant — are almost always more expensive and more invasive than the original root canal would have been." },
      { heading: "The crown afterwards", body: "Molars and heavily restored teeth usually need a crown after a root canal. The reason is simple: root-treated teeth become more brittle over time, and a full-coverage crown protects them from fracture, giving them a life expectancy similar to a healthy natural tooth. Skipping the crown is the most common reason a well-done root canal eventually fails." },
      { heading: "Success rates", body: "Modern root canal treatment has a success rate of around 85–95 percent over 5–10 years when completed properly and followed by a crown. In the small number of cases where a root canal doesn't heal, options include re-treatment, a small surgical procedure called an apicoectomy, or (if all else fails) extraction and replacement." },
      { heading: "Common myths, briefly", body: "Root canals do not cause other illnesses — this myth was disproved decades ago and has no basis in modern research. Root canal teeth do not need to be extracted after a set number of years. And a tooth that stops hurting hasn't necessarily healed — pain often fades as the nerve dies, while infection quietly continues underneath." },
    ],
  },
  {
    slug: "diet-sugar-and-your-teeth",
    title: "Diet, sugar and your teeth",
    category: "Preventive Care",
    excerpt:
      "How the frequency of sugary snacks matters more than the amount, and small changes that protect your enamel.",
    minutes: "6 min read",
    content: [
      { body: "You already know sugar isn't great for your teeth. But the most important — and least intuitive — fact about sugar and dental decay is this: it's not the total amount of sugar that matters most, it's how often you eat it." },
      { heading: "Why frequency matters", body: "Every time you eat or drink something sugary, oral bacteria produce acid for about 20 minutes. Sipping a sugary drink slowly over an hour keeps your teeth under acid attack the entire time — much worse than drinking the same amount all at once with a meal. Grazing on biscuits, sweets or fruit juice through the day is one of the fastest routes to cavities in both children and adults." },
      { heading: "Acidic drinks are almost as bad", body: "Sodas, sparkling flavoured waters, sports drinks, fruit juices and even herbal teas with lemon are acidic enough to erode enamel directly, quite apart from any sugar they contain. Diet fizzy drinks are still acidic. The safest drinks for teeth are still plain water and unflavoured milk." },
      { heading: "Hidden culprits", body: "Granola bars, dried fruit, sweetened yoghurts, breakfast cereals, flavoured coffee syrups and 'healthy' smoothies are common sources of frequent sugar exposure. Read labels — 'natural' sugars from honey, agave or fruit still feed the same acid-producing bacteria as table sugar. Anything that clings to the teeth (like dried mango or toffee) is especially cariogenic." },
      { heading: "Foods that actually help", body: "Cheese, plain yoghurt, nuts, celery, apples and crunchy raw vegetables all help — they stimulate saliva, physically clean teeth, or provide calcium and phosphate that support enamel. Finishing a meal with a small piece of cheese is a genuinely effective anti-cavity habit." },
      { heading: "Small changes with big impact", body: "Drink water between meals. Rinse (don't brush immediately) after acidic drinks, and wait 30–60 minutes before brushing to let enamel re-harden. Save sweet treats for after meals rather than as standalone snacks. Chew sugar-free gum with xylitol after meals to boost saliva flow and neutralise acid." },
      { heading: "For parents", body: "Never send a child to bed with a bottle of anything but water. Dilute juice heavily, or replace it with water and whole fruit. Save sweets for one treat time rather than spreading them through the day, and brush thoroughly before bed — saliva flow drops at night, so bedtime brushing matters most." },
      { heading: "The long view", body: "Good diet habits protect not just your teeth but your gums, your general health and your risk of type 2 diabetes. Small, consistent choices matter far more than occasional strict restrictions — and they are much easier to sustain for a lifetime." },
    ],
  },
];

export const getBlog = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
