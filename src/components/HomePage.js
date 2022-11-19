import React, {Fragment} from 'react'
import Typed from 'react-typed'

const HomePage = () => {
    return(
        <div className="main-div">
            <div className="outer-circle">
                <img src="assets/logo.png" style={{
                    height: '400px'
                }} />
            </div>

            <Typed
                className='adx'
                strings={['Coming Soon!', 'Stay Tuned!']}
                showCursor={false}
                typeSpeed={60}
            />
        </div>
    )
}

export default HomePage
