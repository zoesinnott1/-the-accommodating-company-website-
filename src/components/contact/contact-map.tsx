// Plain Google Maps embed via query string — no API key required. Swap the
// query for a place ID later if more precise pin placement is needed.
const MAP_QUERY = encodeURIComponent("52 Browning Road, Enfield, Middlesex EN2 0EN");

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-card border border-ink-300">
      <iframe
        title="Map showing The Accommodating Company's office at 52 Browning Road, Enfield"
        src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
        width="100%"
        height="260"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
