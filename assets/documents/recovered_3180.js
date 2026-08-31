import json

with open(r'C:\Users\lucy_\PycharmProjects\PythonProject1\AGV.py', 'r', encoding='utf-8') as f:
    agv_py_raw = f.read().strip()

with open(r'C:\Users\lucy_\PycharmProjects\PythonProject1\Room Mapping.py', 'r', encoding='utf-8') as f:
    room_py_raw = f.read().strip()

full_js_content = """/**
 * LUCY ROBINSON — PORTFOLIO DATA
 * 
 * Written in a genuine, personal, human voice.
 * Mechanical Engineering (MEng) Student @ University of Sheffield
 * Passionate about themed entertainment ride systems, physical mechanisms & CAD.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Lucy Robinson",
    title: "Mechanical Engineering Student (MEng) • Theme Park Ride & Transit Enthusiast",
    university: "University of Sheffield (MEng Mechanical Engineering)",
    status: "1st Class Honours (Y1 & Y2) • Placement Year 2025/26",
    location: "Sheffield / London, UK",
    email: "lucyrobinson0605@gmail.com",
    linkedin: "https://www.linkedin.com/in/lucy-robinson-mechanical/",
    github: "https://github.com/lucy-robinson",
    heroSpotlight: {
      itemId: "reaching-aid-cad",
      customBadge: "FEATURED CAD DRAWING SET",
      customMeta: "BS 8888 / GD&T"
    },
    heroTagline: "Designing the physical mechanisms, bogie articulations, and motion kinematics that make themed rides and transit vehicles thrilling, accessible, and safe.",
    
    elevatorPitch: "Hi, I'm Lucy! I'm a 2nd year Mechanical Engineering student at the University of Sheffield. I have a lifelong fascination with how complex mechanical systems move — from rollercoaster wheel bogies and track switches to pneumatic door dampening on the London Underground. When I'm not in CAD or running kinematic simulations, you'll probably find me at a theme park analysing track profiling or visiting heritage railways.",

    stats: [
      { value: "1st Class", label: "Year 1 & 2 Average" },
      { value: "4+", label: "Physical & CAD Builds" },
      { value: "100+", label: "Coaster Credits Studied" },
      { value: "BS 8888", label: "GD&T Drawing Standards" }
    ],

    workbenchLive: {
      currentBuild: "Voltron-Style Elevator Turntable Track Switch (Turntable Master.SLDASM)",
      status: "3D printing slew ring gear segment and testing 5:1 mesh with tapered shot-pin indexing.",
      currentSoftware: "SolidWorks (Turntable Master.SLDASM) & Python S-Curve Motion Solver",
      nextMilestone: "Machining the dual central spindle pins and validating vertical Z-axis drop clearance."
    },

    coasterLog: {
      headline: "Coaster Credits & Track Engineering Log",
      stats: [
        { value: "100+", label: "Verified Credits" },
        { value: "35+", label: "Parks Visited" },
        { value: "12", label: "Track Types Analysed" }
      ],
      highlights: [
        "Hyperia (Thorpe Park) — Mack Rides Hyper Coaster track profiling & outerbank transitions",
        "Voltron Nevera (Europa-Park) — Stryker Coaster multi-launch & turntable switch mechanisms",
        "Nemesis Reborn (Alton Towers) — B&M Inverted box-spine track fabrication & wheel bogie dynamics",
        "Ride to Happiness (Plopsaland) — Mack Xtreme Spinning Coaster controlled rotation kinematics"
      ]
    }
  },

  personalStory: {
    heroQuote: "I don't just want to ride attractions — I want to understand every single bolt, pivot joint, and kinematic equation that makes them move.",
    bioParagraph1: "My passion for engineering didn't start in a lecture theatre. It started the first time I stood underneath the massive tubular steel supports of a rollercoaster and looked up at how the wheel assemblies negotiate three-dimensional track curves. Where other people see adrenaline, I see a triumph of mechanical engineering: multi-body dynamics, kinematic articulation, structural fatigue analysis, and safety-critical fail-safe design.",
    bioParagraph2: "At the University of Sheffield, I've channeled that obsession into practical mechanical engineering. I've designed and modelled 4-pod swerve drive AGVs from scratch, calculated bearing lifecycles under extreme cyclic G-forces for rollercoaster wheel bogies, and engineered complete manufacturing drawing packs with rigorous BS 8888 geometric tolerancing.",
    bioParagraph3: "Currently on my placement year with Transport for London (TfL DLR) in Electrical & Mechanical (E&M) Building Services, I work on real station mechanical infrastructure, dynamic ventilation modeling with IESVE, asset maintenance, passenger lifts, and statutory safety compliance. My goal is to build a career in themed entertainment engineering — combining my love of ride mechanics, structural analysis, and accessibility design.",
    principles: [
      {
        icon: "📐",
        title: "Rigorous by Default",
        desc: "Every CAD model I create is backed by first-principles hand calculations, free-body diagrams, and proper engineering drawings."
      },
      {
        icon: "🎢",
        title: "Kinematic Thinking",
        desc: "I think in terms of degrees of freedom, pivot knuckles, load paths, and how physical mechanisms interact in 3D space."
      },
      {
        icon: "♿",
        title: "Accessibility at the Core",
        desc: "Rides and transit systems should be accessible to everyone. I design with universal ergonomics and step-free access from Day 1."
      },
      {
        icon: "🔧",
        title: "Hands-On & Curious",
        desc: "CAD is only the beginning. I love 3D printing mechanisms, testing physical prototypes, and learning from mechanical failures."
      }
    ]
  },

  skills: {
    cadAndModeling: [
      { name: "SolidWorks (3D CAD, Weldments & Assemblies)", level: "Advanced", icon: "📐" },
      { name: "Autodesk Fusion 360 (Parametric Design)", level: "Advanced", icon: "💻" },
      { name: "BS 8888 & ASME Y14.5 (GD&T Drawing Packs)", level: "Proficient", icon: "📋" },
      { name: "Kinematic Motion Analysis (SolidWorks Motion)", level: "Proficient", icon: "⚙️" },
      { name: "Drafting & Tolerance Stack-up Analysis", level: "Proficient", icon: "📏" }
    ],
    analysisAndMath: [
      { name: "Python (NumPy, Matplotlib, Kinematic Solvers)", level: "Proficient", icon: "🐍" },
      { name: "MATLAB & Simulink (Dynamic Modeling)", level: "Proficient", icon: "📊" },
      { name: "FEA Stress & Deflection (SolidWorks Simulation)", level: "Intermediate", icon: "🔬" },
      { name: "IESVE (Dynamic Building Thermal & Ventilation Simulation)", level: "Proficient", icon: "🏢" },
      { name: "First-Principles Hand Calcs (Shear, Bending, Fatigue)", level: "Advanced", icon: "✏️" },
      { name: "Bearing Selection & ISO 281 L10 Lifecycles", level: "Proficient", icon: "🔄" }
    ],
    prototypingAndFab: [
      { name: "FDM 3D Printing (PETG, PLA, Multi-Part Assemblies)", level: "Advanced", icon: "🖨️" },
      { name: "Laser Cutting & Acrylic/MDF Prototyping", level: "Proficient", icon: "⚡" },
      { name: "Bench Assembly, Fasteners & Bearing Pressing", level: "Proficient", icon: "🔧" },
      { name: "Physical Mechanism Testing & Validation", level: "Advanced", icon: "🧪" }
    ],
    rideAndTransit: [
      { name: "Rollercoaster Bogie Kinematics (Road/Guide/Upstop)", level: "Passionate Specialist", icon: "🎢" },
      { name: "Omnidirectional Swerve & Steer-Drive Kinematics", level: "Advanced", icon: "🏎️" },
      { name: "Block Zone Control & Fail-Safe Mechanical Logic", level: "Proficient", icon: "🚦" },
      { name: "E&M Building Services & Station Mechanical Infrastructure", level: "Proficient", icon: "🚇" },
      { name: "ASTM F24 & EN 13814 Ride Safety Standards", level: "Studied & Applied", icon: "📜" }
    ]
  },

  experience: [
    {
      role: "Electrical & Mechanical (E&M) Building Services Engineering Intern",
      company: "Transport for London (Docklands Light Railway)",
      period: "2025 - Present (Placement Year)",
      location: "London, UK",
      type: "Placement",
      highlights: [
        "Working in E&M Building Services on station mechanical infrastructure, dynamic ventilation modeling with IESVE, asset maintenance, passenger lifts, and statutory safety compliance.",
        "Gaining direct industry experience in public transit safety assurance, asset management, and preventative maintenance engineering."
      ]
    },
    {
      role: "Sheffield Engineering Leadership Academy (SELSA)",
      company: "University of Sheffield",
      period: "2024 - Present",
      location: "Sheffield, UK",
      type: "Leadership Cohort",
      highlights: [
        "Selected for competitive engineering leadership development program.",
        "Leading collaborative industry-linked projects, developing cross-disciplinary teamwork and project management skills."
      ]
    },
    {
      role: "National Young Ambassador",
      company: "Ambitious about Autism",
      period: "2022 - Present",
      location: "UK (National)",
      type: "Volunteering & Advocacy",
      highlights: [
        "Advocating for neurodiversity inclusion in STEM education and the engineering industry.",
        "Speaking at national panels and collaborating on policy recommendations for accessible education and workplace support."
      ]
    }
  ],

  education: [
    {
      degree: "MEng Mechanical Engineering",
      institution: "University of Sheffield",
      period: "2023 - 2027 (Expected)",
      grade: "First Class Honours (Year 1 & Year 2)",
      relevantModules: [
        "Applied Mechanics & Kinematics",
        "Materials & Structural Design",
        "Fluid Dynamics & Thermodynamics",
        "Engineering Drawing & CAD (BS 8888)",
        "Control Systems & Mechatronics",
        "Mathematics for Mechanical Engineers"
      ]
    }
  ],

  featuredProjects: [
    {
      id: "reaching-aid-cad",
      title: "Assistive Mechanical Reaching & Mobility Tool",
      subtitle: "University of Sheffield Mechanical CAD Module • Complete 2D/3D Drawing Pack & GD&T Set (BS 8888)",
      category: "university-team",
      featured: true,
      badge: "BS 8888 Drawing Pack",
      timeline: "2024 - 2025 (University of Sheffield)",
      tools: ["Fusion 360 / SolidWorks", "BS 8888 Drawings", "GD&T Tolerancing", "Stress & Deflection Analysis", "DFM / DFA"],
      coverImage: "assets/images/real-cad/reaching_aid_assembly_drawing.png",
      cadGallery: [
        {
          url: "assets/images/real-cad/reaching_aid_assembly_drawing.png",
          title: "Complete Assistive Reaching Aid CAD Assembly Drawing",
          caption: "Detailed engineering drawing by Lucy Robinson showing multi-body assembly, internal trigger linkage, and dimensional specifications."
        },
        {
          url: "assets/images/real-cad/reaching_aid_gripper_part_drawing.png",
          title: "Precision Gripper Jaw Part Drawing",
          caption: "Manufacturing drawing specifying hole tolerances, wall thicknesses, and high-friction contact profile."
        },
        {
          url: "assets/images/real-cad/trigger_mechanism_drawing.png",
          title: "Trigger Actuation Mechanism Drawing",
          caption: "Ergonomic trigger geometry drawing with mechanical advantage linkage pin callouts."
        },
        {
          url: "assets/images/project-photos/9.jpg",
          title: "Physical Prototype Build & Jaw Grip Testing",
          caption: "Workshop prototype testing demonstrating 3.2:1 mechanical leverage and secure grip on varied object geometries."
        }
      ],
      summary: "Engineered an assistive mechanical reaching tool with complete manufacturing-grade CAD drawing packages (BS 8888 / ASME Y14.5). Features a 3.2:1 mechanical advantage internal linkage, cantilever beam bending stress verification, and full tolerance stack-ups.",
      keyMetrics: [
        { label: "Module", value: "Mechanical CAD & DFM" },
        { label: "CAD Package", value: "Complete 2D/3D Drawing Set" },
        { label: "Standard", value: "BS 8888 / ASME Y14.5" },
        { label: "Leverage Ratio", value: "3.2 : 1 Advantage" }
      ],
      article: {
        problemStatement: "Engineered a robust, lightweight mechanical reaching tool for users with reduced grip strength and limited vertical reach. The project required complete manufacturing-grade 2D/3D CAD drawing packages conforming strictly to BS 8888 / ASME Y14.5 standards, with full tolerance stack-up analysis, ergonomic linkage design, and structural deflection verification.",
        cadArchitecture: "Modelled in CAD (Fusion 360 / SolidWorks) with complete manufacturing-level drawing standards:\\n\\n• **Assembly Drawing:** Generated comprehensive multi-view assembly drawings detailing the relationship between trigger handle, aluminum extension tube, internal tension cable, and opposing jaw grippers.\\n• **Gripper Part Drawing:** Created detailed component drawings specifying tight tolerance fits, rib reinforcements, and high-friction contact pads.\\n• **Ergonomic Trigger Mechanism:** Designed an internal mechanical linkage providing a 3.2:1 mechanical leverage advantage for effortless single-handed actuation.",
        calcsAndSimulation: "• **Integrated Stress Analysis:** Calculated cantilever beam bending moments and deflection under a 2.0 kg tip load, verifying aluminum tube deflection remained under 1.5 mm.\\n• **Cable Tension Calculations:** Sized spring return preload and calculated mechanical advantage across the squeeze grip.\\n• **Reverse Engineering & Tolerance Analysis:** Documented complete mass properties and tolerance stack-ups across all subcomponents.",
        prototypingAndTesting: "• Prototyped and tested physical 3D printed components and evaluated stroke length and jaw grip stability across spherical and rectangular test objects.\\n• Authored formal BS 8888 / ASME Y14.5 engineering drawing package and technical evaluation report.",
        takeaways: "Demonstrated how rigorous engineering drawing standards (BS 8888), mechanical advantage linkages, and DFM principles come together to create functional, production-ready mechanisms."
      }
    },
    {
      id: "trackless-vehicle",
      title: "Omnidirectional Trackless Ride Vehicle (Swerve Chassis)",
      subtitle: "4-Pod Symmetrical Swerve Chassis with NumPy/Matplotlib Kinematic Engine & Spatial Trajectory Clearance",
      category: "themed-rides",
      featured: true,
      badge: "Flagship Build",
      timeline: "2025 - 2026",
      tools: ["SolidWorks", "Python Kinematics (NumPy/Matplotlib)", "4-Pod Swerve Architecture", "Trajectory Planning"],
      coverImage: "assets/images/extracted/image1.png",
      cadGallery: [
        {
          url: "assets/images/extracted/image1.png",
          title: "SolidWorks 3D CAD Assembly: Symmetrical 4-Pod Swerve Chassis",
          caption: "Complete 3D structural weldment frame featuring 4 modular independent steer-and-drive wheel pods [Lx = 0.525m, Ly = 0.575m, Rw = 0.060m] with under-floor low-CG battery packaging."
        },
        {
          url: "assets/images/extracted/image5.png",
          title: "Kinematic Motion Study & Steering Geometry Simulation",
          caption: "NumPy-verified kinematic benchmark executing pure yaw rotation (ω = 1.0 rad/s) with locked wheel angles: FL (+132.4°), FR (+47.6°), RL (-132.4°), RR (-47.6°)."
        },
        {
          url: "assets/images/solidworks-renders/trackless_chassis_cad.svg",
          title: "Spatial Showroom Trajectory & Clearance Plan",
          caption: "15m x 15m show room trajectory around 2.0m radius central column, executing -30° exit vector with 1.2m perpendicular offset for guaranteed collision-free motion."
        },
        {
          url: "assets/images/project-photos/1.jpg",
          title: "Physical Scale Test Chassis & Steer-Drive Assembly",
          caption: "Scale prototype chassis validating zero-radius pivot turn transitions, zero wheel scrub, and continuous 360° pod rotation clearance."
        }
      ],
      summary: "Engineered a 4-pod symmetrical swerve chassis trackless ride vehicle. Developed a custom NumPy coordinate transformation kinematic engine and simulated spatial clearance trajectories for collision-free dark ride navigation.",
      keyMetrics: [
        { label: "Chassis Layout", value: "4-Pod Swerve (Lx=0.525m, Ly=0.575m)" },
        { label: "Pure Spin Speed", value: "0.7786 m/s @ ω=1.0 rad/s (123.9 RPM)" },
        { label: "Wheel Geometry", value: "Rw = 0.080 m" },
        { label: "Showroom Bounds", value: "15m x 15m (2m Central Obstacle)" }
      ],
      article: {
        problemStatement: "Modern dark ride attractions (such as Rise of the Resistance and Ratatouille) demand omnidirectional trackless vehicles capable of translating along arbitrary vectors while simultaneously rotating to orient guest sightlines toward show scenes. The challenge was to architect a symmetrical 4-pod swerve chassis from scratch, formulate an exact mathematical inverse kinematics solver in Python to eliminate wheel scrub, and mathematically prove obstacle clearance within a constrained 15m x 15m themed showroom housing a 2.0m radius central column.",
        cadArchitecture: "Designed the vehicle in SolidWorks as a modular, rigid structural weldment chassis with exact spatial packaging:\\n\\n• **Symmetrical 4-Pod Swerve Architecture:** Configured four independent steer-and-drive wheel pods located at coordinates [$L_X = \\\\pm 0.525\\\\text{ m}, L_Y = \\\\pm 0.575\\\\text{ m}$] with $R_w = 0.080\\\\text{ m}$. Each pod integrates continuous 360° azimuth steering with co-axial planetary traction drive.\\n• **Low-Centre-of-Gravity Subframe:** Packaged the 48V power distribution bus, dual motor controllers, and optical/magnetic floor tracking sensors within the lower chassis plane (beneath the passenger deck) to minimize overturning moments during high-rate yaw transitions.\\n• **Slotted Belt-Tensioning Motor Mounts:** Integrated precision slotted adjustment brackets enabling quick belt tension calibration without disassembling the primary steering slip rings.",
        calcsAndSimulation: `• **Swerve Kinematics Engine (AGV.py):**
Below is my complete, identical Python script for calculating the 4-pod swerve kinematics, steering pod angles, motor RPM, and time-series forward-to-spin transition:

\\`\\`\\`python
__AGV_PY_CODE__
\\`\\`\\`

• **Showroom Spatial Collision Avoidance (Room Mapping.py):**
Below is my complete, identical Python script modeling the 15m x 15m themed showroom, black hole obstacle, orbital path, and vehicle clearance envelope:

\\`\\`\\`python
__ROOM_PY_CODE__
\\`\\`\\``,
        prototypingAndTesting: "• Built a physical scale test chassis using laser-cut acrylic and 3D printed PETG suspension parts.\\n• Verified that the steering pods had full 360° continuous rotation clearance without binding cables.\\n• Tested low-speed turning transitions to verify traction and prevent wheel scrub.",
        takeaways: "This project demonstrated the power of coupling Python mathematical kinematic models with 3D CAD packaging, ensuring all motor velocities, gear ratios, and steering angles are mathematically proven before physical fabrication."
      }
    },
    {
      id: "mine-train-bogie",
      title: "Mine Train Coaster Car & 6-Wheel Articulated Bogie",
      subtitle: "SolidWorks Vehicle Assembly, S355 FEA Stress Validation (4G/1.5G), ISO 281 L10 Fatigue Lifing & Anti-Rollback Pawl",
      category: "themed-rides",
      featured: true,
      badge: "FEA & Structural Validation",
      timeline: "2025 - 2026",
      tools: ["SolidWorks FEA (S355 Steel)", "ISO 281 L10 Fatigue", "ASTM F24 / EN 13814", "GD&T Drawing Packs"],
      coverImage: "assets/images/extracted/image2.png",
      cadGallery: [
        {
          url: "assets/images/extracted/image2.png",
          title: "SolidWorks Mine Train Car Assembly with 3-Wheel Cluster Bogies",
          caption: "Complete 3D vehicle assembly configured for 900 kg total vehicle mass (600 kg structural coach + 4 riders @ 75 kg) with stadium seating, T-bar lap restraints, and articulating bogies."
        },
        {
          url: "assets/images/extracted/image6.png",
          title: "SolidWorks FEA: 4G Vertical Valley Load Case (4,415 N)",
          caption: "S355 structural steel FEA showing 4,415 N upward load per axle; verified symmetrical load path at 0.077 MPa deflection with Factor of Safety vastly exceeding 5.0."
        },
        {
          url: "assets/images/solidworks-renders/bogie_drawing_gdt.svg",
          title: "SolidWorks FEA: 1.5G Lateral Cornering Load Case (3,311 N)",
          caption: "Lateral load FEA (3,311 N horizontal force) showing peak von Mises stress safely isolated at vertical pillars at 5.13 MPa (Dynamic FOS = 69)."
        },
        {
          url: "assets/images/project-photos/2.jpg",
          title: "Undercarriage Drive: Lift Chain Dog & Gravity Anti-Rollback Pawl",
          caption: "Detailed undercarriage assembly showing gravity-assisted anti-rollback ratchet dog and lift chain engagement dog for ASTM F24 fail-safe compliance."
        }
      ],
      summary: "Designed a 900 kg themed mine train coaster car with 4 articulating 6-wheel bogies. Validated structural integrity in SolidWorks FEA across 4G vertical and 1.5G lateral load cases, calculated ISO 281 L10 bearing fatigue life (12,512 operating hours), and integrated fail-safe anti-rollback dogs.",
      keyMetrics: [
        { label: "Vehicle Mass", value: "900 kg (600kg Coach + 4 Riders)" },
        { label: "FEA 4G Valley Load", value: "4,415 N (Deflection: 0.077 MPa, FOS > 5)" },
        { label: "FEA 1.5G Lateral Load", value: "3,311 N (Peak Stress: 5.13 MPa, FOS = 69)" },
        { label: "L10 Bearing Life", value: "1,792M Revs / 12,512 Hrs (~2.85 Yrs)" }
      ],
      article: {
        problemStatement: "Themed mine train roller coasters subject rolling stock to severe cyclic multi-axis forces: high-G vertical compressions through track valleys, lateral thrust through unbanked switchback curves, and negative-G airtime transitions. The design challenge was to architect a 900 kg total vehicle assembly (600 kg coach + 4 riders at 75 kg each) distributed across 4 independent 6-wheel cluster bogies, validate S355 structural steel stress distributions under extreme ASTM F24 / EN 13814 load cases, calculate ISO 281 L10 bearing fatigue longevity, and integrate pure mechanical fail-safe anti-rollback pawls.",
        cadArchitecture: "Modelled the vehicle in SolidWorks with complete multi-body structural rigor:\\n\\n• **Chassis & Wheel Bogie System:** Configured four independent 6-wheel cluster bogies (primary road wheels, spring-loaded side guide wheels, and captive upstop wheels) connected via dual-axis clevis knuckles allowing ±15° yaw and ±10° pitch articulation along tubular steel rails.\\n• **Themed Passenger Coach:** Tiered two-row stadium seating with individual ergonomic T-bar lap bar restraints, heavy tubular steel collision bumpers, and a central front hitch/clevis eye for drawbar train coupling.\\n• **Undercarriage Drive & Safety Pawls:** Modelled a heavy-duty forged lift chain catch dog and a gravity-assisted anti-rollback ratchet pawl designed to engage lift hill track ratchets within milliseconds upon power loss.",
        calcsAndSimulation: `• **SolidWorks FEA Structural Verification (S355 Structural Steel):**
1. **Load Case 1 (4G Vertical Valley Compression):** 
   - Applied force: $4,415\\\\text{ N}$ upward per load axle.
   - Result: Symmetrical load path verified with maximum true scale deflection of $0.077\\\\text{ MPa}$ equivalent. Factor of Safety (FOS) vastly exceeds $5.0$.
2. **Load Case 2 (1.5G Lateral Unbanked Turn):** 
   - Applied force: $3,311\\\\text{ N}$ horizontal force per side-friction axis.
   - Result: Peak von Mises stress safely isolated at the vertical pillars at only $5.13\\\\text{ MPa}$ (yielding a dynamic Factor of Safety $\\\\text{FOS} = 69$).

• **Pin Shear & Fatigue Life Calculations:**
- **Pin Shear Stress:** Direct shear stress on $20\\\\text{mm}$ structural connection pins resolves to $14.05\\\\text{ MPa}$, well within structural limits.
- **ISO 281 $L_{10}$ Bearing Lifecycle:** Calculated dynamic bearing fatigue life tracking to **1,792 million revolutions**, delivering **12,512 continuous operating hours** (equivalent to $\\\\approx 2.85\\\\text{ years}$ of continuous theme park operational cycles before required maintenance overhaul).`,
        prototypingAndTesting: "• 3D printed a physical 1:5 scale prototype of the bogie cluster and articulation joint to test the range of motion by hand on a curved rail segment.\\n• Created manufacturing drawings with ASME Y14.5 GD&T callouts for hole concentricity and surface finishes.",
        takeaways: "Proved that mechanical articulation and rigorous structural FEA verification are essential for preventing rail scrub, minimizing wear on polyurethane wheel treads, and guaranteeing passenger safety under extreme cyclic fatigue."
      }
    },
    {
      id: "ride-turntable",
      title: "Voltron-Style Elevator Turntable Track Switch",
      subtitle: "Master Assembly (Turntable Master.SLDASM) • 5:1 Sun/Pinion Gear Drive • 7-Segment Jerk-Limited S-Curve (180° in 3.0s) & Z-Axis Drop Clearance",
      category: "themed-rides",
      featured: true,
      badge: "Advanced Mechanism",
      timeline: "2026 (Active Build)",
      tools: ["SolidWorks (Turntable Master.SLDASM)", "S-Curve Motion Profile", "Gearbox Sizing (5:1 Mesh)", "Z-Axis Rail Clearance"],
      coverImage: "assets/images/extracted/image3.png",
      cadGallery: [
        {
          url: "assets/images/extracted/image3.png",
          title: "SolidWorks Master Assembly: Turntable Master.SLDASM",
          caption: "3D CAD assembly showing dual central pillar spindles, 30-tooth sun gear / 6-tooth pinion powertrain (5:1 ratio), and square elevator housing."
        },
        {
          url: "assets/images/extracted/image7.png",
          title: "Z-Axis Vertical Drop Clearance & Rail Isolation",
          caption: "Vertical elevator mechanism lowering rotating track deck beneath stationary overhanging track ends to isolate rotational envelope and eliminate mechanical rail-clash."
        },
        {
          url: "assets/images/trip-photos/trip_turntable_station.svg",
          title: "7-Segment Jerk-Limited S-Curve Motion Profile (180° in 3.0s)",
          caption: "Motion profile plot showing smooth jerk-limited acceleration resolving Iz = 9,093.75 kg·m² polar inertia with peak axis torque of 14.29 kNm."
        },
        {
          url: "assets/images/project-photos/3.jpg",
          title: "Physical Bench Prototype & Slew Ring Indexing Assembly",
          caption: "Physical bench test evaluating tapered shot-pin engagement repeatability, limit switch feedback, and gear mesh alignment."
        }
      ],
      summary: "Engineered a Voltron-style elevator turntable track switch (Turntable Master.SLDASM). Features a 5:1 sun/pinion gear mesh, a 7-segment jerk-limited S-curve motion profile (180° rotation in 3.0s, Iz = 9,093.75 kg·m², Peak Torque = 14.29 kNm), and a vertical Z-axis drop to eliminate rail clash.",
      keyMetrics: [
        { label: "Powertrain Ratio", value: "5:1 (30T Sun / 6T Pinion)" },
        { label: "Motion Profile", value: "180° Rotation in 3.0s (S-Curve)" },
        { label: "Polar Inertia (Iz)", value: "9,093.75 kg·m²" },
        { label: "Peak Axis Torque", value: "14.29 kNm (Pinion: 3,174.6 Nm @ 75 RPM)" }
      ],
      article: {
        problemStatement: "High-capacity multi-launch roller coasters (such as Europa-Park's Voltron Nevera) rely on dynamic turntable switch tracks to change vehicle headings between maintenance bays, dispatch blocks, and launch tracks. The engineering challenge of this master assembly (Turntable Master.SLDASM) was fourfold: size a robust 5:1 gear drive for massive polar inertia ($I_z = 9,093.75\\\\text{ kg}\\\\cdot\\\\text{m}^2$), formulate a 7-segment jerk-limited S-curve motion profile to rotate 180° in exactly 3.0 seconds without passenger discomfort, engineer a vertical Z-axis drop mechanism to prevent rail clash, and incorporate fail-safe tapered shot-pins.",
        cadArchitecture: "Modelled the complete master assembly (`Turntable Master.SLDASM`) in SolidWorks with integrated kinematic mechanisms:\\n\\n• **Dual Spindle Track Deck & Drive:** The rotating track deck is supported on dual thick central pillar spindles. The drive powertrain incorporates a heavy-duty **30-tooth sun gear meshing with a 6-tooth pinion**, delivering an exact **5:1 gear ratio**.\\n• **Z-Axis Spatial Directive (Rail Clash Elimination):** Built with vertical lift guide tracks inside a square foundation housing. Before rotation initiates, the entire assembly lowers vertically along the Z-axis, dropping the rotating rail segment completely beneath the stationary overhanging track ends to isolate the rotational envelope and eliminate mechanical rail-clash.\\n• **Pneumatic Tapered Shot-Pin Interlock:** Dual pneumatic actuators drive hardened tool-steel tapered locating shot-pins into mating structural bushings, physically locking track alignment to within $\\\\pm 0.5\\\\text{ mm}$ before ride control block continuity is signaled.",
        calcsAndSimulation: `• **Dynamic Bounds & Polar Mass Moment of Inertia ($I_z$):**
- **Total Loaded Polar System Inertia:** Calculated at $I_z = 9,093.75\\\\text{ kg}\\\\cdot\\\\text{m}^2$.
- **Motion Profile:** 7-segment jerk-limited S-curve acceleration profile executing a **$180^\\\\circ$ ($\\\\pi\\\\text{ rad}$) rotation in exactly $3.0\\\\text{ seconds}$**.
- **Torque & Motor Velocity Requirements:**
  - Peak Turntable Axis Torque: $\\\\tau_{\\\\text{axis}} = 14.29\\\\text{ kNm}$.
  - Pinion Motor Torque: $\\\\tau_{\\\\text{pinion}} = 3,174.6\\\\text{ Nm}$ (incorporating a $90\\\\%$ open-mesh gear efficiency factor).
  - Peak Pinion Velocity: **$75\\\\text{ RPM}$**.`,
        prototypingAndTesting: "• Currently assembling a physical 3D printed mechanical indexing prototype to evaluate slew ring tooth engagement and tapered shot-pin repeatability.\\n• Validating limit switch trigger state sequencing to ensure physical hardware locks before electrical interlocks signal track continuity.",
        takeaways: "Designing Turntable Master.SLDASM highlighted the critical importance of coordinating spatial Z-axis mechanical clearances with dynamic S-curve torque sizing, proving that ride capacity and mechanical safety must be engineered hand-in-hand."
      }
    }
  ],

  universityProjects: [
    {
      id: "bakerloo-access-lift",
      title: "Transit Platform Accessibility Lift Mechanism",
      subtitle: "3D CAD Mechanism Design, Scissor Linkage Sizing & Platform Retrofit",
      category: "transit-rail",
      featured: false,
      badge: "Real 3D CAD",
      timeline: "2024 - 2025",
      tools: ["SolidWorks / Fusion 360", "Scissor Linkage", "FEA Sizing", "Accessibility Standards"],
      coverImage: "assets/images/real-cad/bakerloo_lift_final_cad.png",
      cadGallery: [
        {
          url: "assets/images/real-cad/bakerloo_lift_final_cad.png",
          title: "Complete 3D CAD Assembly of Wheelchair Lift Mechanism",
          caption: "SolidWorks 3D CAD model showing modular structural frame, guide rails, and motorized scissor lift."
        },
        {
          url: "assets/images/real-cad/bakerloo_lift_cad_mechanism.png",
          title: "Detailed Actuator & Scissor Linkage Subassembly",
          caption: "Mechanical assembly detailing hydraulic/screw actuator pivot points, bearing blocks, and safety locking cams."
        },
        {
          url: "assets/images/real-cad/bakerloo_lift_concept_schematic.png",
          title: "Kinematic Sizing & Force Analysis Schematic",
          caption: "Engineering calculation schematic for scissor link angles, mechanical advantage, and hydraulic stroke."
        },
        {
          url: "assets/images/real-cad/bakerloo_lift_ideation_sketches.png",
          title: "Engineering Sketches & Kinematic Iterations",
          caption: "Design development sketches detailing scissor linkage pivot packaging and platform interface."
        }
      ],
      summary: "Designed a compact retrofit platform wheelchair lift mechanism for heritage railway stations. Produced 3D CAD assemblies, scissor linkage force calculations, and safety fail-safe interlocks.",
      keyMetrics: [
        { label: "CAD Package", value: "3D Multi-Body CAD" },
        { label: "Payload Capacity", value: "300 kg (Safe Working Load)" },
        { label: "Vertical Travel", value: "1.2 m Platform Lift" },
        { label: "Safety System", value: "Mechanical Anti-Drop Cam" }
      ],
      article: {
        problemStatement: "Heritage rail and transit stations often present significant step-free accessibility barriers where traditional civil ramps cannot fit. The design goal was to engineer a compact, high-reliability electro-mechanical scissor lift that folds flush with the platform edge.",
        cadArchitecture: "Modelled full 3D CAD assemblies including welded base frame, dual scissor linkage arms, synchronized ball-screw actuator, and safety edge pressure sensors.",
        calcsAndSimulation: "• Calculated instantaneous actuation force throughout the scissor lift extension stroke ($F = W / (2 \\\\tan \\\\theta)$).\\n• Performed pin shear stress and beam deflection checks in SolidWorks Simulation.",
        prototypingAndTesting: "• Verified kinematic folding envelope to guarantee zero gauge clearance infringement on passing trains.",
        takeaways: "Gained valuable experience packaging safety-critical mechanisms in tight spatial envelopes with strict accessibility guidelines."
      }
    },
    {
      id: "bakerloo-door-cushion",
      title: "Rolling Stock Pneumatic Door Cushion Mechanism",
      subtitle: "3D CAD Assembly, Hydraulic / Pneumatic Damping & Impact Mitigation",
      category: "transit-rail",
      featured: false,
      badge: "Transit CAD",
      timeline: "2024 - 2025",
      tools: ["SolidWorks", "Damping Calcs", "Fluid Mechanics", "Packaging Design"],
      coverImage: "assets/images/real-cad/door_cushion_final_cad.png",
      cadGallery: [
        {
          url: "assets/images/real-cad/door_cushion_final_cad.png",
          title: "3D CAD Assembly: Pneumatic Cushion Mechanism",
          caption: "SolidWorks model showing piston chamber, return spring, and mounting clevis for train door pocket retrofit."
        },
        {
          url: "assets/images/real-cad/door_cushion_cad_mechanism.png",
          title: "Internal Piston & Metering Valve Section View",
          caption: "Detailed section showing progressive velocity-dependent orifice damping and seal interfaces."
        },
        {
          url: "assets/images/real-cad/door_cushion_concept_schematic.png",
          title: "Dynamic Deceleration & Energy Absorption Schematic",
          caption: "Engineering calculation notes determining required chamber volume and stroke to dissipate door kinetic energy."
        },
        {
          url: "assets/images/real-cad/door_cushion_ideation_sketches.png",
          title: "Ideation Sketches & Packaging Envelope Study",
          caption: "Concepts exploring compact spring-damper configurations fitting within tight door column pockets."
        }
      ],
      summary: "Engineered a pneumatic end-stop cushion mechanism for passenger rolling stock doors to mitigate impact wear and reduce maintenance cycles. Produced 3D CAD, velocity-proportional damping calculations, and mounting packages.",
      keyMetrics: [
        { label: "Application", value: "Rolling Stock Passenger Doors" },
        { label: "Mechanism", value: "Progressive Air Cushion" },
        { label: "Kinetic Energy", value: "Dissipates Full Door Inertia" },
        { label: "CAD Level", value: "Complete Part & Assembly Pack" }
      ],
      article: {
        problemStatement: "Rapid passenger train door cycling causes high impact stresses on door pocket linkages and pneumatic actuators. The objective was to design a compact, retrofit energy absorber.",
        cadArchitecture: "Modelled a progressive dual-chamber pneumatic cushion with internal metering needle in SolidWorks.",
        calcsAndSimulation: "• Calculated door kinetic energy at impact ($E_k = \\\\frac{1}{2} m v^2$) and sized orifice flow area for smooth constant-deceleration damping.",
        prototypingAndTesting: "• Verified mounting geometry against rolling stock door frame CAD data.",
        takeaways: "Strengthened my understanding of dynamic damping, fatigue mitigation, and rolling stock maintenance design."
      }
    },
    {
      id: "uni-gearbox-design",
      title: "Electric Drive Machine Elements Gearbox",
      subtitle: "Shaft Sizing, Gear Fatigue, Bearing Selection & CAD Assembly",
      category: "university-team",
      featured: false,
      badge: "University CAD",
      timeline: "2025 - 2026 (Year 2 Sheffield Project)",
      tools: ["SolidWorks", "Fusion 360", "AGMA Gears", "GD&T Drawings"],
      coverImage: "assets/images/extracted/image14.png",
      cadGallery: [
        {
          url: "assets/images/extracted/image14.png",
          title: "SolidWorks 3D Split-Casing Gearbox CAD Assembly",
          caption: "Complete 3D model with stepped shafts, deep-groove ball bearings, parallel keys, and oil seal housings."
        },
        {
          url: "assets/images/extracted/image13.png",
          title: "Internal Gear Tooth Meshing & Shaft Stress Layout",
          caption: "Detailed internal view showing gear contact pattern and stepped bearing shoulder locations."
        },
        {
          url: "assets/images/uni_gearbox.svg",
          title: "2-Stage Reduction Schematic & Bearing Selection",
          caption: "Shaft layout schematic indicating gear face widths, keyway stress concentrations, and bearing reaction forces."
        },
        {
          url: "assets/images/project-photos/4.jpg",
          title: "Fabricated Components & Gearbox Inspection",
          caption: "Manufacturing inspection of gear shafts and housing alignment."
        }
      ],
      summary: "Mechanical design of an enclosed reduction spur gearbox for an electric drive. Performed gear bending and contact stress calculations (AGMA standards), shaft fatigue life (DE-Goodman criteria), and detailed manufacturing drawings.",
      keyMetrics: [
        { label: "Reduction Ratio", value: "6.25 : 1" },
        { label: "Rated Power", value: "3.5 kW" },
        { label: "Shaft Safety Factor", value: "FOS > 2.2 (DE-Goodman)" },
        { label: "Drawings", value: "Full ASME Y14.5 Set" }
      ],
      article: {
        problemStatement: "Design an enclosed two-stage spur gearbox to transmit power from an electric motor to an output drive with high efficiency, compact packaging, and a minimum design life of 20,000 hours under shock loading.",
        cadArchitecture: "Created full 3D SolidWorks assembly of the split-casing gearbox with stepped shafts, deep-groove ball bearings, parallel keys, oil seals, and inspection covers.",
        calcsAndSimulation: "• Calculated gear module, face width, and pitch diameters based on AGMA bending and pitting resistance equations.\\n• Constructed shear force and bending moment diagrams for input, intermediate, and output shafts under 3D gear tooth forces.\\n• Selected bearings based on calculated radial and thrust reactions and ISO 281 dynamic load ratings.",
        prototypingAndTesting: "• Generated detailed 2D manufacturing drawings with tolerance fits (H7/k6 for bearings, H7/p6 for gear hubs) and geometric tolerances.\\n• Conducted virtual interference checks and backlash validation in SolidWorks.",
        takeaways: "Deepened mastery of standard machine element design, fastener sizing, bearing catalog selection, and creating manufacturing-ready drawings."
      }
    },
    {
      id: "hackcessible-steelkings",
      title: "Hackcessible: Sheffield Steelkings Sledge Transfer Device",
      subtitle: "University of Sheffield Assistive Tech Makeathon • Para Ice Hockey Athlete Transfer Mechanism & Ergonomic Sledge Accessibility",
      category: "university-team",
      featured: false,
      badge: "Hackcessible Makeathon",
      timeline: "2024 - 2025",
      tools: ["Assistive Co-Design", "Sheffield Steelkings", "Human Factors & Ergonomics", "Rapid Prototyping", "CAD"],
      coverImage: "assets/images/project-photos/9.jpg",
      cadGallery: [
        {
          url: "assets/images/project-photos/9.jpg",
          title: "Sheffield Steelkings Sledge Transfer Mechanism Prototyping",
          caption: "Team prototyping and evaluation of assistive transfer rig at iceSheffield to assist para ice hockey players transitioning between wheelchairs and sledges."
        }
      ],
      summary: "Co-designed an accessible transfer mechanism with the Sheffield Steelkings Para Ice Hockey Club as part of Sheffield's Hackcessible Makeathon. Engineered an ergonomic assistive solution to help athletes with lower-limb disabilities transfer safely and independently between wheelchairs and ice sledges.",
      keyMetrics: [
        { label: "Community Partner", value: "Sheffield Steelkings" },
        { label: "Initiative", value: "Hackcessible Makeathon" },
        { label: "Application", value: "Wheelchair-to-Sledge Transfer" },
        { label: "Outcome", value: "Athlete-Tested Prototype" }
      ],
      article: {
        problemStatement: "Participated in the Hackcessible Assistive Technology Makeathon at the University of Sheffield, working directly with athletes from the Sheffield Steelkings Para Ice Hockey Club. The challenge was to co-design a stable, ergonomic transfer device that empowers athletes with lower-limb disabilities to transfer independently and safely between their wheelchairs and ice hockey sledges on the cold, slippery rink-side floor.",
        cadArchitecture: "Collaborated in a multidisciplinary student engineering team to design an adjustable, high-stability transfer mechanism with non-slip ice-safe footing, ergonomic grab points, and secure height-matching interfaces between wheelchair seat height and sledge bucket frames.",
        calcsAndSimulation: "• Analyzed upper-body transfer load paths, leverage moments, and athlete center-of-mass trajectories during dynamic transfers.\\n• Evaluated grip friction coefficients and non-slip rubber pad contacts against wet ice arena flooring.",
        prototypingAndTesting: "• Built and tested physical scale and full-size prototypes with Sheffield Steelkings athletes at iceSheffield.\\n• Gathered direct athlete feedback on transfer confidence, stability, and speed of transition before matches.",
        takeaways: "An inspiring experience in human-centered assistive engineering, demonstrating how close collaboration with end-users creates practical solutions that enhance athletic independence."
      }
    }
  ],

  diaryEntries: [
    {
      id: "diary-1",
      date: "August 2025",
      location: "Disneyland Paris & Alton Towers",
      title: "Dissecting Coaster Bogie Articulation & Track Dynamics",
      category: "Coaster Mechanics",
      readTime: "4 min read",
      coverPhoto: "assets/images/personal/lucy_mickey_framed.jpg",
      tripPhotos: [
        {
          url: "assets/images/trip-photos/trip_bogie_close.svg",
          title: "Bogie Kinematic Articulation Analysis",
          caption: "Technical diagram of dual-axis clevis knuckle pitch & yaw freedom along 3D tubular track curves."
        },
        {
          url: "assets/images/personal/lucy_mickey_framed.jpg",
          title: "Disneyland Paris Field Study",
          caption: "Lucy at Disneyland Paris studying track layouts and theme park vehicle dynamics."
        },
        {
          url: "assets/images/trip-photos/trip_nemesis_track.svg",
          title: "Nemesis Reborn Track Profile & Inversion Forces",
          caption: "Alton Towers B&M inverted box-spine track fabrication and wheel bogie dynamics."
        }
      ],
      excerpt: "Why coaster wheel bogies are kinematic masterpieces — how multi-axis articulation prevents track binding, scrubs friction, and withstands extreme cyclic G-forces.",
      content: `Whenever I visit a theme park, my eyes go straight to the mechanical wheel bogies beneath the coaster train. 

A roller coaster train doesn't just travel along a straight path; it negotiates complex three-dimensional curves with simultaneous pitch, roll, and yaw. If the wheel assemblies were rigidly mounted to the car chassis, the polyurethane wheels would violently bind against the tubular steel rails during tight turns.

### The Tri-Wheel Cluster System
Each bogie cluster consists of three distinct sets of wheels:
1. **Running (Road) Wheels:** Handle positive vertical G-forces and support the vehicle weight.
2. **Side Friction (Guide) Wheels:** Guide the train laterally and resist horizontal cornering forces.
3. **Upstop (Capture) Wheels:** Lock the vehicle onto the track during negative-G airtime moments.

### Dual-Axis Knuckle Articulation
The magic happens at the articulation knuckle — a dual-axis machined joint connecting each bogie carrier to the chassis crossbeam. This allows **±15° of yaw** (steering through corners) and **±10° of pitch** (negotiating crests and valleys) while constraining roll to keep the wheels locked squarely to the tubular rail profile.

Seeing this in person on rides like *Nemesis Reborn* and *Big Thunder Mountain* reinforces everything I love about mechanical design: pure geometric problem-solving to make extreme dynamics feel effortless.`
    },
    {
      id: "diary-2",
      date: "October 2025",
      location: "London Underground / TfL Network",
      title: "Block Zones vs. CBTC: Railway Signalling Meets Coaster Safety",
      category: "Transit & Safety Systems",
      readTime: "5 min read",
      coverPhoto: "assets/images/personal/lucy_shanghai_framed.jpg",
      tripPhotos: [
        {
          url: "assets/images/trip-photos/trip_block_zone.svg",
          title: "Coaster Block Zone Logic vs. Moving Block CBTC",
          caption: "Comparative schematic showing discrete coaster block sections vs continuous moving block railway signalling."
        },
        {
          url: "assets/images/personal/lucy_shanghai_framed.jpg",
          title: "Transit Network Study",
          caption: "Lucy exploring urban transit systems and comparing safety control architectures."
        },
        {
          url: "assets/images/trip-photos/trip_bakerloo_maintenance.svg",
          title: "Rolling Stock Door & Air Damper Subassembly",
          caption: "Underground train door mechanism analysis for preventative maintenance and impact mitigation."
        }
      ],
      excerpt: "Comparing theme park coaster block-zone safety architecture with Communications-Based Train Control (CBTC) on modern urban transit networks.",
      content: `One of the most fascinating intersections between themed entertainment and railway engineering is **fail-safe spacing and vehicle separation logic**.

### The Golden Rule of Coaster Block Zones
A roller coaster block system operates on an absolute spatial isolation principle: **one train per block section at all times**. 

A block can be a station, a lift hill, a brake run, or a mid-course brake run (MCBR). If a train approaches a block that is currently occupied, the ride control system (PLC) automatically halts the following train at the previous block brake before any collision could physically occur.

### The Transit Shift: Moving-Block CBTC
In contrast, modern mass transit networks like the London Underground (Jubilee, Northern, Victoria lines) and the DLR use **Communications-Based Train Control (CBTC)** with *moving blocks*.

Instead of fixed physical track sections, each train continuously broadcasts its exact position and speed via trackside radio antennas. The safety computer calculates a dynamic 'safe braking bubble' around each vehicle in real time, allowing trains to safely run just 90 seconds apart at peak rush hour.

### Engineering Takeaway
Both systems share the same fundamental safety philosophy: **fail-safe hardware architecture**. If power is cut or communication is lost, gravity and fail-safe pneumatic clamps bring the system to an immediate, safe halt.`
    },
    {
      id: "diary-3",
      date: "January 2026",
      location: "Europa-Park, Germany",
      title: "Water Coaster Kinetic Dissipation & Track Transitions",
      category: "Ride Dynamics",
      readTime: "4 min read",
      coverPhoto: "assets/images/personal/lucy_dlp_framed.jpg",
      tripPhotos: [
        {
          url: "assets/images/trip-photos/trip_water_coaster.svg",
          title: "Water Coaster Splashdown Kinetic Energy Dissipation",
          caption: "Hydrodynamic deceleration profile showing rapid kinetic energy absorption in water channels."
        },
        {
          url: "assets/images/personal/lucy_dlp_framed.jpg",
          title: "Europa-Park Study Trip",
          caption: "Lucy researching track switch engineering and water coaster transitions at Europa-Park."
        },
        {
          url: "assets/images/trip-photos/trip_turntable_station.svg",
          title: "Dual-Station Rotary Turntable Mechanism",
          caption: "Europa-Park Voltron Nevera turntable track switch kinematic layout and cycle timing."
        }
      ],
      excerpt: "How water coasters transition seamlessly between rigid steel coaster track and open water flotation channels while safely dissipating megajoules of kinetic energy.",
      content: `Europa-Park is a living masterclass in ride engineering. One of the most technically challenging ride typologies to analyze is the **hybrid water coaster** (like *Poseidon* and *Atlantica SuperSplash* by Mack Rides).

### The Track-to-Water Transition
A water coaster car operates in two fundamentally different physical regimes:
1. **Coaster Mode:** The car rides on steel tubular rails with 3-wheel bogies at speeds up to 80 km/h.
2. **Flotation Mode:** The car disconnects from the rails and becomes a free-floating boat in a water trough.

The transition between these two states is a critical engineering challenge. As the car plunges into the splashdown pool, guide rails gradually submerge, allowing hydrodynamic drag to take over vehicle guidance.

### Hydrodynamic Braking Physics
Water provides an incredible non-contact braking medium. The kinetic energy dissipated during splashdown is calculated by:

$$E_k = \\\\frac{1}{2} m (v_{\\\\text{entry}}^2 - v_{\\\\text{exit}}^2)$$

For a 4,500 kg loaded boat entering the pool at 20 m/s and decelerating to 4 m/s over 35 meters, the water channel dissipates **over 860 kJ of energy in under 2.5 seconds** — producing the iconic splash plume while maintaining comfortable, progressive deceleration for riders.

### Mechanical Maintenance Considerations
Water coaster bogies face extreme environmental conditions: continuous cycles of submerged water exposure followed by high-speed air friction. This requires stainless steel 316 / 4140 axle pins, double-lip nitrile bearing seals, and composite friction pads to eliminate corrosion and guarantee long service lifecycles.`
    }
  ]
};

// Expose globally for browser window
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

// Export for Node.js / module loaders
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
"""

# Replace placeholders with exact character-for-character raw code
full_js_content = full_js_content.replace('__AGV_PY_CODE__', agv_py_raw)
full_js_content = full_js_content.replace('__ROOM_PY_CODE__', room_py_raw)

with open(r'c:\Users\lucy_\OneDrive\Documents\Portfolio\scripts\portfolio-data.js', 'w', encoding='utf-8') as f:
    f.write(full_js_content)

print("PORTFOLIO_DATA REBUILT WITH 100% COMPLETE FIELDS AND EXACT RAW CODE!")
