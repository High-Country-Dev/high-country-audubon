// Every word on the site lives in this file. To change the site, edit this
// file — no plugins, no database, no admin panel to keep patched.

export const org = {
  name: "High Country Audubon Society",
  short: "HCAS",
  tagline: "Birds, people, and the Blue Ridge — since 2007.",
  mission:
    "The mission of the High Country Audubon Society is to encourage beginning birders and experts alike in our five-county area to enjoy birds and bird-watching and to engage in conservation, education, and research for the benefit of the birds of western North Carolina.",
  counties: ["Alleghany", "Ashe", "Avery", "Watauga", "Wilkes"],
  email: "highcountryaudubon@gmail.com",
  webmasterEmail: "hcas.webmaster@gmail.com",
  mailing: ["High Country Audubon Society", "PO Box 3746", "Boone, NC 28607"],
  facebook: "https://www.facebook.com/highcountryaudubon",
  googleGroup: "https://groups.google.com/g/hcbirders",
  googleGroupSubscribe: "hcbirders+subscribe@googlegroups.com",
  hotspotsMap:
    "https://www.google.com/maps/d/u/0/embed?mid=1vjttDw7S0ifNNvdcDO22ThP1MjUGIVw&ehbc=2E312F",
};

export const nav = [
  { href: "/bird-walks", label: "Bird Walks" },
  { href: "/hawk-watch", label: "Hawk Watch" },
  { href: "/motus", label: "Motus Tower" },
  { href: "/about", label: "About" },
];

export type Walk = {
  id: "brookshire" | "valle-crucis";
  name: string;
  place: string;
  address: string;
  mapUrl: string;
  when: string;
  times: string;
  image: string;
  blurb: string;
  details: string[];
};

export const walks: Walk[] = [
  {
    id: "valle-crucis",
    name: "Valle Crucis Wednesday Walk",
    place: "Valle Crucis Community Park",
    address: "2892 Broadstone Rd, Banner Elk, NC 28604",
    mapUrl: "https://www.google.com/maps/place/2892+Broadstone+Rd,+Banner+Elk,+NC+28604",
    when: "Every Wednesday, year-round",
    times: "Apr–Oct 9–11 am · Nov–Mar 10 am–noon",
    image: "/img/eastern-bluebird.webp",
    blurb:
      "A great birding venue with a nice variety of birds through the seasons. HCAS members lead the walk along paved, easily walked trails.",
    details: [
      "Paved, easy trails — good for all abilities",
      "Bluebirds, Yellow Warblers, Tree Swallows, Gray Catbirds and more",
      "HCAS built the park's native plant garden and chimney swift tower",
    ],
  },
  {
    id: "brookshire",
    name: "Brookshire Park Bird & Nature Walk",
    place: "Brookshire Park, Boone",
    address: "250 Brookshire Rd, Boone, NC 28607",
    mapUrl: "https://maps.app.goo.gl/qerjRfmnGYzuaRpn9",
    when: "First Saturday of every month",
    times: "8–10 am · rain or shine",
    image: "/img/yellow-warbler.webp",
    blurb:
      "Guy McGrane leads a loop down the greenway and around the sparrow fields — about a mile — through the New River's wet prairie floodplain.",
    details: [
      "Meet at the picnic shelter by the main paved parking lot",
      "Beginners and rusty birders welcome",
      "Extra binoculars on hand if you need a pair",
    ],
  },
];

export const pillars = [
  {
    title: "Get outdoors",
    body: "Free guided walks every week, field trips near and far, and five Christmas Bird Count circles across the High Country.",
    href: "/bird-walks",
    image: "/img/cedar-waxwing.webp",
  },
  {
    title: "Count & track",
    body: "Our volunteers count migrating raptors on the Blue Ridge Parkway, and our own Motus tower listens for tagged birds passing overhead.",
    href: "/hawk-watch",
    image: "/img/broad-winged-hawk.webp",
  },
  {
    title: "Protect habitat",
    body: "Native plant gardens, wetland restoration at Brookshire Park and Eller Wetlands, a school native-garden program, and an adopted stretch of River Road.",
    href: "/about#what-we-do",
    image: "/img/golden-winged-warbler.webp",
  },
  {
    title: "Grow new birders",
    body: "The Sue Wells Research Grant, the HCAS Young Birders Scholarship, and loaner binoculars and field guides on every walk.",
    href: "/about#grants",
    image: "/img/indigo-bunting.webp",
  },
];

// 2026 season totals from the HCAS Hawk Watch (shared on the HCAS Google Group, Sept 30 2026).
export const hawkWatch = {
  year: 2026,
  total: 1883,
  monarchs: 239,
  volunteerHours: 358,
  history: [
    { year: 2023, total: 7504 },
    { year: 2024, total: 8082 },
    { year: 2025, total: 5483 },
    { year: 2026, total: 1883 },
  ],
  species: [
    { code: "BWHA", name: "Broad-winged Hawk", count: 1770 },
    { code: "BAEA", name: "Bald Eagle", count: 19 },
    { code: "SSHA", name: "Sharp-shinned Hawk", count: 13 },
    { code: "COHA", name: "Cooper's Hawk", count: 9 },
    { code: "NOHA", name: "Northern Harrier", count: 8 },
    { code: "RSHA", name: "Red-shouldered Hawk", count: 8 },
    { code: "MERL", name: "Merlin", count: 8 },
    { code: "BLVU", name: "Black Vulture", count: 7 },
    { code: "OSPR", name: "Osprey", count: 6 },
    { code: "AMKE", name: "American Kestrel", count: 5 },
    { code: "PEFA", name: "Peregrine Falcon", count: 4 },
    { code: "RTHA", name: "Red-tailed Hawk", count: 1 },
    { code: "UNK", name: "Unidentified raptors", count: 25 },
  ],
  intro:
    "Every September, huge numbers of raptors migrate through the North Carolina High Country along remarkably consistent routes. That predictability lets volunteers on Blue Ridge Parkway overlooks make fairly accurate counts — data that goes to HawkCount.org and into the long-term picture of raptor populations.",
  scene:
    "Lawn chairs and a cooler line the edge of the overlook. A whiteboard leans against the cooler, spotting scopes sit on tripods, and a dozen people scan the horizon. Someone calls out and points at a distant ridge. Binoculars swing in unison. Dark specks are spiraling up into the clouds — a kettle. “Looks like Broad-wings.” “I count 23.” Twenty-three tick marks go on the board.",
  sceneCredit: "Adapted from “A Day at the Hawk Watch” by Paul Laurent",
  season2026:
    "2026 was a strange year. A big front pushed this year's Broad-winged Hawks west of the escarpment — GPS-tagged birds from the Broad-winged Hawk Project confirmed it — so the count came in well below recent seasons. The volunteers were out there anyway, day after day: 358 volunteer hours, visitors from six states and England, and 239 Monarchs counted alongside the hawks.",
};

export const motus = {
  online: "August 9, 2024",
  location: "Appalachian State University Sustainability Farm, Ashe County",
  intro:
    "HCAS owns and operates the first of what we hope will become a series of Motus towers in the North Carolina mountains. Motus is an international network of radio receivers that detects tiny tags carried by migrating birds, bats and insects — tags that weigh as little as 0.2 grams.",
  detections: [
    { bird: "Bobolink", date: "Sept 20, 2024" },
    { bird: "Wood Thrush", date: "Oct 1, 2024" },
    { bird: "Tennessee Warbler", date: "Oct 5, 2024" },
    { bird: "Wood Thrush", date: "Oct 5, 2024" },
  ],
  thanks:
    "Many thanks to Dr. Richard Gray, Astronomy Professor Emeritus and long-time HCAS member, who made the tower happen and built its fourth antenna by hand in October 2024 — and to Motus Wildlife Tracking System and Birds Canada.",
  why: "Four birds in two months may not sound like much, but we only detect birds that carry tags and happen to pass close to our tower. Every detection adds to the map of how birds actually migrate — and the more towers there are, the more willing researchers are to tag birds in the first place.",
  dataUrl: "https://motus.org/",
};

export const membership = {
  tiers: [
    { name: "Individual", price: 20 },
    { name: "Family", price: 35 },
    { name: "Student", price: 10 },
  ],
  funds: [
    "HCAS General Fund",
    "Sue Wells Research Grant",
    "HCAS Young Birders Scholarship",
    "Conservation & Education",
  ],
  uses: [
    "Native plant gardens at Valle Crucis and Green Valley Community Parks",
    "Wetland planning and creation at Brookshire Park and Foscoe",
    "The Schools Initiative, the Sue Wells Research Grant, and the Young Birders Scholarship",
    "Our adopted stretch of River Road along the New River",
  ],
};

export const board = [
  ["Will Bennett", "President"],
  ["Guy McGrane", "Vice President · Conservation & Field Trips"],
  ["Bob Cherry", "Secretary"],
  ["Juliana Henderson", "Treasurer"],
  ["Paul Laurent", "Membership · Education & Outreach"],
  ["Richard Laurent", "Publicity · Webmaster"],
  ["Debbie Shetterly", "Past President"],
  ["Gina Diggs", "Past President"],
  ["Sheryl McNair", "Director"],
  ["Martha Cutler", "Director"],
  ["Katie Griffith", "Director"],
  ["Max Ramey", "App State Liaison"],
];

export const history = [
  {
    year: "1960s–70s",
    text: "A seasonal Grandfather Mountain chapter of Audubon brought together people like Hugh Morton and Dr. Frank Randall, who taught ornithology at ASU for decades.",
  },
  {
    year: "2007",
    text: "On May 30, the first public meeting of the new High Country Audubon Society is held at the Watauga County Library — organized by Miles Tager with Curtis Smalling and Betty Bond.",
  },
  {
    year: "2010",
    text: "After two lean years, a membership drive, a new website and a fuller calendar put the chapter on solid footing.",
  },
  {
    year: "2024",
    text: "HCAS brings its own Motus tower online at the App State Sustainability Farm.",
  },
  {
    year: "Today",
    text: "Weekly walks, an annual Hawk Watch, five Christmas Bird Counts, habitat projects across five counties — all run by volunteers.",
  },
];

export const projects = [
  {
    name: "Eller Wetlands",
    body: "10 acres of wetland along Highway 105 near Seven Devils. With Blue Ridge Conservancy, HCAS is working toward a birding and wildlife reserve with trails, boardwalks and better habitat.",
  },
  {
    name: "Brookshire Park",
    body: "Helping Watauga County restore the park's remaining floodplain wetlands for shorebirds and migrating waterfowl, including viewing platforms.",
  },
  {
    name: "Valle Crucis Community Park",
    body: "Home of our Wednesday walks — HCAS planted its native garden and put up its chimney swift tower.",
  },
  {
    name: "Plants for Birds",
    body: "Native gardens at area parks and schools, and free landscaping suggestions for landowners who want more birds in their yards.",
  },
];

export const christmasCounts = {
  window: "One day between December 14 and January 5",
  circles: ["Grandfather Mountain", "Mount Jefferson", "Stone Mountain", "Upper Yadkin Valley", "New River Valley"],
  blurb:
    "Audubon's Christmas Bird Count is the nation's longest-running community science bird project. Each count covers a circle 15 miles across; every able-bodied person who likes wildlife is welcome.",
};
