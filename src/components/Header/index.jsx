const Header = () => {
  return (
    <header className="shadow border-box">
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Kiri: Logo */}
        <div className="text-2xl font-bold z-10">Mhsaa</div>

        {/* Tengah: Nav */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        {/* Kanan: Tombol */}
        <div className="flex gap-2 z-10">
          <button className="btn px-4 py-2 border rounded">Sign in</button>
          <button className="btn px-4 py-2 bg-blue-500 text-white rounded">Activate</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
