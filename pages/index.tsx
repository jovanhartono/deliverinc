import type { NextPage } from 'next'
import Image from 'next/image';
import heroImage from '../public/images/heroimages.webp';

const Home: NextPage = () => {
  return (
    <main>
        <div className={'h-[500px] md:min-h-screen relative -mt-24'}>
            <h1>something wong!</h1>
            <Image alt="Deliverinc pengiriman" src={heroImage} layout={"fill"} objectFit={"cover"}/>
        </div>
        <div className="min-h-screen">
            asdsadsada
        </div>
    </main>
  )
}

export default Home
