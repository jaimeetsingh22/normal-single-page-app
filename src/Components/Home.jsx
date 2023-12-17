import React from 'react'
import vg from '../assets/2.png'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Home = () => {

    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Jaimeet Singh</h1>
                    <p>I am a software engineer with experience in web development
                    </p>
                </main>
            </div>

            <div className="home2" id='about'>
                <img src={vg} alt=" graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sint, omnis ipsum pariatur earum suscipit consequatur natus asperiores est quos rem. Hic, in consequuntur tenetur delectus animi ducimus iure? Ut.
                    </p>
                </div>
            </div>

            <div className="home3">
                <div>
                    <h1>Who I am?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae omnis nesciunt maiores laudantium dicta. Cupiditate sequi reiciendis mollitia officia blanditiis consequatur, praesentium quidem obcaecati sint ducimus quasi corrupti maxime, vitae necessitatibus minima. Quibusdam quae in id autem hic reprehenderit veniam, tenetur illum libero dicta amet nobis cum sit omnis molestiae?</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: '0.3s',
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: '0.5s',
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: '0.7s',
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay: '1s',
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>


                    </article>
                </div>
            </div>
        </>

    )
}

export default Home