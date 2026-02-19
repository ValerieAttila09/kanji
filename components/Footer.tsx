import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SHATTUCK LABS</h3>
            <p className="text-gray-400">Advancing the Standard of Care in Inflammatory Diseases Through Innovation</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Our Science</a></li>
              <li><a href="#" className="hover:underline">Our Pipeline</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
            </ul>
          </div>
          <div>
            {/* Social Media links can go here */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shattuck Labs. All Rights Reserved.</p>
          <p className="mt-2">Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
