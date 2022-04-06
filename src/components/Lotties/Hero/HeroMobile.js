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
                height={250}
                width={250}

                resizeMode='cover'
                style={{ marginTop: -20 }}
            />
        </div>
    )

}

export default Hero;