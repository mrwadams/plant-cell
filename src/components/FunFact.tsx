export default function FunFact({ fact }: { fact: string }) {
  return (
    <div
      className="animate-pulse-glow rounded-xl border-2 p-5 my-6"
      style={{
        borderColor: "var(--organelle-color)",
        backgroundColor: "var(--organelle-light)",
      }}
    >
      <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--organelle-color)" }}>
        🌟 Fun Fact
      </p>
      <p className="text-gray-800 leading-relaxed">{fact}</p>
    </div>
  );
}
