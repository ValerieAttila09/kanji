# Shattuck Labs Landing Page Blueprint

## Overview

This document outlines the plan for creating a responsive landing page for Shattuck Labs, based on a provided design image. The goal is to create a visually accurate and modern Next.js application.

## Implemented Features

This section will be updated as new components are built.

## Current Plan: Rebuild Landing Page

The user was not satisfied with the initial version. This plan details the steps to rebuild the application to closely match the provided reference image.

1.  **Project Cleanup:** Remove all previously created components, constants, and assets to start fresh.
2.  **Navbar:**
    *   Create a sticky navbar with a black, slightly transparent background.
    *   Display the "SHATTUCK" logo on the left.
    *   Include a "Contact" button on the right.
3.  **Hero Section:**
    *   Full-screen section with a black background.
    *   Display the main headline: "Advancing the Standard of Care in Inflammatory Diseases Through Innovation".
    *   Include the descriptive text below the headline.
    *   Add a "Our Pipeline" button.
4.  **DR3 Section ("Establishing DR3..."):**
    *   White background section.
    *   Left side: An image/placeholder for the "DR3 Image" graph.
    *   Right side:
        *   Headline: "Establishing DR3 as a Foundational Target in IBD and Beyond".
        *   Descriptive text.
        *   "Our Science" button.
5.  **Pipeline Section:**
    *   Display the title "Our Pipeline".
    *   Include descriptive text.
    *   List the "Leads": SL-325, SL-401, KADMON.
    *   Add an "Our Pipeline" button.
6.  **Join Us & Our Team Section:**
    *   Title: "Join Us".
    *   Button: "Explore Careers".
    *   Subtitle: "Our Team" / "Meet the Innovators Guiding the Mission".
    *   A simple list of team member names.
7.  **Locations Section:**
    *   Title: "Locations".
    *   Text describing Durham, NC and Austin, TX offices.
    *   Button: "Contact Us".
8.  **News Section:**
    *   Title: "News".
    *   Create a list of news articles, each with a date, title, and a "Read More" link.
9.  **Events Section:**
    *   Title: "Events".
    *   Create a list of events, each with a date, title, and a "Learn More" link.
    *   Add a "View All Events" button at the bottom.
10. **Footer:**
    *   Black background.
    *   "SHATTUCK LABS" title and tagline.
    *   "Contact" section with a "Contact Us" button.
    *   "Links" section with navigation links.
    *   Copyright and legal information at the bottom.
11. **Styling and Finalization:**
    *   Use Tailwind CSS for styling, ensuring class names are clean and consistent.
    *   Ensure responsiveness across different screen sizes.
    *   Add animations and placeholder images as seen in the reference.
    *   All content will be centralized in `lib/constants/index.ts`.
