// Shared so the homepage teaser and the full About page team grid render
// identical placeholder avatars until real headshots are supplied.
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
