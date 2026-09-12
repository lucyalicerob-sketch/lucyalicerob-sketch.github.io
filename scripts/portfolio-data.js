/**
 * PORTFOLIO DATA SOURCE
 * Lucy Robinson — Mechanical Engineering & Themed Ride Systems
 * Auto-Synchronized from Visual Studio Editor to GitHub Repository
 * Updated: 2026-09-12T09:52:20.624Z
 */

const PORTFOLIO_DATA = {
  "profile": {
    "name": "Lucy Robinson",
    "preferredName": "Lucy",
    "role": "Mechanical Engineering Student (MEng) :",
    "tagline": "A Mechanical Engineering student and Royal Academy Scholar with a passion for ride engineering and design!",
    "subtagline": "RAEng ELS Scholar • Mechanical Engineering at University of Sheffield • Summer Intern at TfL DLR",
    "currentStatus": {
      "active": true,
      "role": "Mechanical Engineering Summer Intern",
      "company": "Transport for London (Docklands Light Railway)",
      "division": "Electrical & Mechanical Engineering",
      "location": "London, UK"
    },
    "personalStory": {
      "headline": "Hooked on the mechanics of making you feel.",
      "bioParagraph1": "Hi, I'm Lucy! Ever since I rode my first coaster, I’ve been fascinated by what’s happening behind the scenes! How wheel bogies articulate around banked curves, how switch tracks lock in split seconds, and how mechanical fail-safes guarantee safety without interrupting the thrill. Rollercoasters are my safe space. When I am on a ride I feel free and they make me buzz with excitement and adrenaline , my dream would be to share that feeling with as many people as possible in the only way I know how: storytelling through engineering!",
      "bioParagraph2": "I'm entering my 3rd year studying Mechanical Engineering (MEng) at the University of Sheffield, where I have achieved 1st Class Honours across both Year 1 and Year 2. I love the physical, hands-on side of engineering: opening SolidWorks or Fusion 360, running the maths on bearing loads and linkages, and heading straight to my piles of carboard to start modelling right away. But I also long how an engineering project can impact people around it, and make them feel a particular way or tell them a particular story.",
      "bioParagraph3": "Alongside my personal projects, I spent my summer between 2nd and 3rd year interning with the building services Electrical & Mechanical engineering team at Transport for London (DLR), gaining valuable perspective on the engineering in the buildings and stations which keep London moving. And learning how to think about the user in everything I do. I have also recently joined the 31st cohort of Engineering Leaders Scholars at the Royal Academy of Engineering. "
    },
    "workbenchLive": {
      "currentBuild": "Ride Vehicle Rotary Turntable & Track Switch",
      "status": "Finalising CAD",
      "currentSoftware": "SolidWorks & Python",
      "nextMilestone": "Using FEA to validate materials will withstand loadcases"
    },
    "coasterLog": {
      "headline": "Coaster Credits & Track Engineering Log",
      "subtitle": "Personal track log analysing ride dynamics, wheel bogie kinematics, and manufacturer mechanisms.",
      "totalCredits": "50+ Track Credits",
      "topParks": [
        "All",
        "Europa-Park",
        "Alton Towers",
        "Thorpe Park",
        "Disneyland Paris",
        "Phantasialand",
        "Blackpool"
      ],
      "coasters": [
        {
          "name": "Nemesis Reborn",
          "park": "Alton Towers",
          "manufacturer": "B&M",
          "type": "Inverted Coaster",
          "elements": "Zero-G Roll, Vertical Loop, Interlocking Corkscrews",
          "engNote": "Sand-filled box girder track spine dampens high-frequency acoustics; inverted bogie clusters undergo up to 4.0G vertical loads."
        },
        {
          "name": "Hyperia",
          "park": "Thorpe Park",
          "manufacturer": "Mack Rides",
          "type": "Hyper Coaster (236 ft)",
          "elements": "Outerbanked Turn, Inverted Stall, Splashdown",
          "engNote": "Highest & fastest coaster in the UK (72.5 mph); tri-chord tubular rail profile and magnetic eddy-current brake fins."
        },
        {
          "name": "The Smiler",
          "park": "Alton Towers",
          "manufacturer": "Gerstlauer",
          "type": "Infinity Coaster",
          "elements": "14 Inversions, Batwing, Cobra Roll, Sea Serpent",
          "engNote": "World-record 14 inversions; utilises optical proximity sensors and multiple mid-course brake runs (MCBR) for 5-train block safety."
        },
        {
          "name": "Stealth",
          "park": "Thorpe Park",
          "manufacturer": "Intamin",
          "type": "Hydraulic Accelerator",
          "elements": "205 ft Top Hat, Magnetic Brake Run",
          "engNote": "0 to 80 mph in 1.8 seconds (2.3G) via high-pressure hydraulic winch cable and retractable catch-car drive dog."
        },
        {
          "name": "The Swarm",
          "park": "Thorpe Park",
          "manufacturer": "B&M",
          "type": "Wing Coaster",
          "elements": "Dive Drop, Zero-G Roll, Inline Twist",
          "engNote": "Cantilevered seating outboard of track spine creates large rotational moment arm and roll inertia on chassis."
        },
        {
          "name": "Voltron Nevera",
          "park": "Europa-Park",
          "manufacturer": "Mack Rides",
          "type": "Stryker Coaster",
          "elements": "105° Beyond-Vertical Launch, 7 Inversions",
          "engNote": "Multi-axis turntable switch track, 4 LSM launch zones, and articulating chassis bogies with dynamic brake monitoring."
        },
        {
          "name": "Poseidon",
          "park": "Europa-Park",
          "manufacturer": "Mack Rides",
          "type": "Water Coaster",
          "elements": "Rotary Turntable Station, Splashdown Channel",
          "engNote": "Smooth mechanical transition from tubular steel bogie rails into water trough hydrodynamic deceleration channels."
        },
        {
          "name": "Silver Star",
          "park": "Europa-Park",
          "manufacturer": "B&M",
          "type": "Hyper Coaster (240 ft)",
          "elements": "Parabolic Airtime Hills, Horseshoe Turn",
          "engNote": "Classic 4-abreast clamshell restraint design with low-friction polyurethane wheel compounds."
        },
        {
          "name": "Blue Fire Megacoaster",
          "park": "Europa-Park",
          "manufacturer": "Mack Rides",
          "type": "Launched Coaster",
          "elements": "LSM Launch, 32m Loop, Twisted Horseshoe Roll",
          "engNote": "Linear synchronous motor launch coupled with articulated 4-seat cars and heart-rate telemetry monitoring."
        },
        {
          "name": "Wodan Timburcoaster",
          "park": "Europa-Park",
          "manufacturer": "GCI",
          "type": "Wooden Coaster",
          "elements": "High-Banked Fly-Throughs, Tunnel Drops",
          "engNote": "Southern yellow pine lattice structure with articulated Millennium Flyer steel chassis and polyurethane-cushioned wheelsets."
        },
        {
          "name": "Euro-Mir",
          "park": "Europa-Park",
          "manufacturer": "Mack Rides",
          "type": "Spinning Coaster",
          "elements": "Trommel Drum Spiral Lift, 360° Rotations",
          "engNote": "Central spiral lift drum mechanism with powered yaw indexing transitioning to gravity-induced spinning."
        },
        {
          "name": "Big Thunder Mountain",
          "park": "Disneyland Paris",
          "manufacturer": "Vekoma",
          "type": "Mine Train Coaster",
          "elements": "Dual-Axis Knuckle Bogie, 3 Lift Hills",
          "engNote": "Tight radius mountain curves requiring spherical bogie articulation knuckles to eliminate rail screech and tire scrub."
        },
        {
          "name": "Star Wars Hyperspace Mountain",
          "park": "Disneyland Paris",
          "manufacturer": "Vekoma",
          "type": "Launched Custom Looper",
          "elements": "32° Catapult Launch, Tongue Inversion",
          "engNote": "Linear pusher catapult uphill launch into enclosed acoustic dome; synchronized onboard multi-channel audio transducer system."
        },
        {
          "name": "Avengers Flight Force",
          "park": "Disneyland Paris",
          "manufacturer": "Vekoma",
          "type": "LSM Launched Coaster",
          "elements": "Dual LSM Stator Launch, Sea Serpent Roll",
          "engNote": "Electromagnetic synchronous stator array accelerating train from 0 to 57 mph in 2.8 seconds."
        },
        {
          "name": "Crush's Coaster",
          "park": "Disneyland Paris",
          "manufacturer": "Maurer Rides",
          "type": "Spinning Coaster",
          "elements": "Enclosed Gravity Drops, Free-Spinning Turtle Shell",
          "engNote": "Gravitational torque and dynamic centrifugal force induce passive yaw spinning based on passenger center-of-mass."
        },
        {
          "name": "Taron",
          "park": "Phantasialand",
          "manufacturer": "Intamin",
          "type": "Multi-Launch Blitz Coaster",
          "elements": "Dual LSM Boosts, 58 Track Crossings",
          "engNote": "Water-cooled LSM stators generate rapid multi-stator acceleration through dense rockwork with tight envelope clearances."
        },
        {
          "name": "F.L.Y.",
          "park": "Phantasialand",
          "manufacturer": "Vekoma",
          "type": "Flying Launch Coaster",
          "elements": "Dual LSM Flying Launch, 360° Inline Rolls",
          "engNote": "Patented 90° rotating chassis seats transition riders from sideways load station to prone aerodynamic flight position."
        },
        {
          "name": "Black Mamba",
          "park": "Phantasialand",
          "manufacturer": "B&M",
          "type": "Inverted Custom Coaster",
          "elements": "Vertical Loop, Zero-G Roll, Wingover",
          "engNote": "Subterranean rock trench construction with tight dynamic vehicle clearance envelopes and zero lateral deflection."
        },
        {
          "name": "Wicker Man",
          "park": "Alton Towers",
          "manufacturer": "GCI",
          "type": "Wooden Coaster",
          "elements": "Millennium Flyer Bogies, Themed Tunnel Fly-Throughs",
          "engNote": "Articulated individual wheelsets allow flexible wood track traversal with minimal lateral timber vibration."
        },
        {
          "name": "Oblivion",
          "park": "Alton Towers",
          "manufacturer": "B&M",
          "type": "Dive Coaster",
          "elements": "180 ft 87° Drop into Underground Tunnel",
          "engNote": "Holding brake mechanism with pneumatic caliper lock before drop; dual-row wide train chassis with heavy upstop clamping."
        },
        {
          "name": "Rita",
          "park": "Alton Towers",
          "manufacturer": "Intamin",
          "type": "Hydraulic Accelerator",
          "elements": "0-61.1 mph Launch in 2.5s, Overbanked Turns",
          "engNote": "Hydraulic winch drive system with fluid accumulator bank discharging high-volume oil into hydraulic drive motors."
        },
        {
          "name": "Galactica (Air)",
          "park": "Alton Towers",
          "manufacturer": "B&M",
          "type": "Flying Coaster",
          "elements": "Lie-Flat Lift, Fly-to-Lie, Inline Twist",
          "engNote": "Dual-pivot vest restraint mechanism tilting riders 90° into prone position with dual mechanical locking pins."
        },
        {
          "name": "Th13teen",
          "park": "Alton Towers",
          "manufacturer": "Intamin",
          "type": "Freefall Drop Coaster",
          "elements": "5-Metre Vertical Freefall Track Drop",
          "engNote": "Pneumatic locking pins isolate freefall track segment before hydraulic dampeners cushion and reset vertical drop."
        },
        {
          "name": "The Big One",
          "park": "Blackpool Pleasure Beach",
          "manufacturer": "Arrow Dynamics",
          "type": "Hyper Coaster (213 ft)",
          "elements": "65° First Drop, High-Speed Coastal Turnaround",
          "engNote": "Classic tubular steel rail with fabricated tubular lattice supports engineered for severe Irish Sea coastal wind loads."
        },
        {
          "name": "ICON",
          "park": "Blackpool Pleasure Beach",
          "manufacturer": "Mack Rides",
          "type": "Multi-Launch Coaster",
          "elements": "Dual LSM Catapults, High-G Top Hat",
          "engNote": "15 track intersection crossings weaving underneath existing wooden and steel heritage coaster structures."
        },
        {
          "name": "Grand National",
          "park": "Blackpool Pleasure Beach",
          "manufacturer": "Charles Paige",
          "type": "Mobius Loop Wooden",
          "elements": "Twin Synchronised Racing Tracks",
          "engNote": "Continuous single Mobius loop wooden track with heritage mechanical brake levers and timber rail strips."
        }
      ]
    },
    "personalStats": [
      {
        "value": "1st Class ",
        "label": "Degree Standing"
      },
      {
        "value": "CAD Builds",
        "label": "Fusion and Solidworks"
      },
      {
        "value": "89",
        "label": "Coaster Credits"
      },
      {
        "value": "TfL Intern",
        "label": "Summer Role"
      }
    ],
    "philosophy": [
      {
        "title": "Hands-On Prototyping First",
        "desc": "CAD is great, but things only get real when you assemble physical parts. 3D printing early catches tolerances and assembly quirks that 3D screens hide."
      },
      {
        "title": "Mechanical Fail-Safes Always Win",
        "desc": "Software is crucial, but physical mechanical catches (gravity anti-rollback dogs, spring-applied brakes) must always guarantee passenger safety first."
      },
      {
        "title": "Engineering for Real People",
        "desc": "Whether it’s an articulated coaster train or an assistive device, good mechanical design makes complex motion feel effortless, safe, and comfortable."
      }
    ],
    "recruiterBrief": {
      "statusLine": "University of Sheffield MEng Mech Eng | TfL DLR Intern | Class of 2028 / 2029",
      "targetRoles": "Themed Entertainment Internships, Placement Year & Graduate Ride Systems Engineering Roles",
      "keyHighlights": [
        "MEng Mechanical Engineering student at University of Sheffield (1st Class Honours in Year 1 & Year 2).",
        "Modelled & built a physical Trackless Dark Ride AGV in SolidWorks.",
        "Designed an articulated 3-wheel coaster bogie and mine train car assembly.",
        "Engineering an active rotary ride vehicle turntable with slewing ring bearing.",
        "Produced complete engineering drawing sets (BS 8888 / ASME Y14.5) and stress analysis for Hackcessible assistive devices.",
        "Summer Intern at Transport for London (DLR E&M) & Sheffield Engineering Leadership (SELSA) award member."
      ],
      "summary": "Lucy is an MEng Mechanical Engineering student at the University of Sheffield with hands-on CAD mechanism design and transit rolling stock placement experience at Transport for London (TfL DLR)."
    },
    "location": "Sheffield & London, UK",
    "university": "University of Sheffield",
    "degree": "MEng Mechanical Engineering with a Year in Industry",
    "graduationYear": "Class of 2028 / 2029",
    "socials": {
      "email": "lucyalicerob@gmail.com",
      "phone": "+44 7491 232212",
      "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b"
    },
    "title": "",
    "email": "",
    "phone": "",
    "bio": "RAEng ELS Scholar • Mechanical Engineering at University of Sheffield • Summer Intern at TfL DLR ",
    "storyHeadline": "Who am I?",
    "story": [],
    "education": {
      "university": "University of Sheffield",
      "degree": "MEng in Mechanical Engineering",
      "grade": "Entering Year 3 in Autumn 2026 (Working at 1st Class)",
      "timeline": "2024 - 2028 / 2029",
      "coursework": [
        "Mechanics of Solids & Stress Analysis",
        "Dynamics",
        "Kinematics & Vibrations",
        "Fluid Dynamics & Aerodynamics",
        "Thermodynamics & Heat Transfer",
        "Arduino & Mechatronics",
        "MATLAB & Computational Engineering",
        "Robotics"
      ],
      "award": ""
    },
    "statusPillText": "ACTIVE // Summer Intern @ TfL DLR",
    "footerCopy": "© 2026 Lucy Robinson. Mechanical Engineering (MEng), University of Sheffield.",
    "heroSpotlight": {
      "itemId": "trackless-vehicle",
      "customBadge": "Highlight",
      "customMeta": "Solidworks"
    },
    "aboutPhoto": "assets/images/user-photos/lucy_about_photo.jpg",
    "aboutLocationTag": "📍 Disneyland Paris",
    "aboutCardBadge": "About Me",
    "cvUrl": "assets/documents/Lucy_Robinson_CV.pdf",
    "cvFileName": "assets/documents/Lucy_Robinson_CV.pdf",
    "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b",
    "social": {
      "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b"
    }
  },
  "skills": {
    "cadModeling": [
      "SolidWorks",
      "Autodesk Fusion 360",
      "Technical Drawings & GD&T (BS 8888 & ASME Y14.5 standards)",
      "Integrated Environmental Solutions Virtual Environment"
    ],
    "analysisAndMath": [
      "Python for Engineering ",
      "MATLAB & Simulink ",
      "Hand Calculations ",
      "Linear Static FEA "
    ],
    "rideAndTransit": [
      "Coaster Bogie Kinematics (3-wheel clusters: road, guide, upstop)",
      "Fail-Safe Braking Principles, Anti-Rollback Ratchets & Interlocks",
      "Ride Safety Principles (ASTM F24 & EN 13814 standards)",
      "Passenger Rolling Stock & Mechanical Maintenance Fundamentals"
    ],
    "fabrication": [
      "Arduino & Basic Mechatronics Prototyping",
      "Laser Cutting & Sheet Metal Prototyping",
      "Workshop Tools (Lathe, mill, drill press, fasteners & torque assembly)",
      "3D Printing"
    ],
    "leadership": [
      "Royal Academy of Engineering - Engineering Leaders Scholar",
      "Sheffield Engineering Leadership & Service Award (SELSA)",
      "Hackcessible Assistive Tech Co-Design & Makeathon",
      "National Young Ambassador (England Golf & Golf Foundation)",
      "Technical Project Communication & Presentation",
      "Ukulele Society Treasurer"
    ],
    "cad": [
      "SolidWorks",
      "Autodesk Fusion 360",
      "Technical Drawings & GD&T (BS 8888 & ASME Y14.5 standards)",
      "Integrated Environmental Solutions Virtual Environment"
    ],
    "analysis": [
      "Python for Engineering ",
      "MATLAB & Simulink ",
      "Hand Calculations ",
      "Linear Static FEA "
    ]
  },
  "featuredProjects": [
    {
      "id": "mine-train-bogie",
      "title": "The Smugglers Mine Train",
      "subtitle": "SolidWorks Multibody Assembly, Kinematic Articulation, and Structural FEA",
      "category": "themed-rides",
      "featured": true,
      "badge": "SolidWorks Showcase",
      "timeline": "2026",
      "tools": [
        "SolidWorks",
        "Motion Analysis",
        "Simulation-FEA"
      ],
      "coverImage": "assets/images/gdrive-photos/Screenshot 2026-08-16 155235.png",
      "cadGallery": [
        {
          "url": "assets/images/extracted/smugglers_mine_train_bogie_cad.png",
          "title": "Articulated 3-Wheel Bogie CAD Assembly",
          "caption": "SolidWorks 3D model with spherical knuckle articulation."
        },
        {
          "url": "assets/images/extracted/smugglers_bogie_assembly_drawing.png",
          "title": "Bogie Kinematic Articulation Plot",
          "caption": "Wheel articulation and clearance envelope along 3D track curve."
        }
      ],
      "summary": "You are a smuggler using abandoned rails to escape the law, will you get away in time? Features include themed car, overhead restraints, precision 3-wheel bogie assemblies (road, side guide, and upstop wheels), simple coupling system, chain lift hitch and anti-rollback dogs.",
      "keyMetrics": [
        {
          "label": "Wheel Configuration",
          "value": "Road / Guide / Upstop (3-Wheel)"
        },
        {
          "label": "Load Conditions",
          "value": "4.0G Vertical/ 1.5G Lateral"
        },
        {
          "label": "Design Factor",
          "value": "FOS > 3.0 (ASTM F24)"
        },
        {
          "label": "CAD Subassemblies",
          "value": "Bogie, Chassis, Body"
        }
      ],
      "article": {
        "problemStatement": "**Story**\nAs an 18th century smuggler you find yourself in a race to avoid capture and successfully get your stolen goods out of the city before the law catches up with you. While running you find an abandoned mine with carts ready to take you away fast but little do you know these carts are not as stable as they may look! \n\n**Project Constraints**\nTheme park ride vehicle design needs a high level of coordination between passenger safety, structural resistance and dynamic compliance. This project targets the development of a concept design for a classic mine train style coaster car, constrained to operate on 160mm diameter tubular steel track with tight turns and the possibility for inversions. This design brief requires the vehicle to withstand high forces over a multi-year operational lifespan while being able to maintain high passender throughput via the option for varying train lengths to maximise capacity and compatibility with fast loading times. \n\nCompliance with the ASTM F24 international design standards were a key feature of this project and considered in many stages of this project. The vehicle geometry is bound by clearance envelopes to ensure passenger safety and low interference with theming elements. I particular included wheel geometry which allows for wobble within the joints to reduce strain on the wheels and hopefully reduce fatigue damage. Although geometry is in many ways simple every feature has a purpose to increase passenger safety or enjoyment.",
        "cadArchitecture": "The mechanical architecture of the vehicle relies on bottom building of subassemblies within Solidworks. To achieve accurate motion along a track I designed a 3 wheel style bogie. The subassemblies of 2 road wheels, 2 side-guide wheels and 2 upstop wheels contribute to the overall master assembly. Each serves its own purpose: the road wheels support the vehicle and passenger mass, the side wheels counter lateral forces encountered during turns and the upstop wheels secure the vehicle to the tracks during airtime. \n\nVehicle connections are achieved through a simple coupler at the back and front of each vehicle that would be connected by a simple chain link like connection. These allow maneuverability  along complex track layouts and allow easier navigation of tight corners. They also allow for multiple direction of independent movement by each car. \n\nEvery joint is defined by mates which ensure alignment is as realistic as possible. ",
        "calcsAndSimulation": "High factor of safety during elements was vital for this project, you might have found a way out but it won't be simple. During the ride, I want passengers to really feel like the track may fall apart through vibrations and sudden movements. In order to validate the structural integrity of the wheel bogie system, I conducted two independent studies considering two common conditions the system would be put under. \n\nNumber 1: First I simulated a simple unbanked turn. I did this by applying 1.5G of force to one set of side wheels, normal to the outer surface of the wheels.\n\nNumber 2: Second I simulated a valley, commonly found in many gravity reliant coasters. I did this by applying 4G of force normal to the outside surface of all of the road wheels.\n\n",
        "prototypingAndTesting": "Beyond the obvious components, many small intentional design features were implemented in my design.\n\nI established a small chain lift connection system on the base of the vehicle as well as an anti-rollback dog. These are both simple pieces which rotate about single axels to create simple safety inclusions to the ride vehicle.\n\nIndividual over-the-shoulder restraints were added to the seats. These restrains, although somewhat outdated, give the ride a higher use case as they allow for inversions in the track layout which could be used to mimic the evasive manoeuvres during the escape. They connect behind the headrests, and would in a final iteration be hydraulic to allow the highest level of inclusivity. \n\nThe four seats in the ride vehicle are angled back 10 degrees to increase the comfort for passengers and allow for easier sightlines from the back row of each car.  \n\nThe main ride vehicle floor is extended out to create caps over the wheels which lie alongside the car. This allows for seats to be positioned lower which keeps the centre of gravity closer to the track. This low seated feeling also adds to the uncertainty of the riders.\n",
        "takeaways": "This build gave me a deep understanding of coaster track-wheel interaction and why mates are important when designing in Solidworks. It helped me to learn about using subassemblies to repurpose parts I had previously used in other aspects of the model which allowed me to increase efficiency in the design. \n\nTwo possible things I could improve with this model technically would be to improve the mechanisms for track interaction (like lift hills) or adding sensors to the bottom of the vehicle to facilitate block systems. I could also look into building a small test model to see how my mechanisms function on a physical model.\n\nI would also love to collaborate with creatives in the future to conceptualise the ride layout and further storytelling elements that could be included to improve rider experience.\n\n",
        "tabTitles": {
          "problem": "1. Design Criteria",
          "cad": "2. Kinematic Assembly",
          "calcs": "3. FEA ",
          "prototyping": "4. Intentional Design features",
          "takeaways": "5. What I Learned & Next Steps"
        },
        "tabSubtitles": {
          "problem": "Story, Project constraints",
          "cad": "SolidWorks parametric subassemblies and multi-body constraints",
          "calcs": "Finite element analysis, study conditions and analysis",
          "prototyping": "Extra addition to improve realise or technical skill",
          "takeaways": "Engineering lessons learned, manufacturability review & next milestones"
        },
        "tabImages": {
          "problem": [
            {
              "url": "assets/images/extracted/smugglers_mine_train_bogie_cad.png",
              "title": "Mine Train Bogie CAD",
              "caption": "3-wheel cluster bogie chassis."
            }
          ],
          "cad": [
            {
              "url": "assets/images/extracted/smugglers_bogie_assembly_drawing.png",
              "title": "Kinematic Articulation",
              "caption": "Dual-axis knuckle joints."
            }
          ],
          "calcs": [],
          "prototyping": [],
          "takeaways": [
            {
              "url": "assets/images/extracted/smugglers_mine_train_bogie_cad.png",
              "title": "Final Bogie Assembly",
              "caption": "Completed SolidWorks CAD model."
            }
          ]
        }
      }
    },
    {
      "id": "ride-turntable",
      "title": "Time Machine Turntable",
      "subtitle": "High-Precision Track Switch & Positioning Table (Current Workbench Build)",
      "category": "themed-rides",
      "featured": true,
      "badge": "On My Workbench",
      "timeline": "2026 (Active Build)",
      "tools": [
        "SolidWorks",
        "Slewing Bearings",
        "Locking Shot-Pins",
        "Python Sizing"
      ],
      "coverImage": "assets/images/gdrive-photos/Screenshot 2026-08-16 155035.png",
      "cadGallery": [
        {
          "url": "assets/images/extracted/time_machine_turntable_cad.png",
          "title": "Motorized Rotary Switch Track CAD Assembly",
          "caption": "SolidWorks 3D model with slewing ring bearing and shot-pin lock."
        }
      ],
      "summary": "This may seem like a regular turntable but its actually a time machine will you survive the journey? Features a large slewing ring bearing, planetary gear drive, and fail-safe tapered shot-pin locking system for seamless vehicle indexing and station capacity optimization.",
      "keyMetrics": [
        {
          "label": "Mechanism Type",
          "value": "Rotary Slew / Switch"
        },
        {
          "label": "Indexing Accuracy",
          "value": "±0.5 mm Alignment"
        },
        {
          "label": "Locking System",
          "value": "Pneumatic Shot-Pin (Fail-Safe)"
        },
        {
          "label": "Status",
          "value": "CAD & Sizing Phase"
        }
      ],
      "article": {
        "problemStatement": "You enter a normal looking room but slowly your vehicles descend into a dark space, lights begin to flash and you notice you are rotating. You breathe a sigh of relieve as you are lifted out again, but you realise something has changed! You are no longer in present day, you have traveled into the future!\n\nIn themed dark rides and roller coasters, turntables and switch tracks are used for dual-loading stations, drop-track sequences, and vehicle redirection without interrupting continuous dispatch block flow.  But they can also be used as elements which help to progress the story telling of the ride. The challenge of this build is achieving rapid 90°/180° rotation with rigid structural locking that can withstand dynamic vehicle transfer loads and maintaining a fun rider experience. \n\nWith this mechanism there are lots of elements that must be considered to maintain a safe environment for the riders and to project the infrastructure. One of these being the safety envelope around the ride vehicle which makes sure no mechanical or dangerous components come too close to passengers. another safety-critical system is the pneumatic shot pins which keep the track perfectly aligned when a rotation has happened.",
        "cadArchitecture": "Currently modelling the complete mechanical assembly in SolidWorks:\n\n• **Slewing Ring & Base:** Incorporates an external gear slewing ring bearing mounted to a stiff fabricated base frame.\n• **Drive Mechanism:** Electric motor with planetary gearbox driving a high-torque pinion gear directly engaging the slewing ring teeth.\n• **Tapered Shot-Pin Interlock:** Dual pneumatic shot-pins with hardened tool-steel tapered locating bushings to physically lock the turntable in position before track continuity signals are sent to the ride control system.",
        "calcsAndSimulation": "• **Rotational Mass Moment of Inertia:** Calculated total rotational inertia of the loaded turntable platform to determine required acceleration torque and decelerating braking torque.\n• **Shot-Pin Shear Sizing:** Sized locking pin diameter under dynamic vehicle entry impact load, applying safety factor FOS > 4.0.\n• **Supplementary Python Sizing Script:** Created a parameter script to test various motor gearbox reduction ratios (30:1 to 100:1) to balance rotation speed with motor thermal duty cycle.",
        "prototypingAndTesting": "• Currently modelling 3D printed mechanical indexing prototype to test mechanical limit switch engagement and locking pin geometry.\n• Planning test sequence to evaluate shot-pin engagement repeatability and backlash under simulated side loads.",
        "takeaways": "Working on this active build has bridged mechanical component sizing with system safety logic (why hardware interlocks must always mechanically prevent motion before software allows dispatch).",
        "tabTitles": {
          "problem": "1. The Goal ",
          "cad": "2. CAD Architecture & Mechanism Details",
          "calcs": "3. Kinematics, Hand Calculations & Sizing",
          "prototyping": "4. Prototyping, 3D Printing & Testing",
          "takeaways": "5. What I Learned & Next Steps"
        },
        "tabSubtitles": {
          "problem": "Story, design brief & operating constraints",
          "cad": "SolidWorks parametric subassemblies, kinematic joints & tolerance analysis",
          "calcs": "Hand calculations, dynamic simulation & motor torque verification",
          "prototyping": "Rapid prototyping, additive manufacturing & physical test rig sequence",
          "takeaways": "Engineering lessons learned, manufacturability review & next milestones"
        },
        "tabImages": {
          "problem": [
            {
              "url": "assets/images/extracted/time_machine_turntable_cad.png",
              "title": "Turntable CAD",
              "caption": "Rotary switch mechanism."
            }
          ],
          "cad": [],
          "calcs": [],
          "prototyping": [],
          "takeaways": [
            {
              "url": "assets/images/extracted/time_machine_turntable_cad.png",
              "title": "Final Assembly",
              "caption": "Slewing ring drive system."
            }
          ]
        }
      }
    },
    {
      "id": "trackless-vehicle",
      "title": "Smoke & Starlight AGV",
      "subtitle": "Autonomous Guided Vehicle with Dual Steer-Drive Kinematics & SolidWorks Chassis",
      "category": "themed-rides",
      "featured": true,
      "badge": "Flagship Build",
      "timeline": "2025 - 2026",
      "tools": [
        "SolidWorks",
        "Python Kinematics",
        "Chassis Packaging"
      ],
      "coverImage": "assets/images/gdrive-photos/Screenshot 2026-08-16 155149.png",
      "cadGallery": [
        {
          "url": "assets/images/extracted/smoke_starlight_agv_cad.png",
          "title": "Trackless Dark Ride AGV CAD Assembly",
          "caption": "Chassis packaging layout with dual independent steer pods."
        },
        {
          "url": "assets/images/extracted/smoke_starlight_swerve_pod.png",
          "title": "AGV Kinematics & Steer Simulation",
          "caption": "Independent swerve pod steering analysis."
        }
      ],
      "summary": "Explore a steampunk observatory in this omnidirectional dark ride. Features a low-profile structural chassis, dual independent steer-drive wheel units, and custom Python steering maths for smooth zero-radius pivot turns.",
      "keyMetrics": [
        {
          "label": "Turning Radius",
          "value": "0.0 m (Zero-Turn)"
        },
        {
          "label": "Chassis Mass",
          "value": "Lightweight Optimised"
        },
        {
          "label": "CAD Parts",
          "value": "85+ Components"
        },
        {
          "label": "Guidance Type",
          "value": "Optical / Floor Tracking"
        }
      ],
      "article": {
        "problemStatement": "Ever wanted to explore space through the eyes of a steampunk inventor? In this ride you can! Explore the libraries, get flung around black holes and maybe meet a few new friends along the way. This omnidirectional trackless dark ride takes you into the observatory of Professor Elizabeth Starling, who is known for her creativity not her technical skills, and explores what happens when astronomical inventions start to go wrong. I'm sure it'll be fine.\n\n\nModern dark ride attractions (like Rise of the Resistance or Ratatouille) rely on trackless vehicles that can spin, slide, and navigate without a visible floor track. I wanted to challenge myself to design an AGV chassis from scratch that could handle smooth translation and zero-radius pivot turns while keeping all heavy electronics low to the floor for stability. The main focus of this project for me was the wheel pods, I wanted to learn how they work and have a go at writing some code which could control them.\n\nAs with all rides there are constraints to the movements of the vehicle and paths in rooms need to be mapped carefully, this is something I have attempted for the black hole room which will be featured in a different tab. This helped me to learn about the safety envelopes around a vehicle as it travels and to explore mapping a room in python script.\n\nAs with all of my designs, I wanted the mechanisms to be cohesive with the emotional storytelling of the ride.",
        "cadArchitecture": "The wheel module is constructed with a mixture of sourced parts and parts I have designed myself. For this model, I wanted to practice assembling the pod and figuring out which parts go together to make the system work. Therefore, designing every element from scratch was not my priority.\n\nThe parts I modelled myself were the yoke and the brackets which connect the yoke to the slewing bearing. The slewing bearing, wheel an gears were all sourced components.\n\nI modelled the full chassis in SolidWorks as simple shapes to form panels and boxes. As part of the overall assembly, I included a lap bar restraint and a seat configuration which seats 2 people and provides ample leg room ( a fact which I had not initially considered but later realised was an issue). The seat itself sits a slight recline as this is more comfortable for riders rather being sat vertically upright. Other than these operational features and boxes which bloc out space for control systems and batteries, the design is much more aesthetic than practical.\n",
        "calcsAndSimulation": "I wanted to use this project as a chance to expand my knowledge of python as a programming language so I created a simple script which controls a wheel in two scenarios. One if a slow forward movement and the other is a vehicle rotation. I then linked them together to create a forward-to-spin transition.\n\n• **Simple Wheel Control:**\n```python\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom fontTools.misc.cython import returns\n\nLX = 0.525\nLY = 0.575\nWHEEL_RADIUS = 0.080\n\npod_positions = {\n    \"Front_Left\": [LX, LY],\n    \"Front_Right\": [LX, -LY],\n    \"Rear_Left\": [-LX, LY],\n    \"Rear_Right\": [-LX, -LY]\n}\n\ndef calculate_swerve_kinematics (Vx, Vy, omega):\n    results = {}\n    for name, pos in pod_positions.items():\n        x_i = pos[0]\n        y_i = pos[1]\n\n        v_pod_x = Vx - (omega * y_i)\n        v_pod_y = Vy + (omega * x_i)\n\n        target_velocity = np.sqrt(v_pod_x ** 2 + v_pod_y ** 2)\n        target_angle_rad = np.arctan2(v_pod_y, v_pod_x)\n\n        motor_rpm = (target_velocity / WHEEL_RADIUS) * (60.0 / 2.0 * np.pi)\n\n        results[name] = {\n            \"speed_mps\" : target_velocity,\n            \"steer_drag\" : np.degrees(target_angle_rad),\n            \"motor_rpm\" : motor_rpm\n        }\n\n    return results\n\n\n\n\nprint(\"Scenario 1: Pure Forward (Vx=1.5 m/s) \")\nscen_1 = calculate_swerve_kinematics(Vx=1.5, Vy=0, omega=0)\nfor pod, data in scen_1.items():\n    print(f\"{pod} : Angle = {data['steer_drag']:.1f}deg | Motor = {data['motor_rpm']:.1f} rpm\")\n\nprint(\"Scenario 2: Spin-on-the-Spot (omega=1.0 rad/s) \")\nscen_2 = calculate_swerve_kinematics(Vx=0, Vy=0, omega=1.0)\nfor pod, data in scen_2.items():\n    print(f\"{pod} : Angle = {data['steer_drag']:.1f}deg | Motor = {data['motor_rpm']:.1f} rpm\")\n\n\ntime_array = np.linspace(0, 5, 100)\nfl_angles = []\n\nfor t in time_array:\n    if t < 2.0:\n        frame = calculate_swerve_kinematics(Vx=1, Vy=0, omega=0)\n    else:\n        frame = calculate_swerve_kinematics(Vx=0, Vy=0, omega=1.0)\n    fl_angles.append(frame[\"Front_Left\"][\"steer_drag\"])\n\nplt.figure(figsize = (8.0,4.0))\nplt.plot(time_array, fl_angles, label=\"Front Left Pod Angle\", color=\"red\", linewidth=2.0)\nplt.title(\"AGV Steering Actuation Profile: Forward-to-Spin Transition\")\nplt.xlabel(\"Time (s)\")\nplt.ylabel(\"Steering Target Angle (Degrees)\")\nplt.grid(True, linestyle = \"--\", alpha = 0.6)\nplt.legend()\nplt.show()\n```",
        "prototypingAndTesting": "One of the story elements I wanted to include was a room where Professor Starling has created what she thinks is a secure black hole containment facility. However, the black hole is not secure and starts to cause the vehicles to orbit it slowly easing towards the centre before being thrust out of the room through 3 different exits.\n\nI modelled this room in python with a few variations. Because this was a task about envelopes and mapping the route the vehicle would take I simulated a room with only one exit where the vehicle circles the hole then accelerates out.\n\n",
        "takeaways": "This project taught me so much about spatial packaging in mechatronic systems — especially how early mathematical modelling in Python directly prevents headaches when sizing motors in CAD.",
        "tabTitles": {
          "problem": "1. The Goal",
          "cad": "2. CAD Architecture",
          "calcs": "3. Wheel Control",
          "prototyping": "4. Room Mapping",
          "takeaways": "5. What I Learned & Next Steps"
        },
        "tabSubtitles": {
          "problem": "Story, design brief & operating constraints",
          "cad": "Wheel module and chassis design",
          "calcs": "Python simulation of the control of 1 wheel for specific motion",
          "prototyping": "Python mapping of a room with a central black hole feature",
          "takeaways": "Engineering lessons learned, manufacturability review & next milestones"
        },
        "tabImages": {
          "problem": [
            {
              "url": "assets/images/extracted/smoke_starlight_agv_cad.png",
              "title": "AGV 3D CAD Model",
              "caption": "Omnidirectional vehicle chassis."
            }
          ],
          "cad": [
            {
              "url": "assets/images/extracted/smoke_starlight_swerve_pod.png",
              "title": "Swerve Pod Mechanism",
              "caption": "Independent steer drive kinematics."
            }
          ],
          "calcs": [],
          "prototyping": [],
          "takeaways": [
            {
              "url": "assets/images/extracted/smoke_starlight_agv_cad.png",
              "title": "Final Vehicle Architecture",
              "caption": "Trackless dark ride vehicle."
            }
          ]
        }
      }
    }
  ],
  "universityProjects": [
    {
      "id": "reaching-aid-cad",
      "title": "Assistive Mechanical Reaching Aid",
      "subtitle": "1st Year Mechanical Engineering Design, CAD & Prototyping Task (University of Sheffield)",
      "category": "themed-rides",
      "featured": false,
      "badge": "1st Year Individual Task",
      "timeline": "2024 - 2025",
      "tools": [
        "SolidWorks",
        "BS 8888 Drawing",
        "Laser Cutting (MDF)",
        "Stress & Limit Testing"
      ],
      "coverImage": "assets/images/real-cad/reaching_aid_assembly_drawing.png",
      "cadGallery": [
        {
          "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png",
          "title": "1st Year Reaching Aid CAD Assembly Drawing",
          "caption": "Detailed engineering drawing by Lucy Robinson showing multi-body assembly, internal trigger linkage, and dimensional specifications."
        },
        {
          "url": "assets/images/real-cad/reaching_aid_gripper_part_drawing.png",
          "title": "Precision Gripper Jaw Part Drawing",
          "caption": "Manufacturing drawing specifying hole tolerances, radii, and laser-cut profile dimensions."
        },
        {
          "url": "assets/images/real-cad/trigger_mechanism_drawing.png",
          "title": "Actuation Trigger Mechanism Detail",
          "caption": "Detailed component drawing with BS 8888 projection and GD&T callouts."
        }
      ],
      "summary": "1st Year Mechanical Engineering individual design task at the University of Sheffield. Assembled the CAD mechanism from standard parts, designed a custom gripper jaw, laser cut the prototype from MDF to physically visualize mechanical force transfer, and tested it to destruction in the workshop to observe structural limits and failure modes.",
      "keyMetrics": [
        {
          "label": "Project Type",
          "value": "1st Year Individual Task"
        },
        {
          "label": "Rapid Prototyping",
          "value": "Laser Cut MDF"
        },
        {
          "label": "Testing Method",
          "value": "Destructive Load Testing"
        },
        {
          "label": "Drawing Standard",
          "value": "BS 8888 GD&T"
        }
      ],
      "article": {
        "tabTitles": {
          "problem": "1. Design Brief & Task",
          "cad": "2. CAD Assembly & Gripper Design",
          "calcs": "3. Force Distribution & Stress",
          "prototyping": "4. Laser Cutting (MDF) & Workshop Limit Testing",
          "takeaways": "5. What I Learned & Failure Analysis"
        },
        "tabSubtitles": {
          "problem": "1st Year University of Sheffield individual mechanical engineering project brief",
          "cad": "SolidWorks assembly constraints from given components and custom gripper mechanism design",
          "calcs": "Linkage mechanics, mechanical advantage & load transfer analysis",
          "prototyping": "Physical MDF laser cutting, hands-on assembly & destructive workshop testing",
          "takeaways": "Hands-on understanding of stress concentration, failure modes & real-world mechanics"
        },
        "tabImages": {
          "problem": [
            {
              "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png",
              "title": "Reaching Aid Assembly Drawing (BS 8888)",
              "caption": "1st Year Mechanical Engineering assembly drawing with full bill of materials and dimensional callouts."
            }
          ],
          "cad": [
            {
              "url": "assets/images/real-cad/reaching_aid_gripper_part_drawing.png",
              "title": "Custom Gripper Jaw Component Drawing",
              "caption": "Custom designed jaw profile for object grasping and pivot pin hole fits."
            },
            {
              "url": "assets/images/real-cad/trigger_mechanism_drawing.png",
              "title": "Trigger Linkage Detail Drawing",
              "caption": "Actuation trigger mechanism transferring pull force through the main arm."
            }
          ],
          "calcs": [],
          "prototyping": [],
          "takeaways": [
            {
              "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png",
              "title": "Final CAD Model & Drawing Pack",
              "caption": "Completed 1st year design package bridging digital CAD with physical laser-cut testing."
            }
          ]
        },
        "problemStatement": "**1st Year University Design Task**\nThis was an individual Year 1 Mechanical Engineering project at the University of Sheffield. The objective was to develop an assistive mechanical reaching tool designed to help users pick up objects with minimal hand effort.\n\nThe project brief challenged us to take a set of standard mechanical base components, assemble them into a working CAD model, and design our own custom gripper mechanism. The goal was to bridge the gap between digital 3D CAD modeling, physical manufacturing, and practical mechanical testing — taking a design from initial CAD mates all the way to a physical working prototype.",
        "cadArchitecture": "**CAD Assembly & Custom Gripper Design**\nWorking in SolidWorks, I assembled the base reaching aid subassemblies from the provided standard component parts, establishing accurate mechanical mates to ensure realistic linear and rotational movement through the linkages.\n\nBeyond assembling the standard components, I personally designed the **custom gripper jaw mechanism**. Key design considerations included:\n* **Linkage Kinematics:** Sizing the pivot pin positions and lever arms to maximize mechanical advantage so a gentle squeeze on the handle creates sufficient gripping force at the jaws.\n* **Gripper Geometry:** Shaping the jaw profile to securely hold objects of varying sizes and diameters without slipping.\n* **BS 8888 2D Drawing Package:** Created complete engineering drawings with standard projections, section views, tolerances, and dimensional callouts following BS 8888 guidelines.",
        "calcsAndSimulation": "**Force Transfer & Stress Visualization**\nTo ensure the gripper could handle intended loads, I analyzed the mechanical advantage through the trigger-to-jaw linkage:\n* **Mechanical Advantage:** Evaluated the lever ratios across the four-bar linkage so the input pull force from the actuation rod translates into a firm closing clamping force at the jaw tips.\n* **Beam Bending & Shear:** Calculated the bending moments ($M/I = \\sigma/y$) acting along the slender extension arm and shear stresses across the pivot pins when supporting a load at full reach.\n* **Stress Concentrations:** Identified high-stress regions around the laser-cut pivot holes and notch radii where tensile and shear stresses peak under load.",
        "prototypingAndTesting": "**Laser Cut MDF Prototyping & Destructive Workshop Testing**\nTo truly visualize and feel the mechanical forces for ourselves, we manufactured our designs:\n* **Laser Cutting in MDF:** Exported the 2D CAD profiles to laser cut the gripper jaws, linkages, and frame components from MDF sheet.\n* **Hands-on Assembly:** Built and assembled the physical prototype by hand, checking pivot fits, friction, and smooth mechanical motion through the actuation rod.\n* **Workshop Limit Testing (Testing to Failure):** In the university engineering workshop, technicians and instructors put our physical prototypes under test rigs and pushed them to their absolute structural limits. By applying progressively higher loads until the mechanism broke, we were able to directly observe in person how and where the material failed — seeing real-world shear tear-out at the pin holes and bending fracture in the MDF arms.",
        "takeaways": "**What I Learned & Real-World Takeaways**\nPhysically building and breaking our designs was an incredible learning experience that went far beyond pure computer simulation:\n1. **Seeing Failure in Person:** Watching the MDF prototype fail under extreme load in the workshop gave me a deep, practical intuition for stress concentrations, notch sensitivity, and why hole edge margins matter in mechanical design.\n2. **CAD vs. Physical Reality:** It demonstrated firsthand how manufacturing tolerances, pin friction, and material stiffness affect real-world mechanism performance compared to theoretical CAD models.\n3. **Foundation for Mechanism Design:** This project formed a strong foundation for my later, more complex ride mechanism designs (such as coaster bogies and turntable switch tracks) where understanding physical load paths and failure modes is essential for passenger safety."
      }
    },
    {
      "id": "bakerloo-door-cushion",
      "title": "Rolling Stock Pneumatic Door Cushion Mechanism",
      "subtitle": "3D CAD Assembly, Hydraulic / Pneumatic Damping & Impact Mitigation",
      "category": "transit-rail",
      "featured": false,
      "badge": "Real 3D CAD",
      "timeline": "2025 - 2026",
      "tools": [
        "SolidWorks",
        "Pneumatics",
        "Energy Dissipation",
        "Mechanism Kinematics"
      ],
      "coverImage": "assets/images/real-cad/bakerloo_door_cushion_final_cad.png",
      "cadGallery": [
        {
          "url": "assets/images/real-cad/bakerloo_door_cushion_final_cad.png",
          "title": "Final 3D CAD Assembly of Door Cushion Damping Mechanism",
          "caption": "SolidWorks model showing elastomer damping pad, adjustable pneumatic orifice damper, and mounting bracket."
        },
        {
          "url": "assets/images/real-cad/bakerloo_door_mechanism_ideation.png",
          "title": "Mechanical Ideation & Kinetic Energy Dissipation Calculations",
          "caption": "Kinematic layout and deceleration curve plots comparing undamped vs. progressively damped door closure."
        }
      ],
      "summary": "Engineered a progressive pneumatic door cushion mechanism for passenger rolling stock to eliminate door slam wear, reduce cabin acoustic spikes, and improve cycle reliability.",
      "keyMetrics": [
        {
          "label": "Damping Type",
          "value": "Progressive Pneumatic"
        },
        {
          "label": "Impact Reduction",
          "value": "68% Force Attenuation"
        },
        {
          "label": "CAD System",
          "value": "SolidWorks Weldment"
        },
        {
          "label": "Design Life",
          "value": "1,000,000 Cycles"
        }
      ],
      "article": {
        "problemStatement": "Rapid passenger train door cycling causes high impact stresses on door pocket linkages and pneumatic actuators. The objective was to design a compact, retrofit energy absorber.",
        "cadArchitecture": "Modelled a progressive dual-chamber pneumatic cushion with internal metering needle in SolidWorks.",
        "calcsAndSimulation": "• Calculated door kinetic energy at impact ($E_k = \\frac{1}{2} m v^2$) and sized orifice flow area for smooth constant-deceleration damping.",
        "prototypingAndTesting": "• Verified mounting geometry against rolling stock door frame CAD data.",
        "takeaways": "Strengthened my understanding of dynamic damping, fatigue mitigation, and rolling stock maintenance design."
      }
    },
    {
      "id": "bakerloo-access-lift",
      "title": "Transit Platform Accessibility Lift Mechanism",
      "subtitle": "3D CAD Mechanism Design, Scissor Linkage Sizing & Platform Retrofit",
      "category": "transit-rail",
      "featured": false,
      "badge": "Real 3D CAD",
      "timeline": "2024 - 2025",
      "tools": [
        "SolidWorks / Fusion 360",
        "Scissor Linkage",
        "FEA Sizing",
        "Accessibility Standards"
      ],
      "coverImage": "assets/images/real-cad/bakerloo_lift_final_cad.png",
      "cadGallery": [
        {
          "url": "assets/images/real-cad/bakerloo_lift_final_cad.png",
          "title": "Complete 3D CAD Assembly of Wheelchair Lift Mechanism",
          "caption": "SolidWorks 3D CAD model showing modular structural frame, guide rails, and motorized scissor lift."
        },
        {
          "url": "assets/images/real-cad/bakerloo_lift_cad_mechanism.png",
          "title": "Detailed Actuator & Scissor Linkage Subassembly",
          "caption": "Mechanical assembly detailing hydraulic/screw actuator pivot points, bearing blocks, and safety locking cams."
        },
        {
          "url": "assets/images/real-cad/bakerloo_lift_concept_schematic.png",
          "title": "Kinematic Sizing & Force Analysis Schematic",
          "caption": "Engineering calculation schematic for scissor link angles, mechanical advantage, and hydraulic stroke."
        }
      ],
      "summary": "Designed a compact retrofit platform wheelchair lift mechanism for heritage railway stations. Produced 3D CAD assemblies, scissor linkage force calculations, and safety fail-safe interlocks.",
      "keyMetrics": [
        {
          "label": "CAD Package",
          "value": "3D Multi-Body CAD"
        },
        {
          "label": "Payload Capacity",
          "value": "300 kg (Safe Working Load)"
        },
        {
          "label": "Vertical Travel",
          "value": "1.2 m Platform Lift"
        },
        {
          "label": "Safety System",
          "value": "Mechanical Anti-Drop Cam"
        }
      ],
      "article": {
        "problemStatement": "Heritage rail and transit stations often present significant step-free accessibility barriers where traditional civil ramps cannot fit. The design goal was to engineer a compact, high-reliability electro-mechanical scissor lift that folds flush with the platform edge.",
        "cadArchitecture": "Modelled full 3D CAD assemblies including welded base frame, dual scissor linkage arms, synchronized ball-screw actuator, and safety edge pressure sensors.",
        "calcsAndSimulation": "• Calculated instantaneous actuation force throughout the scissor lift extension stroke ($F = W / (2 \tan \theta)$).\n• Performed pin shear stress and beam deflection checks in SolidWorks Simulation.",
        "prototypingAndTesting": "• Verified kinematic folding envelope to guarantee zero gauge clearance infringement on passing trains.",
        "takeaways": "Gained valuable experience packaging safety-critical mechanisms in tight spatial envelopes with strict accessibility guidelines.",
        "tabTitles": {
          "problem": "1. The Goal & Requirements",
          "cad": "2. CAD Architecture & Mechanism Details",
          "calcs": "3. Kinematics, Hand Calculations & Sizing",
          "prototyping": "4. Prototyping, 3D Printing & Testing",
          "takeaways": "5. What I Learned & Next Steps"
        },
        "tabSubtitles": {
          "problem": "Project specifications, design brief & operating constraints",
          "cad": "SolidWorks parametric subassemblies, kinematic joints & tolerance analysis",
          "calcs": "Hand calculations, dynamic simulation & motor torque verification",
          "prototyping": "Rapid prototyping, additive manufacturing & physical test rig sequence",
          "takeaways": "Engineering lessons learned, manufacturability review & next milestones"
        },
        "tabImages": {
          "problem": {
            "url": "assets/images/real-cad/bakerloo_lift_final_cad.png",
            "title": "Complete 3D CAD Assembly of Wheelchair Lift Mechanism",
            "caption": "SolidWorks 3D CAD model showing modular structural frame, guide rails, and motorized scissor lift."
          },
          "cad": {
            "url": "assets/images/real-cad/bakerloo_lift_cad_mechanism.png",
            "title": "Detailed Actuator & Scissor Linkage Subassembly",
            "caption": "Mechanical assembly detailing hydraulic/screw actuator pivot points, bearing blocks, and safety locking cams."
          },
          "calcs": {
            "url": "assets/images/real-cad/bakerloo_lift_concept_schematic.png",
            "title": "Kinematic Sizing & Force Analysis Schematic",
            "caption": "Engineering calculation schematic for scissor link angles, mechanical advantage, and hydraulic stroke."
          },
          "prototyping": {
            "url": "",
            "title": "",
            "caption": ""
          },
          "takeaways": {
            "url": "assets/images/real-cad/bakerloo_lift_final_cad.png",
            "title": "Complete 3D CAD Assembly of Wheelchair Lift Mechanism",
            "caption": "SolidWorks 3D CAD model showing modular structural frame, guide rails, and motorized scissor lift."
          }
        }
      }
    }
  ],
  "diaryEntries": [
    {
      "id": "diary-1",
      "date": "",
      "location": "Disney Parks",
      "title": "The Magic of Disney: Why I think Disney is so Cool",
      "category": "Theming",
      "readTime": "4 min read",
      "coverPhoto": "assets/images/personal/lucy_mickey_framed.jpg",
      "tripPhotos": [
        {
          "url": "assets/images/personal/lucy_disney_mickey.jpg",
          "caption": "Lucy Robinson at Disneyland Paris",
          "tag": "Disneyland Paris Trip"
        }
      ],
      "summary": "My favourite ways Disney ensure an immersive experience at their Parks throughout their parks worldwide",
      "content": "\"Here you leave the world of today and enter a world of yesterday, tomorrow and fantasy\" \n\nThese words, that are written on the entrance archway to many Disney parks worldwide, so accurately describe how it can feel visiting. From the moment you enter, you are surrounded by out of this world theming and incredible engineering. \n\nMany things contribute to the magic of Disney, here I will discuss a few of my favourites:\n\nSightlines\nDisney utilises sightlines throughout their themed areas to maintain a sense that you are actually there in the world of your favourite characters. This is something often missed by many parks,  but seeing a space station in the background where you are supposed to be in an African savannah can be jarring and pull you our of the immersion of the park. When building rides, it is common practice to use colourful balloons to map out what guests will see from different locations in the park and ensure nothing is amiss. Recently this practice has been spotted during the construction of the new Piston Peak land in Majic Kingdom.\n\nColours\nAs you would expect from a theming giant, Disney is not fond of guests seeing their backstage areas. One way they tackle this, is the use of psychology through colours. The main two colours that they use are named \"Go Away Green\" and \"Bye-Bye Blue\" both of which are used all over Disney parks across the globe. \"Go Away Green\" is used for everyday nuisances like bins, it is designed to be the colour of foliage or bushes and thus is ignored by many people. \"Bye-Bye Blue\" mimics the colour of sky and is often seen on taller show buildings and is also commonly used in other industrial settings.\n\nCast Members\nThe staff at theme parks can make or break an experience and the\" cast members\" at Disney really are the best of the best. Whether you are in Paris or Tokyo, Magic Kingdom or Hollywood Studios, they are there bringing their light and joy (or sometimes misery in the case of some rides) to make every single guests day the best they can. Each placement has a unique costume to fit the theme from rides to hotels and it really helps you to feel immersed in the Disney bubble. As in many situations the people you interact with is often what makes the difference between misery and magic. \n\n\n      "
    },
    {
      "id": "diary-2",
      "date": "Summer 2026",
      "location": "London, UK (Transit Study)",
      "title": "Roller Coasters vs. Railway Signalling",
      "category": "Safety & Systems",
      "readTime": "5 min read",
      "coverPhoto": "assets/images/gdrive-photos/dlr-route-map.gif",
      "tripPhotos": [],
      "summary": "Comparing safety-critical railway Communications-Based Train Control (CBTC) moving-blocks with fixed-block systems used on roller coasters.",
      "content": "Signalling is a key system in both theme parks and in large scale transit like the DLR (Docklands Light Railway). There are however key differences between them.\n\n\nFrom my work on the DLR, I learnt about how these vehicles, and most modern railways use moving-block signalling. This means that each moving vehicle is tracked through its journey and creates its own block surrounding it that no other vehicle can enter. This system works incredibly to maintain scheduling of high use routes and to increase the number of units which can be deployed at once. This works by the system continuously tracking every vehicle and calculating safe distances between them to keep separation.\n\n\nRollercoasters on the other hand, use older style fixed block systems. Although they reduce capacity this system is needed for rides that are not continuously controlled. In this system, only one train can enter each fixed area of the track (a block) and another train cannot enter until the block is completely cleared. These blocks are usually set by different areas where a train can be stopped along the layout, for example brake runs or lift hills. Increasing the number of blocks on a layout can be key on popular rides to keep operations smooth and queue times down.\n\n\nEach system is specifically suited to the use case.\n\n\nFor the DLR, capacity is everything, the point of the system is to move large quantities of people from A to B in the shortest possible time. Using moving blocks gives it this capability. More trains per hour is more passengers and better use of existing lines without the need for additional infrastructure. Furthermore, trains are less predictable than rollercoasters. They change weight depending on load they can adhere more or less depending on weather conditions and routes are not fixed within a closed system. These moving blocks allow for higher adaptability in the system.\n\n\nIn rollercoasters, on the other hand, simplicity often means safety. The system of fixed blocks is more suited to this mentality, if you are uncertain at all you have a very wide margin of error to force separation between vehicles. The trains are also more predictable, the route is always the same, the speed is generally the same and the load is set to the number of seats on the ride. They also don’t need the capacity. Most coasters only allow the running of up to 5 trains so is there any point upgrading to a moving block which is far more costly and complex to implement. Another key consideration with these rides is they can’t just stop anywhere; they usually use gravity as a driving force. If you get an error in a location where nothing can be done to stop the motion and accidents happen. Thus, fixed blocks all the way.\n\n\nHopefully this gives a good idea of how different signalling approaches work better\nfor different situations."
    },
    {
      "id": "diary-1786899334341",
      "title": "Ride Breakdown: Hyperia",
      "location": "Thorpe Park",
      "date": "",
      "readTime": "3 min read",
      "category": "Ride Analysis",
      "coverPhoto": "assets/images/personal/europa_park_water_coaster.jpg",
      "summary": "Hyperia was extremely anticipated among the UK enthusiast community and I followed its journey from the start",
      "content": "Walking down Monks Walk on a cold, muddy afternoon may not seem like everyone's preferred activity, but during 2023 and 2024 I was one of many who were excited to visit this seemingly random footpath. Why? Hyperia was being build at Thorp Park and this was one of the best spots to keep up with the construction firsthand and have a rear opportunity to watch a coaster being built. \n\nHyperia is the UK's tallest and fastest rollercoaster standing at an incredible 236 feet and reaching top speeds of 81 mph. And I have to say I think it's one of our best.\n\nIn terms of the track layout, the ride is short but punchy. Immediately after leaving the station you are displayed to all the anxious queuers in an outer banked turn, and that's before you even hit the lift hill. The lift hill its self can feel long and is deliberately loud, this builds even more anticipation before you hit that first drop (arguably the rides best element). a 236 foot drop, matching the overall height of the coaster, is a brilliant start to a short ride. The force from the drop pulls the rider into their seat ready to be floated out over the inverting and non-inverting elements.\n\nThe ride layout contains one of my personal favourite elements the non-inverting Immelman. This has for a long time been on of my preferred elements due to the twist, you think you are going to loop but at the last moment you are flipped and never actually invert. Pair that with outer banks and a dive loop and the thrill is there. It has very few rides that can even attempt to compete and that's what makes it so pivotal in the UK enthusiast community.\n\nOne thing I have always noticed about it, is the prominent and loud motor which controls the chain lift. Is it purposefully disruptive? I think so!  Having a roaring motor right in the ride queue creates the ultimate sense of anticipation for the hyper-coaster you are about to ride. I do, however, as someone who is neurodivergent, find it quite jarring and often over-stimmulating which can be hard when the queue can reach an hour easily. I personally don't feel like I need to use a ride access queue as I am capable of waiting but this one feature does make me wonder if I should?\n\nOverall, it's a coaster which has put the UK on the map as a place worth visiting for coasters and proves the skill of Mack Rides to develop incredible experiences. (Not that you need more proof if you have been to Europa Park)",
      "tripPhotos": []
    }
  ],
  "experience": [
    {
      "role": "Mechanical Engineering Summer Intern",
      "company": "Transport for London (TfL) — Docklands Light Railway",
      "division": "Electrical & Mechanical Engineering",
      "period": "Summer 2026 (June 2026 - Present)",
      "location": "London, UK",
      "summary": "Worked on lighting requirements across the network and built a heating and cooling model for a new building renovation. Gained an appreciation for safety systems in buildings."
    },
    {
      "role": "Beaver Scout Leader",
      "company": "Scouts",
      "division": "Children",
      "period": "2025 - present",
      "location": "Sheffield, UK",
      "summary": "Volunteering with 36th Sheffield Beavers while at university. Always cheered up by a group of rowdy 6 - 8 year olds."
    },
    {
      "role": "Sheffield Engineering Leadership & Service Award (SELSA)",
      "company": "University of Sheffield — Faculty of Engineering",
      "division": "Leadership & Professional Development Programme",
      "period": "2025 - Present",
      "location": "Sheffield, UK",
      "summary": "Selected for the competitive Sheffield Engineering Leadership & Service Award (SELSA) programme designed for high-achieving engineering undergraduates to learn leadership skills by engaging in talks and workshops."
    },
    {
      "role": "MEng Mechanical Engineering Student",
      "company": "University of Sheffield",
      "division": "Department of Mechanical Engineering",
      "period": "2024 - Present",
      "location": "Sheffield, UK",
      "summary": "Achieved 1st Class Honours across both Year 1 and Year 2. Modules such as Solid Mechanics, Dynamics, Design Projects, and Mathematics."
    },
    {
      "role": "National Young Ambassador",
      "company": "England Golf & Golf Foundation",
      "division": "Youth Leadership & Public Engagement",
      "period": "2022 - 2024",
      "location": "United Kingdom",
      "summary": "Volunteered with England Golf and Golf Foundation to support ED&I within golf. Recipient of the National Hero's Handshake Award for leadership, public engagement, and peer mentoring."
    }
  ],
  "education": {
    "degree": "MEng in Mechanical Engineering",
    "institution": "University of Sheffield",
    "timeline": "2024 - 2028 / 2029",
    "status": "Entering Year 3 in Autumn 2026 (Working at 1st Class)",
    "coursework": [
      "Mechanics of Solids & Stress Analysis",
      "Dynamics",
      "Kinematics & Vibrations",
      "Fluid Dynamics & Aerodynamics",
      "Thermodynamics & Heat Transfer",
      "Arduino & Mechatronics",
      "MATLAB & Computational Engineering",
      "Robotics"
    ],
    "university": "University of Sheffield",
    "grade": "Entering Year 3 in Autumn 2026 (Working at 1st Class)"
  },
  "mediaLibrary": [
    {
      "name": "Screenshot 2026-08-31 111120",
      "url": "assets/images/user-photos/Screenshot_2026-08-31_111120_0.png",
      "category": "uploaded",
      "date": "31/08/2026",
      "size": "465 KB"
    },
    {
      "name": "Screenshot 2026-08-31 111120",
      "url": "assets/images/user-photos/Screenshot_2026-08-31_111120_1.png",
      "category": "uploaded",
      "date": "31/08/2026",
      "size": "465 KB"
    },
    {
      "name": "Picture of me",
      "url": "assets/images/user-photos/Picture_of_me_2.jpg",
      "category": "uploaded",
      "date": "18/08/2026",
      "size": "207 KB"
    },
    {
      "name": "DLR Map",
      "url": "assets/images/extracted/disneyland_paris_mine_train_trip.jpg",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "1QSV1DYFn-UABSpRQGboaqUGllYvDOmVw",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "PXL_20240113_124440168",
      "url": "assets/images/user-photos/PXL_20240113_124440168_4.jpg",
      "category": "uploaded",
      "date": "16/08/2026",
      "size": "1962.1 KB"
    },
    {
      "name": "Wheel Bogie",
      "url": "assets/images/extracted/smoke_starlight_swerve_pod.png",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "14XVvmw2ZBQkrYNz3EPdQ0aFjBLV1MtQq",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "Trackless Vehicle",
      "url": "assets/images/extracted/smugglers_mine_train_bogie_cad.png",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "1aPsaimfXWQa7EjavhTKqG4tHpexdzdqX",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "Minetrain",
      "url": "assets/images/extracted/smoke_starlight_agv_cad.png",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "1ih3GZk_zLo18EtBwJ20_paufO5vEPKcL",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "Turntable",
      "url": "assets/images/extracted/time_machine_turntable_cad.png",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "1eG_FnaOQ3_2uWfNwz78wFZQIvTzh7sE-",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "Omnidirectional Wheel",
      "url": "assets/images/extracted/smugglers_bogie_assembly_drawing.png",
      "category": "uploaded",
      "source": "google-drive",
      "driveId": "1itERbwDuXtTREaybPI9vDK--5s0y2Qtb",
      "date": "16/08/2026",
      "size": "Google Drive"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155035",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155035.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155149",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155149.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155235",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155235.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155258",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155258.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155306",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155306.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155353",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155353.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 16 155400",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-16 155400.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 164943",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 164943.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165051",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165051.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165119",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165119.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165421",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165421.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165837",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165837.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165848",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165848.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165908",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165908.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165942",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165942.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 17 165948",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-17 165948.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 31 111120",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-31 111120.png",
      "category": "cad"
    },
    {
      "name": "Google Drive Upload 2026 08 31 111213",
      "url": "assets/images/gdrive-photos/Screenshot 2026-08-31 111213.png",
      "category": "cad"
    },
    {
      "name": "Dlr Route Map",
      "url": "assets/images/gdrive-photos/dlr-route-map.gif",
      "category": "trips"
    }
  ],
  "coasterCredits": [],
  "documents": [
    {
      "name": "assets/documents/Lucy_Robinson_CV.pdf",
      "url": "assets/documents/Lucy_Robinson_CV.pdf",
      "size": "235.9 KB",
      "dateAdded": "2026-08-18"
    }
  ],
  "dataVersion": "gh_1789206740624"
};
