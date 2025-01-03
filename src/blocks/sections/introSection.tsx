import background from "@/assets/images/topiary-green-pot.webp";

export default async function IntroSection() {
    return (
      <div
        className="relative min-h-[150rem] w-screen max-w-7xl mx-auto"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>Intro Section</h1>
      </div>
    )
}
