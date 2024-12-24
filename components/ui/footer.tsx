import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full mt-auto relative overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-animate bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 opacity-60" />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative flex flex-col items-center justify-center gap-6">
          {/* Social links */}
          <div className="flex items-center gap-8">
            <Link 
              href="https://github.com/neeeraj1999" 
              target="_blank"
              className="group relative"
              aria-label="GitHub"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 blur-md transition-all duration-500 group-hover:opacity-20 group-hover:scale-110" />
              <svg className="w-6 h-6 text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/neeraj-patil-76278816b/" 
              target="_blank"
              className="group relative"
              aria-label="LinkedIn"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-md transition-all duration-500 group-hover:opacity-20 group-hover:scale-110" />
              <svg className="w-6 h-6 text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>

          {/* Portfolio link with hover effect */}
          <Link 
            href="https://github.com/neeeraj1999/Portfolio" 
            target="_blank"
            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-md transition-all duration-500 group-hover:opacity-100 opacity-0" />
            <span className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">
              Portfolio link
            </span>
            <svg 
              className="relative w-4 h-4 text-zinc-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Copyright with gradient text */}
          <p className="text-sm text-zinc-400 text-center transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500">
            © {new Date().getFullYear()} Neeraj Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
