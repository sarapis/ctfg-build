export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
        <h2 className="font-display text-xl font-medium text-ink">Loading…</h2>
      </div>
    </div>
  );
}
