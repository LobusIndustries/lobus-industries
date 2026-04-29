export type Section = {
  heading?: string;
  paragraphs?: string[];
  list?: { title: string; body: string }[];
  callout?: string;
};

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "how-much-does-a-small-business-website-cost",
    title: "How Much Does a Small Business Website Cost?",
    metaTitle: "How Much Does a Small Business Website Cost? (2026 Guide)",
    metaDescription:
      "A plain-English breakdown of what a small business website actually costs in 2026 — DIY builders, freelancers, agencies, and a model that charges nothing upfront.",
    publishDate: "April 28, 2026",
    readTime: "5 min read",
    excerpt:
      "The real range is $0 to $15,000+. Here's how to figure out what you actually need — and where most service businesses go wrong.",
    sections: [
      {
        paragraphs: [
          "If you've tried to price out a website for your service business recently, you've probably gotten wildly different answers. That's because 'website' can mean anything from a one-page Wix site you threw together in an afternoon to a $15,000 custom build from a design agency.",
          "Most service businesses — plumbers, electricians, landscapers, cleaners, contractors — don't need either extreme. Here's a clear-eyed look at what you're actually choosing between.",
        ],
      },
      {
        heading: "Option 1: DIY website builders (Wix, Squarespace, GoDaddy)",
        list: [
          { title: "Cost", body: "$0–$30/month plus your time" },
          { title: "What you get", body: "Templates, a drag-and-drop editor, and basic hosting" },
          {
            title: "The real catch",
            body: "Building a decent site on Wix takes 15–40 hours for a first-timer. If your time is worth $50/hour, that 'free' site just cost you $750–$2,000 in time alone — and you're not a designer, so it probably still looks like a template.",
          },
          {
            title: "Ongoing cost",
            body: "You still pay $15–$30/month, and every update — new phone number, added service, changed hours — is yours to handle.",
          },
        ],
      },
      {
        heading: "Option 2: Hiring a freelancer",
        list: [
          { title: "Cost", body: "$800–$3,500 upfront, then $50–$150/month for hosting" },
          { title: "What you get", body: "A custom design built around your business" },
          {
            title: "The real catch",
            body: "Quality varies enormously. A $900 freelancer on Fiverr and a $3,500 specialist are very different products. Vetting takes time, and you're still on the hook for a big upfront payment before you've seen a single page.",
          },
        ],
      },
      {
        heading: "Option 3: A web design agency",
        list: [
          { title: "Cost", body: "$3,000–$15,000+ upfront, $200–$500/month ongoing" },
          { title: "What you get", body: "A full-service team handling everything" },
          {
            title: "The real catch",
            body: "Most service businesses don't need — and can't easily justify — a $5,000 upfront spend. Agencies are built for companies with marketing budgets, not a landscaper trying to replace word-of-mouth referrals.",
          },
        ],
      },
      {
        heading: "The hidden costs nobody mentions",
        paragraphs: [
          "Whatever route you choose, budget for these extras that catch people off guard:",
        ],
        list: [
          { title: "Domain name", body: "$10–$20/year (GoDaddy, Namecheap, Google Domains)" },
          { title: "SSL certificate", body: "Free to $100/year — required for the padlock icon in browsers" },
          { title: "Hosting", body: "$10–$50/month depending on your provider and traffic" },
          { title: "Ongoing updates", body: "If you hire someone per-change, expect $50–$150 per edit" },
          { title: "SEO setup", body: "Many freelancers deliver a site that looks great but isn't set up to rank on Google" },
        ],
      },
      {
        heading: "What most service businesses actually need",
        paragraphs: [
          "A service business website doesn't need to be complicated. It needs to do three things: look professional, show up on Google when local customers search for what you do, and make it easy for people to contact you.",
          "That's it. A 5-page site with clear services, a contact form, and solid local SEO will outperform a 30-page site that was built by the wrong person.",
        ],
        callout:
          "Lobus Industries builds websites for service businesses for $0 upfront — you only pay $100/month to keep it running. No build fee, no contract, cancel any time.",
      },
      {
        heading: "So what should you pay?",
        paragraphs: [
          "If you have 20–40 hours to spare and don't mind a template look: DIY is fine. If you want a professional result without a big upfront hit: find a model where the build cost is eliminated. If you're running a larger operation and have the budget: a good freelancer or boutique agency is worth it.",
          "The wrong move is doing nothing. A bad website is better than no website — and a good website for a service business pays for itself in a single new customer.",
        ],
      },
    ],
  },
  {
    slug: "does-my-service-business-need-a-website",
    title: "Does My Service Business Need a Website?",
    metaTitle: "Does My Service Business Need a Website? (Honest Answer)",
    metaDescription:
      "If you're running a plumbing, cleaning, landscaping, or any service business and wondering whether a website is worth it — here's the honest answer.",
    publishDate: "April 27, 2026",
    readTime: "4 min read",
    excerpt:
      "Short answer: yes. Even if you're fully booked on referrals right now — here's why that's exactly when you need one.",
    sections: [
      {
        paragraphs: [
          "It's a fair question, especially if business is going okay. You're getting referrals, you've got regulars, things are moving. So why spend money on a website?",
          "Here's the honest answer: because your referrals are Googling you before they call.",
        ],
      },
      {
        heading: "What customers do before picking up the phone",
        paragraphs: [
          "Studies consistently show that over 75% of consumers research a business online before contacting them — even when they were referred by someone they trust. They want to see that you're real, that your work looks good, and that other people have had positive experiences.",
          "If they Google your name and find nothing — or a bare Facebook page with posts from 2021 — that creates doubt. Not necessarily enough to stop them from calling, but enough to make them feel uncertain. And uncertainty kills conversions.",
        ],
      },
      {
        heading: "\"But I get all my work from referrals\"",
        paragraphs: [
          "That's great — and it won't last forever. Referral networks dry up. People move. Word of mouth has a ceiling. A website is what lets you grow beyond the people who already know you.",
          "More importantly: when a referred customer Googles you and finds a professional site, it reinforces the referral. When they find nothing, it plants doubt.",
        ],
      },
      {
        heading: "What about just using social media?",
        paragraphs: [
          "Instagram and Facebook are useful tools. But they're rented land. You don't own your audience there. Algorithms change, reach drops, platforms fall out of favor. A website is the one asset you own outright.",
          "Social media also doesn't rank on Google the way a proper website does. Someone searching 'electrician near me' or 'best landscaper in [your city]' isn't finding your Instagram — they're finding websites.",
        ],
      },
      {
        heading: "What a website actually does for a service business",
        list: [
          {
            title: "Credibility",
            body: "A professional website signals that you're a real, established business — not someone who just started last week.",
          },
          {
            title: "Discoverability",
            body: "People who don't know you yet can find you on Google. That's new business you'd otherwise never see.",
          },
          {
            title: "Lead generation",
            body: "A contact form or quote request form works while you're on the job, in the evenings, and on weekends.",
          },
          {
            title: "Competitive advantage",
            body: "Most of your local competitors have bad websites or none at all. A good one immediately puts you ahead.",
          },
        ],
      },
      {
        heading: "The cost of not having one",
        paragraphs: [
          "Every month you operate without a website, you're invisible to everyone who doesn't already know you. You're losing jobs to competitors with worse work but better websites. You're relying entirely on a referral network that has limits.",
          "A website isn't a luxury for a service business. It's the minimum viable presence for the way customers make decisions today.",
        ],
        callout:
          "Lobus Industries builds websites for service businesses for $0 upfront. You pay $100/month to keep it live. If you've been putting this off, there's no longer a cost reason to.",
      },
    ],
  },
  {
    slug: "wix-vs-custom-website-for-service-business",
    title: "Wix vs. a Custom Website for Your Service Business",
    metaTitle: "Wix vs. Custom Website for Service Businesses (2026)",
    metaDescription:
      "Thinking about building your service business website on Wix? Here's an honest comparison of DIY builders versus a custom-built site — and what actually matters.",
    publishDate: "April 26, 2026",
    readTime: "5 min read",
    excerpt:
      "Wix isn't bad. But for a service business trying to rank locally and convert visitors into customers, it has real limitations worth knowing about.",
    sections: [
      {
        paragraphs: [
          "Wix has done a great job marketing itself as the easy, affordable way to build a business website. And for some businesses — a photographer wanting a portfolio, a small shop needing an online presence fast — it's genuinely fine.",
          "For service businesses trying to rank locally and turn website visitors into paying customers, the picture is more complicated.",
        ],
      },
      {
        heading: "What Wix is actually good at",
        list: [
          {
            title: "Speed to launch",
            body: "If you need something live this week and don't care about polish, Wix gets you there fast.",
          },
          {
            title: "No technical knowledge required",
            body: "Drag and drop, decent templates, and everything is visual.",
          },
          {
            title: "Low upfront cost",
            body: "$0 to start (with ads on your site) or $16–$45/month for a paid plan.",
          },
        ],
      },
      {
        heading: "Where it falls short for service businesses",
        list: [
          {
            title: "It takes real time to build",
            body: "Most first-timers spend 15–40 hours building a halfway decent Wix site. That's time not spent on your actual business. If you value your time at $75/hour, your 'free' site just cost you $1,125–$3,000.",
          },
          {
            title: "Templates look like templates",
            body: "Wix sites tend to look like Wix sites. Customers have seen them a thousand times. A custom site built around your specific business feels different — and different builds trust.",
          },
          {
            title: "Local SEO limitations",
            body: "Wix has improved its SEO tools, but it still generates heavier page code than purpose-built frameworks, which affects load speed — a ranking factor. Getting strong local search results on Wix requires real expertise most small business owners don't have.",
          },
          {
            title: "You handle every update",
            body: "New phone number? Changed service? New photo? You're logging in and doing it yourself — forever.",
          },
          {
            title: "You still pay monthly",
            body: "Wix isn't actually free for a business. You're paying $16–$45/month and doing all the work yourself.",
          },
        ],
      },
      {
        heading: "The real cost comparison",
        paragraphs: [
          "Here's the math most people don't do up front:",
        ],
        list: [
          {
            title: "Wix (Year 1)",
            body: "$240–$540 in fees + 20–40 hours of your time building it + ongoing time for updates. Total real cost: $1,500–$3,500+",
          },
          {
            title: "Custom site via Lobus Industries (Year 1)",
            body: "$0 to build + $1,200 in hosting ($100/month) + zero hours of your time on maintenance. Total real cost: $1,200",
          },
        ],
      },
      {
        heading: "When Wix makes sense",
        paragraphs: [
          "If you genuinely enjoy building things, have the time, and want full control over every pixel — Wix is a reasonable option. It's not a bad product.",
          "But if you want a professional result without spending 30 hours learning a website builder, and you'd rather focus on running your actual business — a done-for-you model is almost always the better value.",
        ],
        callout:
          "Lobus Industries builds custom websites for service businesses for $0 upfront. You get a professional result without touching a website builder — and you keep it running for $100/month.",
      },
    ],
  },
  {
    slug: "what-every-service-business-website-needs",
    title: "5 Things Every Service Business Website Needs to Get Customers",
    metaTitle: "5 Things Every Service Business Website Needs (to Actually Get Customers)",
    metaDescription:
      "Most service business websites fail at the same things. Here are the 5 elements that separate a site that generates leads from one that doesn't.",
    publishDate: "April 25, 2026",
    readTime: "4 min read",
    excerpt:
      "Most service business websites fail at the same five things. Get these right and you'll outperform 80% of your local competition.",
    sections: [
      {
        paragraphs: [
          "Most service business websites fail at the same things. The design might look decent, but the fundamentals are wrong — and fundamentals are what turn visitors into customers.",
          "Whether you're a plumber, landscaper, cleaner, electrician, or contractor, these five elements are non-negotiable.",
        ],
      },
      {
        heading: "1. A headline that says exactly what you do and where",
        paragraphs: [
          "Not 'Welcome to Smith & Sons.' Not 'Quality You Can Trust.' Those say nothing. A visitor should know within three seconds whether you're relevant to them.",
          "Good: 'Licensed Electrician Serving the Denver Metro Area.' Great: 'Licensed Electrician in Denver — Residential & Commercial, Same-Day Available.'",
          "Include your city or service area in the headline. It's one of the single highest-impact things you can do for local SEO.",
        ],
      },
      {
        heading: "2. A contact form or phone number visible without scrolling",
        paragraphs: [
          "Most visitors won't scroll. Studies show that over 50% of users make a decision about a website within the first screen they see — before they've scrolled anywhere.",
          "Your call-to-action — whether it's a phone number, a 'Get a free quote' form, or a 'Book now' button — needs to be in that first screen on both desktop and mobile.",
        ],
      },
      {
        heading: "3. A clear list of your services",
        paragraphs: [
          "This sounds obvious, but a surprising number of service business websites don't list what they actually do. Customers won't assume. They won't call to ask. They'll leave.",
          "List your services explicitly. If you do residential and commercial, say so. If you cover specific jobs (drain cleaning, water heater installation, emergency repairs), list them. Specificity builds confidence.",
        ],
      },
      {
        heading: "4. Local SEO signals throughout the page",
        paragraphs: [
          "Google needs to understand where you operate before it shows you to local searchers. That means:",
        ],
        list: [
          { title: "City name in the page title", body: "e.g., 'Plumber in Austin, TX | Smith Plumbing'" },
          { title: "City name in headings and body copy", body: "Mention your service area naturally in the content" },
          { title: "Google Business Profile", body: "Linked to your site, with consistent name/address/phone" },
          { title: "Structured data", body: "JSON-LD markup that tells Google your business type, location, and services" },
        ],
      },
      {
        heading: "5. A site that works perfectly on mobile",
        paragraphs: [
          "Over 60% of local service searches happen on a phone — often when something has just gone wrong (the pipe burst, the AC went out, the roof is leaking). If your site is slow to load or hard to navigate on mobile, you're losing more than half your potential leads.",
          "Mobile optimization isn't just about responsive design. It's about load speed, tap-friendly buttons, and making the phone number clickable so someone can call you with one tap.",
        ],
        callout:
          "Every site Lobus Industries builds hits all five of these by default — custom design, local SEO setup, mobile-optimized, contact forms, and a visible CTA. $0 to build, $100/month to host.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
