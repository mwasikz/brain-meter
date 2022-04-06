import Lottie from 'react-lottie';
import animationData from './Hero.json';

function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}

                resizeMode='cover'
            />
        </div>
    )

}

export default Hero;