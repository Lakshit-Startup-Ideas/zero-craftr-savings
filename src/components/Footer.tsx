import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-dark text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="ZeroCraftr logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Helping SMB manufacturers cut energy costs and carbon emissions 
              with plug-and-play IoT + AI solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/50">Contact: </span>
                <a href="mailto:zero_craftr@gmail.com" className="text-primary hover:underline">
                  zero_craftr@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/50">Partnerships: </span>
                <a href="mailto:zero_craftr@gmail.com" className="text-primary hover:underline">
                  zero_craftr@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70 mb-4">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            
            <div className="flex space-x-3">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div>
            © 2024 ZeroCraftr. All rights reserved.
          </div>
          
          {/* Trust badges placeholder */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="px-3 py-1 bg-white/10 rounded text-xs">SOC 2 Compliant</div>
            <div className="px-3 py-1 bg-white/10 rounded text-xs">ISO 27001</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;