export default function HireMe() {
  return (
    <div className="px-8 py-20 bg-gray-900">
      <h2 className="text-4xl font-bold">Why Should You Hire Me?</h2>

      <video
        className="mt-6 w-full h-80 rounded-xl"
        controls
        src="/my-intro-video.mp4"
      />
    </div>
  );
}
