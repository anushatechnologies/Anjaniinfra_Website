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
    image: '/projects/one-oak/pages/page_04.jpg',
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
    category: 'Villas',
    featured: true,
    image: '/projects/northstar-allura/pages/page_39.jpg',
    client: 'Private Villa Client',
    year: '2026',
    description: 'Bespoke 6,500 Sq.Ft luxury triplex villa in Kokapet, Hyderabad. Features a formal double-height living room with marble TV console, 8-seater luxury dining space, gourmet chef kitchen with wet kitchen utility, private home cinema with acoustic fabric paneling, master bedroom with fluted louvers, and open terrace garden.',
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
  },
  {
    id: 5,
    slug: 'jayabheri-temple-tree-villa-16',
    name: 'Jayabheri Temple Tree - Villa 16',
    location: 'Kokapet / Narsingi, Hyderabad',
    type: 'Turnkey Luxury Triplex Villa Interior Architecture & Fitout',
    area: '6,800 Sq.Ft. Triplex Villa',
    category: 'Villas',
    featured: true,
    image: '/projects/temple-tree-villa-16/pages/page_05.jpg',
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
      '/projects/temple-tree-villa-16/pages/page_01.jpg',
      '/projects/temple-tree-villa-16/pages/page_02.jpg',
      '/projects/temple-tree-villa-16/pages/page_03.jpg',
      '/projects/temple-tree-villa-16/pages/page_04.jpg',
      '/projects/temple-tree-villa-16/pages/page_05.jpg',
      '/projects/temple-tree-villa-16/pages/page_06.jpg',
      '/projects/temple-tree-villa-16/pages/page_07.jpg',
      '/projects/temple-tree-villa-16/pages/page_08.jpg',
      '/projects/temple-tree-villa-16/pages/page_09.jpg',
      '/projects/temple-tree-villa-16/pages/page_10.jpg',
      '/projects/temple-tree-villa-16/pages/page_11.jpg',
      '/projects/temple-tree-villa-16/pages/page_12.jpg',
      '/projects/temple-tree-villa-16/pages/page_13.jpg',
      '/projects/temple-tree-villa-16/pages/page_14.jpg',
      '/projects/temple-tree-villa-16/pages/page_15.jpg',
      '/projects/temple-tree-villa-16/pages/page_16.jpg',
      '/projects/temple-tree-villa-16/pages/page_17.jpg',
      '/projects/temple-tree-villa-16/pages/page_18.jpg'
    ]
  }
];
