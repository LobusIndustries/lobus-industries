import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import { SectionHeading } from "../components/Services";

const SITE_URL = "https://www.lobusindustries.com";

type TradeConfig = {
  name: string;
  singular: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  sub: string;
  why: string;
  faqs: { q: string; a: string }[];
};

const TRADES: Record<string, TradeConfig> = {
  "plumber-websites": {
    name: "Plumbers",
    singular: "plumber",
    metaTitle: "Plumber Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites built for plumbers and plumbing companies. $0 upfront, $100/month flat. Mobile-ready, local SEO included. Launch in about a week.",
    headline: "A website that brings in plumbing calls while you're on the job.",
    sub: "You're under sinks, not behind a screen. We build your site for free — you pay $100/month to keep it running and ranking on Google.",
    why: "Most customers Google a plumber before they call, especially for non-emergency work. If you don't show up, the job goes to whoever does. A professional site also builds trust for emergency calls where customers are choosing fast.",
    faqs: [
      {
        q: "Do plumbers really need a website?",
        a: "Yes — most people Google a plumber before calling, especially for non-emergency work. If you don't show up, the job goes to whoever does. A professional site also builds trust for emergency calls where customers are choosing fast.",
      },
      {
        q: "Can you help me show up on Google Maps?",
        a: "We set up your on-page SEO and Google Business Profile so local customers can find you. We can't guarantee rankings, but we set the foundation most plumbers are missing.",
      },
      {
        q: "How much does a plumber website cost?",
        a: "With Lobus, $0 upfront and $100/month for hosting, SSL, backups, and ongoing updates. Freelancers typically charge $800–$3,500 to build, plus $50–$150/month to host. Wix/Squarespace cost $15–$30/month but require you to build and maintain it yourself.",
      },
      {
        q: "What should a plumber website include?",
        a: "At minimum: your services, service area, phone number, a contact or quote-request form, and customer reviews. We also add local SEO markup, Google Business Profile integration, and a mobile-first design so customers on phones can reach you in one tap.",
      },
    ],
  },
  "electrician-websites": {
    name: "Electricians",
    singular: "electrician",
    metaTitle: "Electrician Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for electricians and electrical contractors. $0 upfront, $100/month flat. Licensing, services, and lead-generating contact forms.",
    headline: "Show customers you're licensed and legit before they even call.",
    sub: "Unlicensed guys win jobs from licensed electricians all the time — because they have a better website. We fix that. Free to build, $100/month to host.",
    why: "Electrical work is high-stakes. Customers want to see credentials, reviews, and a professional presence before they let anyone in their panel. Your website either builds that trust or loses the job.",
    faqs: [
      {
        q: "Should I list my license number on my website?",
        a: "Yes — it builds immediate trust. We include it prominently so customers know you're the real deal before they call.",
      },
      {
        q: "Can you show my service area on the site?",
        a: "Absolutely. We list your service area clearly so customers know right away if you cover their location — and so Google knows to show you in local searches.",
      },
      {
        q: "How much does an electrician website cost?",
        a: "With Lobus, $0 to build and $100/month flat. That covers design, hosting, SSL, backups, and updates. Compare that to a freelancer ($800–$3,500 upfront) or a DIY builder like Wix ($15–$30/month but you build and manage it yourself).",
      },
      {
        q: "What should an electrician website include?",
        a: "Your license number, a list of services (residential, commercial, emergency), your service area, customer reviews, and a fast way to contact you. We add on-page local SEO so you show up when customers in your area search for an electrician.",
      },
    ],
  },
  "landscaper-websites": {
    name: "Landscapers",
    singular: "landscaper",
    metaTitle: "Landscaper Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for landscaping companies. Show off your work, get found on Google, and turn visitors into clients. $0 upfront, $100/month flat.",
    headline: "Let your work sell itself — online.",
    sub: "Landscaping is a visual business. A site that shows your best jobs turns curious visitors into paying clients. We build it for free, you host for $100/month.",
    why: "Before-and-after photos are your best salesperson. Without a website to show them off, all that work you're proud of is invisible to the people searching for it.",
    faqs: [
      {
        q: "Can I show photos of my past work?",
        a: "Yes — a photo gallery is one of the most important parts of a landscaping site. Send us your best shots and we'll make them look sharp.",
      },
      {
        q: "Do you help with seasonal promotions?",
        a: "Yes — content updates are included in your plan. Just email us when you want to update pricing, promote a spring special, or add a new service.",
      },
      {
        q: "How much does a landscaping website cost?",
        a: "With Lobus, $0 upfront and $100/month. A freelancer will charge $800–$3,500 to build and $50–$150/month to host. Wix or Squarespace cost $15–$30/month but require you to design and manage the site yourself — and they don't look custom.",
      },
      {
        q: "What should a landscaping company website include?",
        a: "A photo gallery of past work, a list of services (lawn care, hardscaping, irrigation, cleanup, etc.), your service area, a quote-request form, and customer reviews. We add local SEO so customers in your area find you when they search for landscaping services.",
      },
    ],
  },
  "cleaning-websites": {
    name: "Cleaning Services",
    singular: "cleaner",
    metaTitle: "Cleaning Service Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for cleaning companies and house cleaners. Build trust, get found locally, and fill your schedule. $0 upfront, $100/month flat.",
    headline: "A website that earns trust before you knock on the door.",
    sub: "Cleaning clients are letting you into their home. A professional site with clear pricing and reviews builds the trust that gets you booked over the competition.",
    why: "People are handing you a key to their house. A polished website — with reviews, your process, and clear pricing — is often the difference between a call and a pass.",
    faqs: [
      {
        q: "Can I list my services and pricing on the site?",
        a: "Yes — and it's a good idea. Customers who can see what you offer and roughly what it costs are more likely to reach out than ones left guessing.",
      },
      {
        q: "How do I get reviews onto the site?",
        a: "We can add a dedicated testimonials section. Just send us the quotes from happy customers and we'll handle the rest.",
      },
      {
        q: "How much does a cleaning business website cost?",
        a: "With Lobus, $0 upfront and $100/month. A freelancer will charge $800–$3,500 to build, plus $50–$150/month to host. DIY builders like Wix cost $15–$30/month but require your time to build and update.",
      },
      {
        q: "What should a cleaning company website include?",
        a: "Your services (residential, commercial, deep cleaning, etc.), pricing or a quote form, your service area, before-and-after photos if you have them, customer reviews, and a clear way to book. We add local SEO so customers searching for cleaners in your area find you first.",
      },
    ],
  },
  "hvac-websites": {
    name: "HVAC Companies",
    singular: "HVAC technician",
    metaTitle: "HVAC Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for HVAC contractors and technicians. Get found when customers need you most. $0 upfront, $100/month flat.",
    headline: "Be the first HVAC company they call — not the fourth.",
    sub: "Most HVAC calls are urgent. If your website doesn't load fast and look professional, customers move on in seconds. We fix that for free — $100/month to keep it live.",
    why: "When an AC goes out in July, customers Google and call the first credible result. If that's not you, it's your competitor. A fast, professional website with a visible phone number wins those calls.",
    faqs: [
      {
        q: "Can customers request emergency service through the site?",
        a: "Yes — we set up a prominent contact form and call-to-action so customers can reach you fast, even after hours.",
      },
      {
        q: "Do you cover both residential and commercial HVAC?",
        a: "Your site can clearly list both. We structure it so each type of customer knows exactly what you offer them.",
      },
      {
        q: "How much does an HVAC website cost?",
        a: "With Lobus, $0 to build and $100/month flat. Freelancers typically charge $800–$3,500 upfront plus $50–$150/month to host. DIY builders like Wix cost $15–$30/month but require you to design and maintain everything yourself.",
      },
      {
        q: "What should an HVAC website include?",
        a: "Your services (AC repair, heating, installations, maintenance plans), a prominent phone number for emergencies, service area, customer reviews, and a contact form. We add local SEO and Google Business Profile integration so your HVAC company shows up in local searches.",
      },
    ],
  },
  "contractor-websites": {
    name: "General Contractors",
    singular: "contractor",
    metaTitle: "Contractor Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for general contractors and construction companies. Showcase your projects and win more bids. $0 upfront, $100/month flat.",
    headline: "Turn your best projects into your best sales tool.",
    sub: "A portfolio site that shows your work, your process, and why you're worth hiring. We build it for free — $100/month to keep it running.",
    why: "Homeowners comparing contractors for a $20,000 job will Google every name they consider. A professional site with real project photos often decides the bid before you even meet.",
    faqs: [
      {
        q: "Can I show a portfolio of past projects?",
        a: "Yes — project photos are the centerpiece of a good contractor site. Send us your best work and we'll build a portfolio that makes it stand out.",
      },
      {
        q: "What if I do multiple types of work?",
        a: "We organize your services clearly so every visitor quickly understands what you do and whether you're the right fit for their job.",
      },
      {
        q: "How much does a contractor website cost?",
        a: "With Lobus, $0 upfront and $100/month. A freelancer will charge $800–$3,500 to build, plus ongoing hosting costs. Wix and similar builders start at $15–$30/month but require you to build and manage it — and won't look as polished.",
      },
      {
        q: "What should a general contractor website include?",
        a: "A project portfolio with photos, a list of services, your license and insurance info, customer reviews, a service area, and a quote-request form. We also add local SEO so homeowners in your area find you when they search for a contractor.",
      },
    ],
  },
  "auto-detailing-websites": {
    name: "Auto Detailers",
    singular: "auto detailer",
    metaTitle: "Auto Detailing Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for auto detailers and car care businesses. Show your best work and get found locally. $0 upfront, $100/month flat.",
    headline: "Your detail work deserves a website as sharp as your finish.",
    sub: "Instagram gets you followers. A real website gets you bookings. We build it for free — $100/month to keep it live and ranking on Google.",
    why: "Before-and-after photos are pure gold in detailing. A website lets you own that content, show it to Google, and turn search traffic into booked appointments — something Instagram alone can't do.",
    faqs: [
      {
        q: "Can I list my detailing packages and prices?",
        a: "Absolutely — service menus with clear pricing reduce back-and-forth and attract customers who are already ready to book.",
      },
      {
        q: "Can customers book through the site?",
        a: "We include a contact form for booking requests. If you want a full online booking system, we can discuss integrating one.",
      },
      {
        q: "How much does an auto detailing website cost?",
        a: "With Lobus, $0 to build and $100/month flat for hosting, SSL, and updates. A freelancer charges $800–$3,500 upfront. DIY on Wix costs $15–$30/month but requires your time and won't look custom.",
      },
      {
        q: "What should an auto detailing website include?",
        a: "Your service packages with pricing, before-and-after photos, a booking or contact form, your location and service area, and customer reviews. We add local SEO so customers searching for auto detailing near them find your site first.",
      },
    ],
  },
  "personal-trainer-websites": {
    name: "Personal Trainers",
    singular: "personal trainer",
    metaTitle: "Personal Trainer Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for personal trainers and fitness coaches. Attract new clients and fill your schedule. $0 upfront, $100/month flat.",
    headline: "A website that keeps your calendar full.",
    sub: "Clients search for trainers online every day. A professional site that shows your method, results, and availability gets them booking — not just browsing.",
    why: "Most trainers rely on gym referrals or word of mouth. A website means people can find you on Google, see your background and philosophy, and reach out directly — without a warm intro.",
    faqs: [
      {
        q: "Can I show client testimonials and results?",
        a: "Yes — with client permission, results and testimonials are the most persuasive thing on a trainer's site. We make them a centerpiece.",
      },
      {
        q: "I train both online and in-person. Can the site cover both?",
        a: "Absolutely. We structure it so both options are clear and both types of clients know exactly how to get started with you.",
      },
      {
        q: "How much does a personal trainer website cost?",
        a: "With Lobus, $0 upfront and $100/month. A freelancer charges $800–$3,500 to build. Squarespace or Wix cost $15–$30/month but require you to design and update it — and competing trainers with custom sites will outrank you.",
      },
      {
        q: "What should a personal trainer website include?",
        a: "Your training philosophy, services and pricing, client testimonials, credentials and certifications, a contact or booking form, and — if you train online — clear information about how remote sessions work. We add SEO so local searches for personal trainers surface your site.",
      },
    ],
  },
  "painter-websites": {
    name: "Painters",
    singular: "painter",
    metaTitle: "Painter Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for house painters and painting contractors. Showcase your work, get found locally, and win more quotes. $0 upfront, $100/month flat.",
    headline: "A website that keeps your schedule painted solid.",
    sub: "Most painting jobs are won before the first call. A professional site with photos of your work and a simple quote form puts you ahead of every painter without one.",
    why: "Homeowners searching for a painter compare several options online before reaching out to anyone. A site that shows clean, finished work and makes it easy to request a quote consistently wins that comparison.",
    faqs: [
      {
        q: "Can I show before-and-after photos of my paint jobs?",
        a: "Yes — photo galleries are the centerpiece of a great painting site. Send us your best shots and we'll make them shine.",
      },
      {
        q: "Can customers request a quote directly from the site?",
        a: "Absolutely. We build a quote-request form so leads can describe their project and you can follow up — no phone tag required.",
      },
      {
        q: "How much does a painting contractor website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. Freelancers charge $800–$3,500 to build plus $50–$150/month to host. DIY on Wix starts at $15–$30/month but requires you to do all the design work yourself.",
      },
      {
        q: "What should a painter's website include?",
        a: "Before-and-after photos, your services (interior, exterior, commercial, cabinet refinishing), a quote-request form, service area, and customer reviews. We add local SEO so homeowners in your area find you when they search for a painter.",
      },
    ],
  },
  "roofer-websites": {
    name: "Roofers",
    singular: "roofer",
    metaTitle: "Roofing Company Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for roofing contractors and companies. Get found after storms, build trust, and generate more estimates. $0 upfront, $100/month flat.",
    headline: "Win more roofing jobs before a competitor even calls back.",
    sub: "After a storm, homeowners search online first. A fast, professional site with a clear contact form gets you the call while your competition is still driving around.",
    why: "Roofing is a high-ticket, high-trust purchase. Homeowners need to feel confident before inviting anyone onto their roof. A professional website with photos, credentials, and reviews builds that confidence instantly.",
    faqs: [
      {
        q: "Can I feature insurance and storm damage services?",
        a: "Yes — we highlight whatever services matter most to your market, including insurance claim assistance if that's part of what you offer.",
      },
      {
        q: "Can you show the areas I service?",
        a: "Absolutely. A clear service area helps both customers and Google understand exactly where you work.",
      },
      {
        q: "How much does a roofing company website cost?",
        a: "With Lobus, $0 to build and $100/month flat. A freelancer charges $800–$3,500 upfront plus $50–$150/month to host. Wix or GoDaddy cost $15–$30/month but require you to build and manage the site — and won't stand out against local competitors.",
      },
      {
        q: "What should a roofing website include?",
        a: "Your services (repairs, full replacements, storm damage, commercial), photos of completed jobs, insurance and license info, customer reviews, service area, and a fast quote-request form. We add local SEO so homeowners searching for roofers after a storm find you first.",
      },
    ],
  },
  "pest-control-websites": {
    name: "Pest Control",
    singular: "pest control technician",
    metaTitle: "Pest Control Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for pest control and exterminator businesses. Get found locally and turn searches into service calls. $0 upfront, $100/month flat.",
    headline: "When bugs show up, make sure you do too — on Google.",
    sub: "Pest problems are urgent. Customers search, click the first credible result, and call. A professional website makes sure that first result is you.",
    why: "Most pest calls happen fast — people aren't comparing options for days. They search, land on a site that looks legit and has a phone number, and call. If your site is slow or looks outdated, they move on in seconds.",
    faqs: [
      {
        q: "Can I list the pests and treatments I cover?",
        a: "Yes — a clear service list helps customers quickly confirm you handle their specific problem, which increases the chance they call.",
      },
      {
        q: "Can I offer a free inspection offer on the site?",
        a: "Absolutely. A free inspection CTA is one of the highest-converting offers in pest control. We make it prominent.",
      },
      {
        q: "How much does a pest control website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. A freelancer will charge $800–$3,500 to build. DIY on Wix starts at $15–$30/month but requires your time and won't look as credible.",
      },
      {
        q: "What should a pest control website include?",
        a: "Your services (ants, rodents, termites, bed bugs, etc.), a free inspection or quote offer, your service area, licensing info, customer reviews, and a prominent phone number. We add local SEO so your pest control company shows up in local searches.",
      },
    ],
  },
  "pressure-washing-websites": {
    name: "Pressure Washing",
    singular: "pressure washing technician",
    metaTitle: "Pressure Washing Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for pressure washing and power washing businesses. Show your results, get found locally, and fill your schedule. $0 upfront, $100/month flat.",
    headline: "Show the results. Book the job.",
    sub: "Pressure washing sells itself visually. A site with your before-and-after photos and a quick quote form turns search traffic into booked jobs — no chasing required.",
    why: "Before-and-after photos are impossible to argue with. A website that leads with your best transformations and makes it easy to get a quote consistently beats competitors who only have a Facebook page.",
    faqs: [
      {
        q: "Can I show before-and-after photos?",
        a: "Yes — they're the most powerful content for pressure washing. Send us your best shots and we'll build a gallery that does the selling for you.",
      },
      {
        q: "Can I list different services like driveways, decks, and roofs?",
        a: "Absolutely. We organize your services clearly so every visitor knows exactly what you offer and can request a quote for their specific job.",
      },
      {
        q: "How much does a pressure washing website cost?",
        a: "With Lobus, $0 to build and $100/month flat. A freelancer charges $800–$3,500 upfront. DIY builders like Wix start at $15–$30/month but require your time to design and maintain.",
      },
      {
        q: "What should a pressure washing website include?",
        a: "Before-and-after photos, a list of surfaces and services (driveways, siding, decks, roofs, commercial), your service area, a quote-request form, and customer reviews. We add local SEO so customers searching for pressure washing near them find you first.",
      },
    ],
  },
  "handyman-websites": {
    name: "Handymen",
    singular: "handyman",
    metaTitle: "Handyman Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for handymen and home repair services. Build credibility, get found locally, and keep your schedule full. $0 upfront, $100/month flat.",
    headline: "Look like the pro you are — online.",
    sub: "Handymen live and die by referrals — until they have a website. A professional site keeps you booked even when word of mouth slows down.",
    why: "People are skeptical of handymen they don't know. A clean, professional website with a list of services, photos, and a simple way to reach you instantly sets you apart from the guys with no web presence at all.",
    faqs: [
      {
        q: "Can I list all the different jobs I do?",
        a: "Yes — a clear services list helps customers confirm you handle their specific task and makes it more likely they reach out.",
      },
      {
        q: "I work alone. Is this worth it for a one-person operation?",
        a: "Absolutely — in fact, a great website matters more for solo operators because you don't have a team or big brand doing the trust-building for you.",
      },
      {
        q: "How much does a handyman website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. A freelancer charges $800–$3,500 to build. Wix and similar builders start at $15–$30/month but require you to design, write, and maintain the site yourself.",
      },
      {
        q: "What should a handyman website include?",
        a: "A comprehensive list of services, photos of past work, your service area, customer reviews, and a fast quote-request form. We add local SEO so customers searching for a handyman in your area find you — not your competitor.",
      },
    ],
  },
  "moving-company-websites": {
    name: "Moving Companies",
    singular: "mover",
    metaTitle: "Moving Company Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for moving companies and movers. Generate more quote requests and build trust before the big day. $0 upfront, $100/month flat.",
    headline: "Be the moving company people trust before they've met you.",
    sub: "People moving homes are anxious and doing a lot of research. A professional website with clear pricing, services, and reviews puts them at ease — and gets you the booking.",
    why: "Moving is stressful and high-stakes. Customers are trusting you with everything they own. A polished website that clearly explains your process, pricing, and service area converts far better than one that makes them guess.",
    faqs: [
      {
        q: "Can I show local and long-distance moving separately?",
        a: "Yes — we structure your services clearly so both types of customers land in the right place and know what to expect.",
      },
      {
        q: "Can customers request a quote through the site?",
        a: "Absolutely. A quote-request form is one of the most important parts of a moving company site. We make it front and center.",
      },
      {
        q: "How much does a moving company website cost?",
        a: "With Lobus, $0 upfront and $100/month flat for hosting, SSL, and ongoing updates. A freelancer will charge $800–$3,500 to build. DIY builders like Wix or GoDaddy start at $15–$30/month but require significant time to build and maintain.",
      },
      {
        q: "What should a moving company website include?",
        a: "Your services (local, long-distance, packing, storage), pricing or a quote form, your service area, customer reviews, and information about your process. We add local SEO so people searching for movers in your area find you first.",
      },
    ],
  },
  "pool-service-websites": {
    name: "Pool Services",
    singular: "pool service technician",
    metaTitle: "Pool Service Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for pool service and maintenance businesses. Get found by local pool owners and keep your route full. $0 upfront, $100/month flat.",
    headline: "Keep your route full all season long.",
    sub: "Pool owners search for reliable service online every spring. A professional website makes sure you're the first name they find — and the one they stick with.",
    why: "Most pool service customers want a company they can set up once and forget. A professional website that clearly explains your services, frequency, and pricing helps them say yes quickly and stay long-term.",
    faqs: [
      {
        q: "Can I list weekly, bi-weekly, and one-time services?",
        a: "Yes — clear service tiers help customers pick what fits their needs and make it easier for you to quote accurately.",
      },
      {
        q: "Can I show my service area on the site?",
        a: "Absolutely. A clear service area map or list helps customers know instantly whether you cover their neighborhood.",
      },
      {
        q: "How much does a pool service website cost?",
        a: "With Lobus, $0 to build and $100/month flat. Freelancers charge $800–$3,500 upfront plus ongoing hosting. DIY builders start at $15–$30/month but require your time and won't rank as well as a properly optimized custom site.",
      },
      {
        q: "What should a pool service website include?",
        a: "Your service packages (weekly cleaning, chemical balancing, equipment repair, openings/closings), pricing or a quote form, your service area, and customer reviews. We add local SEO so pool owners searching for service in your area find your site first.",
      },
    ],
  },
  "barber-shop-websites": {
    name: "Barbers & Barber Shops",
    singular: "barber",
    metaTitle: "Barber Shop Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for barbers and barber shops. Showcase your style, fill your chair, and get found on Google. $0 upfront, $100/month flat.",
    headline: "A website as sharp as your fades.",
    sub: "Walk-ins keep the lights on, but the best clients find you online. We build a site that shows your style and books your chair — free to build, $100/month to host.",
    why: "New clients in your neighborhood Google barbers before stepping in. Without a site that shows your work and hours, you're invisible to the half of your future regulars who don't know your shop name yet.",
    faqs: [
      {
        q: "Can my website show my style and team?",
        a: "Yes — we showcase haircut photos, your barbers, and your shop atmosphere. The right images make new clients want to book before they even call.",
      },
      {
        q: "Can clients book appointments online?",
        a: "We include a booking request form and can integrate with most popular barber booking apps (Booksy, Square Appointments, Squire) if you already use one.",
      },
      {
        q: "How much does a barber shop website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. A freelancer will charge $800–$3,500 to build. DIY on Wix or Squarespace starts at $15–$30/month but requires you to design, write, and update it yourself.",
      },
      {
        q: "What should a barber shop website include?",
        a: "Photos of your work, your services and pricing, hours, location with a map, your barbers' profiles, and a booking link or form. We add local SEO so people searching for barbers in your neighborhood find your shop first.",
      },
    ],
  },
  "tutor-websites": {
    name: "Tutors",
    singular: "tutor",
    metaTitle: "Tutor Website Design — $0 Build Cost, $100/Month | Lobus Industries",
    metaDescription:
      "Professional websites for private tutors and tutoring services. Reach parents, show credentials, and fill your schedule. $0 upfront, $100/month flat.",
    headline: "A website parents trust before they hand you their kid.",
    sub: "Parents don't hire tutors blindly. A professional site with your credentials, subjects, and reviews is what turns a Google search into a booked session.",
    why: "Parents researching tutors compare three or four before reaching out. Without a polished site, you lose to whoever looks more credible — not whoever actually teaches better. We fix that.",
    faqs: [
      {
        q: "Can I list my subjects and grade levels?",
        a: "Yes — clear subject and grade tags make it instantly obvious whether a parent has found the right tutor. We also help with SEO for searches like 'algebra tutor near me.'",
      },
      {
        q: "Can I show student outcomes or reviews?",
        a: "Absolutely. A testimonials section with parent quotes is one of the highest-converting elements for tutoring sites. We make it look polished.",
      },
      {
        q: "How much does a tutoring website cost?",
        a: "With Lobus, $0 to build and $100/month flat. A freelancer charges $800–$3,500 upfront. Wix and Squarespace start at $15–$30/month but require your time to build and maintain the site.",
      },
      {
        q: "What should a tutor's website include?",
        a: "Your subjects, grade levels, teaching approach, credentials, pricing or a free consultation offer, and parent testimonials. We add local SEO so parents searching for tutors in your area find you instead of a national tutoring chain.",
      },
    ],
  },
  "photographer-websites": {
    name: "Photographers",
    singular: "photographer",
    metaTitle: "Photographer Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for photographers, including wedding, family, and brand photography. Showcase your portfolio and book clients. $0 upfront, $100/month flat.",
    headline: "Let your portfolio do the booking.",
    sub: "Couples and clients pick photographers based on how the photos look on screen. We build a fast, beautiful portfolio site that turns browsers into bookings — free to build, $100/month to host.",
    why: "Instagram is rented land. A site you own is where serious clients book — and where your portfolio loads in full resolution on the device they're searching from. Without one, you're losing to photographers whose work is no better.",
    faqs: [
      {
        q: "Will my photos load fast and look sharp?",
        a: "Yes — we optimize for fast load times on every device while preserving photo quality. Slow portfolios lose clients before they ever fill out a contact form.",
      },
      {
        q: "Can I have separate galleries by category?",
        a: "Of course. Weddings, portraits, brand, real estate — we set up clear galleries so each potential client sees the work that matters to them.",
      },
      {
        q: "How much does a photography website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. A freelancer charges $800–$3,500 to build. Squarespace or Format cost $15–$25/month but require you to design and manage the portfolio yourself — and they all look like templates.",
      },
      {
        q: "What should a photographer's website include?",
        a: "A portfolio organized by shoot type, your packages and pricing, a contact or booking form, client testimonials, and your bio. We add local SEO so couples and clients searching for photographers in your area find you before your competitors.",
      },
    ],
  },
  "bookkeeper-websites": {
    name: "Bookkeepers & Accountants",
    singular: "bookkeeper",
    metaTitle: "Bookkeeper & Accountant Website Design — $0 Build, $100/Month | Lobus",
    metaDescription:
      "Professional websites for bookkeepers, accountants, and tax preparers. Earn trust, list services, and book qualified clients. $0 upfront, $100/month flat.",
    headline: "A site that earns trust before the first call.",
    sub: "Bookkeeping clients hand over sensitive financials. A professional, secure-looking website is the difference between a serious lead and silence. Built for free, hosted for $100/month.",
    why: "Bookkeepers and accountants live and die by referrals — but referrals still Google you before reaching out. Without a credible website, even warm leads cool off. A clean site closes the loop.",
    faqs: [
      {
        q: "Can I list my services and pricing tiers?",
        a: "Yes — clear service packages (monthly bookkeeping, tax prep, payroll, etc.) help filter qualified leads before they call. We structure it to highlight what you specialize in.",
      },
      {
        q: "Do you use SSL and secure forms?",
        a: "Yes — every Lobus site includes SSL and secure contact forms. That's table stakes for any financial professional.",
      },
      {
        q: "How much does a bookkeeper website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. A freelancer charges $800–$3,500 to build. DIY builders like Wix cost $15–$30/month but require your time and don't convey the level of professionalism financial clients expect.",
      },
      {
        q: "What should a bookkeeper or accountant website include?",
        a: "Your services (bookkeeping, tax prep, payroll, CFO advisory), your niche or ideal client type, credentials, pricing or a free consultation offer, and client testimonials. We add local SEO so small business owners in your area find you when they search for a bookkeeper.",
      },
    ],
  },
  "real-estate-agent-websites": {
    name: "Real Estate Agents",
    singular: "real estate agent",
    metaTitle: "Real Estate Agent Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for real estate agents and brokers. Stand out from your brokerage page, capture leads, and showcase listings. $0 upfront, $100/month flat.",
    headline: "Your own site — not just a brokerage profile.",
    sub: "Your brokerage page looks like every other agent's. A personal website with your story, listings, and lead forms is how you stand out and capture buyers your brokerage page never converts.",
    why: "The agents who close the most deals own their own brand. Without a personal site, every Google search for your name leads to a generic brokerage profile — and a confused lead is a lost lead.",
    faqs: [
      {
        q: "Can my site show my current listings?",
        a: "Yes — we set up a listings section and can integrate with most MLS feeds or import listings manually. Updates are included in your monthly fee.",
      },
      {
        q: "Will it work for buyer's agents too?",
        a: "Absolutely. Buyer's agent sites focus on local market expertise, neighborhood guides, and lead capture forms — we tailor the site to whoever you serve.",
      },
      {
        q: "How much does a real estate agent website cost?",
        a: "With Lobus, $0 upfront and $100/month flat. IDX-integrated platforms like Placester or AgentFire cost $100–$500/month with annual contracts. Wix and Squarespace start at $15–$30/month but don't offer the professional look that buyers and sellers expect.",
      },
      {
        q: "What should a real estate agent website include?",
        a: "Your bio, local market expertise, current and past listings, a home valuation or contact form, client testimonials, and neighborhood information. We add local SEO so buyers and sellers searching for agents in your market find your personal site — not a generic brokerage page.",
      },
    ],
  },
  "dog-grooming-websites": {
    name: "Dog Groomers",
    singular: "dog groomer",
    metaTitle: "Dog Grooming Website Design — $0 Build Cost, $100/Month | Lobus",
    metaDescription:
      "Professional websites for dog groomers and pet grooming salons. Attract new clients, show your work, and fill your appointment book. $0 upfront, $100/month flat.",
    headline: "Fill your appointment book with the right clients.",
    sub: "Pet owners are picky about who touches their dog. A professional website with photos of your work and a simple booking form builds the trust that gets them through the door.",
    why: "Dog owners search for groomers the same way they search for their own hairdresser — they want to see the work, read reviews, and feel confident before booking. A great website is how you earn that confidence before they ever meet you.",
    faqs: [
      {
        q: "Can I show photos of dogs I've groomed?",
        a: "Yes — before-and-after grooming photos are incredibly persuasive. Send us your best ones and we'll build a gallery that shows off your skill.",
      },
      {
        q: "Can clients book appointments through the site?",
        a: "We include a booking request form. If you want full online scheduling, we can discuss integrating a booking tool that fits your workflow.",
      },
      {
        q: "How much does a dog grooming website cost?",
        a: "With Lobus, $0 upfront and $100/month flat for hosting, SSL, and updates. A freelancer charges $800–$3,500 to build. DIY on Wix or Squarespace starts at $15–$30/month but requires your time and won't stand out against competing groomers.",
      },
      {
        q: "What should a dog grooming website include?",
        a: "Photos of your grooming work, your services and pricing, a booking or contact form, your hours and location, and client reviews. We add local SEO so dog owners in your area find your grooming salon when they search online.",
      },
    ],
  },
};

const RELATED: Record<string, string[]> = {
  "plumber-websites": ["electrician-websites", "hvac-websites", "contractor-websites", "handyman-websites"],
  "electrician-websites": ["plumber-websites", "hvac-websites", "contractor-websites", "handyman-websites"],
  "landscaper-websites": ["pressure-washing-websites", "pool-service-websites", "painter-websites", "contractor-websites"],
  "cleaning-websites": ["dog-grooming-websites", "handyman-websites", "pressure-washing-websites", "pest-control-websites"],
  "hvac-websites": ["plumber-websites", "electrician-websites", "contractor-websites", "handyman-websites"],
  "contractor-websites": ["plumber-websites", "electrician-websites", "roofer-websites", "painter-websites"],
  "auto-detailing-websites": ["pressure-washing-websites", "handyman-websites", "moving-company-websites", "painter-websites"],
  "personal-trainer-websites": ["dog-grooming-websites", "cleaning-websites", "moving-company-websites", "handyman-websites"],
  "painter-websites": ["contractor-websites", "pressure-washing-websites", "handyman-websites", "roofer-websites"],
  "roofer-websites": ["contractor-websites", "painter-websites", "hvac-websites", "handyman-websites"],
  "pest-control-websites": ["cleaning-websites", "handyman-websites", "pool-service-websites", "landscaper-websites"],
  "pressure-washing-websites": ["painter-websites", "landscaper-websites", "handyman-websites", "contractor-websites"],
  "handyman-websites": ["contractor-websites", "plumber-websites", "electrician-websites", "painter-websites"],
  "moving-company-websites": ["cleaning-websites", "handyman-websites", "auto-detailing-websites", "dog-grooming-websites"],
  "pool-service-websites": ["landscaper-websites", "pest-control-websites", "pressure-washing-websites", "cleaning-websites"],
  "dog-grooming-websites": ["personal-trainer-websites", "cleaning-websites", "moving-company-websites", "auto-detailing-websites"],
  "barber-shop-websites": ["personal-trainer-websites", "photographer-websites", "tutor-websites", "dog-grooming-websites"],
  "tutor-websites": ["bookkeeper-websites", "personal-trainer-websites", "photographer-websites", "real-estate-agent-websites"],
  "photographer-websites": ["real-estate-agent-websites", "tutor-websites", "barber-shop-websites", "personal-trainer-websites"],
  "bookkeeper-websites": ["real-estate-agent-websites", "tutor-websites", "photographer-websites", "personal-trainer-websites"],
  "real-estate-agent-websites": ["photographer-websites", "bookkeeper-websites", "tutor-websites", "moving-company-websites"],
};

const GENERAL_FAQS = [
  {
    q: "What's the catch? Why is the build free?",
    a: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing — or a DIY page that costs them customers. We'd rather build for free, host you for a fair monthly fee, and earn that fee every month by keeping your site running well.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel any time, no fees. We'll take the site offline, and if you want to take the code with you to host elsewhere, we'll hand it over.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes — always. The domain is registered in your name. If you don't have one yet, we'll help you pick and register one.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites are ready to review in about a week from when we get your info. Once you approve, we launch within a day or two.",
  },
  {
    q: "Is Lobus better than Wix or Squarespace for a service business?",
    a: "For most service businesses, yes. Wix and Squarespace give you a template and hand you the tools — you still have to design it, write the copy, set up SEO, and update it yourself. Lobus does all of that for you. The monthly cost is similar, but you get a custom-built site, local SEO, and ongoing updates included.",
  },
  {
    q: "Do I need to know anything about websites to work with Lobus?",
    a: "Nothing at all. You tell us about your business — what you do, where you work, any photos you have — and we handle everything else. Design, development, SEO, hosting, and updates are all on us.",
  },
];

export function generateStaticParams() {
  return Object.keys(TRADES).map((trade) => ({ trade }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ trade: string }>;
}): Promise<Metadata> {
  const { trade } = await params;
  const config = TRADES[trade];
  if (!config) return {};
  const url = `${SITE_URL}/${trade}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url,
      type: "website",
      siteName: "Lobus Industries",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
    },
  };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ trade: string }>;
}) {
  const { trade } = await params;
  const config = TRADES[trade];
  if (!config) notFound();

  const allFaqs = [...config.faqs, ...GENERAL_FAQS];
  const relatedSlugs = (RELATED[trade] ?? []).slice(0, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/${trade}#service`,
        name: `Website Design for ${config.name}`,
        description: config.metaDescription,
        category: "Website design",
        provider: {
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}#service`,
          name: "Lobus Industries",
          url: SITE_URL,
        },
        offers: {
          "@type": "Offer",
          price: "100",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "100",
            priceCurrency: "USD",
            unitCode: "MON",
          },
          availability: "https://schema.org/InStock",
          description: "$0 upfront build cost. $100/month for hosting, SSL, backups, and updates.",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "AdministrativeArea", name: "All 50 US States" },
        ],
        url: `${SITE_URL}/${trade}`,
        image: `${SITE_URL}/${trade}/opengraph-image`,
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/${trade}#faq`,
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: config.name, item: `${SITE_URL}/${trade}` },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${trade}#webpage`,
        url: `${SITE_URL}/${trade}`,
        name: config.metaTitle,
        description: config.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@id": `${SITE_URL}/${trade}#service` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"],
        },
      },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[var(--muted-strong)] mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] pulse-soft" />
                Built for {config.name} &nbsp;·&nbsp; $0 to build &nbsp;·&nbsp; $100/mo
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.02]">
                <span className="text-gradient">{config.headline.split("—")[0]}</span>
                {config.headline.includes("—") && (
                  <>
                    <span className="text-gradient">—</span>
                    <br />
                    <span className="text-accent-gradient">
                      {config.headline.split("—")[1]}
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-7 text-lg md:text-xl text-[var(--muted-strong)] max-w-2xl leading-relaxed">
                {config.sub}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="btn-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base"
                >
                  Start your website — free
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/"
                  className="btn-ghost inline-flex items-center justify-center px-7 py-4 rounded-full text-base"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 text-sm">
                <Stat value="$0" label="Build cost" />
                <div className="hidden sm:block h-10 w-px bg-[var(--border-strong)]" />
                <Stat value="$100" label="Monthly hosting" />
                <div className="hidden sm:block h-10 w-px bg-[var(--border-strong)]" />
                <Stat value="7 days" label="Typical launch" />
              </div>
            </div>
          </div>
        </section>

        {/* Why callout */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-[var(--border-strong)] bg-white/[0.03] backdrop-blur p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 500px 300px at 0% 50%, rgba(251,146,60,0.15), transparent 70%)",
                }}
              />
              <div className="relative max-w-3xl">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                  Why it matters
                </div>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {config.why}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                What&apos;s included
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Everything your {config.singular} website needs to win customers.
              </h2>
              <p className="mt-4 text-[var(--muted-strong)] max-w-2xl">
                Every Lobus site is built from scratch around your business — no templates, no page builders, no shortcuts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Custom design — no templates",
                  body: `Your ${config.singular} website is designed around your services, your voice, and the customers you want to attract. Nothing generic.`,
                },
                {
                  title: "Mobile-first and fast",
                  body: `Most ${config.singular} searches happen on phones. Your site loads in under two seconds and looks sharp on every screen size.`,
                },
                {
                  title: "Lead-generating contact forms",
                  body: "Quote request and contact forms convert visitors into paying customers — even while you're out on a job. Every form submission goes straight to your inbox.",
                },
                {
                  title: "Local SEO foundation",
                  body: `On-page SEO, structured data markup, and Google Business Profile integration so local customers searching for ${config.name.toLowerCase()} find you — not your competitor.`,
                },
                {
                  title: "SSL, hosting & daily backups",
                  body: "Fast global hosting, HTTPS encryption, and automatic daily backups included. 99.9% uptime. No surprise renewal fees.",
                },
                {
                  title: "Ongoing content updates",
                  body: "Need to add a service, change your phone number, or update your pricing? Email us and it's done. Updates are included — no hourly billing.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="text-[var(--accent)] font-bold text-lg mb-3">✓</div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[var(--muted-strong)] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-3">
                How we compare
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                A better website — without the upfront cost.
              </h2>
              <p className="mt-4 text-[var(--muted-strong)] max-w-2xl">
                There are four ways to get a website for your {config.singular} business. Here&apos;s how they stack up.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium w-1/4"></th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium">DIY (Wix / Squarespace)</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium">Freelancer</th>
                    <th className="text-left py-3 pr-6 text-[var(--muted)] font-medium">Web agency</th>
                    <th className="text-left py-3 text-white font-semibold">Lobus Industries</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Build cost", diy: "$0 + your time", freelancer: "$800–$3,500", agency: "$3,000–$15,000+", lobus: "$0" },
                    { label: "Monthly cost", diy: "$15–$30/mo", freelancer: "$50–$150/mo", agency: "$200–$500/mo", lobus: "$100/mo flat" },
                    { label: "Time to launch", diy: "3–6 weeks (yourself)", freelancer: "2–6 weeks", agency: "4–12 weeks", lobus: "~7 days" },
                    { label: "Custom design", diy: "Template only", freelancer: "Varies", agency: "Yes", lobus: "Yes" },
                    { label: "Local SEO setup", diy: "DIY only", freelancer: "Extra cost", agency: "Extra cost", lobus: "Included" },
                    { label: "Content updates", diy: "DIY only", freelancer: "Extra cost", agency: "Extra cost", lobus: "Included" },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                      <td className="py-3 pr-6 text-[var(--muted-strong)] font-medium">{row.label}</td>
                      <td className="py-3 pr-6 text-[var(--muted)]">{row.diy}</td>
                      <td className="py-3 pr-6 text-[var(--muted)]">{row.freelancer}</td>
                      <td className="py-3 pr-6 text-[var(--muted)]">{row.agency}</td>
                      <td className="py-3 text-[var(--accent)] font-semibold">{row.lobus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Process />
        <Pricing />

        {/* FAQ */}
        <section id="faq" className="py-28 relative">
          <div
            className="glow-amber"
            style={{ top: "30%", right: "-180px", width: "400px", height: "400px" }}
          />
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="FAQ" title="The questions we get asked most." />
            <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {allFaqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base md:text-lg font-medium text-white">
                      {f.q}
                    </span>
                    <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related industries */}
        {relatedSlugs.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] font-semibold mb-6">
                We also build for
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedSlugs.map((slug) => {
                  const related = TRADES[slug];
                  if (!related) return null;
                  return (
                    <a
                      key={slug}
                      href={`/${slug}`}
                      className="card p-5 hover:border-[var(--accent)]/40 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                        {related.name}
                      </div>
                      <div className="text-xs text-[var(--muted)] mt-1">
                        View page →
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <CTA />
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-white tracking-tight">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}
