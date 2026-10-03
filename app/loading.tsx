export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#132B3E]/20 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#C5A059] animate-spin"></div>
      </div>
      <p className="text-xs uppercase tracking-widest text-[#132B3E] font-bold">
        Loading Anjani Luxury Living...
      </p>
    </div>
  );
}
