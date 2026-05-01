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
  relatedTrade?: { label: string; href: string };
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
  {
    slug: "local-seo-for-service-businesses",
    title: "Local SEO for Service Businesses: What Actually Works",
    metaTitle: "Local SEO for Service Businesses: What Actually Works (2026)",
    metaDescription:
      "A plain-English guide to local SEO for plumbers, electricians, landscapers, and other service businesses. What moves the needle — and what's a waste of time.",
    publishDate: "April 24, 2026",
    readTime: "5 min read",
    excerpt:
      "Most local SEO advice is written for marketing agencies, not for service businesses. Here's what actually gets you found by local customers.",
    sections: [
      {
        paragraphs: [
          "If you've ever Googled 'local SEO for plumbers' and come back with a list of 47 tactics involving domain authority, backlink profiles, and content clusters — you've experienced the problem. Most SEO advice is written for companies with marketing teams, not for a landscaper trying to show up when someone in their city searches 'landscaper near me.'",
          "Here's what actually moves the needle for local service businesses.",
        ],
      },
      {
        heading: "What local SEO actually means",
        paragraphs: [
          "Local SEO is about showing up when people in your area search for what you do. There are two main places this happens: Google's map pack (the three businesses shown on a map at the top of search results) and regular organic search results below it.",
          "For most service businesses, the map pack is where you want to be. It shows up above all the organic results, it's mobile-first, and it has a click-to-call button. Getting into the map pack is mostly about your Google Business Profile.",
        ],
      },
      {
        heading: "The four things that actually move the needle",
        list: [
          {
            title: "Google Business Profile",
            body: "This is the single highest-leverage thing you can do. A complete, verified GBP with accurate hours, services, photos, and a link to your website dramatically improves your chance of appearing in the local map pack. If you haven't set one up, do it today.",
          },
          {
            title: "Consistent NAP across the web",
            body: "NAP stands for Name, Address, Phone. Google cross-references your business info across dozens of sites (Yelp, Yellow Pages, BBB, etc.). If your name is 'Smith Plumbing LLC' in one place and 'Smith Plumbing' in another, it creates confusion. Pick one format and use it everywhere.",
          },
          {
            title: "Your city name in your website content",
            body: "Google needs to know where you operate. Your city name should appear in your page title, in your headings, and naturally throughout your content. 'Licensed plumber serving Austin, TX' beats 'Licensed plumber serving the local area' every time.",
          },
          {
            title: "Reviews",
            body: "Reviews are one of the most significant ranking signals for local search — and the most overlooked. A business with 50 Google reviews outranks an identical competitor with 5 almost every time. Ask every happy customer for a review. Most will leave one if you make it easy.",
          },
        ],
      },
      {
        heading: "What doesn't matter as much as people think",
        list: [
          {
            title: "Domain authority",
            body: "For local service businesses, you don't need high domain authority to rank locally. Google knows you're a local plumber — you don't need to compete with national websites.",
          },
          {
            title: "Backlinks",
            body: "Building backlinks matters for national SEO. For local SEO, it's much less important than your GBP and on-page signals. Don't pay anyone to 'build links' for your small service business.",
          },
          {
            title: "Posting on social media for SEO",
            body: "Social signals are not a ranking factor. Posting on Instagram doesn't help your Google rankings. It might help your brand awareness, but don't do it thinking it helps SEO.",
          },
        ],
      },
      {
        heading: "How fast can you expect results?",
        paragraphs: [
          "Google Business Profile improvements can show results in weeks. A newly verified GBP with complete info and a handful of reviews can start appearing in map pack results surprisingly fast — especially in markets that aren't heavily competitive.",
          "Organic website rankings take longer — typically 2-4 months before you see meaningful movement. The key is to start now, because the work you do today compounds.",
        ],
        callout:
          "Every Lobus Industries website is built with local SEO foundations already in place — city-specific copy, structured data, Google Business Profile setup, and mobile optimization. $0 to build, $100/month to host.",
      },
    ],
  },
  {
    slug: "why-word-of-mouth-isnt-enough",
    title: "Why Word of Mouth Isn't Enough Anymore for Service Businesses",
    metaTitle: "Why Word of Mouth Isn't Enough for Service Businesses (2026)",
    metaDescription:
      "If your service business runs on referrals, you're one slow season away from a problem. Here's why a website matters even when business is good.",
    publishDate: "April 23, 2026",
    readTime: "4 min read",
    excerpt:
      "Referrals are great — until they slow down. Here's why every service business needs a website even when word of mouth seems to be working.",
    sections: [
      {
        paragraphs: [
          "The most common thing we hear from service business owners who don't have a website: 'I get all my work from referrals, so I don't really need one.'",
          "It makes sense on the surface. But it misunderstands what a website does — and what word of mouth can't do.",
        ],
      },
      {
        heading: "Referrals have a ceiling",
        paragraphs: [
          "Referral networks are finite. Your happy customers refer their friends, those friends refer their neighbors, and eventually the network saturates. People move. They forget to mention you. Their circle doesn't overlap with the people who need you.",
          "A website has no ceiling. It works for anyone searching Google in your area, 24 hours a day, whether they know you or not. That's new business you'd never see from referrals alone.",
        ],
      },
      {
        heading: "Referred customers Google you before they call",
        paragraphs: [
          "Here's something most service business owners don't realize: even when someone is referred to you, there's a very high probability they Google your name before picking up the phone.",
          "They want to make sure you're real. They want to see your work. They want to read reviews. If they search your name and find nothing — or a bare Facebook page from two years ago — it plants doubt. That doubt doesn't always stop them from calling, but it starts the conversation at a disadvantage.",
        ],
      },
      {
        heading: "You're invisible to everyone outside your network",
        paragraphs: [
          "New residents move into your service area every month. People who just bought a house and need a landscaper. A business owner who needs an electrician. A family whose AC just went out.",
          "These people have money to spend and a real need — but they don't know you. They're not in your referral network. They open Google and search. If you're not there, someone else gets the job.",
        ],
      },
      {
        heading: "One bad season without referrals is all it takes",
        paragraphs: [
          "Referral businesses feel secure right up until they don't. A key referral source moves away. A slow economy makes people put off projects. A bad review spreads through your network.",
          "The service businesses that weather slow periods best are the ones with diversified lead sources — and a website is the most reliable of all of them.",
        ],
        callout:
          "Lobus Industries builds websites for service businesses for $0 upfront. If you've been putting it off because referrals are working, that's exactly when to start — before you need it.",
      },
    ],
  },
  {
    slug: "what-makes-a-good-contractor-website",
    title: "What Makes a Good Contractor Website? (7 Must-Haves)",
    metaTitle: "What Makes a Good Contractor Website? 7 Must-Haves for 2026",
    metaDescription:
      "A contractor website that actually wins jobs needs more than a logo and a phone number. Here are the 7 elements that separate the sites that convert from the ones that don't.",
    publishDate: "April 22, 2026",
    readTime: "5 min read",
    excerpt:
      "Most contractor websites fail at the same things. Here's what a site needs to actually win jobs — not just exist on the internet.",
    sections: [
      {
        paragraphs: [
          "A contractor website that just 'exists' isn't the same as one that wins jobs. Most contractor sites fail not because they look terrible, but because they're missing the specific elements that move a homeowner from 'interested' to 'contacting you.'",
          "Here's what actually matters.",
        ],
      },
      {
        heading: "1. A headline that says what you do and where",
        paragraphs: [
          "The most important text on your site is the first thing people read. 'Welcome to Johnson Construction' tells them nothing. 'General Contractor Serving the Dallas–Fort Worth Metroplex' tells them everything they need to know in under two seconds.",
          "Your city or service area should be in the headline. It's one of the highest-impact local SEO moves you can make, and it immediately filters in the right customers.",
        ],
      },
      {
        heading: "2. A project portfolio with real photos",
        paragraphs: [
          "No element of a contractor site converts better than a real portfolio. Not stock photos. Not renders. Photos of your actual completed work — kitchens, additions, decks, bathrooms, whatever you build.",
          "Homeowners deciding between two contractors will almost always choose the one whose past work they can see. If your site has no photos, you lose that comparison every time.",
        ],
      },
      {
        heading: "3. Your services listed explicitly",
        paragraphs: [
          "Don't make visitors guess what you do. List your services clearly — remodeling, additions, decks, new construction, commercial work, whatever applies. If you specialize in something, say so.",
          "Customers who can quickly confirm you do their specific type of job are significantly more likely to contact you.",
        ],
      },
      {
        heading: "4. License and insurance info",
        paragraphs: [
          "For a contractor doing $20,000+ jobs, customers want to know you're licensed and insured before they even consider calling. Put your license number on the site. Mention that you're fully insured.",
          "This one piece of information removes a major objection before it's ever raised.",
        ],
      },
      {
        heading: "5. A prominent quote request form",
        paragraphs: [
          "Not everyone wants to call. Many potential clients — especially for larger jobs — prefer to describe their project in writing first. A well-designed quote form captures these leads before they move on to the next contractor in their search results.",
        ],
      },
      {
        heading: "6. Mobile optimization",
        paragraphs: [
          "Over half of local service searches happen on a phone. If your site is slow to load, hard to navigate, or has tiny tap targets on mobile, you're losing a majority of your potential leads before they ever read a word.",
        ],
      },
      {
        heading: "7. Local SEO signals",
        paragraphs: [
          "Your city name in the page title, in the headings, and in the body copy. A linked Google Business Profile. Structured data that tells Google you're a local contractor. These signals are what get you in front of people who are actively searching for a contractor in your area.",
        ],
        callout:
          "Every Lobus Industries contractor site includes all seven of these by default. $0 to build, $100/month to host. We'll have you live in about a week.",
      },
    ],
  },
  {
    slug: "how-to-get-more-customers-service-business",
    title: "How to Get More Customers for Your Service Business",
    metaTitle: "How to Get More Customers for Your Service Business (What Works in 2026)",
    metaDescription:
      "The highest-leverage moves for getting more customers as a plumber, electrician, landscaper, cleaner, or any service business. No fluff.",
    publishDate: "April 21, 2026",
    readTime: "5 min read",
    excerpt:
      "Most marketing advice for service businesses is either too expensive or too complicated. Here's what actually works — ranked by impact.",
    sections: [
      {
        paragraphs: [
          "There's no shortage of people telling service business owners how to get more customers. Most of it is expensive, complicated, or designed for businesses 10x your size.",
          "Here's what actually works, ranked by the return you can expect on your time and money.",
        ],
      },
      {
        heading: "1. Show up on Google (website + Google Business Profile)",
        paragraphs: [
          "The single highest-leverage move for a service business is being findable on Google when local customers search for what you do. This means two things: a professional website with local SEO, and a complete Google Business Profile.",
          "When both are in place and optimized, you're visible to every person in your area who searches for your service — not just the ones who already know you. That's new business at zero ongoing cost.",
        ],
      },
      {
        heading: "2. Ask every happy customer for a Google review",
        paragraphs: [
          "Google reviews are one of the most powerful drivers of new business for local service companies — and one of the most ignored.",
          "A business with 40 five-star reviews gets dramatically more calls than one with 5, even if the service quality is identical. After every completed job you're proud of, send the customer a direct link to your Google review page and ask them to share their experience. Most people who had a good experience will do it if you make it easy.",
        ],
      },
      {
        heading: "3. Respond to every inquiry fast",
        paragraphs: [
          "Speed of response is one of the biggest factors in whether a lead converts, especially for service businesses. Studies consistently show that calling or responding to a lead within 5 minutes makes you dramatically more likely to win the job than responding hours later.",
          "Service customers often contact multiple businesses at once. The first one to respond professionally almost always wins.",
        ],
      },
      {
        heading: "4. Keep your existing customers coming back",
        paragraphs: [
          "Acquiring a new customer costs significantly more than retaining an existing one. For service businesses with repeat potential — cleaning, HVAC maintenance, landscaping, pest control — a simple follow-up email or text when it's time for their next service can generate consistent revenue with zero marketing cost.",
        ],
      },
      {
        heading: "5. Make it easy to refer you",
        paragraphs: [
          "Most referrals happen because someone asks. After a great job, tell your customer directly: 'If you know anyone who needs [your service], I'd really appreciate the referral.' Give them a card. Make sure your business name is searchable so when they mention you, the person can find you immediately.",
        ],
      },
      {
        heading: "What to skip",
        list: [
          { title: "Paid ads before you have a website", body: "Running ads to a bad website or no website wastes every dollar. Fix the destination first." },
          { title: "Social media posting as a primary strategy", body: "Organic reach on social is near zero for business accounts. It's a support channel, not a growth channel." },
          { title: "SEO agencies charging $1,500+/month", body: "For a local service business, you don't need an agency. You need a good website and a complete GBP. That's 90% of the battle." },
        ],
        callout:
          "Lobus Industries handles the website and local SEO foundation — the highest-leverage piece. $0 to build, $100/month to host. Get your site working for you while you focus on the work.",
      },
    ],
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews for Your Service Business",
    metaTitle: "How to Get More Google Reviews for Your Service Business (2026)",
    metaDescription:
      "Google reviews are the fastest way to build trust and rank higher in local search. Here's exactly how service businesses get more of them — without begging.",
    publishDate: "April 25, 2026",
    readTime: "5 min read",
    excerpt:
      "Reviews are the single most powerful trust signal for local service businesses. Here's the system that actually works for getting them.",
    sections: [
      {
        paragraphs: [
          "If you've ever lost a job to a competitor with more Google reviews, you already understand the problem. Reviews aren't just vanity — they directly influence whether you show up in the Local Pack and whether customers choose you over the alternative.",
          "The good news: getting more reviews isn't complicated. It just requires a consistent system and the right timing.",
        ],
      },
      {
        heading: "Why Google reviews matter more than any other platform",
        paragraphs: [
          "Yelp, Facebook, Houzz — all useful. But Google reviews have the highest direct impact on local search rankings and customer conversion for service businesses. When someone searches 'plumber near me' or 'best landscaper in [city],' the businesses in the Local Pack almost always have more reviews than everyone else.",
          "Reviews also influence click-through rate. A business with 4.8 stars and 47 reviews will get more clicks than a business with 5.0 stars and 3 reviews. Volume and recency both matter.",
        ],
      },
      {
        heading: "The single best time to ask for a review",
        paragraphs: [
          "Ask immediately after the job is done — while the customer is still in front of you or within an hour of completion. That's when satisfaction is highest and the experience is fresh.",
          "Don't wait until the next day to send a follow-up email. The window closes fast. A quick text or verbal ask the moment they express satisfaction is your best shot.",
        ],
      },
      {
        heading: "What to actually say",
        paragraphs: [
          "Keep it simple and specific. \"We really appreciate your business. Would you mind leaving us a Google review? It only takes two minutes and it helps us a lot.\" Then hand them your phone with the review page already open, or text them a direct link.",
          "Never say 'if you're happy' — that creates an out. Just ask directly. Most satisfied customers will say yes.",
        ],
      },
      {
        heading: "How to make it easy for them",
        list: [
          { title: "Create a short Google review link", body: "Go to your Google Business Profile, click 'Get more reviews,' and copy the short URL. Save it as a contact in your phone so you can text it in seconds." },
          { title: "Add the link to your receipts or invoices", body: "Print or include your review link on any paperwork you leave behind. Customers who liked your work may follow up when they get home." },
          { title: "Add a QR code to your vehicle or work shirts", body: "A QR code that links directly to your Google review page lets customers scan and review without finding you manually." },
          { title: "Send a follow-up text 2 hours after the job", body: "If you didn't get a review at the time: 'Hi [Name], thanks for having us out today. If you have 2 minutes, a Google review would mean the world — here's the link: [URL].'" },
        ],
      },
      {
        heading: "Responding to reviews (including bad ones)",
        paragraphs: [
          "Respond to every review — positive and negative. Thank people who leave positive reviews by name. For negative reviews, respond professionally, acknowledge the issue, and offer to make it right. A thoughtful response to a 1-star review often impresses potential customers more than the negative review hurts you.",
          "Never argue with a reviewer publicly. Even if they're wrong, other customers are watching how you handle it.",
        ],
        callout:
          "Your website is the next thing customers check after they see your reviews. Lobus Industries builds sites that convert that trust into contact form submissions — for $0 upfront and $100/month.",
      },
    ],
  },
  {
    slug: "why-your-competitor-ranks-higher",
    title: "Why Your Competitor's Website Ranks Higher Than Yours",
    metaTitle: "Why Your Competitor's Website Ranks Higher on Google (And How to Fix It)",
    metaDescription:
      "If a local competitor keeps showing up above you on Google, here are the most common reasons why — and what you can actually do about it.",
    publishDate: "April 24, 2026",
    readTime: "6 min read",
    excerpt:
      "It's frustrating to Google your own trade and see a competitor you know is no better than you ranking above your business. Here's what's actually going on.",
    sections: [
      {
        paragraphs: [
          "You've been doing this work for years. You have great reviews and happy customers. And yet someone who started their business two years ago is beating you on Google. What gives?",
          "Local search rankings come down to a handful of factors that have nothing to do with how good your work is. Here's what's actually driving the gap.",
        ],
      },
      {
        heading: "Their Google Business Profile is more complete",
        paragraphs: [
          "Google Business Profile (formerly Google My Business) is the single most important factor in local search rankings — more than your website. A complete profile with accurate business hours, services listed, photos uploaded, and regular posts will outrank an incomplete one almost every time.",
          "Check your competitor's GBP versus yours. Are they posting updates? Do they have more photos? Are all their service categories filled in? That's often all there is to it.",
        ],
      },
      {
        heading: "Their website has more locally relevant content",
        paragraphs: [
          "Google looks for signals that your business actually serves a specific area. If your competitor's website mentions their city, service areas, and local landmarks more consistently than yours, they get the local relevance boost.",
          "A site that says 'Plumbing services in Denver, CO — serving Cherry Creek, Highlands, and Capitol Hill' will outrank a generic 'plumbing services' page every time.",
        ],
      },
      {
        heading: "Their site is faster and mobile-friendly",
        paragraphs: [
          "Google uses page experience as a ranking factor. A site that loads in under 2 seconds on a phone will outrank one that takes 6 seconds. If your competitor has a faster, cleaner site — especially on mobile — that's a real advantage.",
          "Test your site at PageSpeed Insights (search for it) and compare your score to what a well-built site produces. The difference is often dramatic.",
        ],
      },
      {
        heading: "They have more reviews — and more recent ones",
        paragraphs: [
          "Review volume and recency are ranking signals. A business with 60 reviews averaging 4.7 stars will almost always outrank one with 12 reviews at 5.0 stars. And if your last review was eight months ago while theirs was last week, Google treats them as more active.",
          "Building a consistent review-asking habit is one of the highest-ROI activities for local rankings.",
        ],
      },
      {
        heading: "Their website earns more local links",
        paragraphs: [
          "Backlinks from local sites — a chamber of commerce listing, a local news mention, a neighborhood association directory — are still powerful ranking signals. If your competitor has been listed in local business directories and you haven't, that gap compounds over time.",
          "Start with the basics: get listed in your local chamber, BBB, Houzz, Angi, HomeAdvisor, and any trade-specific directories for your industry.",
        ],
      },
      {
        heading: "What you can actually do",
        list: [
          { title: "Audit and complete your GBP", body: "Fill every field, add at least 10 photos, list every service you offer, and set up weekly posts." },
          { title: "Add location-specific content to your site", body: "Your homepage should mention your city and service areas explicitly. Create dedicated pages for the neighborhoods or cities you serve." },
          { title: "Get more reviews consistently", body: "Ask every satisfied customer within an hour of job completion. Volume and recency both matter." },
          { title: "Speed up your website", body: "A professionally built site on modern infrastructure is faster than DIY builders by default." },
        ],
        callout:
          "Lobus Industries builds websites with local SEO structure baked in — city and service content, fast hosting, and proper schema markup. $0 upfront, $100/month.",
      },
    ],
  },
  {
    slug: "how-long-does-it-take-to-build-a-website",
    title: "How Long Does It Take to Build a Website for a Service Business?",
    metaTitle: "How Long Does It Take to Build a Service Business Website? (Real Timelines)",
    metaDescription:
      "DIY builders, freelancers, agencies, and done-for-you services all have different timelines. Here's what to actually expect — and what causes delays.",
    publishDate: "April 23, 2026",
    readTime: "4 min read",
    excerpt:
      "The range is one afternoon to six months, depending on who's building it and how ready you are. Here's how to plan.",
    sections: [
      {
        paragraphs: [
          "One of the most common questions service business owners ask before starting a website project is: how long will this take? The answer depends entirely on how the site gets built and how quickly you can provide what's needed.",
          "Here's a realistic look at timelines across different approaches.",
        ],
      },
      {
        heading: "DIY on Wix, Squarespace, or GoDaddy",
        list: [
          { title: "Time to first draft", body: "1–3 days if you block out time to do it. Realistically, 2–4 weeks for most business owners who fit it in around actual work." },
          { title: "Time to something you're happy with", body: "4–8 weeks. Getting the copy right, choosing photos, and iterating on the design takes longer than people expect." },
          { title: "The real blocker", body: "Your own time. Most service business owners underestimate how long it takes to write good copy and lay out a professional-looking site." },
        ],
      },
      {
        heading: "Hiring a freelancer",
        list: [
          { title: "Finding and vetting someone", body: "1–3 weeks to search, compare, review portfolios, and sign a contract." },
          { title: "Build time (once started)", body: "2–5 weeks for a typical 5-page site. Depends on the freelancer's workload and how quickly you provide feedback." },
          { title: "Total elapsed time", body: "6–10 weeks from first contact to a live site. Sometimes longer if the freelancer is juggling other clients." },
        ],
      },
      {
        heading: "Hiring an agency",
        list: [
          { title: "Discovery and proposal", body: "1–3 weeks before work even begins. Agencies have processes." },
          { title: "Design and development", body: "6–12 weeks depending on scope, revisions, and internal approvals." },
          { title: "Total elapsed time", body: "2–4 months is typical. Larger agencies sometimes run 6 months for a complex project." },
        ],
      },
      {
        heading: "Done-for-you services (like Lobus Industries)",
        list: [
          { title: "What you provide upfront", body: "Basic info about your business: services, location, phone number, any photos you have, and a sense of what you want." },
          { title: "Build time", body: "About a week to a first draft, sometimes faster." },
          { title: "Total to go live", body: "Most clients are live within 7–10 days of providing their information. The whole process is handled for you." },
        ],
      },
      {
        heading: "What actually causes delays",
        paragraphs: [
          "Across every approach, the biggest source of delays isn't the build — it's waiting on the client. Getting logo files, writing copy, providing photos, approving drafts, and registering a domain name all take time when you're running a business simultaneously.",
          "The fastest path to a live site is having your core info ready: what you do, where you serve, how to contact you, and 3–5 photos of your work. That's honestly all you need to get started.",
        ],
        callout:
          "Lobus Industries handles everything — design, copy, hosting, and launch. Tell us about your business and we'll have a site ready to review in about a week. $0 upfront, $100/month.",
      },
    ],
  },
  {
    slug: "how-to-write-a-service-business-homepage",
    title: "How to Write the Perfect Homepage for a Service Business",
    metaTitle: "How to Write a Service Business Homepage That Converts Visitors into Calls",
    metaDescription:
      "Most service business websites lose customers in the first 5 seconds. Here's exactly what your homepage needs — and what most people get wrong.",
    publishDate: "April 22, 2026",
    readTime: "5 min read",
    excerpt:
      "Your homepage has about 5 seconds to convince a visitor to stick around. Here's what every service business homepage needs to accomplish — in order.",
    sections: [
      {
        paragraphs: [
          "Most service business websites lose visitors within five seconds. Not because the work isn't good, but because the homepage doesn't quickly answer the three questions every visitor has: What do you do? Do you serve my area? How do I contact you?",
          "Here's how to structure a homepage that answers those questions fast and converts visitors into calls.",
        ],
      },
      {
        heading: "1. A clear headline that says what you do and where",
        paragraphs: [
          "The headline is the first thing visitors read. It should say exactly what your business does and where — in plain language. 'Professional Plumbing in Denver, CO' beats 'Your Home, Our Commitment' every time.",
          "Avoid clever taglines that sacrifice clarity. Visitors don't want to wonder what you do. Tell them in the headline.",
        ],
      },
      {
        heading: "2. A prominent phone number or contact button",
        paragraphs: [
          "The goal of a service business website is to generate a contact. Make it easy. Put your phone number in the top right corner and a 'Get a Free Quote' or 'Call Now' button above the fold — visible without scrolling on both desktop and mobile.",
          "Every second a visitor spends hunting for contact information is a second they might leave.",
        ],
      },
      {
        heading: "3. A short description of what makes you the right choice",
        paragraphs: [
          "Below your headline, add 2–3 sentences that go beyond what you do and say who you do it for and why customers choose you. 'We serve Denver homeowners with same-day plumbing repairs, licensed technicians, and upfront pricing. Family-owned since 2009.'",
          "This is your credibility paragraph. Specific details (years in business, license info, turnaround time) outperform vague claims ('quality you can trust') every time.",
        ],
      },
      {
        heading: "4. Your key services — briefly",
        paragraphs: [
          "List 4–8 of your most common services by name. Don't describe each one in depth on the homepage — just name them so visitors can confirm you handle their need. 'Drain clearing · Water heater installation · Emergency repairs · Bathroom remodels.'",
          "A visitor looking for water heater help wants to see those words on the page before they scroll further.",
        ],
      },
      {
        heading: "5. Social proof (reviews or testimonials)",
        paragraphs: [
          "Put 2–3 short customer quotes on the homepage, ideally with names and locations. Or embed your Google review count and star rating if you have a strong profile. Social proof is what turns a curious visitor into someone who actually reaches out.",
        ],
      },
      {
        heading: "6. A second call to action at the bottom",
        paragraphs: [
          "By the time a visitor reaches the bottom of your homepage, they've decided whether they're interested. Give them an easy next step — a contact form, a quote request button, or a direct phone number. Don't make them scroll back to the top.",
        ],
        callout:
          "Lobus Industries builds service business websites with all of this built in — clear copy, contact forms, service lists, and local SEO. $0 to build, $100/month to host.",
      },
    ],
  },
  {
    slug: "mobile-first-web-design-service-businesses",
    title: "Mobile-First Web Design: Why It Matters for Service Businesses",
    metaTitle: "Mobile-First Web Design for Service Businesses: What You Need to Know",
    metaDescription:
      "Over 70% of local service searches happen on a phone. If your website doesn't work great on mobile, you're losing jobs. Here's what mobile-first means in practice.",
    publishDate: "April 21, 2026",
    readTime: "4 min read",
    excerpt:
      "Most people searching for a plumber, cleaner, or electrician are doing it on their phone. Your site needs to be built for that — not adapted for it.",
    sections: [
      {
        paragraphs: [
          "More than 70% of searches for local services happen on a mobile device. Someone's AC breaks on a Sunday afternoon, they pull out their phone, and they search for an HVAC technician. Whoever's site loads fast and looks good on that phone gets the call.",
          "Mobile-first isn't a design trend — it's a business requirement for service businesses.",
        ],
      },
      {
        heading: "What mobile-first actually means",
        paragraphs: [
          "Most websites are still designed desktop-first: laid out for a computer screen, then adjusted to work on a phone. Mobile-first flips this — you design for the smallest screen first, then expand for larger ones.",
          "The difference matters because desktop-first sites often have problems on mobile that aren't obvious to the person who built them: text too small to read, buttons too close together, images that overflow, contact forms that are hard to fill out with thumbs.",
        ],
      },
      {
        heading: "What Google thinks about mobile-friendliness",
        paragraphs: [
          "Google uses mobile-first indexing — meaning it crawls and ranks your site based on the mobile version, not the desktop version. If your site is hard to use on a phone, it will rank lower in search results, even for desktop searches.",
          "Google also penalizes slow mobile load times. A site that takes 6 seconds to load on a phone will rank significantly lower than one that loads in under 2 seconds.",
        ],
      },
      {
        heading: "Signs your site isn't mobile-friendly",
        list: [
          { title: "Text is too small without zooming", body: "If visitors have to pinch to read your content, they'll leave. Body text should be at least 16px on mobile." },
          { title: "Buttons are too small to tap", body: "Touch targets should be at least 44×44 pixels. Small buttons lead to mis-taps and frustration." },
          { title: "Content is wider than the screen", body: "Horizontal scrolling is a failure mode on mobile. All content should fit within the viewport width." },
          { title: "Phone number isn't clickable", body: "On mobile, a phone number should be a tap-to-call link. If it's just plain text, you're adding friction." },
          { title: "Forms are hard to fill out", body: "Long forms with tiny inputs and no mobile keyboard support (number pad for phone fields, etc.) frustrate mobile visitors." },
        ],
      },
      {
        heading: "How to check your site",
        paragraphs: [
          "Open your website on your own phone. Actually try to use it as a customer would. Search for your contact information, try to fill out the form, check that your phone number is tappable. Then hand it to a non-technical friend and watch where they struggle.",
          "You can also search for 'Google Mobile-Friendly Test' and run your URL through it — it gives you a pass/fail with specific issues to fix.",
        ],
        callout:
          "Every site Lobus Industries builds is designed mobile-first from the ground up — fast load times, tap-friendly buttons, and click-to-call phone numbers. $0 upfront, $100/month.",
      },
    ],
  },
  {
    slug: "what-is-local-seo",
    title: "What Is Local SEO and Why Does It Matter for Your Service Business?",
    metaTitle: "What Is Local SEO? A Plain-English Guide for Service Business Owners",
    metaDescription:
      "Local SEO is how your business shows up when customers in your area search for what you do. Here's exactly how it works — and what you can do about it.",
    publishDate: "April 20, 2026",
    readTime: "5 min read",
    excerpt:
      "Local SEO is the practice of getting your business to show up when nearby customers search for what you offer. Here's how it works in plain English.",
    sections: [
      {
        paragraphs: [
          "When someone searches 'electrician near me' or 'best plumber in Austin,' Google shows a map with three local businesses — called the Local Pack — before any other results. Getting your business into that Local Pack is what local SEO is about.",
          "For service businesses, local SEO is often worth more than any other form of marketing. These are high-intent searches — people looking for exactly what you offer, right now, near them.",
        ],
      },
      {
        heading: "The two sides of local SEO",
        paragraphs: [
          "Local SEO has two distinct components that work together: your Google Business Profile and your website. Both need to be in good shape.",
          "Your Google Business Profile is what shows up in the map results and the Local Pack. Your website is what customers land on when they click through — and also influences your overall ranking.",
        ],
      },
      {
        heading: "Google Business Profile (GBP)",
        list: [
          { title: "Claim and verify your listing", body: "Go to business.google.com, find or create your listing, and complete the verification process. An unverified listing can't rank." },
          { title: "Complete every field", body: "Business name, address, phone, hours, category, services, and website. Incomplete profiles rank lower." },
          { title: "Add photos", body: "Businesses with photos get significantly more clicks. Add your team, your work, and your location." },
          { title: "Collect reviews", body: "Review volume and recency are major ranking factors. Ask every satisfied customer to leave one." },
          { title: "Post updates regularly", body: "Monthly posts signal to Google that your business is active and engaged." },
        ],
      },
      {
        heading: "Your website's role in local SEO",
        paragraphs: [
          "Your website reinforces and extends your GBP. Google looks for consistency between the two — same name, address, and phone number (called NAP consistency). It also looks for local signals in your content: city names, neighborhoods, and service area references.",
          "A website that clearly states 'Plumbing services in Denver, CO — serving Highlands, Capitol Hill, and Stapleton' will outrank one that just says 'plumbing services' with no location context.",
        ],
      },
      {
        heading: "What local SEO doesn't require",
        paragraphs: [
          "You don't need to hire an SEO agency at $1,500/month. You don't need to buy backlinks. You don't need to blog every week. For most service businesses, getting your GBP complete and your website properly structured covers 90% of what matters.",
          "The remaining 10% is review volume and citations — getting listed in local directories (Yelp, Angi, Houzz, BBB, your local chamber) so your NAP information is consistent across the web.",
        ],
        callout:
          "Lobus Industries builds websites with local SEO structure built in — city content, proper schema markup, and NAP consistency. $0 upfront, $100/month.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-domain-name",
    title: "How to Choose the Right Domain Name for Your Service Business",
    metaTitle: "How to Choose a Domain Name for Your Service Business (2026 Guide)",
    metaDescription:
      "Your domain name is one of the first things customers and Google see. Here's how to pick one that's professional, memorable, and good for local SEO.",
    publishDate: "April 19, 2026",
    readTime: "4 min read",
    excerpt:
      "Your domain name is your business's permanent address on the internet. Here's how to choose one you won't regret — and avoid the mistakes most people make.",
    sections: [
      {
        paragraphs: [
          "Most service business owners overthink this decision. Your domain name matters — but not in the way people assume. It doesn't need to be clever. It doesn't need to contain keywords. It needs to be easy to remember, easy to spell, and professional.",
          "Here's a practical framework for choosing one.",
        ],
      },
      {
        heading: "Start with your business name",
        paragraphs: [
          "The simplest domain is just your business name. SmithPlumbing.com. AccurateLandscaping.com. BrightCleaningServices.com. If your business name is available as a .com, that's almost always the best choice.",
          "Stick with .com if at all possible. Customers default to .com and may end up on the wrong site if you use .net or .biz.",
        ],
      },
      {
        heading: "What if my business name is taken?",
        list: [
          { title: "Add your city", body: "SmithPlumbingDenver.com or SmithPlumbingCO.com adds local context and is usually available." },
          { title: "Add your trade", body: "If your name is too common, add what you do: JohnsonElectrical.com or JohnsonElectricians.com." },
          { title: "Try slight variations", body: "GetSmithPlumbing.com or CallSmithPlumbing.com work fine and are often available." },
          { title: "Consider a descriptive name", body: "DenverFastPlumber.com or BoiseCleaningPro.com — less personal but clear and available." },
        ],
      },
      {
        heading: "What to avoid",
        list: [
          { title: "Hyphens", body: "Smith-Plumbing.com looks unprofessional and is hard to dictate over the phone. 'Is that with a hyphen?' is a question you don't want to answer." },
          { title: "Numbers", body: "1stChoicePlumbing.com or Number1Landscaping.com are hard to spell and look dated." },
          { title: "Long names", body: "Under 15 characters is ideal. Anything over 20 is hard to remember and easy to mistype." },
          { title: "Trendy spellings", body: "Kreative Kleen or Xpert Handymen might seem distinctive but look unprofessional in an email address." },
        ],
      },
      {
        heading: "Where to register it",
        paragraphs: [
          "Namecheap, Google Domains (now Squarespace Domains), and Cloudflare Registrar are reliable and fairly priced — typically $10–$15/year for a .com. GoDaddy is popular but tends to upsell aggressively.",
          "Whoever registers it should be you, or someone who you fully control. Your domain name is a business asset. Don't let a web designer or agency register it in their name.",
        ],
        callout:
          "Lobus Industries helps you choose and register the right domain as part of the setup process. If you already have one, we connect it for you. $0 to build, $100/month to host.",
      },
    ],
  },
  {
    slug: "website-for-new-service-business",
    title: "Do You Need a Website Before You Launch Your Service Business?",
    metaTitle: "Should You Build a Website Before Launching Your Service Business?",
    metaDescription:
      "Starting a new service business? Here's whether you need a website on day one — and what a good launch-ready site actually needs to include.",
    publishDate: "April 18, 2026",
    readTime: "4 min read",
    excerpt:
      "You don't need to wait until your business is established to get a website. In fact, launching with one puts you ahead of most competitors from day one.",
    sections: [
      {
        paragraphs: [
          "One of the most common questions from new service business owners is whether they should build a website before they launch or wait until they have some customers first.",
          "The answer is: get the website up before you launch, or as close to it as possible. Here's why.",
        ],
      },
      {
        heading: "Your first customers will Google you",
        paragraphs: [
          "Even if your first clients come from word of mouth, referrals, or in-person networking — they will Google your business name before they call. If they find nothing, that creates doubt. A basic professional site resolves that doubt immediately.",
          "This is true even when someone was just referred to you by a friend. People verify online. Give them something reassuring to find.",
        ],
      },
      {
        heading: "Google takes time to index and rank sites",
        paragraphs: [
          "Google doesn't rank a new site immediately. It can take weeks to months for your pages to appear in search results for local queries. The sooner you launch your site, the sooner that clock starts.",
          "A business that launches with a website in January will be indexed and gaining local SEO momentum by March. A business that waits until March to build one won't see search traffic until May or later.",
        ],
      },
      {
        heading: "What a new business website actually needs",
        list: [
          { title: "What you do", body: "A clear description of your services, ideally with a short list of what you offer." },
          { title: "Where you serve", body: "Your city or service area. 'Serving Austin, TX and surrounding areas' is enough." },
          { title: "How to contact you", body: "Phone number, email, and a simple contact form." },
          { title: "Why customers should choose you", body: "Even one or two sentences about your background, certifications, or approach builds credibility." },
        ],
      },
      {
        heading: "What you don't need at launch",
        paragraphs: [
          "You don't need testimonials (you can add those as you collect them). You don't need a portfolio (add photos as you complete jobs). You don't need a blog. You don't need complex pricing calculators or booking systems.",
          "Launch with a clean, professional, fast-loading site that does the basics well. You can add to it over time.",
        ],
      },
      {
        heading: "The cost argument for getting a site early",
        paragraphs: [
          "Every month you operate without a website is a month competitors with websites are capturing the Google searches you could have answered. The cost of delay isn't zero — it's the leads you didn't get.",
          "A site that costs nothing to build and $100/month to host pays for itself with a single new customer in almost any service trade.",
        ],
        callout:
          "Lobus Industries is built for exactly this situation — new and growing service businesses that need a professional site fast, without a big upfront cost. $0 to build, $100/month to host.",
      },
    ],
  },
  {
    slug: "how-to-get-more-plumbing-leads",
    title: "How to Get More Plumbing Leads Online",
    metaTitle: "How to Get More Plumbing Leads Online (2026 Guide)",
    metaDescription: "The most effective ways for plumbers to generate more leads online — Google Business Profile, local SEO, reviews, and a website that actually converts.",
    publishDate: "April 17, 2026",
    readTime: "5 min read",
    excerpt: "Most plumbers get leads from referrals and repeat customers. Here's how to add a steady stream of new customers from Google without spending money on ads.",
    relatedTrade: { label: "Websites for plumbers →", href: "/plumber-websites" },
    sections: [
      { paragraphs: ["For most plumbers, business comes from referrals and repeat customers. That's a strong foundation — but it has a ceiling. Word of mouth doesn't scale. This guide covers the highest-leverage ways to generate new plumbing leads from Google without relying on expensive pay-per-click ads."] },
      { heading: "1. Claim and complete your Google Business Profile", paragraphs: ["Your Google Business Profile (GBP) is the single most important factor in local plumbing searches. When someone searches 'plumber near me' or 'emergency plumber [city],' the three businesses in the Local Pack are almost always the ones with the most complete, active GBPs.", "Complete every field — business hours, services offered, photos, and service areas. Respond to every review. Post updates at least twice a month. A fully optimized GBP is free and dramatically increases visibility."] },
      { heading: "2. Get a website that converts", paragraphs: ["Many plumbers have no website, or a website that looks unprofessional. Customers — even referred ones — Google you before calling. If they find nothing, or a bare Facebook page, they second-guess the referral.", "Your website needs one thing above everything else: a visible phone number and a fast way to request service. Everything else is secondary."] },
      { heading: "3. Collect Google reviews consistently", list: [{ title: "Ask immediately after every job", body: "Your best window is within an hour of finishing, while satisfaction is highest. Hand them your phone with the review page open, or text them a direct link." }, { title: "Respond to every review", body: "Positive and negative. Thank customers by name. A professional response to a bad review builds as much trust as the positive reviews around it." }, { title: "Volume matters more than score", body: "A business with 4.8 stars and 60 reviews will rank above one with 5.0 stars and 8 reviews. Keep asking, consistently." }] },
      { heading: "4. Optimize for local search terms", paragraphs: ["Your website should mention your city and the specific services you offer — by name. 'Drain cleaning in Phoenix, AZ' ranks for people actually searching that. Generic 'plumbing services' copy doesn't.", "Add pages or sections for each major service area neighborhood. 'We serve Scottsdale, Tempe, and Chandler' typed out on your site signals local relevance to Google."], callout: "Lobus Industries builds plumber websites with local SEO built in — city-specific copy, structured data, and proper GBP integration. $0 to build, $100/month." },
    ],
  },
  {
    slug: "hvac-website-design",
    title: "HVAC Website Design: What Actually Converts Visitors to Calls",
    metaTitle: "HVAC Website Design: What Actually Converts Visitors into Calls (2026)",
    metaDescription: "Most HVAC websites look professional but lose customers in the first 10 seconds. Here's what separates a site that generates calls from one that just looks good.",
    publishDate: "April 16, 2026",
    readTime: "5 min read",
    excerpt: "HVAC customers are often in a hurry — AC out in summer, furnace dead in winter. Your website has seconds to give them what they need. Here's how.",
    relatedTrade: { label: "Websites for HVAC companies →", href: "/hvac-websites" },
    sections: [
      { paragraphs: ["When an air conditioner dies on a 95-degree afternoon, the homeowner searches Google, looks at three results, and calls whoever gives them confidence fastest. That window is 20–30 seconds. Your website either wins that call or loses it — often before the customer has read a single paragraph."] },
      { heading: "The phone number needs to be the first thing they see", paragraphs: ["Put your phone number in the top-right corner of every page, in large text, as a clickable link on mobile. This sounds obvious, but a surprising number of HVAC websites bury the contact information below a hero image.", "For HVAC specifically, add a 'Request Emergency Service' button above the fold. Emergency and same-day service are significant drivers of new customer acquisition."] },
      { heading: "State your service area immediately", paragraphs: ["The second thing a visitor wants to know: do you serve my area? Include your service area in the headline or directly beneath it. 'Serving Denver, Aurora, Lakewood, and surrounding areas' eliminates uncertainty instantly."] },
      { heading: "Separate residential and commercial clearly", paragraphs: ["If you serve both, make it easy for visitors to self-select. A homeowner looking for an AC tune-up and a property manager looking for a rooftop unit replacement have different needs and different urgency. Confusing them with the same page slows them both down."] },
      { heading: "Show your credentials front and center", list: [{ title: "NATE certification", body: "Display it prominently. NATE-certified technicians signal professional training that unlicensed competitors can't claim." }, { title: "State license number", body: "List it. It builds instant trust, especially for customers who've been burned by unlicensed contractors." }, { title: "Insurance and bonding", body: "State it clearly. Customers are letting you into their mechanical systems — they want to know they're covered." }], callout: "Lobus Industries builds HVAC websites with emergency CTAs, service area sections, and credential displays — designed to convert the high-urgency searches that drive most HVAC revenue. $0 to build, $100/month." },
    ],
  },
  {
    slug: "landscaping-business-marketing",
    title: "Landscaping Business Marketing: How to Get Found on Google",
    metaTitle: "Landscaping Business Marketing: How to Get Found on Google (2026)",
    metaDescription: "Local SEO, Google Business Profile, and website strategies that help landscaping companies show up when customers search — without paying for ads.",
    publishDate: "April 15, 2026",
    readTime: "5 min read",
    excerpt: "Most landscaping companies get work from referrals and door-knocking. Here's how to add Google as a consistent lead source without running ads.",
    relatedTrade: { label: "Websites for landscapers →", href: "/landscaper-websites" },
    sections: [
      { paragraphs: ["Landscaping is seasonal, visual, and hyperlocal. The marketing that works is built around those three facts. Here's what actually drives new customers from Google to your door — without paying for every click."] },
      { heading: "Photos are your most important marketing asset", paragraphs: ["Before-and-after photos of finished jobs are the most persuasive content a landscaping company can produce. A visitor seeing a transformation from overgrown mess to clean, beautiful lawn will convert at a much higher rate than someone reading about your services.", "Take photos of every significant job. Post them to your Google Business Profile, your website, and anywhere else your business appears. Volume and recency both matter."] },
      { heading: "Google Business Profile for landscapers", list: [{ title: "Choose the right primary category", body: "'Landscaper' is your primary — not 'lawn care service' or 'gardener.' The category determines which searches you appear in." }, { title: "List every service", body: "Lawn maintenance, landscape design, mulching, spring cleanups, fall cleanups, irrigation, hardscaping — list every service individually. Each one is a search term." }, { title: "Post photos weekly", body: "Landscaping GBPs with recent, high-quality job photos dramatically outperform those without. Aim for 2–3 new photos per week during season." }] },
      { heading: "Your website needs local content", paragraphs: ["Mention your service area specifically. 'We serve Raleigh, Cary, Apex, and Wake Forest' written on your site tells Google exactly where you work and helps you rank for those local searches.", "Consider adding separate pages for each major service — one for lawn care, one for landscape design, one for seasonal cleanups. Each page can rank for its specific search term."], callout: "Lobus Industries builds landscaping websites with photo galleries, service pages, and local SEO — designed to turn search traffic into quote requests. $0 to build, $100/month." },
    ],
  },
  {
    slug: "roofing-company-website",
    title: "Roofing Company Website: 7 Things That Win More Jobs",
    metaTitle: "Roofing Company Website: 7 Things That Win More Jobs (2026)",
    metaDescription: "Most roofing websites miss the elements that actually build trust and generate leads. Here are the 7 things every roofing company site needs.",
    publishDate: "April 14, 2026",
    readTime: "5 min read",
    excerpt: "Roofing is a high-ticket, high-trust purchase. Your website needs to do heavy lifting before you ever speak to a prospect. Here's what it needs.",
    relatedTrade: { label: "Websites for roofers →", href: "/roofer-websites" },
    sections: [
      { paragraphs: ["Roofing is one of the most competitive and highest-stakes home services markets. Homeowners comparing roofing contractors are making a $10,000–$25,000 decision. Your website is doing the selling before you ever pick up the phone."] },
      { heading: "7 things every roofing website needs", list: [
        { title: "License and insurance, front and center", body: "Customers fear unlicensed contractors after storm damage situations. Display your contractor's license number and proof of insurance prominently — not buried in fine print." },
        { title: "Photo gallery of completed roofs", body: "Real photos of your finished work build trust that no copywriting can match. Include close-ups of flashing, ridge caps, and gutters — the details that signal quality craftsmanship." },
        { title: "Manufacturer certifications", body: "GAF Master Elite, Owens Corning Preferred — these certifications signal that you've been vetted by major manufacturers and can offer extended warranties. Feature them visibly." },
        { title: "Storm damage and insurance help", body: "Many roofing leads come from post-storm searches. A dedicated page or section explaining your insurance claim process converts these high-intent visitors." },
        { title: "Service area map or list", body: "List every city and county you serve. This adds local search relevance and helps homeowners quickly confirm you cover their area." },
        { title: "Multiple contact methods", body: "Phone, contact form, and even a text option. Make it easy to reach you from any device in any situation." },
        { title: "Customer reviews with locations", body: "Reviews that include city names ('Great work on our home in Frisco, TX') reinforce local relevance and build geographic trust." },
      ], callout: "Lobus Industries builds roofing websites with credentials, galleries, service areas, and lead forms — designed for the high-trust sales process roofing requires. $0 to build, $100/month." },
    ],
  },
  {
    slug: "cleaning-business-marketing",
    title: "Cleaning Business Marketing: How to Get More Residential Clients",
    metaTitle: "Cleaning Business Marketing: How to Get More Residential Clients (2026)",
    metaDescription: "How residential cleaning companies can use their website, Google Business Profile, and reviews to get more clients without relying solely on referrals.",
    publishDate: "April 13, 2026",
    readTime: "5 min read",
    excerpt: "Cleaning clients are letting you into their home. Here's how your website and online presence build the trust that converts strangers into recurring customers.",
    relatedTrade: { label: "Websites for cleaning services →", href: "/cleaning-websites" },
    sections: [
      { paragraphs: ["Residential cleaning is a trust-intensive business. You're asking people to let strangers into their home, often while they're away. Every element of your marketing — your website, your reviews, your social presence — either builds or erodes that trust."] },
      { heading: "What cleaning clients actually check before booking", list: [
        { title: "Reviews", body: "More than almost any other service category, cleaning clients read reviews carefully. Volume, recency, and the owner's responses to complaints all factor into their decision." },
        { title: "Who's doing the cleaning", body: "Clients want to know if you're a solo cleaner or a team, whether you're bonded and insured, and ideally a little about who they'll be letting into their home." },
        { title: "What's included", body: "Ambiguity about what's included in a standard clean creates hesitation. Clear service descriptions and pricing tiers reduce friction significantly." },
        { title: "How to book", body: "A simple, fast contact form or booking request captures clients who are ready to commit. A phone-only approach loses the ones who prefer not to call." },
      ] },
      { heading: "The content your website needs", paragraphs: ["List your services explicitly — standard clean, deep clean, move-in/move-out, recurring service. Include what's covered in each. Pricing transparency (even ranges) reduces the 'how much does this cost?' emails and attracts clients who are already bought in.", "Mention that you're bonded and insured prominently. It's a trust signal that separates professional cleaning services from informal arrangements."], callout: "Lobus Industries builds cleaning service websites with service descriptions, booking forms, and trust signals — designed to convert first-time visitors into recurring clients. $0 to build, $100/month." },
    ],
  },
  {
    slug: "electrician-website-design",
    title: "Electrician Website Design: What Customers Look For Before Calling",
    metaTitle: "Electrician Website Design: What Customers Check Before Calling (2026)",
    metaDescription: "What homeowners and businesses look for on an electrician's website before making contact — and how to make sure your site gives them what they need.",
    publishDate: "April 12, 2026",
    readTime: "4 min read",
    excerpt: "Electrical work is high-stakes. Customers want to verify credentials before they let anyone near their panel. Here's what your website needs to build that confidence.",
    relatedTrade: { label: "Websites for electricians →", href: "/electrician-websites" },
    sections: [
      { paragraphs: ["Hiring an electrician is a high-stakes decision. Customers are letting someone work inside their walls and their electrical panel. Mistakes can be dangerous and expensive. More than almost any other trade, electricians benefit from websites that establish credibility before the customer picks up the phone."] },
      { heading: "License number — list it prominently", paragraphs: ["Your state electrical contractor's license number should be visible on your website — ideally in the header or the first screen. This single detail immediately separates you from unlicensed competition and signals that you're a legitimate, vetted professional.", "Unlicensed electricians often have better-looking websites than licensed ones because they invest in marketing rather than training. Don't let them out-credential you on your own site."] },
      { heading: "List every service you offer — by name", paragraphs: ["'Electrical services' is not specific enough. List panel upgrades, EV charger installation, whole-home rewiring, ceiling fan installation, outlet repair, GFCI installation, code inspections — by name.", "Each service name is a search term. Someone searching 'EV charger installation near me' will find your page if you've mentioned those exact words. They won't find a generic 'electrical services' page."] },
      { heading: "Residential vs. commercial — separate them clearly", paragraphs: ["If you do both, create clear sections for each. A homeowner looking for outlet repair and a business owner looking for a 3-phase panel upgrade have completely different needs. Mixing them on one undifferentiated page serves neither well."], callout: "Lobus Industries builds electrician websites with license displays, service lists, and local SEO — designed to establish credibility before the customer calls. $0 to build, $100/month." },
    ],
  },
  {
    slug: "handyman-website-tips",
    title: "Handyman Website: How to Stand Out in a Crowded Market",
    metaTitle: "Handyman Website Tips: Standing Out in a Crowded Local Market (2026)",
    metaDescription: "Handyman is one of the most competitive local service categories. Here's how a professional website differentiates you and converts skeptical customers.",
    publishDate: "April 11, 2026",
    readTime: "4 min read",
    excerpt: "Customers are skeptical of handymen they don't know. A professional website immediately separates you from casual operators and builds the trust that gets you hired.",
    relatedTrade: { label: "Websites for handymen →", href: "/handyman-websites" },
    sections: [
      { paragraphs: ["'Handyman' is one of the most searched and most crowded local service categories in the country. Every city has dozens of people offering these services — most of them with nothing more than a Facebook page or a listing on Nextdoor.", "The bar for standing out is low. A professional website puts you ahead of most of your competition before you've said a word."] },
      { heading: "The trust problem — and how your website solves it", paragraphs: ["Customers hiring a handyman they don't know are taking a risk. They've heard stories of no-shows, incomplete work, and inflated charges. Their guard is up before they've even searched.", "A professional website with your photo, a clear list of services, your service area, reviews from named clients, and a real contact method solves the trust problem before you've had a conversation. It signals permanence, professionalism, and accountability."] },
      { heading: "What to include on your handyman website", list: [
        { title: "A specific list of what you do and don't do", body: "The more specific you are about your services, the more confident clients feel. 'I do drywall, tile, light fixtures, door installation, deck repair, and gutter cleaning — not major plumbing or electrical' sets clear expectations." },
        { title: "Your photo", body: "Customers are letting you into their home. A professional photo of you — not a cartoon logo — builds an instant human connection and reduces the 'stranger' anxiety." },
        { title: "Minimum job policy (if you have one)", body: "A $150 minimum prevents small-job inquiries that waste your time. Stating it on the site filters those out before they call." },
        { title: "Service area", body: "List every city and neighborhood you cover. This adds local SEO value and lets customers immediately confirm you work in their area." },
      ], callout: "Lobus Industries builds handyman websites that solve the trust problem and convert skeptical visitors into booked jobs. $0 to build, $100/month." },
    ],
  },
  {
    slug: "pressure-washing-website",
    title: "Pressure Washing Website: Before-and-After Photos That Sell",
    metaTitle: "Pressure Washing Website: How to Use Before-and-After Photos to Get More Jobs",
    metaDescription: "Before-and-after photos are the most powerful marketing tool for pressure washing businesses. Here's how to use them on your website to generate more leads.",
    publishDate: "April 10, 2026",
    readTime: "4 min read",
    excerpt: "Pressure washing transformations are impossible to argue with. Here's how to build a website that leads with your best work and turns visitors into booked jobs.",
    relatedTrade: { label: "Websites for pressure washing →", href: "/pressure-washing-websites" },
    sections: [
      { paragraphs: ["Few service businesses have a marketing advantage as powerful as pressure washing: the before-and-after transformation is visually undeniable. A filthy driveway becoming bright white is more persuasive than any copywriting.", "Most pressure washing companies squander this advantage by not having a website — or having one without photos. Here's how to fix that."] },
      { heading: "Before-and-after photos: your #1 priority", paragraphs: ["Start taking before-and-after photos of every job, today. The side-by-side is the format that works best — half dirty, half clean, taken from the same angle.", "Post these photos to your website, your Google Business Profile, and your social media. Each job is a portfolio piece. Customers seeing 20 dramatic transformations will contact you without needing to read anything else."] },
      { heading: "What services to list on your site", list: [
        { title: "Driveways and sidewalks", body: "The most common residential job. Feature it first, with photos." },
        { title: "House and siding washing", body: "Exterior soft wash is a high-value service. Explain the difference between pressure washing and soft washing if you offer both — it shows expertise." },
        { title: "Decks and fences", body: "Wood cleaning jobs often lead to staining or sealing upsells. Mention those if you offer them." },
        { title: "Commercial properties", body: "Parking lots, storefronts, and fleet vehicles. Commercial accounts are recurring and high-value — if you take them, say so." },
      ] },
      { heading: "Seasonal timing and your website", paragraphs: ["Pressure washing demand spikes in spring and early fall. Your website should reflect the season — a spring cleaning promotion in March, a fall deck cleaning push in September.", "Content updates are much easier if someone handles them for you. That's something to factor into how you choose your hosting arrangement."], callout: "Lobus Industries builds pressure washing websites built around your photo gallery, service list, and lead forms — $0 to build, $100/month." },
    ],
  },
  {
    slug: "how-to-get-leads-as-new-contractor",
    title: "How to Get Leads as a New Contractor (Without Paying for Ads)",
    metaTitle: "How to Get Leads as a New General Contractor Without Paying for Ads",
    metaDescription: "Starting a contracting business? Here's how to get your first leads from Google without spending on paid advertising — using your website and local SEO.",
    publishDate: "April 9, 2026",
    readTime: "5 min read",
    excerpt: "Your first 90 days as a contractor don't have to be about cold calls and door knocking. Here's how to set up your online presence to generate leads from day one.",
    relatedTrade: { label: "Websites for contractors →", href: "/contractor-websites" },
    sections: [
      { paragraphs: ["Starting a contracting business is hard. You're competing against established companies with years of reviews and referral networks you haven't had time to build. The good news: most of your competitors have weak online presences. Getting your fundamentals right immediately puts you ahead."] },
      { heading: "Set up your Google Business Profile first", paragraphs: ["Before you have a website, get your GBP claimed and verified. It's free and it's the fastest way to appear in local search results. Fill out every field — especially services, service area, and hours.", "Once verified, ask every satisfied customer to leave a review. Your first 10 reviews are the hardest and most important — they establish you as a real, active business in Google's eyes."] },
      { heading: "Get a professional website immediately", paragraphs: ["Customers Google contractors before calling. They want to see that you're real, that your work looks good, and that other people have had good experiences. A website gives you all three.", "You don't need a complex site to start. A homepage with your services, your service area, photos of your work, and a contact form is enough to convert curious visitors into leads."] },
      { heading: "Where to get your first jobs", list: [
        { title: "Subcontracting for established contractors", body: "Reach out to established general contractors in your area and offer to sub. It builds your portfolio and your network simultaneously." },
        { title: "Home services platforms", body: "Angi, Thumbtack, and HomeAdvisor generate leads. The margins are thin, but they're a way to get jobs while your organic presence is being established." },
        { title: "Local networking", body: "Chamber of commerce, BNI groups, real estate agent networks — contractors who know agents get referrals from the constant stream of homes needing pre-sale or post-purchase work." },
        { title: "Nextdoor and neighborhood groups", body: "Hyperlocal social platforms are extremely effective for contractors. A completed job in a neighborhood generates multiple neighbor inquiries." },
      ], callout: "Lobus Industries builds contractor websites that establish credibility from day one — project galleries, service listings, and local SEO. $0 to build, $100/month." },
    ],
  },
  {
    slug: "dog-grooming-website",
    title: "Dog Grooming Website: What Pet Owners Want to See Before Booking",
    metaTitle: "Dog Grooming Website: What Pet Owners Check Before Booking (2026)",
    metaDescription: "Pet owners are protective about who handles their dogs. Here's what your grooming website needs to build trust and convert visitors into loyal booking clients.",
    publishDate: "April 8, 2026",
    readTime: "4 min read",
    excerpt: "Dog owners do more research before booking a groomer than almost any other service. Here's what your website needs to win their trust — and their booking.",
    relatedTrade: { label: "Websites for dog groomers →", href: "/dog-grooming-websites" },
    sections: [
      { paragraphs: ["Pet owners treat their dogs like family members. Before they hand their dog over to a groomer they don't know, they will Google you, read your reviews, look at your photos, and try to get a sense of who you are.", "Your website is doing that trust-building work for you — or failing to. Here's what pet owners actually look for."] },
      { heading: "Before-and-after grooming photos", paragraphs: ["Nothing sells a grooming service faster than seeing the transformation. Clean, well-lit before-and-after shots of dogs you've groomed are your most powerful marketing content.", "Include a variety of breeds. Pet owners searching for a golden retriever groomer want to see you've groomed goldens. Include the breeds you work with most."] },
      { heading: "Your background and approach", paragraphs: ["Pet owners want to know who you are. How long have you been grooming? What breeds do you specialize in? Do you handle anxious dogs? Are you Fear Free certified?", "A short 'About' paragraph — even just 3–4 sentences — with your photo dramatically increases trust. It turns you from a business into a person."] },
      { heading: "What to include on your grooming website", list: [
        { title: "Services and pricing", body: "List your services clearly — bath and brush, full groom, breed-specific cuts, nail trim, teeth brushing, de-shedding. Include price ranges if you can. Ambiguity creates friction." },
        { title: "Booking process", body: "Explain how to book — call, text, or online form. If you have a waitlist, say so. It signals demand and manages expectations." },
        { title: "Health requirements", body: "Vaccination requirements, parasite policies, and what happens if a dog is reactive. Clarity here prevents uncomfortable situations and no-shows." },
        { title: "Reviews from pet owners", body: "Grooming reviews are gold. Detailed reviews mentioning specific dogs and how happy owners were convert new visitors better than any other content." },
      ], callout: "Lobus Industries builds dog grooming websites with photo galleries, service lists, and booking forms — designed to convert the researching pet owner into a loyal client. $0 to build, $100/month." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
