/**
 * PORTFOLIO DATA SOURCE
 * Lucy Robinson - Mechanical Engineering & Themed Ride Systems
 * Auto-Synchronized from Visual Studio Editor to GitHub Repository
 * Updated: 2026-09-15T13:56:00.000Z
 */

const PORTFOLIO_DATA = {
  "profile": {
    "name": "Lucy Robinson",
    "preferredName": "Lucy",
    "role": "Mechanical Engineering Student (MEng)",
    "tagline": "A Mechanical Engineering student and Royal Academy Scholar with a passion for ride engineering and design!",
    "subtagline": "RAEng ELS Scholar \u2022 Mechanical Engineering at University of Sheffield \u2022 Summer Intern at TfL DLR",
    "currentStatus": {
      "active": true,
      "role": "Mechanical Engineering Summer Intern",
      "company": "Transport for London (Docklands Light Railway)",
      "division": "Electrical & Mechanical Engineering",
      "location": "London, UK"
    },
    "personalStory": {
      "headline": "Hooked on the mechanics of making you feel.",
      "bioParagraph1": "Hi, I'm Lucy! Ever since I rode my first coaster, I\u2019ve been fascinated by what\u2019s happening behind the scenes: how wheel bogies articulate around banked curves, how switch tracks lock in split seconds, and how mechanical fail-safes guarantee safety without interrupting the thrill. Roller coasters are my safe space. When I am on a ride I feel free, buzzing with excitement and adrenaline. My dream is to share that feeling with as many people as possible in the only way I know how: storytelling through engineering!",
      "bioParagraph2": "I'm entering my 3rd year studying Mechanical Engineering (MEng) at the University of Sheffield, where I have achieved 1st Class Honours across both Year 1 and Year 2. I love the physical, hands-on side of engineering: opening SolidWorks or Fusion 360, running the maths on bearing loads and linkages, and heading straight to my piles of cardboard to start modelling right away. But I also love how an engineering project can impact people around it, making them feel a particular way and telling a memorable story.",
      "bioParagraph3": "Alongside my personal projects, I spent my summer between 2nd and 3rd year interning with the building services Electrical & Mechanical engineering team at Transport for London (DLR), gaining valuable perspective on the engineering in the buildings and stations that keep London moving, while learning how to put the user first in everything I do. I have also recently joined the 31st cohort of Engineering Leaders Scholars at the Royal Academy of Engineering."
    },
    "workbenchLive": {
      "currentBuild": "Ride Vehicle Rotary Turntable & Track Switch",
      "status": "Finalising CAD",
      "currentSoftware": "SolidWorks & Python",
      "nextMilestone": "Using FEA to validate that materials withstand all load cases"
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
          "elements": "105\u00b0 Beyond-Vertical Launch, 7 Inversions",
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
          "elements": "Trommel Drum Spiral Lift, 360\u00b0 Rotations",
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
          "elements": "32\u00b0 Catapult Launch, Tongue Inversion",
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
          "elements": "Dual LSM Flying Launch, 360\u00b0 Inline Rolls",
          "engNote": "Patented 90\u00b0 rotating chassis seats transition riders from sideways load station to prone aerodynamic flight position."
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
          "elements": "180 ft 87\u00b0 Drop into Underground Tunnel",
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
          "engNote": "Dual-pivot vest restraint mechanism tilting riders 90\u00b0 into prone position with dual mechanical locking pins."
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
          "elements": "65\u00b0 First Drop, High-Speed Coastal Turnaround",
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
        "desc": "Whether it\u2019s an articulated coaster train or an assistive device, good mechanical design makes complex motion feel effortless, safe, and comfortable."
      }
    ],
    "recruiterBrief": {
      "statusLine": "University of Sheffield MEng Mechanical Engineering | TfL DLR Intern | Class of 2028",
      "targetRoles": "Themed Entertainment, Ride Systems & Mechanical Engineering Roles",
      "keyHighlights": [
        "MEng Mechanical Engineering student at University of Sheffield (1st Class Honours in Year 1 & Year 2).",
        "Modelled & built a physical Trackless Dark Ride AGV in SolidWorks.",
        "Designed an articulated 3-wheel coaster bogie and mine train car assembly.",
        "Engineering an active rotary ride vehicle turntable with slewing ring bearing.",
        "Produced complete engineering drawing sets (BS 8888 / ASME Y14.5) and stress analysis for Hackcessible assistive devices.",
        "Summer Intern at Transport for London (DLR E&M) and Sheffield Engineering Leadership (SELSA) award member."
      ],
      "summary": "Lucy is an MEng Mechanical Engineering student at the University of Sheffield with hands-on CAD mechanism design and transit rolling stock placement experience at Transport for London (TfL DLR)."
    },
    "location": "Sheffield & London, UK",
    "university": "University of Sheffield",
    "degree": "MEng Mechanical Engineering",
    "graduationYear": "Class of 2028 / 2029",
    "socials": {
      "email": "lucyalicerob@gmail.com",
      "phone": "+44 7491 232212",
      "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b"
    },
    "title": "",
    "email": "",
    "phone": "",
    "bio": "RAEng ELS Scholar \u2022 Mechanical Engineering at University of Sheffield \u2022 Summer Intern at TfL DLR ",
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
      "award": "",
      "status": "Entering Year 3 in Autumn 2026 (Working at 1st Class)"
    },
    "statusPillText": "ACTIVE // Mechanical Engineering Student",
    "footerCopy": "\u00a9 2026 Lucy Robinson. Mechanical Engineering (MEng), University of Sheffield.",
    "heroSpotlight": {
      "itemId": "trackless-vehicle",
      "customBadge": "Highlight",
      "customMeta": "Solidworks"
    },
    "aboutPhoto": "assets/images/personal/lucy_mickey_framed.jpg",
    "aboutLocationTag": "Disneyland Paris",
    "aboutCardBadge": "About Me",
    "cvUrl": "assets/documents/Lucy_Robinson_CV.pdf",
    "cvFileName": "assets/documents/Lucy_Robinson_CV.pdf",
    "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b",
    "social": {
      "linkedin": "https://www.linkedin.com/in/lucy-robinson-a6128838b"
    },
    "contactHeading": "Interested in Connecting or <em>Working Together</em>?",
    "contactMessage": "I\u2019m always open to discussing new engineering opportunities, creative collaborations, or simply connecting with fellow engineers and designers. Feel free to reach out!"
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
      "title": "The Smugglers' Mine Train",
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
      "coverImage": "assets/images/user-photos/Screenshot_2026-08-16_155235.png",
      "cadGallery": [
        {
          "title": "Smugglers Mine Train Bogie 3D CAD",
          "url": "assets/images/real-cad/smugglers_mine_train_bogie_cad.png"
        },
        {
          "title": "Bogie Assembly Drawing Pack (BS 8888)",
          "url": "assets/images/real-cad/smugglers_bogie_assembly_drawing.png"
        },
        {
          "title": "Kinematic Turning & Articulation Studies",
          "url": "assets/images/user-photos/Screenshot_2026-08-17_165848.png"
        },
        {
          "title": "Track Gauge Clearance Analysis",
          "url": "assets/images/user-photos/Screenshot_2026-08-17_165942.png"
        }
      ],
      "summary": "You are a smuggler using abandoned rails to escape the law. Will you get away in time? Features include a themed car, overhead restraints, precision 3-wheel bogie assemblies (road, side guide, and upstop wheels), a simple coupling system, chain lift hitch, and anti-rollback dogs.",
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
        "problemStatement": "**Story**\nAs an 18th-century smuggler, you find yourself in a race to avoid capture and successfully get your stolen goods out of the city before the law catches up with you. While running, you find an abandoned mine with carts ready to speed away, but little do you know these carts are not as stable as they look!\n\n**Project Constraints**\nTheme park ride vehicle design needs a high level of coordination between passenger safety, structural resistance, and dynamic compliance. This project targets the development of a concept design for a classic mine train style coaster car, constrained to operate on 160mm diameter tubular steel track with tight turns and the possibility for inversions. This design brief requires the vehicle to withstand high forces over a multi-year operational lifespan while maintaining high passenger throughput via the option for varying train lengths to maximise capacity and compatibility with fast loading times.\n\nCompliance with ASTM F24 international design standards was a key focus throughout this project. The vehicle geometry is bound by clearance envelopes to ensure passenger safety and avoid interference with theming elements. I specifically included wheel geometry with allowable compliance within the joints to reduce strain on the wheels and minimize fatigue damage. Although the geometry is straightforward, every feature has a purpose to increase passenger safety and enjoyment.",
        "cadArchitecture": "The mechanical architecture of the vehicle relies on building subassemblies from the bottom up within SolidWorks. To achieve accurate motion along a track, I designed a 3-wheel style bogie. The subassemblies of 2 road wheels, 2 side-guide wheels, and 2 upstop wheels contribute to the overall master assembly. Each serves its own purpose: the road wheels support vehicle and passenger mass, the side wheels counter lateral forces encountered during turns, and the upstop wheels secure the vehicle to the track during airtime.\n\nVehicle connections are achieved through a coupler at the front and back of each vehicle connected by a chain link joint. These allow smooth articulation along complex track layouts, easier navigation of tight corners, and multiple directions of independent movement for each car.\n\nEvery joint is defined by precise mates to ensure alignment is as realistic as possible.",
        "calcsAndSimulation": "Maintaining a high factor of safety through dynamic elements was vital for this project. You might have found a way out, but it won't be simple! During the ride, I want passengers to feel like the track is precarious through vibrations and sudden movements. To validate the structural integrity of the wheel bogie system, I conducted two independent FEA studies under common operational load cases:\n\n**Study 1: Unbanked Lateral Turn**\nSimulated an unbanked high-speed turn by applying 1.5G of lateral force to one set of side-guide wheels, normal to the outer contact surface.\n\n**Study 2: Gravity Track Valley**\nSimulated a high-compression valley, common on gravity-driven coasters, by applying 4.0G of vertical load normal to the outside surface of all road wheels.",
        "prototypingAndTesting": "Beyond the primary chassis components, many intentional mechanical features were integrated into the design:\n\nI established a chain lift connection system on the vehicle base as well as an anti-rollback dog. These are both robust components that rotate about single axles to provide essential mechanical safety on lift hills.\n\nIndividual over-the-shoulder restraints were added to the seats. These restraints allow for inversions in the track layout to mimic evasive escape manoeuvres. They connect behind the headrests and, in a full production iteration, would feature dual redundant hydraulic locking pins for maximum security and inclusivity.\n\nThe four seats in the ride vehicle are angled back 10 degrees to increase passenger comfort and optimize sightlines from the rear row.\n\nThe vehicle floor extends outward to form protective wheel fairings alongside the car. This allows the seats to be positioned lower, keeping the centre of gravity close to the track. This low-slung seating position also heightens the sense of vulnerability and excitement for riders.",
        "takeaways": "This build gave me a deep understanding of coaster track-wheel kinematics and the importance of parametric mate definitions in SolidWorks. It also taught me how to structure modular subassemblies, allowing me to repurpose standard components and increase design efficiency.\n\nFuture technical improvements include refining the lift hill drive dog mechanisms and adding sensors along the chassis to support block signalling systems. I would also love to build a physical scale prototype to test these kinematic mechanisms hands-on.\n\nI look forward to collaborating with creative teams in the future to develop custom track layouts and storytelling elements that further enhance the rider experience.",
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
              "title": "Smugglers Mine Train Bogie CAD",
              "caption": "CAD assembly of the 3-piece articulated chassis showing wheel assemblies and guide rollers.",
              "url": "assets/images/user-photos/Screenshot_2026-08-16_155235.png"
            }
          ],
          "cad": [
            {
              "title": "Bogie Assembly Drawing",
              "caption": "Engineering drawing detailing wheel spacing, axle geometry, and articulation limits.",
              "url": "assets/images/user-photos/Screenshot_2026-08-16_155306.png"
            }
          ],
          "calcs": [
            {
              "title": "Bogie Kinematic Calculations",
              "caption": "Wheel load and turning radius analysis.",
              "url": "assets/images/user-photos/Screenshot_2026-08-17_165848.png"
            },
            {
              "title": "Tolerance & Clearance Study",
              "caption": "Track gauge clearance and guide wheel contact analysis.",
              "url": "assets/images/user-photos/Screenshot_2026-08-17_165942.png"
            }
          ],
          "prototyping": [
            {
              "title": "Bogie Manufacturing & Component Assembly",
              "caption": "SolidWorks 3D model and machining tolerance layout for bogie wheel sets and pivot joints.",
              "url": "assets/images/real-cad/smugglers_mine_train_bogie_cad.png"
            }
          ],
          "takeaways": [
            {
              "title": "Final Engineering Drawing Pack (BS 8888)",
              "caption": "Full production drawing detailing GD&T specifications, weld symbols, and fastener callouts.",
              "url": "assets/images/real-cad/smugglers_bogie_assembly_drawing.png"
            }
          ]
        }
      },
      "shortDescription": "You are a smuggler using abandoned rails to escape the law, will you get away in time? Features include themed car, overhead restraints, precision 3-wheel bogie assemblies (road, side guide, and upstop wheels), simple coupling system, chain lift hitch and anti-rollback dogs."
    },
    {
      "id": "bakerloo-enhancements",
      "title": "Bakerloo Line Accessibility & Usability Enhancements",
      "subtitle": "2-Week Design Sprint: Double Diamond Framework, RVAR 2010 Compliance & Mechanical Solutions for 1972 Tube Stock",
      "category": "transit-rail",
      "featured": true,
      "badge": "Transit Retrofit // RVAR 2010",
      "timeline": "2-Week Sprint",
      "tools": [
        "SolidWorks",
        "Double Diamond Design",
        "RVAR 2010 Regulations",
        "Pugh Matrix Evaluation",
        "Mechanism Kinematics"
      ],
      "coverImage": "assets/images/project-photos/bakerloo_door_cushion_cad.png",
      "cadGallery": [
        {
          "url": "assets/images/project-photos/bakerloo_step_free_lift_cad.png",
          "title": "Design 1: Step-Free Transit Lift in a Box",
          "caption": "Rack-and-pinion electric lift system with 4 foldable ramps collapsing into an ultra-compact 100mm wall-mounted enclosure."
        },
        {
          "url": "assets/images/project-photos/bakerloo_door_cushion_cad.png",
          "title": "Design 2: Rotating Doorway Head Clearance Cushion",
          "caption": "Motorized rotating hollow aluminium padded bar pivoting into position under door header upon door opening."
        },
        {
          "url": "assets/images/project-photos/bakerloo_lift_box_deployed.png",
          "title": "Design 1: Deployed Lift Geometry & RVAR Marking",
          "caption": "50mm high-contrast visual outline and non-slip surface aligning with Rail Vehicle Accessibility Regulations."
        },
        {
          "url": "assets/images/project-photos/bakerloo_lift_ideation_sketches.png",
          "title": "Design 1: Concept Ideation & Pugh Matrix Selection",
          "caption": "Initial sketches and Pugh matrix evaluation comparing embedded vs. external lift and ramp configurations."
        },
        {
          "url": "assets/images/project-photos/bakerloo_cushion_ideation_sketches.png",
          "title": "Design 2: Mechanism Ideation & Clearance Studies",
          "caption": "Concept sketches evaluating banners, emerging bars, automated announcements, and swinging padded handles."
        },
        {
          "url": "assets/images/project-photos/bakerloo_platform_variance_1.png",
          "title": "Platform Height Disparity & Hazard Identification",
          "caption": "Journey study documenting station platform-to-train vertical steps and low doorway geometry on 1972 Tube Stock."
        }
      ],
      "summary": "Delivered within an intensive 2-week Assessment Centre design brief. Applied the Double Diamond engineering framework to develop two mechanical retrofit solutions for the London Underground Bakerloo line.",
      "keyMetrics": [
        {
          "label": "Timeframe",
          "value": "2-Week Rapid Sprint"
        },
        {
          "label": "Lift Working Load",
          "value": "300 kg (RVAR 2010)"
        },
        {
          "label": "Max Lift Speed",
          "value": "150 mm/s"
        },
        {
          "label": "Stowed Enclosure",
          "value": "100 mm Thickness"
        },
        {
          "label": "Design Framework",
          "value": "Double Diamond Process"
        }
      ],
      "article": {
        "tabTitles": {
          "problem": "1. Problem & Stakeholders",
          "cad": "2. Design 1: Step-Free Lift",
          "calcs": "3. Design 2: Rotating Cushion",
          "prototyping": "4. Consultation & Implementation",
          "takeaways": "5. Process & Key Takeaways"
        },
        "tabSubtitles": {
          "problem": "2-week assessment centre brief: London Underground 1972 Tube Stock accessibility research & stakeholder power-interest matrix",
          "cad": "RVAR 2010 specifications, Pugh matrix ideation & rack-and-pinion folding 'Lift in a Box'",
          "calcs": "Doorway clearance restrictions, concept assessment & motorized rotating padded bar mechanism",
          "prototyping": "Multi-stakeholder consultations, material selection, carriage retrofitting & operational training",
          "takeaways": "Double Diamond iterative framework: Research, Specify, Generate, Iterate & Finalise"
        },
        "tabImages": {
          "problem": [
            {
              "url": "assets/images/project-photos/bakerloo_platform_variance_1.png",
              "title": "Platform-to-Carriage Vertical Disparity",
              "caption": "Video stills demonstrating substantial height variances between station platforms and train floors across the Bakerloo line."
            }
          ],
          "cad": [
            {
              "url": "assets/images/project-photos/bakerloo_step_free_lift_cad.png",
              "title": "Design 1: Step-Free Lift CAD Assembly",
              "caption": "Complete CAD assembly of the rack-and-pinion electric lift mechanism and folding ramp transitions."
            },
            {
              "url": "assets/images/project-photos/bakerloo_lift_box_deployed.png",
              "title": "Design 1: Stowed vs Deployed Configuration",
              "caption": "Folds into a 100mm wall-mounted enclosure beside double doors with 50mm high-contrast visual outline."
            },
            {
              "url": "assets/images/project-photos/bakerloo_lift_ideation_sketches.png",
              "title": "Design 1: Ideation Sketches & Pugh Matrix",
              "caption": "Concept generation and weighted decision matrix scoring external lift highest (173 points)."
            }
          ],
          "calcs": [
            {
              "url": "assets/images/project-photos/bakerloo_door_cushion_cad.png",
              "title": "Design 2: Rotating Doorway Cushion CAD Model",
              "caption": "SolidWorks model showing lightweight hollow aluminium tube, mounting brackets, and contrasting foam padding."
            },
            {
              "url": "assets/images/project-photos/bakerloo_cushion_ideation_sketches.png",
              "title": "Design 2: Kinematic Layout & Ideation Sketches",
              "caption": "Sketches evaluating rotation path, locking mechanism, and L-shaped bar geometry to minimize interior carriage disruption."
            }
          ],
          "prototyping": [
            {
              "url": "assets/images/project-photos/bakerloo_tube_stock_overview.jpg",
              "title": "Bakerloo Line 1972 Tube Stock Interior & Exterior Context",
              "caption": "London Underground deep-level tube carriage layout used for mounting point and passenger flow analysis."
            }
          ],
          "takeaways": [
            {
              "url": "assets/images/project-photos/bakerloo_step_free_lift_cad.png",
              "title": "Finalised Dual Enhancement CAD Package",
              "caption": "Complete mechanical design solutions improving accessibility and passenger head clearance across the Bakerloo line network."
            }
          ]
        },
        "problemStatement": "**Assessment Centre Brief (2-Week Rapid Design Sprint)**\nThis project was developed as an intensive individual engineering task for an Assessment Centre, completed within a strict **2-week delivery timeframe** from initial brief to final presentation. The challenge was to rapidly identify real-world transit engineering problems on the London Underground Bakerloo line (1972 Tube Stock), formulate quantified specifications against regulatory standards, evaluate competing concepts, and present viable mechanical CAD solutions.\n\n**Identifying Key Accessibility & Usability Challenges:**\nDuring my research into deep-level circular tube stock, I focused on two critical passenger safety and accessibility issues:\n1. **Lack of Step-Free Access:** Substantial height and gap variations between curved station platforms and train floors prevent unassisted boarding for wheelchair users, parents with prams, and mobility-impaired passengers.\n2. **Low Doorway Head Clearance:** Due to deep-level circular tunnel bore constraints, 1972 Tube Stock carriage doors are significantly lower than standard modern trains, leading to frequent passenger head collisions with top door frame headers during boarding and alighting.\n\n**Stakeholder Power-Interest Analysis:**\nTo guide the engineering design under the 2-week timeframe, I structured a stakeholder power-interest matrix:\n* **High Interest / High Power:** Primary transit users (wheelchair users, diverse height demographics), Train Drivers, Station Staff, and TfL Leadership.\n* **High Power / Lower Direct Daily Use:** Funding Bodies (UK Government, Greater London Authority), Rolling Stock Engineers & Designers.\n* **Operational Stakeholders:** Maintenance Teams and Parts Suppliers.",
        "cadArchitecture": "**Design 1: Step-Free Platform 'Lift in a Box'**\n\n**1. Technical Specification (RVAR 2010 Compliance):**\nDeveloped in strict accordance with the *Rail Vehicle Accessibility (Non-Interoperable Rail System) Regulations 2010*:\n* **Minimum Safe Working Load:** 300 kg\n* **Maximum Operating Speed:** 150 mm/s\n* **Platform Geometry:** Minimum 750 mm width \u00d7 1200 mm usable length\n* **Maximum Ramp Gradient:** 8% maximum (5% preferred operating target)\n* **Cycle Time & Safety:** Maximum 20-second deployment; non-slip surface; staff-operated interlock; height-adjustable across all Bakerloo line platforms.\n\n**2. Concept Ideation & Pugh Matrix Selection:**\nAssessed four candidate architectures across cost, size, weight, usability, deployment time, implementation speed, and car modification requirements:\n* *Embedded Ramp:* 146 pts | *External Ramp:* 166 pts | *Embedded Lift:* 135 pts | **External Lift ('Lift in a Box'): 173 pts (Selected)**\n\n**3. Final Mechanism Architecture:**\nA compact electric rack-and-pinion elevation system chosen for high power efficiency, low acoustic footprint, and minimal maintenance overhead. Features four hinged folding panels (two forming transition ramps) that fold down into a compact **100 mm thick wall-mounted enclosure** positioned adjacent to double doors inside the carriage. Incorporates a **50 mm high-visibility contrasting perimeter outline** and high-friction textured surface for regulatory compliance.",
        "calcsAndSimulation": "**Design 2: Motorized Rotating Doorway Head Clearance Cushion**\n\n**1. Technical Specification:**\n* **Bar Geometry:** 30 mm, 40 mm diameter hollow aluminium tube\n* **Span Length:** 1300 mm (double doorway) / 650 mm (single doorway)\n* **Clearance & Cycle Time:** Minimum 40 mm clearance; maximum 20-second operation; zero interference with sliding pocket door mechanisms; failsafe manual override.\n\n**2. Concept Ideation & Selection Matrix:**\nEvaluated four protective concepts across manufacturing cost, passenger disruption, safety factor, impact effectiveness, and installation complexity:\n* *Static Warning Banner:* 120 pts | **Emerging / Rotating Bar: 151 pts (Selected)** | *Automated Audio Announcement:* 147 pts | *Free-Swinging Bar:* 105 pts\n\n**3. Final Mechanism Architecture:**\nA motorized pivoting padded bar installed above the interior door header inside the carriage:\n* **Lightweight Construction:** Extruded hollow aluminium alloy tubing supported by compact structural pivot brackets.\n* **Contrasting Impact Padding:** High-density foam padding in contrasting visual colours for immediate visibility.\n* **Synchronized Kinematics & Dual Functionality:** When carriage doors open at stations, a compact geared stepper motor rotates the bar downward directly beneath the door frame edge. Once in transit, the bar locks securely into an upper position, serving as an auxiliary passenger grab handle to optimize interior space.",
        "prototypingAndTesting": "**Stakeholder Consultations & Phased Implementation Roadmap**\n\nTo ensure practical viability and seamless integration into London Underground operations, I structured a four-part consultation and implementation framework:\n\n**1. Four Key User & Business Consultations:**\n* **Wheelchair Users & Passengers of Diverse Heights:** Verifying platform transition comfort, ramp gradient ease, and visual noticeability.\n* **Station Operations Staff:** Evaluating dwell-time impact, ease of manual override, and operational ergonomics.\n* **TfL Leadership:** Reviewing capital expenditure, fleet retrofitting schedules, and network-wide accessibility goals.\n* **Rolling Stock Systems Engineers:** Validating electrical power draw, carriage structural mounting interfaces, and fail-safe interlocks.\n\n**2. Implementation Roadmap:**\n* **Material Selection & Sizing:** Specifying lightweight, fire-safe (BS 6853 / EN 45545 transit fire standards) aluminium alloys and closed-cell elastomer foam.\n* **Carriage Modifications:** Designing minimal-footprint structural bracket mounts to attach directly to carriage sidewall frames without compromising passenger capacity.\n* **Signage & Multi-Sensory Cues:** Integrating high-contrast visual demarcations and synchronized audio chime warnings.\n* **Operational Training:** Creating concise operating procedures and training modules for station dispatch staff.\n* **Physical Load & Impact Testing:** Conducting static proof load tests (300 kg) on the lift platform and dynamic impact attenuation testing on the doorway foam buffers.",
        "takeaways": "**Engineering Process Reflection & Key Takeaways**\n\n**The Double Diamond Framework:**\nThroughout this 2-week rapid project, I applied an iterative Double Diamond engineering methodology:\n1. **Research & Discover:** Uncovered root-cause platform height disparities and doorway geometry constraints on heritage 1972 Tube Stock.\n2. **Specify & Define:** Translated regulatory frameworks (RVAR 2010, British railway standards) into quantified numerical restrictions.\n3. **Generate & Assess:** Developed multiple kinematic concepts and evaluated them objectively using weighted Pugh decision matrices.\n4. **Iterate & Refine:** Refined mechanical folding geometry, motor drive choices, and spatial packaging.\n5. **Finalise:** Delivered complete 3D CAD assemblies and structured implementation workflows for both systems.\n\n**Key Real-World Engineering Insights:**\n* **Rapid 2-Week Sprint Discipline:** Delivering two complete, specification-backed mechanical concepts with full Pugh matrices and CAD assemblies within a 2-week window demonstrated the power of a structured Double Diamond framework under tight project deadlines.\n* **Human-Centred Transit Design:** Good engineering isn't just about moving parts, it's about deeply understanding the passenger journey, from wheelchair access to physical head clearance.\n* **Packaging in Heritage Envelopes:** Retrofitting modern accessibility solutions into 50+ year-old tube stock requires extreme spatial discipline (collapsing a lift into 100 mm thickness and dual-purposing safety bars as grab handles).\n* **Regulatory Discipline:** Designing to formal standards (RVAR 2010) early in the ideation phase prevents costly redesigns and ensures real-world manufacturability."
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
      "coverImage": "assets/images/user-photos/Screenshot_2026-08-16_155149.png",
      "cadGallery": [
        {
          "title": "Smoke & Starlight Autonomous Guided Vehicle (AGV) 3D Chassis",
          "url": "assets/images/real-cad/smoke_starlight_agv_cad.png"
        },
        {
          "title": "Dual Steer-Drive Independent Swerve Pod Assembly",
          "url": "assets/images/real-cad/smoke_starlight_swerve_pod.png"
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
        "problemStatement": "**Story**\nEver wanted to explore space through the eyes of a steampunk inventor? In this ride you can! Explore celestial libraries, get flung around black holes, and meet a few new friends along the way. This omnidirectional trackless dark ride takes you into the observatory of Professor Elizabeth Starling, who is known for her creativity, not her technical skills, and explores what happens when astronomical inventions start to go wrong. I'm sure it will be fine!\n\n**Engineering Context**\nModern dark ride attractions (such as Rise of the Resistance and Ratatouille) rely on trackless automated guided vehicles (AGVs) that can spin, slide, and navigate without a visible floor track. I wanted to challenge myself to design an AGV chassis from scratch that could handle smooth translation and zero-radius pivot turns while keeping heavy electronics low to the floor for stability. The main focus of this project was the swerve-drive wheel pods: learning how they work mechanically and writing Python code to coordinate their steering angles.\n\nAs with all dark rides, vehicle kinematics and spatial clearance envelopes must be carefully mapped. I used Python to model the trajectory and dynamic envelopes for the black hole sequence, ensuring that the vehicles can perform synchronized spins without intruding on scenic elements or other vehicles.\n\nAs with all of my designs, I wanted the mechanical solutions to be cohesive with the emotional storytelling of the ride.",
        "cadArchitecture": "The wheel module is constructed with a combination of custom-designed brackets and standard components. For this build, my goal was to assemble the pod mechanism and understand how the parts interact, rather than fabricating every component from scratch.\n\nThe custom parts I modelled include the main wheel yoke and the mounting brackets connecting the yoke to the slewing bearing. The slewing bearing, drive wheel, and gears were selected standard components.\n\nI modelled the full chassis in SolidWorks using structured sheet metal and box enclosures. As part of the overall assembly, I included a lap bar restraint and a dual-passenger seat with generous legroom (a detail I refined after initial ergonomic checks). The seats are set at a slight recline for passenger comfort during rotation, and internal volumes are allocated for battery packs, motor controllers, and onboard guidance electronics.",
        "calcsAndSimulation": "I used this project to deepen my knowledge of Python by writing a swerve-drive kinematics script that calculates individual wheel steering angles and motor RPM across two scenarios: pure linear translation and spin-on-the-spot rotation. I then combined them to model a smooth forward-to-spin transition.",
        "prototypingAndTesting": "For the ride's climax, riders enter what Professor Starling believes is a secure black hole containment lab. As the containment fails, gravitational forces draw the vehicles into an inward spiral before launching them through exit portals.\n\nI scripted the vehicle path in Python to verify clearance boundaries, simulating how an AGV can orbit a central focal point while independently yawing to face show elements before accelerating into the next block.",
        "takeaways": "This project taught me so much about spatial packaging in mechatronic systems, especially how early mathematical modelling in Python directly prevents headaches when sizing motors and packaging gearboxes in CAD.",
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
              "title": "Smoke & Starlight AGV CAD",
              "caption": "CAD assembly of the omnidirectional AGV chassis with low center-of-gravity battery bay.",
              "url": "assets/images/real-cad/smoke_starlight_agv_cad.png"
            }
          ],
          "cad": [
            {
              "title": "Swerve Pod Assembly",
              "caption": "Independent steering and drive module packaging planetary gearbox and brushless motor.",
              "url": "assets/images/real-cad/smoke_starlight_swerve_pod.png"
            }
          ],
          "calcs": [
            {
              "title": "Swerve Pod Drive & Steering Calculations",
              "caption": "Motor torque sizing, planetary gearbox reduction ratios, and steering slew bearing loads.",
              "url": "assets/images/real-cad/smoke_starlight_swerve_pod.png"
            }
          ],
          "prototyping": [
            {
              "title": "Chassis Packaging & Component Integration",
              "caption": "Independent swerve pod placement and low-profile battery/controller bay layout.",
              "url": "assets/images/real-cad/smoke_starlight_agv_cad.png"
            }
          ],
          "takeaways": [
            {
              "title": "Omnidirectional AGV Chassis",
              "caption": "Final SolidWorks CAD model prepared for fabrication and motion profile simulation.",
              "url": "assets/images/real-cad/smoke_starlight_agv_cad.png"
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
          "title": "1st Year Reaching Aid CAD Assembly Drawing",
          "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png"
        },
        {
          "title": "Precision Gripper Jaw Part Drawing",
          "url": "assets/images/real-cad/reaching_aid_gripper_part_drawing.png"
        },
        {
          "title": "Actuation Trigger Mechanism Detail",
          "url": "assets/images/real-cad/trigger_mechanism_drawing.png"
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
              "title": "Reaching Aid Assembly Drawing (BS 8888)",
              "caption": "Complete mechanical assembly drawing detailing linkage kinematics and material selection.",
              "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png"
            }
          ],
          "cad": [
            {
              "title": "Custom Gripper Jaw Component Drawing",
              "caption": "Part drawing with BS 8888 compliant dimensioning and geometric tolerancing.",
              "url": "assets/images/real-cad/reaching_aid_gripper_part_drawing.png"
            },
            {
              "title": "Trigger Linkage Detail Drawing",
              "caption": "Actuation handle and spring return mechanism drawing.",
              "url": "assets/images/real-cad/trigger_mechanism_drawing.png"
            }
          ],
          "calcs": [
            {
              "title": "Linkage Force Transmission & Sizing",
              "caption": "Mechanical advantage calculation for grip force and return spring rate sizing.",
              "url": "assets/images/real-cad/trigger_mechanism_drawing.png"
            }
          ],
          "prototyping": [
            {
              "title": "Manufacturability & Tolerance Review",
              "caption": "Detailed component drawings prepared for CNC milling and rapid assembly.",
              "url": "assets/images/real-cad/reaching_aid_gripper_part_drawing.png"
            }
          ],
          "takeaways": [
            {
              "title": "Final CAD Model & Drawing Pack",
              "caption": "Full BS 8888 drawing pack prepared for production manufacturing.",
              "url": "assets/images/real-cad/reaching_aid_assembly_drawing.png"
            }
          ]
        },
        "problemStatement": "**1st Year University Design Task**\nThis was an individual Year 1 Mechanical Engineering project at the University of Sheffield. The objective was to develop an assistive mechanical reaching tool designed to help users pick up objects with minimal hand effort.\n\nThe project brief challenged us to take a set of standard mechanical base components, assemble them into a working CAD model, and design our own custom gripper mechanism. The goal was to bridge the gap between digital 3D CAD modeling, physical manufacturing, and practical mechanical testing, taking a design from initial CAD mates all the way to a physical working prototype.",
        "cadArchitecture": "**CAD Assembly & Custom Gripper Design**\nWorking in SolidWorks, I assembled the base reaching aid subassemblies from the provided standard component parts, establishing accurate mechanical mates to ensure realistic linear and rotational movement through the linkages.\n\nBeyond assembling the standard components, I personally designed the **custom gripper jaw mechanism**. Key design considerations included:\n* **Linkage Kinematics:** Sizing the pivot pin positions and lever arms to maximize mechanical advantage so a gentle squeeze on the handle creates sufficient gripping force at the jaws.\n* **Gripper Geometry:** Shaping the jaw profile to securely hold objects of varying sizes and diameters without slipping.\n* **BS 8888 2D Drawing Package:** Created complete engineering drawings with standard projections, section views, tolerances, and dimensional callouts following BS 8888 guidelines.",
        "calcsAndSimulation": "**Force Transfer & Stress Visualization**\nTo ensure the gripper could handle intended loads, I analyzed the mechanical advantage through the trigger-to-jaw linkage:\n* **Mechanical Advantage:** Evaluated the lever ratios across the four-bar linkage so the input pull force from the actuation rod translates into a firm closing clamping force at the jaw tips.\n* **Beam Bending & Shear:** Calculated the bending moments ($M/I = \\sigma/y$) acting along the slender extension arm and shear stresses across the pivot pins when supporting a load at full reach.\n* **Stress Concentrations:** Identified high-stress regions around the laser-cut pivot holes and notch radii where tensile and shear stresses peak under load.",
        "prototypingAndTesting": "**Laser Cut MDF Prototyping & Destructive Workshop Testing**\nTo truly visualize and feel the mechanical forces for ourselves, we manufactured our designs:\n* **Laser Cutting in MDF:** Exported the 2D CAD profiles to laser cut the gripper jaws, linkages, and frame components from MDF sheet.\n* **Hands-on Assembly:** Built and assembled the physical prototype by hand, checking pivot fits, friction, and smooth mechanical motion through the actuation rod.\n* **Workshop Limit Testing (Testing to Failure):** In the university engineering workshop, technicians and instructors put our physical prototypes under test rigs and pushed them to their absolute structural limits. By applying progressively higher loads until the mechanism broke, we were able to directly observe in person how and where the material failed, seeing real-world shear tear-out at the pin holes and bending fracture in the MDF arms.",
        "takeaways": "**What I Learned & Real-World Takeaways**\nPhysically building and breaking our designs was an incredible learning experience that went far beyond pure computer simulation:\n1. **Seeing Failure in Person:** Watching the MDF prototype fail under extreme load in the workshop gave me a deep, practical intuition for stress concentrations, notch sensitivity, and why hole edge margins matter in mechanical design.\n2. **CAD vs. Physical Reality:** It demonstrated firsthand how manufacturing tolerances, pin friction, and material stiffness affect real-world mechanism performance compared to theoretical CAD models.\n3. **Foundation for Mechanism Design:** This project formed a strong foundation for my later, more complex ride mechanism designs (such as coaster bogies and turntable switch tracks) where understanding physical load paths and failure modes is essential for passenger safety."
      }
    },
    {
      "id": "ride-turntable",
      "title": "Time Machine Turntable",
      "subtitle": "Track Switch & Positioning Table (Current Workbench Build)",
      "category": "themed-rides",
      "featured": false,
      "badge": "Workbench Mechanism",
      "timeline": "2026",
      "tools": [
        "SolidWorks",
        "Slewing Bearings"
      ],
      "coverImage": "assets/images/user-photos/Screenshot_2026-08-16_155035.png",
      "cadGallery": [
        {
          "title": "Time Machine Turntable CAD Assembly",
          "url": "assets/images/real-cad/time_machine_turntable_cad.png"
        },
        {
          "title": "Station Turntable 3D Overview",
          "url": "assets/images/user-photos/Screenshot_2026-08-16_155035.png"
        },
        {
          "title": "Station Geometry & Track Layout",
          "url": "assets/images/user-photos/Screenshot_2026-08-17_165421.png"
        },
        {
          "title": "Kinematic Analysis & Cycle Calculations",
          "url": "assets/images/project-photos/turntable_calcs_kinematics.png"
        },
        {
          "title": "Drive Mechanism & Gearbox Alignment",
          "url": "assets/images/project-photos/turntable_mechanism_detail.png"
        }
      ],
      "summary": "This may seem like a regular turntable, but it is actually a time machine. Will you survive the journey? Features a large slewing ring bearing, planetary gear drive, and fail-safe tapered shot-pin locking system for seamless vehicle indexing and station capacity optimization.",
      "keyMetrics": [
        {
          "label": "Mechanism Type",
          "value": "Rotary Slew / Switch"
        },
        {
          "label": "Status",
          "value": "CAD & Sizing Phase"
        }
      ],
      "article": {
        "problemStatement": "**Story**\nYou enter a normal-looking room, but slowly your vehicle descends into a dark chamber. Lights begin to flash and you notice you are rotating. You breathe a sigh of relief as you are lifted back up, but you quickly realise something has changed. You are no longer in the present day, you have travelled into the future!\n\n**Engineering Context**\nIn themed dark rides and roller coasters, turntables and switch tracks are used for dual-loading stations, drop-track sequences, and vehicle redirection without interrupting continuous dispatch block flow. They are also powerful tools for progressing story narratives. The challenge of this build is achieving rapid 90\u00b0 and 180\u00b0 rotation with rigid structural locking that can withstand dynamic vehicle transfer loads while maintaining a seamless rider experience.\n\nKey considerations include the passenger clearance envelope, ensuring no moving mechanical components encroach on rider space, and pneumatic shot pins, which lock the track into precise alignment after each rotation.",
        "cadArchitecture": "The CAD assembly comprises four main subassemblies:\n\n1. **Base Plate:** The structural foundation where the turntable lowers to engage with the slewing drive gear.\n2. **Slewing Ring & Drive:** A large externally geared slewing ring paired with a driven pinion to generate smooth rotary indexing.\n3. **Rotating Load Platform:** The central elevating platform carrying the live track section that lowers and rotates the ride vehicle.\n4. **Stationary Approach Platforms:** The structural track sections supporting entry and exit transitions.",
        "calcsAndSimulation": "The mechanism is engineered so that the ride vehicle lowers to the base plate, rotates 180 degrees to change direction and progress the story, and then raises back to track level to dispatch into the next show scene.",
        "prototypingAndTesting": "While the basic kinematic model demonstrates the required motion, real-world operation requires several safety-critical features for disconnecting and re-aligning track segments.\n\nIn practice, tapered pneumatic shot pins would locate and lock the track segments in place with sub-millimetre precision. Proximity sensors and optical limit switches would verify full pin engagement before enabling power to the vehicle, automatically slowing or stopping the ride if any misalignment is detected.\n\nAdditionally, mechanical holding brakes would clamp the train securely during elevation and rotation, followed by linear synchronous motors (LSM) to launch the vehicle forward into the next scene.",
        "takeaways": "Working on this build gave me a deeper understanding of multi-body kinematic mates in SolidWorks, balancing freedom of movement in rotation with absolute rigidity in alignment.\n\nI look forward to expanding this design with detailed sensor integration and structural FEA under full dynamic vehicle loads.",
        "tabTitles": {
          "problem": "1. The Goal ",
          "cad": "2. CAD",
          "calcs": "3. Kinematics",
          "prototyping": "4. Further Considerations",
          "takeaways": "5. What I Learned & Next Steps"
        },
        "tabSubtitles": {
          "problem": "Story, design brief & operating constraints",
          "cad": "SolidWorks ",
          "calcs": "How does it move?",
          "prototyping": "Considerations and important additions",
          "takeaways": "Engineering lessons learned, manufacturability review & next milestones"
        },
        "tabImages": {
          "problem": [
            {
              "title": "Station Turntable Geometry & Requirements",
              "caption": "Station footprint and passenger dispatch requirements for continuous rotational transfer.",
              "url": "assets/images/user-photos/Screenshot_2026-08-17_165421.png"
            }
          ],
          "cad": [
            {
              "title": "Time Machine Turntable CAD Assembly",
              "caption": "SolidWorks CAD model detailing rotational bearing, indexing stops, and base support structure.",
              "url": "assets/images/real-cad/time_machine_turntable_cad.png"
            }
          ],
          "calcs": [
            {
              "title": "Kinematic Analysis & Sizing Calculations",
              "caption": "Rotational acceleration curves, motor torque requirements, and mechanical lock engage times.",
              "url": "assets/images/project-photos/turntable_calcs_kinematics.png"
            }
          ],
          "prototyping": [
            {
              "title": "Turntable Drive Mechanism & Indexing Detail",
              "caption": "Physical packaging study and drive gear alignment for high-precision station rotation.",
              "url": "assets/images/project-photos/turntable_mechanism_detail.png"
            }
          ],
          "takeaways": [
            {
              "title": "Finalised Station Turntable Assembly",
              "caption": "Completed SolidWorks mechanism model integrated with station track transitions.",
              "url": "assets/images/user-photos/Screenshot_2026-08-16_155035.png"
            }
          ]
        }
      },
      "shortDescription": "This may seem like a regular turntable but its actually a time machine will you survive the journey? Features a large slewing ring bearing, planetary gear drive, and fail-safe tapered shot-pin locking system for seamless vehicle indexing and station capacity optimization."
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
      "summary": "My favourite ways Disney creates an immersive experience across their theme parks worldwide.",
      "content": "\"Here you leave the world of today and enter a world of yesterday, tomorrow and fantasy.\"\n\nThese words, written on the entrance archways to Disney parks worldwide, so accurately describe how it feels to visit. From the moment you enter, you are surrounded by out-of-this-world theming and incredible engineering.\n\nMany things contribute to the magic of Disney, but here are a few of my personal favourites:\n\n### Sightlines\nDisney utilises sightlines throughout their themed areas to maintain a sense that you are actually there in the world of your favourite stories. This is something often missed by many parks, seeing a space station in the background where you are supposed to be in an African savannah can be jarring and pull you right out of the immersion. When building rides and new lands, it is common practice for Imagineering to use colourful helium balloons floated at exact heights to map out what guests will see from different locations in the park and ensure nothing breaks the illusion. Recently, this practice was spotted during the construction prep for the new Piston Peak / Cars area in Magic Kingdom!\n\n### Colours\nAs you would expect from a theming giant, Disney is not fond of guests seeing their backstage areas. One way they tackle this is through the psychology of colour. The two main colours they use are named \"Go Away Green\" and \"Bye-Bye Blue\", both of which are used all over Disney parks across the globe. \"Go Away Green\" is used for everyday practical items like bins, fences, and utility doors; it is designed to match foliage and bushes so your eye naturally skips past it. \"Bye-Bye Blue\" mimics the colour of the sky and is often seen on taller show buildings to help massive ride structures blend seamlessly into the horizon.\n\n### Cast Members\nThe staff at theme parks can make or break an experience, and the \"Cast Members\" at Disney really are the best of the best. Whether you are in Paris or Tokyo, Magic Kingdom or Hollywood Studios, they are there bringing their light and joy (or delightfully deadpan acting in the case of spooky rides like Phantom Manor and Tower of Terror!) to make every single guest's day the best they can. Each attraction and land has unique themed costuming, which really helps you stay immersed in the Disney bubble. As in many situations, the people you interact with are often what makes the difference between misery and magic."
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
      "content": "Signalling is a key safety system in both theme parks and large-scale transit networks like the Docklands Light Railway (DLR). However, there are fundamental differences in how each approach keeps passengers safe.\n\nFrom my work with TfL on the DLR, I saw how modern automated railways rely on moving-block signalling (CBTC). Rather than dividing the track into rigid physical zones, the system continuously tracks the exact position, speed, and braking curve of every train. Each vehicle carries a dynamic safety envelope around it that no following train may breach. This allows trains to run closer together safely, dramatically increasing line capacity and passenger throughput without needing new physical track.\n\nRoller coasters, by contrast, rely on fixed-block systems. In a fixed-block layout, the track is divided into discrete physical sections separated by mid-course brake runs, lift hills, or block brakes. Only one train is permitted in a block at any time, and the previous train must completely clear the downstream block before the upstream brake releases. Adding more block zones along a coaster layout is crucial for high-capacity rides to maintain continuous dispatches and keep queue times down.\n\nEach approach is tailored to its operating environment.\n\nFor the DLR, capacity and flexibility are paramount. The goal is to move thousands of people per hour from A to B. Train weights vary with passenger loads, wheel-rail adhesion shifts with wet weather, and routes cross multiple junctions. Moving blocks give the control system the adaptability it needs to optimise headways in real time.\n\nOn roller coasters, simplicity equals safety. Because coaster trains rely primarily on gravity once released from the lift hill, they cannot simply stop anywhere on the circuit. If a sensor faults or a stoppage occurs, trains can only be safely held at designated brake runs with mechanical calipers. A fixed-block architecture provides a fail-safe physical margin of error: if anything is uncertain, the train behind is held mechanically at the previous block brake. Since most coasters operate with two to five trains on a closed circuit, the vast expense and complexity of moving blocks would provide little practical benefit. Thus, fixed blocks remain the gold standard for roller coaster safety!"
    },
    {
      "id": "diary-1786899334341",
      "title": "Ride Breakdown: Hyperia",
      "location": "Thorpe Park",
      "date": "",
      "readTime": "3 min read",
      "category": "Ride Analysis",
      "coverPhoto": "assets/images/personal/hyperia_thorpe_park.jpg",
      "summary": "Hyperia was eagerly anticipated across the UK enthusiast community, and I followed its journey from the start.",
      "content": "Walking down Monks Walk on a cold, muddy afternoon may not seem like everyone's preferred activity, but throughout 2023 and 2024 I was one of many who were excited to visit this seemingly random footpath. Why? Hyperia was being built at Thorpe Park, and this was one of the best vantage points to follow construction firsthand and enjoy the rare opportunity of watching a world-class coaster rise out of the ground.\n\nHyperia is the UK's tallest and fastest roller coaster, standing at an incredible 236 feet and reaching top speeds of 81 mph. And I have to say, I think it is easily one of our best.\n\nIn terms of layout, the ride is short but exceptionally punchy. Immediately after leaving the station, you are showcased to everyone waiting in the queue through an outer-banked turn, and that is before you even engage the lift hill! The lift hill itself feels long and is deliberately loud, building immense anticipation before plunging into that first drop (arguably the ride's standout element). A 236-foot drop matching the full height of the structure is a breathtaking start, pulling riders into their seats before floating them out over the subsequent inversions and airtime hills.\n\nThe layout features one of my personal favourite elements: the non-inverting Immelmann. This has long been one of my preferred elements because of the visual trickery; you anticipate a loop, but at the last second the track twists you upright without inverting. Paired with outer banks and a stall loop, the thrill level is extraordinary. Very few coasters in Europe can compete, which is what makes it so pivotal for the UK enthusiast community.\n\nOne detail I always notice is the loud, prominent motor driving the chain lift. Is it deliberately disruptive? I definitely think so! Having a roaring drive motor right above the queue creates an unmistakable atmosphere of mechanical power. However, as someone who is neurodivergent, I do find the intense noise quite jarring and over-stimulating at times, especially when queue times stretch past an hour. While I don't feel I need an accessibility pass because I am able to wait, sensory elements like this always make me think about how ride and queue acoustics impact different visitors.\n\nOverall, Hyperia puts the UK firmly back on the global coaster map and highlights Mack Rides' exceptional engineering pedigree (not that you need more proof if you have ever visited Europa-Park!).",
      "tripPhotos": [
        {
          "url": "assets/images/personal/hyperia_thorpe_park.jpg",
          "caption": "Hyperia (236 ft Mack Rides Hypercoaster) operating at Thorpe Park.",
          "tag": "Thorpe Park"
        },
        {
          "url": "assets/images/personal/hyperia_construction_monks_walk.jpg",
          "caption": "Tracking Hyperia's structural construction firsthand from the Monks Walk footpath.",
          "tag": "Monks Walk Construction"
        },
        {
          "url": "assets/images/personal/hyperia_thorpe_park_bridge.jpg",
          "caption": "Hyperia's 236 ft lift hill and splashdown turn viewed from the park bridge.",
          "tag": "Thorpe Park Bridge View"
        }
      ]
    }
  ],
  "experience": [
    {
      "role": "Beaver Scout Leader",
      "company": "Scouts",
      "division": "Children",
      "period": "2025 - present",
      "location": "Sheffield, UK",
      "summary": "Volunteering with 36th Sheffield Beavers while studying at university. Always cheered up by an energetic group of 6 to 8 year olds! It is fantastic for developing clear communication, quick problem-solving, and patience when explaining ideas, while building leadership skills and encouraging curiosity and teamwork in young people."
    },
    {
      "role": "Sheffield Engineering Leadership & Service Award (SELSA)",
      "company": "University of Sheffield (Faculty of Engineering)",
      "division": "Leadership & Professional Development Programme",
      "period": "2025 - Present",
      "location": "Sheffield, UK",
      "summary": "Selected for the competitive Sheffield Engineering Leadership & Service Award (SELSA) programme, developing leadership, project management, and industry communication skills through specialized workshops and industry mentoring."
    },
    {
      "role": "MEng Mechanical Engineering Student",
      "company": "University of Sheffield",
      "division": "Department of Mechanical Engineering",
      "period": "2024 - Present",
      "location": "Sheffield, UK",
      "summary": "Achieved 1st Class Honours across both Year 1 and Year 2. Core modules include Solid Mechanics, Dynamics, Kinematics, Design Projects, and Engineering Mathematics."
    },
    {
      "role": "Mechanical Engineering Summer Intern",
      "company": "Transport for London (TfL) - Docklands Light Railway",
      "division": "Electrical & Mechanical Engineering",
      "period": "Summer 2026",
      "location": "London, UK",
      "summary": "Worked on station lighting standards across the DLR network and developed a thermal heating and cooling model for a facility renovation. Gained valuable insight into transit electrical and mechanical building services and regulatory safety systems."
    },
    {
      "role": "National Young Ambassador",
      "company": "England Golf & Golf Foundation",
      "division": "Youth Leadership & Public Engagement",
      "period": "2022 - 2024",
      "location": "United Kingdom",
      "summary": "Volunteered with England Golf and the Golf Foundation to champion equality, diversity, and inclusion (ED&I) in sport. Recipient of the National Hero's Handshake Award for youth leadership, public engagement, and peer mentoring."
    }
  ],
  "education": {
    "degree": "MEng in Mechanical Engineering",
    "institution": "University of Sheffield",
    "timeline": "2024 - 2028",
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
      "name": "Turntable Kinematics & Calculations",
      "url": "assets/images/project-photos/turntable_calcs_kinematics.png",
      "category": "cad",
      "date": "15/09/2026",
      "size": "761 KB"
    },
    {
      "name": "Turntable Drive Mechanism Detail",
      "url": "assets/images/project-photos/turntable_mechanism_detail.png",
      "category": "cad",
      "date": "15/09/2026",
      "size": "560 KB"
    },
    {
      "name": "Lucy Robinson Portrait (Framed)",
      "url": "assets/images/personal/lucy_mickey_framed.jpg",
      "category": "personal",
      "date": "15/09/2026",
      "size": "335 KB"
    },
    {
      "name": "Hyperia at Thorpe Park",
      "url": "assets/images/personal/hyperia_thorpe_park.jpg",
      "category": "theme-parks",
      "date": "15/09/2026",
      "size": "950 KB"
    },
    {
      "name": "Hyperia Monks Walk Construction",
      "url": "assets/images/personal/hyperia_construction_monks_walk.jpg",
      "category": "theme-parks",
      "date": "15/09/2026",
      "size": "2.8 MB"
    },
    {
      "name": "Smugglers Mine Train Bogie CAD",
      "url": "assets/images/real-cad/smugglers_mine_train_bogie_cad.png",
      "category": "cad",
      "date": "15/09/2026",
      "size": "4.2 MB"
    },
    {
      "name": "Smoke & Starlight AGV CAD",
      "url": "assets/images/real-cad/smoke_starlight_agv_cad.png",
      "category": "cad",
      "date": "15/09/2026",
      "size": "2.8 MB"
    },
    {
      "name": "Bakerloo Step-Free Lift CAD",
      "url": "assets/images/project-photos/bakerloo_step_free_lift_cad.png",
      "category": "transit",
      "date": "15/09/2026",
      "size": "3.1 MB"
    },
    {
      "name": "Bakerloo Door Cushion CAD",
      "url": "assets/images/project-photos/bakerloo_door_cushion_cad.png",
      "category": "transit",
      "date": "15/09/2026",
      "size": "3.7 MB"
    }
  ],
  "coasterCredits": [],
  "documents": [
    {
      "name": "assets/documents/Lucy_Robinson_CV.pdf",
      "url": "assets/documents/Lucy_Robinson_CV.pdf",
      "size": "172.9 KB",
      "dateAdded": "2026-08-26"
    }
  ],
  "dataVersion": "20260915_v56_resolved_merge_conflict"
};
