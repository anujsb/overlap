import Image from 'next/image'
import Head from 'next/head'

const OverlapLandingPage = () => {
  return (
    <div className="bg-[#F8F3ED] min-h-screen flex flex-col">
      <Head>
        <title>Overlap - Podcasts Like Never Before</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 flex justify-between items-center">
        <Image src="/overlap-logo.svg" alt="Overlap Logo" width={100} height={30} />
        <Image src="/y-combinator-logo.svg" alt="Y Combinator Logo" width={100} height={30} />
      </header>

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-8 gap-8">
        <div className="md:w-1/2">
          <Image 
            src="/iphone-mockup.png" 
            alt="Overlap App Interface" 
            width={300} 
            height={600} 
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F15A29] mb-4">
            PODCASTS <br />
            LIKE <br />
            NEVER <br />
            BEFORE
          </h1>
          <a 
            href="https://apps.apple.com/app/overlap" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image 
              src="/app-store-badge.svg" 
              alt="Download on the App Store" 
              width={200} 
              height={60} 
            />
          </a>
        </div>
      </main>
    </div>
  )
}

export default OverlapLandingPage