import Lottie from 'react-lottie';
import animationData from './meter.json';

function Meter() {
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
                height={200}
                width={200}
                style={{ marginTop: 30 }}
            />
        </div>
    )

}

export default Meter;