export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Industries */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-600">Industries</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">Fitness</li>
            <li className="hover:text-white cursor-pointer transition-colors">Healthcare</li>
            <li className="hover:text-white cursor-pointer transition-colors">Nutrition</li>
            <li className="hover:text-white cursor-pointer transition-colors">Lifestyle</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-600">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">AI Body Analysis</li>
            <li className="hover:text-white cursor-pointer transition-colors">Diet Planning</li>
            <li className="hover:text-white cursor-pointer transition-colors">Workout Guidance</li>
            <li className="hover:text-white cursor-pointer transition-colors">Progress Tracking</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-600">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-red-600">Resources</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-1.5xl text-black px-6 sm:px-8 lg:px-12">
        © {new Date().getFullYear()} BodyFit <span className="text-red-600">AI</span>. All rights reserved.
      </div>
    </footer>
  );
}
