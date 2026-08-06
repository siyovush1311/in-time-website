type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40">
      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}