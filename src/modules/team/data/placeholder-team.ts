import type { TeamMember } from "../types";

// Real names and bios, supplied directly by the business. No photoUrl yet —
// render an initials avatar until real headshots are supplied (see
// design-system.md §13, imagery style), rather than showing a stock photo
// next to a real person's name.
export const placeholderTeam: TeamMember[] = [
  {
    id: "gill-sinnott",
    name: "Gill Sinnott",
    role: "Director",
    bio: "With more than 40 years' experience in residential lettings and block management, Gill oversees the company's accounts and financial operations. Her detailed knowledge of lettings legislation, block management and compliance helps ensure clients receive informed, dependable guidance.",
  },
  {
    id: "john-sinnott",
    name: "John Sinnott",
    role: "Director",
    bio: "John has over 35 years' experience in residential lettings. He leads the day-to-day operation of the business, maintains close relationships with landlords, and oversees property maintenance, refurbishments and ongoing tenancy issues.",
  },
  {
    id: "sarah-spires",
    name: "Sarah Spires",
    role: "Office Manager",
    bio: "Sarah has been part of The Accommodating Company for more than 30 years. She oversees the day-to-day administration behind every tenancy, including contracts, renewals and essential documentation, helping each let progress smoothly from start to finish.",
  },
  {
    id: "laura-wilson",
    name: "Laura Wilson",
    role: "Lettings Manager",
    bio: "Laura brings decades of experience with The Accommodating Company to her role as Lettings Manager. She oversees property valuations, marketing and advertising, ensuring every home is accurately presented and reaches the right prospective tenants.",
  },
  {
    id: "maggie-evans",
    name: "Maggie Evans",
    role: "Administrative Assistant",
    bio: "Maggie supports the administrative team with the essential day-to-day coordination that keeps the business running smoothly. Working closely with Sarah, she helps manage tenancy documentation, enquiries and the details behind each successful let.",
  },
  {
    id: "jessica-palmer",
    name: "Jessica Palmer",
    role: "Compliance & Property Management Coordinator",
    bio: "Jessica helps keep the company's managed portfolio compliant, current and well organised. She monitors evolving residential lettings requirements and coordinates key obligations including property inspections, gas safety certification and wider compliance records.",
  },
];
