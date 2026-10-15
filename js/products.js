/*
  KUCKOO CO. PRODUCT LIST
  -----------------------
  This is the only file you need to edit to add, remove or change products.
  Each product is one block between { and }. Copy a block to add a new one.

  - id:          short unique name used in the web address (lowercase, dashes, no spaces)
  - name:        product name shown on the site
  - price:       price in RM (numbers only, e.g. 45 or 12.90)
  - category:    must be one of: "Home Décor", "Desk Stuff", "Gifts", "Keychains"
  - description: one or two short sentences
  - image:       picture file inside the images/products folder
  - featured:    true = show on the Home page (pick 4)
  - isNew:       true = show a "New" badge on the product (optional)
*/

/* Shop contact details shown in the footer of every page.
   Replace these with your real Instagram handle and email. */
const SHOP_INFO = {
  instagram: "kuckooco",            // your Instagram username, without the @
  email: "hello@kuckooco.com"       // your contact email
};

const CATEGORIES = ["Home Décor", "Desk Stuff", "Gifts", "Keychains"];

const PRODUCTS = [
  {
    id: "mini-cuckoo-clock",
    name: "Mini Cuckoo Wall Clock",
    price: 89,
    category: "Home Décor",
    description: "A palm-sized cuckoo clock with a cheeky bird who pops out on the hour. Small enough for a bookshelf, loud enough to make you jump.",
    image: "images/products/mini-cuckoo-clock.svg",
    featured: true
  },
  {
    id: "grumpy-cactus-planter",
    name: "Grumpy Cactus Planter",
    price: 45,
    category: "Home Décor",
    description: "A ceramic planter with a permanently unimpressed face. Perfect for succulents, pens, or people who also don't like Mondays.",
    image: "images/products/grumpy-cactus-planter.svg",
    featured: false
  },
  {
    id: "moon-phase-garland",
    name: "Moon Phase Garland",
    price: 39,
    category: "Home Décor",
    description: "Felt moons from new to full, strung on cotton twine. Hang it over a bed, a window or a very dramatic doorway.",
    image: "images/products/moon-phase-garland.svg",
    featured: false,
    isNew: true
  },
  {
    id: "sleepy-cat-pen-holder",
    name: "Sleepy Cat Pen Holder",
    price: 32,
    category: "Desk Stuff",
    description: "A curled-up ceramic cat that guards your pens while pretending to nap. Holds about a dozen pens and one strong opinion.",
    image: "images/products/sleepy-cat-pen-holder.svg",
    featured: true
  },
  {
    id: "tiny-sofa-phone-stand",
    name: "Tiny Sofa Phone Stand",
    price: 29,
    category: "Desk Stuff",
    description: "Your phone deserves a lie-down too. A mini velvet-look sofa that props your phone up for video calls and recipe scrolling.",
    image: "images/products/tiny-sofa-phone-stand.svg",
    featured: false
  },
  {
    id: "bubble-tea-sticky-notes",
    name: "Bubble Tea Sticky Notes",
    price: 12,
    category: "Desk Stuff",
    description: "200 sticky notes shaped like a cup of boba, pearls included. Reminders have never looked this refreshing.",
    image: "images/products/bubble-tea-sticky-notes.svg",
    featured: false,
    isNew: true
  },
  {
    id: "durian-scented-candle",
    name: "Durian Scented Candle",
    price: 48,
    category: "Gifts",
    description: "Don't worry, it smells like vanilla and coconut. The durian is just for looks, and for confusing your guests.",
    image: "images/products/durian-scented-candle.svg",
    featured: false
  },
  {
    id: "teh-tarik-mug",
    name: "Teh Tarik Mug",
    price: 35,
    category: "Gifts",
    description: "A tall enamel mug with a little pouring man on the side. Built for frothy teh tarik, also fine with Milo.",
    image: "images/products/teh-tarik-mug.svg",
    featured: true,
    isNew: true
  },
  {
    id: "kopi-lover-gift-box",
    name: "Kopi Lover Gift Box",
    price: 79,
    category: "Gifts",
    description: "A ready-to-give box with a kopitiam-style cup, a mini drip filter and a 'But First, Kopi' coaster. Gift wrapped with a handwritten tag.",
    image: "images/products/kopi-lover-gift-box.svg",
    featured: false
  },
  {
    id: "roti-canai-keychain",
    name: "Roti Canai Keychain",
    price: 15,
    category: "Keychains",
    description: "A squishy, flaky-looking roti canai with a tiny bowl of dhal on the side. Not edible, sadly.",
    image: "images/products/roti-canai-keychain.svg",
    featured: true
  },
  {
    id: "rubber-duck-keychain",
    name: "Tiny Rubber Duck Keychain",
    price: 12,
    category: "Keychains",
    description: "A pocket-sized rubber duck for when you need to talk a problem through. It squeaks, it listens, it never judges.",
    image: "images/products/rubber-duck-keychain.svg",
    featured: false
  },
  {
    id: "kuckoo-bird-keychain",
    name: "Kuckoo Bird Keychain",
    price: 18,
    category: "Keychains",
    description: "Our very own mascot, in enamel. Clip it to your keys and carry a little bit of chaos wherever you go.",
    image: "images/products/kuckoo-bird-keychain.svg",
    featured: false
  }
];
