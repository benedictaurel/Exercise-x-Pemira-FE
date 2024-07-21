import "/app/styles/styles.css";

function Navbar() {
  return (
    <section className="flex gap-5 justify-between items-center px-14 py-5 w-full text-base font-semibold tracking-normal leading-6 text-white bg-sky-900 shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="shrink-0 w-44 bg-zinc-300 h-[50px]" aria-hidden="true"></div>
        <nav className="flex gap-5 items-center max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5">
            <a href="/" className="nav-link">Home</a>
            <a href="/#candidate" className="nav-link">Candidate</a>
            <a href="/voting" className="nav-link">E-Voting</a>
            <a href="/#faq" className="nav-link">FAQ</a>
          </div>
          <a href="/login">
            <button className="px-8 py-4 text-center text-bold rounded-full shadow-2xl max-md:px-5 bg-gradient-to-b from-kuning to-oren via-kuning button-zoom">
              Login SSO
            </button>
          </a>
        </nav>
      </section>
  );
}

export default Navbar;