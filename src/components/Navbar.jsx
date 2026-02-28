export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">My Portfolio</h1>
      <div className="space-x-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}