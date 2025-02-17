import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & AI Button */}
        <div>
          <h2 className="text-3xl font-bold text-transparent z-50 bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-600 tracking-wide">Agentia OS</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Revolutionizing industries with AI-powered solutions.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-blue-600">Explore</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            {["Home", "Solutions", "AI Technology", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-600 transition-all block w-fit">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">Stay Connected</h3>
          <div className="flex justify-center md:justify-end space-x-5 mt-5">
            {[
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/syeda-farheen-zehra-648459268/" },
              { icon: FaGithub, link: "https://github.com/Farheenzehra99" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-700 transition-all rounded-full shadow-md shadow-gray-700/50 backdrop-blur-md transform hover:scale-110"
              >
                <Icon className="text-xl text-white" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Agentia OS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}