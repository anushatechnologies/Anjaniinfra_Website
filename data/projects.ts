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
    category: 'Interior Architecture',
    featured: true,
    image: '/projects/one-oak/pages/page_01.jpg',
    client: 'Ar. Rajesh Verma / Studio Design',
    year: '2026',
    description: 'A 42-page turnkey architectural interior design presentation for the ultra-luxury duplex penthouse at One Oak, Gandipet, Hyderabad. Features a grand double-height formal drawing room, open dining lounge with panoramic Gandipet lake views, chef-grade modular kitchen, mezzanine study reading nook, and bespoke private suites designed by Ar. Rajesh Verma.',
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
      '/projects/one-oak/pages/page_01.jpg',
      '/projects/one-oak/pages/page_02.jpg',
      '/projects/one-oak/pages/page_03.jpg',
      '/projects/one-oak/pages/page_04.jpg',
      '/projects/one-oak/pages/page_05.jpg',
      '/projects/one-oak/pages/page_06.jpg',
      '/projects/one-oak/pages/page_07.jpg',
      '/projects/one-oak/pages/page_08.jpg',
      '/projects/one-oak/pages/page_09.jpg',
      '/projects/one-oak/pages/page_10.jpg',
      '/projects/one-oak/pages/page_11.jpg',
      '/projects/one-oak/pages/page_12.jpg',
      '/projects/one-oak/pages/page_13.jpg',
      '/projects/one-oak/pages/page_14.jpg',
      '/projects/one-oak/pages/page_15.jpg',
      '/projects/one-oak/pages/page_16.jpg',
      '/projects/one-oak/pages/page_17.jpg',
      '/projects/one-oak/pages/page_18.jpg',
      '/projects/one-oak/pages/page_19.jpg',
      '/projects/one-oak/pages/page_20.jpg',
      '/projects/one-oak/pages/page_21.jpg',
      '/projects/one-oak/pages/page_22.jpg',
      '/projects/one-oak/pages/page_23.jpg',
      '/projects/one-oak/pages/page_24.jpg',
      '/projects/one-oak/pages/page_25.jpg',
      '/projects/one-oak/pages/page_26.jpg',
      '/projects/one-oak/pages/page_27.jpg',
      '/projects/one-oak/pages/page_28.jpg',
      '/projects/one-oak/pages/page_29.jpg',
      '/projects/one-oak/pages/page_30.jpg',
      '/projects/one-oak/pages/page_31.jpg',
      '/projects/one-oak/pages/page_32.jpg',
      '/projects/one-oak/pages/page_33.jpg',
      '/projects/one-oak/pages/page_34.jpg',
      '/projects/one-oak/pages/page_35.jpg',
      '/projects/one-oak/pages/page_36.jpg',
      '/projects/one-oak/pages/page_37.jpg',
      '/projects/one-oak/pages/page_38.jpg',
      '/projects/one-oak/pages/page_39.jpg',
      '/projects/one-oak/pages/page_40.jpg',
      '/projects/one-oak/pages/page_41.jpg',
      '/projects/one-oak/pages/page_42.jpg'
    ]
  },
  {
    id: 2,
    slug: 'northstar-allura-kokapet',
    name: 'Northstar Allura - Luxury Villa',
    location: 'Kokapet, Hyderabad',
    type: 'Turnkey Luxury Villa Interior Fitout & Architectural Design',
    area: '6,500 Sq.Ft. Triplex Villa',
    category: 'Interior Architecture',
    featured: true,
    image: '/projects/northstar-allura/pages/page_03.jpg',
    client: 'Private Villa Client',
    year: '2026',
    description: 'A 62-page turnkey architectural interior design presentation for a bespoke luxury triplex villa at Northstar Allura, Kokapet, Hyderabad. Spanning modular chef kitchen with wet kitchen, ground floor guest suite, vibrant children bedroom, opulent master bedroom suite with fluted louvers, second-floor guest suite, sanctified puja unit, 8-seater luxury dining space, double-height formal living room with decorative metal partition options, private home theatre with acoustic fabric paneling, first & second floor family lounges, and open terrace garden.',
    specs: [
      '6,500 Sq.Ft. Triplex Luxury Villa across Ground, 1st, 2nd Floors & Terrace',
      'Modular Open Kitchen with Quartz Waterfall Island & Wet Kitchen Utility',
      'Double-Height Formal Living Room with Custom CNC Jaali Screen Partitions',
      'Acoustically Engineered Private Home Cinema with Tiered Recliner Seating',
      'Master Suite with Fluted Timber Acoustic Headboard & Walk-in Dressing Area',
      'Traditional Puja Mandir Unit with Laser-Cut Jaali Backdrop & Marble Console',
      'Upper Level Family Lounges & Open Wooden Decked Terrace Garden',
      'Complete 62-Page Presentation Portfolio by Anjani Infra'
    ],
    beforeAfter: [
      {
        id: 'kitchen-render',
        roomName: 'Modular Kitchen & Island Breakfast Bar',
        floor: 'Ground Floor',
        description: 'Ground Floor modular kitchen presentation showing white acrylic cabinetry, quartz waterfall island with bar stools, integrated appliance towers, and backlit pantry display.',
        beforeImage: '/projects/northstar-allura/pages/page_02.jpg',
        afterImage: '/projects/northstar-allura/pages/page_03.jpg',
        beforeLabel: 'BEFORE: Kitchen Title Slide (Page 02)',
        afterLabel: 'AFTER: Modular Kitchen 3D Render (Page 03)'
      },
      {
        id: 'gf-bedroom-render',
        roomName: 'Ground Floor Bedroom Suite',
        floor: 'Ground Floor',
        description: 'Sophisticated ground floor guest bedroom featuring upholstered headboard, acoustic wall slats, bedside pendants, and integrated wardrobe dressing area.',
        beforeImage: '/projects/northstar-allura/pages/page_08.jpg',
        afterImage: '/projects/northstar-allura/pages/page_09.jpg',
        beforeLabel: 'BEFORE: GF Bedroom Slide (Page 08)',
        afterLabel: 'AFTER: GF Bedroom 3D Render (Page 09)'
      },
      {
        id: 'children-bedroom-render',
        roomName: 'Children Bedroom Suite',
        floor: '1st Floor',
        description: 'Vibrant children room with custom playful headboard, ergonomic study workstation with overhead bookshelves, and window bay seating.',
        beforeImage: '/projects/northstar-allura/pages/page_12.jpg',
        afterImage: '/projects/northstar-allura/pages/page_13.jpg',
        beforeLabel: 'BEFORE: Children Room Slide (Page 12)',
        afterLabel: 'AFTER: Children Room 3D Render (Page 13)'
      },
      {
        id: 'master-bedroom-render',
        roomName: 'Master Bedroom Suite',
        floor: '1st Floor',
        description: 'Grand master sanctuary with fluted timber acoustic wall cladding, king bed, ambient cove illumination, and glass-door walk-in wardrobe.',
        beforeImage: '/projects/northstar-allura/pages/page_19.jpg',
        afterImage: '/projects/northstar-allura/pages/page_20.jpg',
        beforeLabel: 'BEFORE: Master Suite Slide (Page 19)',
        afterLabel: 'AFTER: Master Suite 3D Render (Page 20)'
      },
      {
        id: 'puja-render',
        roomName: 'Puja Sanctum Unit',
        floor: 'Ground Floor',
        description: 'Spiritual puja sanctum blending traditional spirituality and modern minimalism with CNC laser-cut brass-toned jaali and Italian marble altar console.',
        beforeImage: '/projects/northstar-allura/pages/page_30.jpg',
        afterImage: '/projects/northstar-allura/pages/page_31.jpg',
        beforeLabel: 'BEFORE: Puja Unit Slide (Page 30)',
        afterLabel: 'AFTER: Puja Mandir 3D Render (Page 31)'
      },
      {
        id: 'dining-render',
        roomName: 'Luxury 8-Seater Dining Space',
        floor: 'Ground Floor',
        description: 'Opulent dining volume featuring Italian Statuario marble dining table for 8, architectural ring chandelier, and designer glassware console.',
        beforeImage: '/projects/northstar-allura/pages/page_33.jpg',
        afterImage: '/projects/northstar-allura/pages/page_34.jpg',
        beforeLabel: 'BEFORE: Dining Room Slide (Page 33)',
        afterLabel: 'AFTER: Luxury Dining 3D Render (Page 34)'
      },
      {
        id: 'living-render',
        roomName: 'Ground Floor Formal Living Room',
        floor: 'Ground Floor',
        description: 'Double-volume formal living salon with plush leather sectional seating, marble TV backdrop, and floor-to-ceiling glass connections.',
        beforeImage: '/projects/northstar-allura/pages/page_38.jpg',
        afterImage: '/projects/northstar-allura/pages/page_39.jpg',
        beforeLabel: 'BEFORE: Living Room Slide (Page 38)',
        afterLabel: 'AFTER: Formal Living 3D Render (Page 39)'
      },
      {
        id: 'partition-render',
        roomName: 'Living Room Partition Screen Options',
        floor: 'Ground Floor',
        description: 'Architectural space divider options between the formal reception and dining lounge, comparing metal fluted screen vs geometric jaali motif.',
        beforeImage: '/projects/northstar-allura/pages/page_42.jpg',
        afterImage: '/projects/northstar-allura/pages/page_43.jpg',
        beforeLabel: 'Option A: Fluted Screen (Page 42)',
        afterLabel: 'Option B: Geometric Jaali (Page 43)'
      },
      {
        id: 'theatre-render',
        roomName: 'Private Home Cinema Lounge',
        floor: '2nd Floor',
        description: 'Acoustically isolated private cinema featuring tiered motorised leather recliner seating, starlight fibre-optic ceiling, and 4K projection wall.',
        beforeImage: '/projects/northstar-allura/pages/page_49.jpg',
        afterImage: '/projects/northstar-allura/pages/page_50.jpg',
        beforeLabel: 'BEFORE: Home Theatre Slide (Page 49)',
        afterLabel: 'AFTER: Home Theatre 3D Render (Page 50)'
      },
      {
        id: 'terrace-render',
        roomName: 'Terrace Garden & Pergola Lounge',
        floor: 'Terrace',
        description: 'Open-air wooden decked terrace garden with designer outdoor pergola, weather-proof lounge furniture, and vertical planter greenery.',
        beforeImage: '/projects/northstar-allura/pages/page_59.jpg',
        afterImage: '/projects/northstar-allura/pages/page_60.jpg',
        beforeLabel: 'BEFORE: Terrace Slide (Page 59)',
        afterLabel: 'AFTER: Terrace Garden 3D Render (Page 60)'
      }
    ],
    gallery: [
      '/projects/northstar-allura/pages/page_01.jpg',
      '/projects/northstar-allura/pages/page_02.jpg',
      '/projects/northstar-allura/pages/page_03.jpg',
      '/projects/northstar-allura/pages/page_04.jpg',
      '/projects/northstar-allura/pages/page_05.jpg',
      '/projects/northstar-allura/pages/page_06.jpg',
      '/projects/northstar-allura/pages/page_07.jpg',
      '/projects/northstar-allura/pages/page_08.jpg',
      '/projects/northstar-allura/pages/page_09.jpg',
      '/projects/northstar-allura/pages/page_10.jpg',
      '/projects/northstar-allura/pages/page_11.jpg',
      '/projects/northstar-allura/pages/page_12.jpg',
      '/projects/northstar-allura/pages/page_13.jpg',
      '/projects/northstar-allura/pages/page_14.jpg',
      '/projects/northstar-allura/pages/page_15.jpg',
      '/projects/northstar-allura/pages/page_16.jpg',
      '/projects/northstar-allura/pages/page_17.jpg',
      '/projects/northstar-allura/pages/page_18.jpg',
      '/projects/northstar-allura/pages/page_19.jpg',
      '/projects/northstar-allura/pages/page_20.jpg',
      '/projects/northstar-allura/pages/page_21.jpg',
      '/projects/northstar-allura/pages/page_22.jpg',
      '/projects/northstar-allura/pages/page_23.jpg',
      '/projects/northstar-allura/pages/page_24.jpg',
      '/projects/northstar-allura/pages/page_25.jpg',
      '/projects/northstar-allura/pages/page_26.jpg',
      '/projects/northstar-allura/pages/page_27.jpg',
      '/projects/northstar-allura/pages/page_28.jpg',
      '/projects/northstar-allura/pages/page_29.jpg',
      '/projects/northstar-allura/pages/page_30.jpg',
      '/projects/northstar-allura/pages/page_31.jpg',
      '/projects/northstar-allura/pages/page_32.jpg',
      '/projects/northstar-allura/pages/page_33.jpg',
      '/projects/northstar-allura/pages/page_34.jpg',
      '/projects/northstar-allura/pages/page_35.jpg',
      '/projects/northstar-allura/pages/page_36.jpg',
      '/projects/northstar-allura/pages/page_37.jpg',
      '/projects/northstar-allura/pages/page_38.jpg',
      '/projects/northstar-allura/pages/page_39.jpg',
      '/projects/northstar-allura/pages/page_40.jpg',
      '/projects/northstar-allura/pages/page_41.jpg',
      '/projects/northstar-allura/pages/page_42.jpg',
      '/projects/northstar-allura/pages/page_43.jpg',
      '/projects/northstar-allura/pages/page_44.jpg',
      '/projects/northstar-allura/pages/page_45.jpg',
      '/projects/northstar-allura/pages/page_46.jpg',
      '/projects/northstar-allura/pages/page_47.jpg',
      '/projects/northstar-allura/pages/page_48.jpg',
      '/projects/northstar-allura/pages/page_49.jpg',
      '/projects/northstar-allura/pages/page_50.jpg',
      '/projects/northstar-allura/pages/page_51.jpg',
      '/projects/northstar-allura/pages/page_52.jpg',
      '/projects/northstar-allura/pages/page_53.jpg',
      '/projects/northstar-allura/pages/page_54.jpg',
      '/projects/northstar-allura/pages/page_55.jpg',
      '/projects/northstar-allura/pages/page_56.jpg',
      '/projects/northstar-allura/pages/page_57.jpg',
      '/projects/northstar-allura/pages/page_58.jpg',
      '/projects/northstar-allura/pages/page_59.jpg',
      '/projects/northstar-allura/pages/page_60.jpg',
      '/projects/northstar-allura/pages/page_61.jpg',
      '/projects/northstar-allura/pages/page_62.jpg'
    ]
  }
];
