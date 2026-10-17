export interface BeforeAfterPair {
  id: string;
  roomName: string;
  floor: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface FloorPlanItem {
  floor: string;
  title: string;
  image: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  slug?: string;
  name: string;
  location: string;
  type: string;
  area: string;
  category: string;
  featured: boolean;
  image: string;
  client: string;
  year: string;
  description: string;
  specs: string[];
  gallery: string[];
  beforeAfter?: BeforeAfterPair[];
  floorPlans?: FloorPlanItem[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: 'one-oak-sky-villa',
    name: 'One Oak - Sky Villa 12th & 13th Floor',
    location: 'Gandipet, Hyderabad',
    type: 'Turnkey Luxury Duplex Penthouse Fitout & Interior Architecture',
    area: '7,500 Sq.Ft. Duplex (12th & 13th Floor)',
    category: 'Villas',
    featured: true,
    image: '/projects/one-oak/selected-interiors/interior_02.jpg',
    client: 'Ar. Rajesh Verma / Studio Design',
    year: '2026',
    description: 'Ultra-luxury 7,500 Sq.Ft duplex sky villa spanning the 12th & 13th penthouse floors overlooking Gandipet Lake. Features a grand double-height formal drawing room, open dining lounge with panoramic lake deck, chef-grade modular kitchen, mezzanine study library, and bespoke private suites.',
    specs: [
      '7,500 Sq.Ft. Duplex Sky Villa spanning 12th & 13th Penthouse Floors',
      'Panoramic Gandipet Lake-View Double-Height Living & Terrace Deck',
      'Italian Statuario Marble Flooring & Acoustical Fluted Wall Paneling',
      'Custom German CNC Precision Joinery & Concealed Architectural LED Lighting',
      'Chef-Grade Modular Kitchen with Wet Kitchen & Quartz Island Counter',
      'Bespoke Walk-in Wardrobe Suites with Bronze Tinted Glass & Smart Sensors',
      'Mezzanine Study Lounge & Reading Nook with Floating Metal Staircase',
      'Architectural Design & Turnkey Presentation by Ar. Rajesh Verma'
    ],
    beforeAfter: [
      {
        id: 'drawing-room-plan-vs-design',
        roomName: 'Formal Drawing Room (32\'0" x 18\'3")',
        floor: '12th Floor',
        description: 'Comparison between the precision 12th Floor architectural furniture layout blueprint (Page 02) and the completed photorealistic 3D interior architecture (Page 03) featuring double-height ceiling, marble TV backdrop, and Gandipet lake views.',
        beforeImage: '/projects/one-oak/pages/page_02.jpg',
        afterImage: '/projects/one-oak/pages/page_03.jpg',
        beforeLabel: 'BEFORE: 12th Floor Furniture Layout Plan (Page 02)',
        afterLabel: 'AFTER: Formal Drawing Room 3D Design (Page 03)'
      },
      {
        id: 'dining-plan-vs-design',
        roomName: 'Double Height Dining Lounge (20\'2" x 14\'1")',
        floor: '12th Floor',
        description: 'From 2D structural layout (Page 02) to a magnificent double-height dining volume (Page 07) equipped with architectural floating staircase, bespoke 8-seater dining arrangement, and seamless glass connection to the outdoor deck.',
        beforeImage: '/projects/one-oak/pages/page_02.jpg',
        afterImage: '/projects/one-oak/pages/page_07.jpg',
        beforeLabel: 'BEFORE: 12th Floor Furniture Layout Plan (Page 02)',
        afterLabel: 'AFTER: Double Height Dining 3D Design (Page 07)'
      },
      {
        id: 'kitchen-plan-vs-design',
        roomName: 'Modular Kitchen & Island (18\'6" x 12\'8")',
        floor: '12th Floor',
        description: 'Layout blueprint (Page 02) versus turnkey execution of chef-grade kitchen (Page 15) featuring quartz waterfall island, breakfast bar stools, concealed tall unit appliances, and dedicated wet kitchen utility zone.',
        beforeImage: '/projects/one-oak/pages/page_02.jpg',
        afterImage: '/projects/one-oak/pages/page_15.jpg',
        beforeLabel: 'BEFORE: 12th Floor Furniture Layout Plan (Page 02)',
        afterLabel: 'AFTER: Modular Kitchen 3D Design (Page 15)'
      },
      {
        id: 'family-lounge-plan-vs-design',
        roomName: 'Family Lounge (21\'8" x 12\'0")',
        floor: '12th Floor',
        description: 'Layout blueprint (Page 02) versus finished presentation of intimate family retreat (Page 19) with luxury sectional seating, low-profile media credenza, and direct sliding glass access to the double-height deck.',
        beforeImage: '/projects/one-oak/pages/page_02.jpg',
        afterImage: '/projects/one-oak/pages/page_19.jpg',
        beforeLabel: 'BEFORE: 12th Floor Furniture Layout Plan (Page 02)',
        afterLabel: 'AFTER: Family Lounge 3D Design (Page 19)'
      },
      {
        id: 'guest-bedroom-plan-vs-design',
        roomName: 'Guest Bedroom (16\'9" x 12\'6")',
        floor: '12th Floor',
        description: 'Layout blueprint (Page 02) versus bespoke guest bedroom execution (Page 22) featuring low platform king bed, fluted acoustic paneling, integrated wardrobe, and en-suite washroom.',
        beforeImage: '/projects/one-oak/pages/page_02.jpg',
        afterImage: '/projects/one-oak/pages/page_22.jpg',
        beforeLabel: 'BEFORE: 12th Floor Furniture Layout Plan (Page 02)',
        afterLabel: 'AFTER: Guest Bedroom 3D Design (Page 22)'
      },
      {
        id: 'study-plan-vs-design',
        roomName: 'Mezzanine Study Lounge & Reading Nook (25\'11" x 12\'3")',
        floor: '13th Floor',
        description: 'Upper mezzanine 2D furniture plan (Page 25) translated into a serene intellectual library (Page 26) overlooking the double-height volume, featuring fluted acoustic wood paneling and executive desk joinery.',
        beforeImage: '/projects/one-oak/pages/page_25.jpg',
        afterImage: '/projects/one-oak/pages/page_26.jpg',
        beforeLabel: 'BEFORE: 13th Floor Furniture Layout Plan (Page 25)',
        afterLabel: 'AFTER: Study Lounge 3D Design (Page 26)'
      },
      {
        id: 'master-bedroom-plan-vs-design',
        roomName: 'Master Bedroom Suite (22\'9" x 17\'3")',
        floor: '13th Floor',
        description: '13th floor master suite layout (Page 25) versus ultra-luxury finished design presentation (Page 31) showcasing custom fluted timber headboard, ambient cove lighting, bronze-tinted glass walk-in wardrobe, and private terrace.',
        beforeImage: '/projects/one-oak/pages/page_25.jpg',
        afterImage: '/projects/one-oak/pages/page_31.jpg',
        beforeLabel: 'BEFORE: 13th Floor Furniture Layout Plan (Page 25)',
        afterLabel: 'AFTER: Master Suite 3D Design (Page 31)'
      },
      {
        id: 'bedroom-01-plan-vs-design',
        roomName: 'Bedroom 01 Suite (12\'9" x 18\'7½")',
        floor: '13th Floor',
        description: 'Precision upper floor blueprint (Page 25) compared to executed bedroom interior (Page 35) with integrated study workstation, backlit accent headboard, and bespoke storage cabinetry.',
        beforeImage: '/projects/one-oak/pages/page_25.jpg',
        afterImage: '/projects/one-oak/pages/page_35.jpg',
        beforeLabel: 'BEFORE: 13th Floor Furniture Layout Plan (Page 25)',
        afterLabel: 'AFTER: Bedroom 01 3D Design (Page 35)'
      },
      {
        id: 'bedroom-02-plan-vs-design',
        roomName: 'Bedroom 02 Suite (12\'9" x 18\'7½")',
        floor: '13th Floor',
        description: 'Blueprint (Page 25) versus completed modern minimalist bedroom presentation (Page 38) featuring warm wood accents, contemporary floating bedside consoles, and tailored wardrobe joinery.',
        beforeImage: '/projects/one-oak/pages/page_25.jpg',
        afterImage: '/projects/one-oak/pages/page_38.jpg',
        beforeLabel: 'BEFORE: 13th Floor Furniture Layout Plan (Page 25)',
        afterLabel: 'AFTER: Bedroom 02 3D Design (Page 38)'
      }
    ],
    floorPlans: [
      {
        floor: '12th Floor',
        title: '12th Floor Furniture Layout Plan (Page 02)',
        image: '/projects/one-oak/pages/page_02.jpg',
        description: 'Comprehensive architectural blueprint encompassing Foyer (7\'9" x 9\'10"), Formal Drawing Room (32\'0" x 18\'3"), Double Height Dining Lounge (20\'2" x 14\'1"), Double Height Deck (20\'2" x 10\'4"), Kitchen (18\'6" x 12\'8"), Wet Kitchen (13\'11" x 6\'0"), Utility/Store (8\'6" x 6\'4"), Family Lounge (21\'8" x 12\'0"), and Guest Bedroom (16\'9" x 12\'6") with en-suite bath.'
      },
      {
        floor: '13th Floor',
        title: '13th Floor Furniture Layout Plan (Page 25)',
        image: '/projects/one-oak/pages/page_25.jpg',
        description: 'Private upper-level retreat layout featuring Master Bedroom (22\'9" x 17\'3") with dedicated Walk-In Closet (11\'4" x 13\'7½") and Master Bathroom (10\'5" x 8\'3"), Reading Nook / Study Lounge (25\'11" x 12\'3"), Bedroom 01 (12\'9" x 18\'7½"), Bedroom 02 (12\'9" x 18\'7½"), and open double-height look-down over dining.'
      }
    ],
    gallery: [
      '/projects/one-oak/selected-interiors/interior_01.jpg',
      '/projects/one-oak/selected-interiors/interior_02.jpg',
      '/projects/one-oak/selected-interiors/interior_03.jpg',
      '/projects/one-oak/selected-interiors/interior_04.jpg',
      '/projects/one-oak/selected-interiors/interior_05.jpg',
      '/projects/one-oak/selected-interiors/interior_06.jpg',
      '/projects/one-oak/selected-interiors/interior_07.jpg',
      '/projects/one-oak/selected-interiors/interior_08.jpg',
      '/projects/one-oak/selected-interiors/interior_09.jpg',
      '/projects/one-oak/selected-interiors/interior_10.jpg',
      '/projects/one-oak/selected-interiors/interior_11.jpg',
      '/projects/one-oak/selected-interiors/interior_12.jpg',
      '/projects/one-oak/selected-interiors/interior_13.jpg',
      '/projects/one-oak/selected-interiors/interior_14.jpg',
      '/projects/one-oak/selected-interiors/interior_15.jpg'
    ]
  },
  {
    id: 2,
    slug: 'northstar-allura-kokapet',
    name: 'Northstar Allura - Luxury Villa',
    location: 'Kokapet, Hyderabad',
    type: 'Turnkey Luxury Villa Interior Fitout & Architectural Design',
    area: '6,500 Sq.Ft. Triplex Villa',
    category: 'Villas',
    featured: true,
    image: '/projects/northstar-allura/top20/allura_top_10.jpg',
    client: 'Northstar Allura Residence',
    year: '2026',
    description: 'Bespoke 6,500 Sq.Ft luxury triplex villa in Kokapet, Hyderabad. Features a grand ground floor formal living room with Italian Statuario marble TV backdrop, opulent 8-seater dining lounge with sculptural chandelier, gourmet chef wet kitchen, custom laser-cut teak and brass jaali pooja sanctum, private home cinema lounge with acoustic fabric paneling, upper family lounges, children themed suite, and wooden decked terrace garden.',
    specs: [
      '6,500 Sq.Ft. Triplex Luxury Villa across Ground, 1st, 2nd Floors & Terrace in Kokapet',
      'Modular Wet Kitchen with Integrated Appliances, Quartz Countertops & Utility Zone',
      'Double-Height Formal Living Salon with Italian Statuario Marble TV Backdrop',
      'Opulent 8-Seater Dining Lounge with Sculptural Chandelier & Curved Back Seating',
      'Laser-Cut Teak & Brass Jaali Pooja Sanctum with Altar Console',
      'Acoustically Engineered Private Home Cinema with Tiered Recliner Seating',
      '1st Floor & 2nd Floor Family Lounges with Warm Cove Illumination & Bouclé Seating',
      'Children Themed Bedroom Suite with Backlit 3D Wall Art & Custom Wardrobes',
      'Wooden Decked Sunset Terrace Garden with Outdoor Pergola Lounge',
      'Complete Architectural Interior Execution & Turnkey Fitout by Anjani Infra'
    ],
    gallery: [
      '/projects/northstar-allura/top20/allura_top_10.jpg',
      '/projects/northstar-allura/top20/allura_top_11.jpg',
      '/projects/northstar-allura/top20/allura_top_06.jpg',
      '/projects/northstar-allura/top20/allura_top_07.jpg',
      '/projects/northstar-allura/top20/allura_top_08.jpg',
      '/projects/northstar-allura/top20/allura_top_09.jpg',
      '/projects/northstar-allura/top20/allura_top_01.jpg',
      '/projects/northstar-allura/top20/allura_top_02.jpg',
      '/projects/northstar-allura/top20/allura_top_05.jpg',
      '/projects/northstar-allura/top20/allura_top_12.jpg',
      '/projects/northstar-allura/top20/allura_top_13.jpg',
      '/projects/northstar-allura/top20/allura_top_14.jpg',
      '/projects/northstar-allura/top20/allura_top_15.jpg',
      '/projects/northstar-allura/top20/allura_top_16.jpg',
      '/projects/northstar-allura/top20/allura_top_17.jpg',
      '/projects/northstar-allura/top20/allura_top_03.jpg',
      '/projects/northstar-allura/top20/allura_top_04.jpg',
      '/projects/northstar-allura/top20/allura_top_18.jpg',
      '/projects/northstar-allura/top20/allura_top_19.jpg',
      '/projects/northstar-allura/top20/allura_top_20.jpg'
    ]
  },
  {
    id: 3,
    slug: 'vellanki-penthouse-kondapur',
    name: 'Vellanki Penthouse',
    location: 'Kondapur, Hyderabad',
    type: 'Luxury High-Rise Penthouse Interior Architecture & Turnkey Fitout',
    area: '5,200 Sq.Ft. Luxury Penthouse',
    category: 'Apartments',
    featured: true,
    image: '/projects/vellanki-penthouse/top16/vellanki_top_13.jpg',
    client: 'Vellanki Residence',
    year: '2026',
    description:
      'Bespoke 5,200 Sq.Ft luxury high-rise penthouse in Kondapur, Hyderabad. Features a grand open-plan living lounge with Italian Statuario marble TV backdrop, designer dining suite, chef-grade modular kitchen with breakfast counter, master bedroom suite with botanical accent wall, and contemporary bedroom suites with custom joinery.',
    specs: [
      '5,200 Sq.Ft. Luxury High-Rise Penthouse in Kondapur, Hyderabad',
      'Grand Open-Plan Living & Dining Lounge with Italian Marble Media Wall',
      'Designer Modular Kitchen with Breakfast Bar Counter & Concealed Appliances',
      'Master Bedroom Suite with Botanical Accent Wall & Custom Arched Dressing Console',
      'Contemporary Bedroom Suite with Hexagonal Feature Wall & Integrated Study Station',
      'Guest Bedroom Suite with Fluted Acoustic Slat Paneling & Ambient Cove Illumination',
      'Curated 16-Slide High-Definition Architectural Visualization Portfolio',
      'Complete Architectural Turnkey Interior Fitout by Anjani Infra'
    ],
    gallery: [
      '/projects/vellanki-penthouse/top16/vellanki_top_13.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_14.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_15.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_16.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_08.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_09.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_10.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_11.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_12.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_03.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_04.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_05.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_06.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_07.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_01.jpg',
      '/projects/vellanki-penthouse/top16/vellanki_top_02.jpg'
    ]
  },
  {
    id: 6,
    slug: 'bhavyas-eugen-madhapur',
    name: "Bhavya's Eugen",
    location: 'Madhapur, Hyderabad',
    type: 'Turnkey Luxury 3 BHK Interior Architecture & Bespoke Fitout',
    area: '2,450 Sq.Ft. Luxury 3 BHK Residence',
    category: 'Apartments',
    featured: true,
    image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_01.jpg',
    client: "Bhavya's Eugen Residence",
    year: '2026',
    description:
      "A stunning 14-render turnkey architectural interior design presentation for the premium luxury residence at Bhavya's Eugen, Madhapur, Hyderabad. Featuring a grand living hall with floating Italian marble TV credenza and integrated sacred prayer niche, formal seating lounge with warm oak fluted wall cladding, opulent 6-seater dining suite with full-height illuminated crockery & bar showcase, palatial master bedroom suite with bay window chillout daybed, dedicated study workstation, and sophisticated second bedroom with bespoke headboard wall panelling.",
    specs: [
      "2,450 Sq.Ft. Premium High-Rise Residence in Madhapur, Hyderabad",
      'Grand Living Hall with Italian Marble TV Credenza & Integrated Sacred Prayer Niche',
      'Vertical Fluted Oak Wall Paneling with Concealed Air Conditioning Integration',
      'Formal 6-Seater Dining Suite with Full-Height Backlit Tinted-Glass Crockery & Bar Showcase',
      'Master Bedroom Suite with Floating King Platform Bed, Bay Window Seating & Walnut Media Unit',
      'Dedicated Study Workstation with Integrated Custom Shelving & Ambient LED Profiles',
      'Second Luxury Bedroom Suite with Bespoke Soft-Upholstered Panel Wall & Contemporary Wardrobes',
      'Curved Perimeter False Ceilings with Warm 3000K Architectural LED Cove Lighting Profiles',
      'Curated 14-Slide High-Definition 3D Architectural Visualization & Fitout Specification'
    ],
    beforeAfter: [
      {
        id: 'living-tv-vs-seating',
        roomName: 'Living Entertainment vs Seating Lounge',
        floor: 'Main Living Zone',
        description: 'Comparison between the floating marble TV credenza with sacred prayer niche (Slide 01) and the formal conversational sofa seating lounge (Slide 02).',
        beforeImage: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_01.jpg',
        afterImage: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_02.jpg',
        beforeLabel: 'TV Credenza & Prayer Niche',
        afterLabel: 'Formal Seating & Wing Wall'
      }
    ],
    gallery: [
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_01.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_02.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_03.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_04.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_05.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_06.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_07.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_08.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_09.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_10.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_11.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_12.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_13.jpg',
      '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_14.jpg'
    ]
  },
  {
    id: 4,
    slug: 'team-4-arka-lanco-hills',
    name: 'Team 4 Arka',
    location: 'Lanco Hills, Hyderabad',
    type: 'Corporate Commercial Interior Architecture & Experience Centre',
    area: '8,500 Sq.Ft. Corporate Office',
    category: 'Commercial Offices',
    featured: true,
    image: '/projects/arka-office/watermarked/arka_01.png',
    client: 'Team 4 Arka Developers',
    year: '2026',
    description:
      'A high-impact corporate interior architecture and experience centre fitout for Team 4 Arka at Lanco Hills, Hyderabad. Designed to reflect progressive corporate elegance, featuring an Italian marble reception lobby with backlit branding, an illuminated architectural scale-model experience plinth, acoustic fluted timber cladding, industrial glass-partitioned executive office cabins, an executive breakout lounge, and an in-office employee family daycare and activity crèche.',
    specs: [
      '8,500 Sq.Ft. Corporate Office & Experience Centre at Lanco Hills, Hyderabad',
      'Grand Italian Marble Reception Counter with Backlit ARKA Corporate Brand Feature Wall',
      'Custom Circular Marble Scale-Model Display Plinth with Recessed Dome Lighting',
      'Acoustic Fluted Natural Timber Wall Paneling & Architectural Linear LED Track Profiles',
      'Executive Cabin Suites with Black Metal Framed Acoustic Glass Partitions',
      'Casual Breakout Lounge with Modular Geometric Bookcase & Soft Seating Clusters',
      'Progressive In-Office Kids Activity Zone & Employee Daycare Crèche Suite',
      'Complete Turnkey Corporate Design Presentation & 3D Architectural Fitout Scheme'
    ],
    beforeAfter: [
      {
        id: 'reception-angles',
        roomName: 'Grand Corporate Reception & Lounge',
        floor: 'Main Entrance Lobby',
        description: 'Frontal elevation of the flagship reception desk vs three-quarter perspective highlighting fluted acoustic timber walls and sculpture pedestals.',
        beforeImage: '/projects/arka-office/watermarked/arka_01.png',
        afterImage: '/projects/arka-office/watermarked/arka_02.png',
        beforeLabel: 'Frontal Elevation',
        afterLabel: 'Angle Perspective'
      },
      {
        id: 'experience-crèche',
        roomName: 'Experience Plinth & In-Office Crèche Zone',
        floor: 'Experience Centre',
        description: 'Illuminated scale model display plinth vs glazed corridor leading into the employee daycare crèche zone.',
        beforeImage: '/projects/arka-office/watermarked/arka_03.png',
        afterImage: '/projects/arka-office/watermarked/arka_04.png',
        beforeLabel: 'Experience Plinth',
        afterLabel: 'Daycare Crèche Zone'
      }
    ],
    gallery: [
      '/projects/arka-office/watermarked/arka_01.png',
      '/projects/arka-office/watermarked/arka_02.png',
      '/projects/arka-office/watermarked/arka_03.png',
      '/projects/arka-office/watermarked/arka_04.png'
    ]
  }
];

// Archived / Hidden Projects
export const allArchivedProjects: ProjectItem[] = [
  {
    id: 5,
    slug: 'jayabheri-temple-tree-villa-16',
    name: 'Jayabheri Temple Tree - Villa 16',
    location: 'Kokapet / Narsingi, Hyderabad',
    type: 'Turnkey Luxury Triplex Villa Interior Architecture & Fitout',
    area: '6,800 Sq.Ft. Triplex Villa',
    category: 'Villas',
    featured: true,
    image: '/projects/temple-tree-villa-16/watermarked/villa16_02.jpg',
    client: 'Temple Tree Residence - Villa 16',
    year: '2026',
    description:
      'Palatial 6,800 Sq.Ft luxury triplex villa at Jayabheri Temple Tree, Narsingi / Kokapet corridor. Features an entrance foyer with vertical biophilic moss wall, expansive double-height living lounge, party bar lounge, gourmet kitchen with island counter, formal dining room, and custom teakwood pooja sanctum.',
    specs: [
      '6,800 Sq.Ft. Luxury Triplex Villa in Jayabheri Temple Tree, Kokapet / Narsingi',
      'Grand Double-Height Living Lounge with Italian Marble Flooring & Custom Joinery',
      'Formal Drawing Room with Biophilic Moss Accent Wall & Fluted Timber Paneling',
      'Private Entertainment Bar Lounge with Quartz Island & High-Gloss Cabinetry',
      'Upper Floor Gourmet Chef Kitchen with Breakfast Bar & Built-in German Appliances',
      'Palatial 8-Seater Formal Dining Room Overlooking Landscaped Courtyard',
      'Sacred Pooja Sanctum with CNC Teakwood Jali & Traditional Spiritual Brass Fixtures',
      'Includes 2 Complete Architectural Floor Layout Plans (Lower & Upper Ground Floors)'
    ],
    floorPlans: [
      {
        floor: 'Lower Ground Floor',
        title: 'Lower Ground Floor Furniture Layout Plan (Page 02)',
        image: '/projects/temple-tree-villa-16/pages/page_02.jpg',
        description: 'Complete lower-level architectural blueprint featuring Entrance Lobby (15\'4" x 15\'4"), Formal Drawing Room (12\'7" x 7\'6"), Main Living Lounge (18\'5" x 16\'8"), Bar and Party Area (18\'5" x 14\'9"), Powder WC, Passenger Lift, Dual Servant Quarters (11\'9" x 8\'4" & 10\'5" x 12\'6"), and Covered Parking.'
      },
      {
        floor: 'Upper Ground Floor',
        title: 'Upper Ground Floor Furniture Layout Plan (Page 11)',
        image: '/projects/temple-tree-villa-16/pages/page_11.jpg',
        description: 'Upper-level family living blueprint comprising Private Lift Vestibule, Chef\'s Modular Kitchen with Island Breakfast Counter, Palatial Formal Dining Lounge, Sacred Pooja Sanctum, Family Living Lounge, and Wrap-around Balcony Terraces.'
      }
    ],
    beforeAfter: [
      {
        id: 'drawing-plan-vs-design',
        roomName: 'Drawing Room & Entrance (12\'7" x 7\'6")',
        floor: 'Lower Ground Floor',
        description: 'Lower ground floor layout blueprint (Page 02) compared to the executed drawing room 3D design (Page 04) featuring biophilic vertical moss paneling and fluted timber acoustic cladding.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_02.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_04.jpg',
        beforeLabel: 'BEFORE: Lower Floor Layout Plan (Page 02)',
        afterLabel: 'AFTER: Drawing Room 3D Design (Page 04)'
      },
      {
        id: 'living-plan-vs-design',
        roomName: 'Lower Ground Living Lounge (18\'5" x 16\'8")',
        floor: 'Lower Ground Floor',
        description: 'Architectural blueprint (Page 02) translated into a grand Italian marble double-height living lounge (Page 05) with bespoke low-profile sectional sofas and designer coffee tables.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_02.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_05.jpg',
        beforeLabel: 'BEFORE: Lower Floor Layout Plan (Page 02)',
        afterLabel: 'AFTER: Living Lounge 3D Design (Page 05)'
      },
      {
        id: 'bar-plan-vs-design',
        roomName: 'Private Bar & Party Lounge (18\'5" x 14\'9")',
        floor: 'Lower Ground Floor',
        description: 'Blueprint bar partition layout (Page 02) versus finished luxury entertainment lounge (Page 09) featuring quartz bar island, glass stemware cabinetry, and ambient perimeter wash.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_02.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_09.jpg',
        beforeLabel: 'BEFORE: Lower Floor Layout Plan (Page 02)',
        afterLabel: 'AFTER: Bar Lounge 3D Design (Page 09)'
      },
      {
        id: 'kitchen-plan-vs-design',
        roomName: 'Chef\'s Modular Kitchen & Breakfast Counter',
        floor: 'Upper Ground Floor',
        description: 'Upper ground floor architectural layout plan (Page 11) compared to the modern German modular kitchen (Page 14) with handleless cabinetry and quartz preparation counter.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_11.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_14.jpg',
        beforeLabel: 'BEFORE: Upper Floor Layout Plan (Page 11)',
        afterLabel: 'AFTER: Modular Kitchen 3D Design (Page 14)'
      },
      {
        id: 'dining-plan-vs-design',
        roomName: 'Palatial Formal Dining Lounge',
        floor: 'Upper Ground Floor',
        description: 'Upper floor dining area blueprint (Page 11) versus finished 8-seater dining hall (Page 15) with crystal chandelier and garden courtyard glazing.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_11.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_15.jpg',
        beforeLabel: 'BEFORE: Upper Floor Layout Plan (Page 11)',
        afterLabel: 'AFTER: Fine Dining 3D Design (Page 15)'
      },
      {
        id: 'family-plan-vs-design',
        roomName: 'Upper Level Family Living Lounge',
        floor: 'Upper Ground Floor',
        description: 'Upper floor living suite blueprint (Page 11) translated into a tranquil private family entertainment lounge (Page 18) with plush velvet upholstery and warm mood lighting.',
        beforeImage: '/projects/temple-tree-villa-16/pages/page_11.jpg',
        afterImage: '/projects/temple-tree-villa-16/pages/page_18.jpg',
        beforeLabel: 'BEFORE: Upper Floor Layout Plan (Page 11)',
        afterLabel: 'AFTER: Family Lounge 3D Design (Page 18)'
      }
    ],
    gallery: [
      '/projects/temple-tree-villa-16/watermarked/villa16_01.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_02.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_03.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_04.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_05.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_06.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_07.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_08.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_09.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_10.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_11.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_12.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_13.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_14.jpg',
      '/projects/temple-tree-villa-16/watermarked/villa16_15.jpg'
    ]
  },
  {
    id: 7,
    slug: 'anjani-infra-branch-showroom-narsingi',
    name: 'Anjani Infra Experience Showroom',
    location: 'Narsingi, Hyderabad',
    type: 'Flagship Commercial Retail Showroom & Materials Experience Centre',
    area: '4,000 Sq.Ft. Commercial Showroom',
    category: 'Retail & Shops',
    featured: true,
    image: '/anjani-branch-showroom.jpg',
    client: 'Anjani Infra Projects',
    year: '2026',
    description:
      'Flagship commercial interior showroom and materials experience centre located in Narsingi, Hyderabad. Features full-scale German modular kitchen mockups, premium imported marble galleries, motorized wardrobe demonstration displays, and private architectural consultation suites.',
    specs: [
      '4,000 Sq.Ft. Luxury Interior Architecture & Materials Experience Showroom',
      'Live Functional Modular Kitchen Joinery Mockups with German Hardware',
      'Full-Height Bronze Glass Sliding Wardrobes & Lighting Automation Suites',
      'Imported Italian Statuario Marble & Sintered Stone Surfaces Display Library',
      'Private Architect & Client Design Consultation Lounges with 3D Visualizer'
    ],
    gallery: [
      '/anjani-branch-showroom.jpg',
      '/corporate-workplace-interior.jpg',
      '/customized-home-kitchen.jpg'
    ]
  }
];
