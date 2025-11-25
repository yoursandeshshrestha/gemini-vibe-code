# Gemini Projects

## Deployed Sites

- [Aelia](https://aelia.vercel.app/)
- [Arche](https://arche-gilt.vercel.app/)
- [Aether](https://aether-self-pi.vercel.app/)
- [Aura](https://aura-snowy-six.vercel.app/)
- [Chromaflow](https://chromaflow-five.vercel.app/)
- [Chronos](https://chronos-eosin.vercel.app/)
- [Forge](https://forge-nine-liard.vercel.app/)
- [Nexus](https://nexus-lime-zeta.vercel.app/)
- [Velocite](https://velocite-two.vercel.app/)

## Arché Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                              "ARCHÉ" DESIGN BRIEF
                          The Holistic Design Studio
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital home for an architecture firm that blends nature with brutalism.

The Vibe: "Quiet Luxury," "Tactile," "Light & Shadow," "Fluid Structure"
The Goal: To feel like flipping through a heavy, expensive coffee table book


═══════════════════════════════════════════════════════════════════════════════
                        VISUAL LANGUAGE (Stone & Paper)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Warm & Organic)
-------------------------------
  • Background:  Warm Alabaster (#F2F0E9) or Limestone (#E6E4DC)
                 → Should feel like raw paper or stone
  • Typography:  Deep Graphite (#2A2A2A) – softer than black
  • Accents:     Burnt Clay (#B07D62) and Olive Drab (#6B705C)
  • Lines:       Ultra-thin (1px) in Soft Grey (#D1D1D1) for grid structures

TYPOGRAPHY (The Contrast)
--------------------------
  • Headings:    Large, elegant Serif Display
                 (GT Alpina, Ogg, or Heldane)
  • UI/Labels:   Tiny, all-caps Swiss Sans
                 (Neue Montreal or Suisse Int)

IMAGERY
-------
  • Images are NOT 100% opacity – subtle warmth filter applied
  • Parallax: Images move slightly slower than text when scrolling


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Reveal)
-----------------------------
Layout:     Center aligned
Visual:     Screen initially covered by a "Curtain" of Alabaster background

Animation (GSAP):
  → The word "ARCHÉ" is cut out of the background (Mask)
  → Through the letters, you see a video of swaying trees/architecture
  → As you scroll, text mask scales up until it exceeds the viewport,
    revealing the full-screen video underneath


SECTION 2: THE PHILOSOPHY (Text Scrub)
---------------------------------------
Layout:     Massive Serif typography taking up 80% of screen
Content:    "We build spaces that breathe with the rhythm of nature."

Interaction (GSAP ScrollTrigger):
  → Text is initially Outlined (Stroke only)
  → As user scrolls, text fills with Deep Graphite color from left to right,
    synchronized perfectly with scroll position


SECTION 3: SELECTED PROJECTS (The Horizontal Gallery)
------------------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 massive project images

Card Design:
  → Image on top
  → Title (Serif) and Year (Sans) below

Interaction (The Lens):
  → Framer Motion: When mouse hovers over image, circular "Glass Distortion"
    effect (using displacement map) follows cursor, warping the architecture
    slightly like looking through a thick window


SECTION 4: THE MATERIAL LIBRARY (Texture Zoom)
-----------------------------------------------
Layout:     Grid of 3 physical materials (Raw Oak, Travertine, Linen)
Visual:     High-res texture shots

Interaction:
  → Hover:   Cursor becomes a "+"
  → Click:   Texture expands to fill full screen (Layout ID transition)
  → Detail:  Floating text annotations appear explaining origin
             (e.g., "Sourced from Tuscany")


SECTION 5: SERVICES (The Accordion)
------------------------------------
Layout:     Clean horizontal lines separating services
            (Residential / Commercial / Landscape)

Interaction (Framer Motion):
  → Hover:   Text shifts right, preview image fades in behind text list,
             taking up center of screen
  → Cursor:  Turns into "View Details" arrow


SECTION 6: THE JOURNAL (Masonry Grid)
--------------------------------------
Layout:     Asymmetrical grid

Visual:
  → Some items are photos
  → Some are pull-quotes in Serif font

Scroll Speed:
  → Left column:  Normal speed
  → Right column: 1.2x speed (Parallax), creating shifting dynamic


SECTION 7: FOOTER (The Big Finish)
-----------------------------------
Background: Transitions to Deep Graphite (Dark Mode invert)

Visual:
  → Massive "Let's Talk" button spanning full width
  → Animation: Button has "Liquid Fill" effect on hover

Info:
  → Address and Socials arranged in strict grid at bottom
  → Live local time clock (e.g., "London: 14:02") ticks quietly


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL (Non-negotiable)
   → Use Lenis with dampening of 1.2
   → Site needs to feel heavy and luxurious

2. IMAGE REVEAL
   → Images enter viewport using "Curtain Reveal"
   → Solid color block slides away to reveal image
   → NO simple fades

3. MAGNETIC BUTTONS
   → All circular buttons (e.g., "Menu", "Top") use Framer Motion
   → Physically pull towards cursor when it gets close


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT TIMELESS. MAKE IT TACTILE. MAKE IT FLOW.
═══════════════════════════════════════════════════════════════════════════════
```

## Aelia Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                              "AELIA" DESIGN BRIEF
                  Long-Form Luxury E-Commerce Landing Page
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A product launch page for a new line of leather goods (bags, wallets,
accessories). The page must prioritize visual storytelling over fast
transactions, making the user understand the quality, the ethical sourcing,
and the timeless nature of the product before presenting the price.

The Vibe: "Inheritance Quality," "Crafted Transparency," "Natural Patina,"
          "Subtle Grandeur"
The Goal: To feel like exploring a detailed, beautifully lit museum exhibition
          on artisanal craft and ethical materials


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Loom & Leather)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Rich & Earthy)
------------------------------
  • Background:  Muted Oatmeal/Hemp (#F5F3EE)
                 → Very light, warm, off-white that feels textured like natural
                   cloth or recycled paper
  • Typography:  Rich Espresso (#3B2F2F) – deep, warm brown, avoiding stark black
  • Accents:
    - Primary:   Aged Brass (#B8956A) – muted, elegant gold/bronze for active
                 states and critical information
    - Secondary: Deep Forest Green (#2C5F2D) – for ethical/sustainability badges
  • Lines:       Soft, slightly blurred horizontal lines in Taupe (#D4C5B9),
                 suggesting weave of natural fabric

TYPOGRAPHY (Timeless & Detailed)
---------------------------------
  • Headings:      Bespoke, high-contrast, modern Serif
                   (Marian, Canela) – very large, tracked slightly loose
  • Body/Details:  Highly readable, robust Sans-Serif
                   (Freight Text, Sentinel)
  • Annotations:   Tiny, all-caps, ultra-thin monospaced font
                   (e.g., "Sourced: Tuscan Vachetta")

IMAGERY
-------
  • Visuals:  Extremely high-resolution, textural photos of leather grain,
              stitching, and metal hardware
  • Context:  Natural light and muted, architectural backdrops
  • Effect:   All product images utilize subtle Analog Film Grain Overlay


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Product Reveal)
-------------------------------------
Layout:     Full-screen product shot, clean Serif headline
Visual:     Ultra-high-res 3D render of flagship bag centered

Animation (GSAP):
  → Initial: Bag subtly obscured by low-opacity veil of Oatmeal background
  → On Scroll: Veil slides downward in slow, deliberate motion
  → Effect: Reveals product, simultaneously increasing depth of shadow beneath


SECTION 2: THE PHILOSOPHY (The Hand of the Maker)
--------------------------------------------------
Layout:     Single, massive blockquote in Serif font
Content:    "Crafted to outlive the trends. Designed to acquire character."

Interaction (Text Patina):
  → Quote initially rendered in light grey
  → On Scroll: Text slowly fills with Rich Espresso color, synchronized with
    scroll position, mimicking how leather deepens and acquires patina


SECTION 3: MATERIAL STORY (The Texture Zoom)
---------------------------------------------
Layout:     Horizontal gallery of 3 key material swatches
            (Italian Leather, Linen Lining, Brass Hardware)

Interaction (Micro-Detail Magnification):
  → Hover: Cursor changes to circular Magnifying Glass icon (Aged Brass)
  → Area beneath magnifying glass zooms in 300% within card boundary
  → Allows examination of individual stitches or leather grain


SECTION 4: THE COLLECTION (The Pinning Showcase)
-------------------------------------------------
Behavior:   Screen pins (Sticky)
Layout:     Row of 4 distinct product views (Side, Top, Open, Detail)

Interaction (360° Scroll-Driven View):
  → While pinned, vertical scrolling triggers smooth, controlled 360° rotation
    of 3D product render
  → Tiny pop-up Annotations (Deep Forest Green) briefly appear and fade at
    key scroll points (e.g., "Vegetable-Tanned Edge")


SECTION 5: ETHICAL SOURCING (The Animated Flowchart)
-----------------------------------------------------
Layout:     Two-column: Text left, visual right
Visual:     Minimalist diagram showing supply chain
            (Farm → Tannery → Atelier → You)

Interaction (The Light Path):
  → As user scrolls through text, animated stream of light (Aged Brass)
    flows along diagram path
  → Illuminates the step being read about, emphasizing transparent process


SECTION 6: USER GENERATED CONTENT (The Weave Grid)
---------------------------------------------------
Layout:     Dynamic, slightly asymmetrical Masonry Grid of customer photos

Interaction (The Parallax Drape):
  → Entire grid scrolls at slower rate (0.8x) than rest of page
  → Photos appear to be draped behind main text flow
  → On Hover: Individual photo gently tilts on X and Y axes, simulating
    physical card being lifted off display


SECTION 7: FINAL CTA (The Grand Seal)
--------------------------------------
Background: Transitions to Rich Espresso (Dark Mode for footer)
Visual:     Brand logo rendered large in Aged Brass accent

CTA Animation (The Hot Stamp):
  → Button: Simple, outlined box ("View The Collection")
  → Hover: Instantly changes to solid block of Rich Espresso
  → Text (Aged Brass) appears instantly "hot stamped" onto surface


═══════════════════════════════════════════════════════════════════════════════
                   THE "SUBTLE GRANDEUR" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SCROLL BUFFER
   → Use custom scroll library (Lenis)
   → Perfectly smooth with subtle heaviness, suggesting quality and weight

2. BUTTON FEEDBACK
   → All circular navigation buttons are Magnetic
   → Physically pull cursor towards them when it nears

3. LINK UNDERLINE
   → On hover, underline appears as subtle, single thread of Aged Brass
   → Drawn from left to right

4. IMAGE REVEAL
   → All images use slow, staggered Vertical Slat Reveal
   → Image revealed in 3-5 vertical strips, like blinds opening


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT TACTILE. MAKE IT TRANSPARENT. MAKE IT LAST.
═══════════════════════════════════════════════════════════════════════════════
```

## Chronos Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                             "CHRONOS" DESIGN BRIEF
               Temporal Architecture & Data Visualization Platform
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital platform for a conceptual firm specializing in "Temporal
Architecture"—designing systems, visualizing historical patterns, and
predicting future trends across vast datasets. The site itself is a real-time,
interactive data construct, constantly evolving.

The Vibe: "Infinite Canvas," "Dynamic Flux," "Algorithmic Beauty,"
          "Cosmic Scale"
The Goal: To feel like traversing a living, breathing timeline, where every
          scroll uncovers new dimensions and patterns within a vast,
          interconnected universe of data


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Event Horizon)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Deep Space & Energetic Emission)
------------------------------------------------
  • Background:       True Void Black (#000000) – ultimate canvas for light
  • Primary Light:    Slow, pulsing nebulous field of Deep Violet-Blue
                      (#2E1A47 to #1A0B2E) – ambient light of universe
  • Typography:       Ethereal White (#F8F8FF)
  • Accents:
    - Primary:        Electric Cyan (#00FFFF) – for interaction/focus/data points
    - Secondary:      Shifting gradient from Fiery Orange to Plasma Red
                      (#FF6B00 to #FF0055) – for flow lines, energy bursts
  • Structure:        NO traditional dividers – all transitions handled by
                      dynamic shifts in 3D environment and light sources

TYPOGRAPHY (The Code of Existence)
-----------------------------------
  • Headings:    Wide-set, geometric monospaced font
                 (Fira Code, Space Mono Extended)
                 → Rendered with subtle, pulsating glow effect (Electric Cyan)
  • Body/Data:   Clean, legible Sans-Serif (Inter, Rubik)
                 → Generous line height for clarity against complex background
  • Principle:   Text appears "projected" onto 3D environment, not merely placed

IMAGERY
-------
  • Visuals:  Exclusively real-time rendered Three.js scenes
              → Particle systems, volumetric light rays, abstract geometric
                constructs, dynamic graph visualizations
              → NO static images
  • Effect:   All 3D elements exhibit subtle "Lens Flare" and "Chromatic
              Aberration" when light interacts with them


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (6 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Big Bang of Data)
---------------------------------------
Layout:     Centered, minimal text, maximum immersive visual
Visual:     Infinite dark void with highly dense, glowing Particle Nebula
            (tens of thousands of particles) slowly expanding/contracting

Animation (GSAP & ScrollTrigger):
  → Initial: Nebula calm, "CHRONOS" formed by particles coalescing from edge
  → On Scroll: Nebula accelerates expansion, camera flies INTO nebula
  → Particles stream past viewport, revealing headline text formed by more
    structured, glowing particle array within nebula
  → Initial "CHRONOS" text dissolves back into stream


SECTION 2: CORE MODALITIES (The Quantum Lattice)
-------------------------------------------------
Behavior:   3D camera path takes controlled, sideways turn
Layout:     Sparse text on left, primary visual on right
Visual:     Camera inside vast, subtly glowing Geometric Lattice
            (hexagonal grid extending infinitely in 3D space)

Interaction (Node Activation & Data Flow):
  → As user scrolls through modalities (Predictive Analytics, Historical
    Mapping, Simulated Futures), specific node on lattice flares with
    Electric Cyan
  → Complex network of glowing, animated data lines (Orange-Red gradient)
    emanates from activated node
  → Camera subtly repositions to center active node


SECTION 3: PROJECT DEEP DIVE (The Temporal Vortex)
---------------------------------------------------
Behavior:   Screen pins (Sticky) – scroll controls "time axis" in 3D scene
Layout:     Text overlays appear contextually on full-screen 3D environment
Visual:     Massive, slowly rotating Temporal Vortex—funnel of swirling,
            luminous particles and geometric shards

Interaction (Scroll-Controlled Time Warp):
  → Scroll down: Camera pulled deeper into vortex
  → Visual elements change dramatically—each project represented by distinct
    phase shift in vortex
  → New geometric structures emerge, particle colors change, rotation speed
    adjusts
  → Project text appears as ethereal, floating projections within vortex


SECTION 4: THE EPISTEMOLOGICAL ENGINE (The Neural Constellation)
-----------------------------------------------------------------
Layout:     Central text column
Visual:     Vast, interconnected Neural Constellation—thousands of glowing
            spheres (neurons) connected by thin, shimmering lines (synapses)

Interaction (Consciousness Bloom):
  → As user scrolls through text explaining AI, specific neuron clusters "fire"
  → Neurons pulse intensely with Electric Cyan
  → Connecting synapses briefly thicken and flash with Orange-Red gradient
  → Constellation slowly rotates and expands, always moving


SECTION 5: THE HORIZON (Future Projections)
--------------------------------------------
Layout:     Left-aligned descriptive text
Visual:     Panoramic, slow-scrolling "Horizon Line" made of abstract,
            translucent, low-poly mountain ranges
            → Subtle volumetric fog (Violet-Blue) drifts through valleys

Interaction (Predictive Swirl):
  → As user scrolls, tiny "futures" (glowing geometric models of cities,
    data centers, biological structures) slowly rise from behind horizon
  → Appearing and dissolving in gentle swirl of Electric Cyan particles
  → Each model slightly translucent, hinting at potential and uncertainty


SECTION 6: CONTACT & ORIGIN (The Event Horizon Exit)
-----------------------------------------------------
Background: Gradually deepens back to True Void Black
Visual:     Subtle background nebula reappears, but receding

CTA Animation (The Gravitational Pull):
  → Button: Sharp geometric shape (perfect hexagon) in Electric Cyan
  → Hover: Creates subtle gravitational ripple effect in surrounding 3D space
  → Nearby particles and light rays visibly bend and accelerate towards it
  → Contact info appears as subtle, projected overlays that rotate into view


═══════════════════════════════════════════════════════════════════════════════
                   THE "COSMIC SCALE" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. GLOBAL CAMERA CONTROL
   → Entire page scroll position = global parameter for Three.js camera Z-axis
   → Every scroll forward pushes deeper into 3D scene
   → Every scroll back pulls out

2. REACTIVE AUDIO
   → Subtle, ambient, low-frequency sound design (non-intrusive)
   → Changes pitch/intensity based on scroll depth and visualization vibrancy

3. MOUSE INTERACTION (Spatial Distortion)
   → Moving mouse creates subtle "space-time ripple" on background 3D elements
   → Particles momentarily scatter, light rays subtly warp

4. LOADING STATE (Dimensional Rift)
   → NOT a spinner
   → Entire screen covered by slow, expanding "dimensional rift" (black hole)
   → Collapses inward to reveal Hero section

5. CURSOR
   → Default replaced by tiny, glowing Electric Cyan crosshair


═══════════════════════════════════════════════════════════════════════════════
              MAKE IT INFINITE. MAKE IT ALGORITHMIC. MAKE IT COSMIC.
═══════════════════════════════════════════════════════════════════════════════
```

## Aether Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                             "AETHER" DESIGN BRIEF
                  Real-Time Data Intelligence SaaS Platform
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital platform for an AI-powered data intelligence SaaS. It's not about
big data; it's about surgical data clarity. The design must convey precision,
speed, and absolute trust in the AI's judgment.

The Vibe: "High-Fidelity," "Effortless Complexity," "Zero Latency,"
          "Forensic Clarity"
The Goal: To feel like looking at a holographic, perfectly rendered data
          interface in a near-future sci-fi film


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Blueprint & Glass)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Cool & Scientific)
----------------------------------
  • Background:       True Black (#000000) or Ultra-Dark Navy (#0A0E27)
                      → Must feel like turned-off screen waiting to display light
  • Typography:       Digital White (#F0F0F0)
  • Accents:
    - Primary:        Luminous Cyan (#00D9FF) – for active states and core CTAs
    - Secondary:      Muted Electric Violet (#8B5CF6) – for sub-data and warnings
  • Grid/Structure:   Fine, 0.5px lines in subtle, translucent blue-grey
                      (rgba(100, 150, 200, 0.2))

TYPOGRAPHY (The Technical Readout)
-----------------------------------
  • Headings:    Crisp, monospaced Sans-Serif (Space Mono, IBM Plex Mono)
                 → Large, minimal tracking, for all main headers
  • UI/Body:     Clean, neutral geometric Sans (Poppins, Inter)
                 → Small, highly legible sizes
  • Contrast:    Maintain 1:1 ratio between heading width and body text
                 line height to create vertical alignment tension

IMAGERY
-------
  • Visuals:  Abstract, animated line graphs and volumetric light fields
              → NO stock photography
  • Effect:   All visuals appear behind subtle, frosted "Glassmorphism" panel,
              adding layer of depth and separation from dark background


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (6 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Zero-Latency Feed)
----------------------------------------
Layout:     Left-aligned, minimal text, maximum impact
Visual:     Full-screen background video of complex but minimalist animated
            live graph (like heart monitor) constantly updating

Interaction (The Data Pulse):
  → Primary CTA: Pill-shaped button pulses gently with Luminous Cyan,
    synchronized with 'peaks' in background video graph
  → Main headline: Rendered with slight, subtle chromatic aberration filter
    to suggest projection/hologram


SECTION 2: THE CORE VALUE (Precision Reveal)
---------------------------------------------
Layout:     List of 3 key features (Anomaly Detection, Predictive Modeling,
            Real-Time Ingest)

Interaction (The Light Trace):
  → As user scrolls: Thin Luminous Cyan line appears from left, tracing full
    vertical height of feature list before resolving into body text
  → On Hover: Feature title text briefly flickers, mimicking digital display
    refreshing


SECTION 3: THE ARCHITECTURE (The 3D Globe)
-------------------------------------------
Behavior:   Screen pins (Sticky)
Visual:     Black, wireframe 3D globe (representing interconnected data
            network) slowly rotates in center

Interaction (Anomaly Pinpoint):
  → Tiny, flashing points of Violet light appear randomly on globe
    (simulating anomalies)
  → Scroll: Camera angle on 3D globe smoothly rotates to focus on specific,
    brightly lit section, illustrating point being read


SECTION 4: USE CASES (Code Block Showcase)
-------------------------------------------
Layout:     Tabs or internal navigation that swaps content
Visual:     Each use case (Finance, Logistics, Security) presented within
            dark, stylized Code Block interface

Interaction (The Terminal Scroll):
  → When tab selected: Content does NOT fade
  → Text appears "typewritten" instantly, character by character, from top
    of block, like terminal output
  → Selected tab indicator: Solid Cyan background


SECTION 5: PRICING (The Transparency Matrix)
---------------------------------------------
Layout:     Clean 3-column pricing table

Interaction (The Blueprint Overlay):
  → Hovering over any pricing tier triggers temporary, transparent grid
    overlay (using sub-grey lines) expanding over entire table
  → Highlights structural integrity and precision of pricing
  → Paid tier CTAs: Luminous Cyan pulse button
  → Free tier CTA: Outlined only


SECTION 6: FOOTER (The System Shutdown)
----------------------------------------
Background: Stays True Black
Visual:     Demarcated by horizontal rule that slowly 'de-rezzes' (dissolves
            into individual light particles) before resolving into solid line

Info:
  → Standard contact/links
  → Current software version number displayed prominently in tiny monospaced
    text next to copyright


═══════════════════════════════════════════════════════════════════════════════
                   THE "HIGH-FIDELITY" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. TEXT SELECTION
   → Selecting text highlights with transparent Luminous Cyan background
     instead of browser default blue

2. LOADING
   → All images/visual elements use "Scanline Reveal"
   → Horizontal line of light sweeps down area to draw image, like old CRT
     monitor powering on

3. GLOBAL CURSOR
   → Default replaced with slightly larger, outlined crosshair icon
   → Changes to solid dot only over interactive elements

4. SCROLL BAR
   → Native scroll bar hidden
   → Replaced by thin, vertical Luminous Cyan line on right edge
   → Visually represents scroll position


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT PRECISE. MAKE IT FAST. MAKE IT LUMINOUS.
═══════════════════════════════════════════════════════════════════════════════
```

## Nexus Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                              "NEXUS" DESIGN BRIEF
                   The Intelligent Workflow Platform
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital homepage for an AI-powered SaaS platform that streamlines complex
project management and team collaboration.

The Vibe: "Frictionless," "Modular," "Data-Driven," "Systematic Clarity"
The Goal: To feel like looking at a perfectly organized and optimized dashboard


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Grid & Code)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Technical & Crisp)
----------------------------------
  • Background:  Ultra Light Grey (#F7F7F7) or Arctic White (#FFFFFF)
                 → Canvas must feel open and highly usable
  • Typography:  Deep Navy (#182848) – professional and readable
  • Accents:     Intelligent Teal (#00C4CC) and Deep Violet (#6C5CE7)
                 → Used sparingly for focus and active states
  • Lines:       Fine (1px) in Light Silver (#E3E3E3)
                 → Establish clear grid structures and boundaries

TYPOGRAPHY (The Precision)
---------------------------
  • Headings:    Sharp, geometric Sans Serif with high x-height
                 (Calibre, Inter Bold, Sofia Pro)
  • UI/Labels:   Monospaced font (IBM Plex Mono, Fira Code)
                 → For data, variables, and code snippets

IMAGERY
-------
  • Images:    Clean, abstract data visualizations (charts, networks, nodes)
               or clean UI mockups
  • Parallax:  UI elements subtly 'float' above background grid
               → Grid shifts slightly slower, emphasizing layered nature


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Dashboard Reveal)
---------------------------------------
Layout:     Left-aligned, heavy emphasis on screen space
Visual:     Screen initially a black command line interface with Nexus logo

Animation (GSAP):
  → Screen runs rapid "loading" sequence of code
  → As you scroll, black screen peels away (like sheet of paper being lifted)
  → Reveals pristine, full-screen UI mockup of Nexus dashboard underneath
  → Transitions from dark (setup) to light (active)


SECTION 2: THE PHILOSOPHY (The Data Decode)
--------------------------------------------
Layout:     Massive Monospaced typography taking up 80% of screen
Content:    "Complex projects require [Bold]Intelligent[/Bold] simplicity."

Interaction (GSAP ScrollTrigger):
  → Text initially appears as random binary or hex code (e.g., 011011)
  → As user scrolls, code segments rapidly decoded into legible English text
  → Synchronized with scroll position, visualizing AI's function


SECTION 3: KEY MODULES (The Horizontal Scroll)
-----------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 self-contained UI components
            (Task Automation, AI Scheduling, Reporting)

Card Design:
  → Animated UI mockup (subtle data flow/chart)
  → Module Title (Sans) and Use Case description below

Interaction (The Focus):
  → Framer Motion: When hovering over module, all others subtly desaturate
    (grayscale)
  → Hovered module sharpens and pulsates faintly with Accent Teal color


SECTION 4: ARCHITECTURE (Security & Speed)
-------------------------------------------
Layout:     Clean grid of 3 technical promises (Cloud Native, Zero Trust
            Security, API Integration)
Visual:     Clean, geometric icons or simple network diagrams

Interaction:
  → Hover: Cursor becomes focused target icon
  → Click: Element transitions into full-screen, simple diagram (infographic)
    explaining security layer or tech stack
  → Detail: Key performance metrics (e.g., "99.99% Uptime") float in with
    subtle counter animation


SECTION 5: PRICING (The Plan Accordion)
----------------------------------------
Layout:     Horizontal lines separating plans (Starter / Pro / Enterprise)

Interaction (Framer Motion):
  → Hover: Plan row expands, translucent dark background shadow fills space
    behind it, emphasizing selected tier
  → Visual: Concise list of features drops down with dynamic checkmark animation


SECTION 6: CASE STUDIES (The Grid Solution)
--------------------------------------------
Layout:     Functional, asymmetrical grid of client logos and impact summaries

Visual:
  → Mix of client logos, data charts showing efficiency gains, client quotes
  → Scroll Speed: Items in grid subtly shift position relative to each other
  → Creates sense of calculated data flow (like nodes adjusting in network)


SECTION 7: FOOTER (The CTA Panel)
----------------------------------
Background: Transitions to Deep Navy (Dark Mode for focus)

Visual:
  → Large "Start Your Free Trial" button snaps to full width
  → Animation: Button background fills with Intelligent Teal from left on hover,
    like progress bar filling up

Info:
  → Links and legal info arranged in tight, readable block
  → Live indicator shows "Current User Count" incrementing quietly


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL
   → Use Lenis with quick, low-dampening setting (1.1)
   → Site should feel snappy, fast, highly responsive—like efficient software

2. IMAGE REVEAL
   → Images (UI mockups) enter viewport by "wiping" horizontally, segment by
     segment, like code being drawn onto screen

3. MAGNETIC BUTTONS
   → All CTA buttons and navigation links use Framer Motion
   → Subtly magnetic, guiding user's cursor toward them with precision


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT FAST. MAKE IT LOGICAL. MAKE IT WORK.
═══════════════════════════════════════════════════════════════════════════════
```

## ChromaFlow Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                           "CHROMAFLOW" DESIGN BRIEF
                   The Dynamic Art & Tech Studio
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital portfolio for a studio that creates interactive light installations
and generative art.

The Vibe: "Luminous," "Fluid Dynamics," "Algorithmic Beauty,"
          "Playful Innovation"
The Goal: To feel like stepping into a living, breathing art piece that
          responds to your presence


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Spectrum & Canvas)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Vibrant & Evolving)
-----------------------------------
  • Background:  Pristine White (#FFFFFF) or Ghost White (#F8F8FF)
                 → Should feel like blank canvas awaiting color
  • Typography:  Dynamic Grey (#333333) – neutral base for vibrant accents
  • Accents:     Constantly shifting, subtle gradient of two complementary
                 bright colors
                 → e.g., Electric Blue (#007BFF) and Radiant Pink (#FF008C)
                 → Fading to Lime Green (#7CFC00) and Deep Violet (#8A2BE2)
                 → This gradient is ALWAYS subtly animating
  • Lines:       Ultra-thin (0.5px) in shimmering, iridescent pearl (#E0E0E0)

TYPOGRAPHY (The Harmony)
-------------------------
  • Headings:    Modern, clean Geometric Sans Serif
                 (Futura, Avenir Next, Gotham)
                 → Characters have subtle, organic weighting shifts
  • UI/Labels:   Contemporary, highly legible Humanist Sans Serif
                 (Poppins, Montserrat Light)

IMAGERY
-------
  • Images:    Vibrant, abstract, often featuring light in motion
               → Time-lapse light painting, glowing particles
  • Parallax:  Elements have subtle "breathing" or pulsating effect
               → Move at slightly varied speeds, creating multi-layered,
                 almost holographic feel


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Lumina Bloom)
-----------------------------------
Layout:     Centered
Visual:     Pure white screen

Animation (GSAP):
  → Tiny, colored particle appears in center
  → As you scroll, particle "explodes" into mesmerizing, organic fractal
    pattern that continuously grows and shifts in color, filling entire screen
  → Brand name "CHROMAFLOW" rendered directly within flowing pattern, as if
    part of the light


SECTION 2: THE PHILOSOPHY (Generative Text)
--------------------------------------------
Layout:     Massive Geometric Sans typography, characters slightly offset,
            taking up 80% of screen
Content:    "Where [Italic]algorithms[/Italic] paint with light."

Interaction (GSAP ScrollTrigger):
  → Text starts as single color (Dynamic Grey)
  → As user scrolls, each letter subtly cycles through accent gradient colors
    independently
  → Creates "rainbow wave" effect synchronized with scroll
  → Letter spacing also subtly expands and contracts


SECTION 3: INSTALLATIONS (The Infinite Canvas)
-----------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 massive, full-bleed images of immersive light
            installations

Card Design:
  → Full-screen installation image
  → Project title and single, glowing "Play" button (with subtle animated
    shimmer)

Interaction (The Echo):
  → Framer Motion: When hovering over installation image, circular "ripple"
    effect expands from mouse cursor
  → Subtly warps and re-colors pixels of image as it passes over them, like
    sound waves through light


SECTION 4: PROCESS (The Particle Grid)
---------------------------------------
Layout:     Grid of 3 abstract concepts (Data Visualization, Kinetic Sculpture,
            Interactive Environments)
Visual:     Abstract particle simulations (light particles moving in complex
            patterns)

Interaction:
  → Hover: Cursor transforms into glowing, multi-colored orb that attracts
    surrounding particles
  → Click: Particle simulation expands to fill full screen, becoming
    interactive—user can "play" with particles using mouse
  → Detail: Small, glowing labels describe underlying technology
    (e.g., "GPU Shaders," "Sensor Integration")


SECTION 5: SERVICES (The Refraction Accordion)
-----------------------------------------------
Layout:     Vertical stack of services (Architectural Lighting / Event Visuals /
            Brand Experiences)

Interaction (Framer Motion):
  → Hover: Text itself subtly refracts light, creating prismatic effect
  → Visual: Dynamic, abstract light pattern (caustics, moiré patterns) smoothly
    fades in behind text, unique to each service


SECTION 6: THE LAB (Live Generative Feed)
------------------------------------------
Layout:     Asymmetrical grid where some cells are photos, others are small,
            looping generative art animations

Visual:
  → Mix of studio shots, code snippets, and live, subtle generative art pieces
  → Scroll Speed: Entire grid warps slightly with subtle fish-eye lens effect
    based on scroll velocity, giving sense of depth and movement


SECTION 7: FOOTER (The Radiant Core)
-------------------------------------
Background: Shifts to slowly animating, full-screen accent gradient

Visual:
  → Large "Illuminate Your Vision" button with pulsating glow and color-
    shifting border
  → Animation: Button background is continuous, slow-motion "liquid light" flow

Info:
  → Studio location and social links rendered in clean, translucent overlay
    on top of gradient
  → Small, glowing line: "Powered by Creativity & Code"


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL
   → Use Lenis with light, airy dampening (1.3)
   → Scrolling should feel like gliding through light beam with gentle momentum

2. IMAGE REVEAL
   → Images "bloom" into view
   → Start as single pixel of light in center and expand outward with
     luminous glow effect

3. REACTIVE CURSOR
   → Entire mouse cursor has faint, color-shifting aura around it
   → Subtly reacts to background elements it hovers over


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT GLOW. MAKE IT FLOW. MAKE IT REACT.
═══════════════════════════════════════════════════════════════════════════════
```

## Velocité Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                            "VELOCITÉ" DESIGN BRIEF
                       The Hyper-Electric Concept
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital showroom for a futuristic electric vehicle brand that merges speed
with silence.

The Vibe: "Kinetic Energy," "Matte Finish," "Neon Noir,"
          "Precision Engineering"
The Goal: To feel like sitting in the cockpit of a spaceship moving at Mach 1


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Asphalt & Neon)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Cool & Electric)
--------------------------------
  • Background:  Deep Asphalt (#121212) or Phantom Grey (#1C1C1E)
                 → Should feel like dark road at night
  • Typography:  Pure White (#FFFFFF) – sharp and high contrast
  • Accents:     Electric Cyan (#00F0FF) and Signal Red (#FF2A00)
  • Lines:       Medium (2px) in Steel Blue (#3A4E5C)
                 → Create HUD (Heads Up Display) aesthetics

TYPOGRAPHY (The Speed)
-----------------------
  • Headings:    Wide, aggressive Sans Serif Display
                 (Eurostile Extended, Monument Extended, Druk Wide)
  • UI/Labels:   Monospaced code font (JetBrains Mono, Space Mono)

IMAGERY
-------
  • Images:    High-contrast, "glossy" finish
  • Parallax:  Background elements (blurred lights) move faster than foreground
               to simulate speed


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Ignition)
-------------------------------
Layout:     Center aligned
Visual:     Screen is pitch black

Animation (GSAP):
  → Two glowing headlights fade in from darkness
  → Brand name "VELOCITÉ" flickers on like neon sign (Opacity flicker)
  → As you scroll, headlights flare out (Scale Up), transitioning into
    high-speed tunnel video that fills viewport


SECTION 2: THE MANIFESTO (Velocity Text)
-----------------------------------------
Layout:     Massive Extended Sans typography taking up 80% of screen
Content:    "Silence is the new sound of speed."

Interaction (GSAP ScrollTrigger):
  → Text is skewed (italicized) based on scroll velocity
  → Faster scroll = more text leans forward (skewX)
  → Color shifts from White to Electric Cyan as it crosses center of viewport


SECTION 3: THE MODELS (The Horizontal Run)
-------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 car models in profile view

Card Design:
  → Car profile image (Cutout)
  → Stats (0-60, Range, HP) displayed in floating holographic grid overlay

Interaction (The Wind Tunnel):
  → Framer Motion: When hovering over car, "wind lines" (SVG strokes) animate
    flowing over curves of vehicle, visualizing aerodynamics


SECTION 4: THE TECH LAB (Component X-Ray)
------------------------------------------
Layout:     Grid of 3 core components (Battery Cell, Motor Coil, Carbon Rim)
Visual:     3D wireframe renders on dark background

Interaction:
  → Hover: Cursor becomes target reticle "⌖"
  → Click: Wireframe transitions to photorealistic render and scales to
    full screen
  → Detail: Monospaced data streams type out technical specifications in corners


SECTION 5: FEATURES (The Blueprint)
------------------------------------
Layout:     Vertical stack of features (Autopilot / Charging / Connectivity)

Interaction (Framer Motion):
  → Hover: Section expands vertically (Accordion)
  → Visual: Inside expanded section, looping blueprint animation draws itself
    (SVG stroke dashoffset) showing schematic of that feature


SECTION 6: THE CIRCUIT (Masonry Grid)
--------------------------------------
Layout:     Asymmetrical grid of lifestyle shots and race track telemetry

Visual:
  → Mix of high-speed photography and abstract data maps
  → Scroll Speed: Images have "Motion Blur" effect applied via CSS filters
    that only activates while user is actively scrolling


SECTION 7: FOOTER (The Finish Line)
------------------------------------
Background: Transitions to Electric Cyan (High Energy)

Visual:
  → Massive "Test Drive" button spanning full width
  → Animation: Button background is scrolling texture of asphalt moving
    rapidly downwards

Info:
  → Dealership locations and Socials arranged in terminal-style list
  → Live "Global Miles Driven" counter increments rapidly


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL
   → Use Lenis with dampening of 1.0
   → Needs to feel precise and responsive, like sports car steering wheel

2. IMAGE REVEAL
   → Images enter viewport using "Glitch Reveal" (chromatic aberration and
     slice offset) before snapping into focus

3. MAGNETIC BUTTONS
   → All CTA buttons have "glow" effect that follows mouse cursor position
     within button boundaries


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT FAST. MAKE IT SHARP. MAKE IT ELECTRIC.
═══════════════════════════════════════════════════════════════════════════════
```

## Aura Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                              "AURA" DESIGN BRIEF
                       The Botanical Skincare
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital storefront for ultra-clean, science-backed skincare that feels
weightless.

The Vibe: "Ethereal," "Translucent," "Dewy Skin," "Clinical Purity"
The Goal: To feel like stepping into a cloud infused with sunlight and botanicals


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Light & Water)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Bright & Clean)
-------------------------------
  • Background:  Pure White (#FFFFFF) or Snow Drift (#FAFAFA)
                 → Must feel absolutely clean
  • Typography:  Soft Charcoal (#4A4A4A) – never pure black, too harsh
  • Accents:     Pale Blush (#F7E7E6) and Mint Dew (#E8F5E9)
  • Lines:       Barely perceptible (0.5px) in Vapor Grey (#F0F0F0)

TYPOGRAPHY (The Clarity)
-------------------------
  • Headings:    High-contrast, elegant Serif
                 (Canela Thin, Tiempos Headline, Domaine Display)
  • UI/Labels:   Clean, minimalist Sans Serif
                 (Untitled Sans, Helvetica Neue, Inter)

IMAGERY
-------
  • Images:    Bright, "high-key" photography with natural light
  • Parallax:  Elements should feel like floating in water, drifting slowly
               and independently of each other


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Awakening)
--------------------------------
Layout:     Center aligned
Visual:     Completely white screen

Animation (GSAP):
  → Single water droplet sound plays
  → Visually, droplet hits center of white screen, creating slow ripple effect
    (displacement wave) that radiates outward
  → As ripples clear, brand name "AURA" and luminous product shot gently
    fade upwards into view


SECTION 2: THE PHILOSOPHY (Fog Reveal)
---------------------------------------
Layout:     Large Serif typography taking up 80% of screen
Content:    "Beauty that reveals your inner luminosity."

Interaction (GSAP ScrollTrigger):
  → Text starts heavily blurred (Gaussian Blur 20px) and slightly opaque,
    as if seen through steam on mirror
  → As you scroll, text de-blurs and sharpens into focus, becoming crisp
    Charcoal color


SECTION 3: THE COLLECTION (The Horizontal Flow)
------------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 hero products on minimalist white plinths

Card Design:
  → Product image floating with soft shadow
  → Title (Serif) and Price (Sans) below

Interaction (The Surface):
  → Framer Motion: When hovering over product, background behind just that
    product subtly distorts like touching surface of still water
    (liquid distortion effect)


SECTION 4: INGREDIENTS (Macro Immersion)
-----------------------------------------
Layout:     Grid of 3 key ingredients (White Tea, Hyaluronic Acid, Quartz)
Visual:     Extreme macro videography of textures in slow motion

Interaction:
  → Hover: Cursor becomes droplet icon
  → Click: Macro video expands to full screen in slow, smooth transition
  → Detail: Science-backed benefits fade in over video in clean white text


SECTION 5: ROUTINE (The Bloom)
-------------------------------
Layout:     Vertical steps of skincare routine (Cleanse / Treat / Moisturize)

Interaction (Framer Motion):
  → Hover: Soft, colored light "bloom" (e.g., pale pink for cleanse, pale
    blue for treat) emanates from behind text
  → Visual: Supporting image gently dissolves into view next to text


SECTION 6: THE JOURNAL (Floating Grid)
---------------------------------------
Layout:     Asymmetrical, airy grid with lots of white space

Visual:
  → Mix of lifestyle shots in bright, natural environments and short wellness
    quotes
  → Scroll Speed: Elements float upwards at different speeds. Some smaller
    elements actually drift slowly upwards against scroll direction, creating
    weightless feeling


SECTION 7: FOOTER (The Soft Glow)
----------------------------------
Background: Remains Pure White, but with very subtle central glow vignette

Visual:
  → Large "Join the List" input field that looks like simple underline
  → Animation: Input field emits soft, pulsing light when focused

Info:
  → Minimalist links arranged in clean, centered stack
  → Small line: "Crafted in Light"


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL
   → Use Lenis with very soft dampening (1.5)
   → Scroll should feel like moving through water or clouds—effortless and
     drifting

2. IMAGE REVEAL
   → Images do NOT fade in
   → They "de-blur" from heavily blurred state into sharpness as they enter
     viewport

3. SOFT BUTTONS
   → Buttons do NOT have hard borders
   → They are soft shadows that become slightly more defined and lift up
     (scale 1.05) on hover


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT PURE. MAKE IT LIGHT. MAKE IT BREATHE.
═══════════════════════════════════════════════════════════════════════════════
```

## Forge Design Brief

```
═══════════════════════════════════════════════════════════════════════════════
                              "FORGE" DESIGN BRIEF
                       The Artisan Cookware
═══════════════════════════════════════════════════════════════════════════════

THE CONCEPT
-----------
A digital space for a high-end kitchenware brand that focuses on heritage,
durability, and traditional craft.

The Vibe: "Aged Copper," "Charcoal Smoke," "Tangible Weight," "Heat & History"
The Goal: To feel like picking up a heavy, well-seasoned piece of cast iron
          in an old workshop


═══════════════════════════════════════════════════════════════════════════════
                      VISUAL LANGUAGE (Iron & Ember)
═══════════════════════════════════════════════════════════════════════════════

COLOR PALETTE (Deep & Textured)
--------------------------------
  • Background:  Deep Cast Iron Black (#1A1A1A) or Charcoal Grey (#2B2B2B)
                 → Must convey depth and heat
  • Typography:  Muted Brass (#B8860B) or Antique White (#F5E6CC) for contrast
  • Accents:     Aged Copper (#B87333) and Deep Emerald (#0A3E39)
  • Lines:       Thick (3px) in rough, textured Charcoal that looks like pencil
                 drawing (#404040)

TYPOGRAPHY (The Heritage)
--------------------------
  • Headings:    Classic, authoritative Serif with strong vertical stress
                 (Baskerville, Chronicle Display, Plantin)
  • UI/Labels:   Wide, industrial, all-caps Sans Serif
                 (Work Sans SemiBold, Bebas Neue)

IMAGERY
-------
  • Images:    Dark, moody, heavily textured
               → Focus on patina, scratch marks, close-ups of materials
  • Parallax:  Background images feel fixed and immovable, foreground elements
               shift slightly, mimicking depth in dusty workshop


═══════════════════════════════════════════════════════════════════════════════
                          THE USER JOURNEY (7 Sections)
═══════════════════════════════════════════════════════════════════════════════

SECTION 1: HERO (The Foundry)
------------------------------
Layout:     Left-aligned
Visual:     Screen is deep black with subtle ambient sounds of metalworking

Animation (GSAP):
  → Word "FORGE" appears stamped into black background
  → As you scroll, horizontal 'wipe' effect moves across screen
  → Reveals high-resolution, slow-motion video of copper being hammered or
    molten steel being poured
  → Sound swells and then fades as text reappears


SECTION 2: THE PHILOSOPHY (The Patina)
---------------------------------------
Layout:     Massive Serif typography slightly skewed (italicized) taking up
            70% of screen
Content:    "We craft tools meant to last [Bold]generations[/Bold]."

Interaction (GSAP ScrollTrigger):
  → Text starts clean (Muted Brass)
  → As user scrolls, subtle texture map (like copper patina or rust) is
    introduced and fills text
  → Makes it appear aged and heavy
  → Texture intensity synchronized with scroll position


SECTION 3: THE COLLECTIONS (The Weigh-in)
------------------------------------------
Behavior:   Page pins (Sticky). User scrolls horizontally.
Visual:     Sequence of 4 detailed product collections
            (Cast Iron, Copper, Carbon Steel)

Card Design:
  → Product image centered
  → Subtle digital scale animation displays product weight in kilograms
    underneath title (e.g., 2.4 KG)

Interaction (The Hotspot):
  → Framer Motion: When hovering over product, circular, localized "heat map"
    effect appears
  → Subtly shifts colors of metal beneath cursor (using color gradient filter)


SECTION 4: MATERIALS (The Micro-Grain)
---------------------------------------
Layout:     Grid of 3 raw materials (Carbon Steel, Oak Handle, Copper Core)
Visual:     Extreme, macro-level photography of material grain

Interaction:
  → Hover: Cursor becomes magnifying glass icon
  → Click: Image transitions with heavy 'thud' sound effect, expanding to
    fill full screen
  → Detail: Floating text annotations explain temperature and traditional
    process used for that material


SECTION 5: CRAFTSMANSHIP (The Assembly)
----------------------------------------
Layout:     Steps of forging process (Hand-Hammered / Polished / Seasoned)

Interaction (Framer Motion):
  → Hover: Background of entire row darkens, shadow box effect applied,
    giving depth and weight
  → Visual: Subtle, short video loop of corresponding hand-craft process
    fades in behind text


SECTION 6: THE LEGACY (History Timeline)
-----------------------------------------
Layout:     Asymmetrical masonry grid mixed with vertical timeline elements

Visual:
  → Mix of archival photos, modern recipes, pull-quotes from master artisans
  → Scroll Speed: Static vertical line runs down center of viewport
  → Content points "snap" to this line as user scrolls, creating history
    timeline effect


SECTION 7: FOOTER (The Final Stamp)
------------------------------------
Background: Transitions to Muted Brass (Metallic Invert)

Visual:
  → Large "Talk to an Artisan" button spanning full width
  → Animation: Button has slow "Heat Warp" distortion effect on hover

Info:
  → Workshop address and social media links in heavy, boxed grid
  → Live indicator shows "Current Forging Temperature" in Celsius
    (e.g., 1050°C) updating slowly


═══════════════════════════════════════════════════════════════════════════════
                   THE "PREMIUM" DETAILS (Micro-Interactions)
═══════════════════════════════════════════════════════════════════════════════

1. SMOOTH SCROLL
   → Use Lenis with heavy friction (dampening 0.8)
   → Site must feel physically heavy
   → Scrolling should require effort and stop abruptly

2. IMAGE REVEAL
   → Images use "Burn-in Reveal"
   → Starting black and gradually brightening from center outwards, like
     photograph developing

3. MAGNETIC BUTTONS
   → All CTA buttons have heavy, 'clunking' sound effect
   → Slightly indent (z-axis push) on press


═══════════════════════════════════════════════════════════════════════════════
                    MAKE IT HEAVY. MAKE IT ENDURING. MAKE IT AUTHENTIC.
═══════════════════════════════════════════════════════════════════════════════
```
