export default function Footer() {
    return (
        <footer className="w-full bg-[#102234] text-gray-400 py-12">
          <div className="container mx-auto px-4 space-y-8 text-center">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Terms of Use", "Privacy Policy", "About", "Jobs", "Partner With Us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-200 hover:text-gray-100 underline underline-offset-4"
                >
                  {item}
                </a>
              ))}
            </nav>
    
            {/* Description Paragraphs */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base leading-relaxed">
                Gamezop is a plug-and-play gaming platform that any app or website can integrate to bring casual gaming for its users. Gamezop also operates Quizzop, a quizzing platform, that digital products can add as a trivia section.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                Over 5,000 products from more than 70 countries have integrated Gamezop and Quizzop. These include Amazon, Samsung Internet, Snap, Tata Play, AccuWeather, Paytm, Gulf News, and Branch.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                Games and trivia increase user engagement significantly within all kinds of apps and websites, besides opening a new stream of advertising revenue. Gamezop and Quizzop take 30 minutes to integrate and can be used for free: both by the products integrating them and end users
              </p>
            </div>
    
            {/* Call to Action */}
            <p className="text-sm sm:text-base">
              Increase ad revenue and engagement on your app / website with games, quizzes, astrology, and cricket content. Visit:{" "}
              <a 
                href="https://business.gamezop.com" 
                className="text-yellow-400 hover:text-yellow-300 hover:underline"
              >
                business.gamezop.com
              </a>
            </p>
          </div>
        </footer>
      )
  }