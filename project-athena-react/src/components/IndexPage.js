import React from "react"
import Images from "../assets/Images"

export default function IndexPage() {
    return (
       <main>
            <article id="article-1">
                <div id="content-1"><p>We're <span class="yellow-underline">just a bunch of sleep-deprived college students</span> trying to make it through our degrees without becoming permanently caffeinated. But hey, at least we're doing it together!</p></div>
                <div id="images">
                    <img src={Images.elon} alt = 'elons' id="image-1"/>
                </div>
            </article>
            <article id="article-2">
                <div id="scroll">
                    <p>Scroll</p>
                    <img src={Images.downArrow} alt=""/>
                </div>
                <div id="content-2">
                    <p>
                    Some people say that college is the best time of their lives. We say, it's the most confusing time of our lives! But don't worry, we're here to help you navigate the academic jungle.
                    </p>
                </div>
            </article>
            <article id="article-3">
                <div className="cool-box" id="cool-box-1">
                    <img src={Images.elon2} alt=""/>
                    <h1>Study Smarter, Not Harder</h1>
                    <p>Share and Discover Resources for Your Academic Success</p>
                    <button>Explore</button>
                </div>
            </article>
            <article id="article-4">
                <div className="cool-box" id="cool-box-2">
                    <img src={Images.elon3} alt=""/>
                    <h1>Academic Extravaganza</h1>
                    <p>Get Excited for Upcoming Events and Opportunities</p>
                    <button>Explore</button>
                </div>
            </article>
            <article id="article-5">
                <div className="cool-box" id="cool-box-3">
                    <img src={Images.elon3} alt=""/>
                    <h1>The A-Team</h1>
                    <p>Join a Thriving Community of High Achieving Students</p>
                    <button>Explore</button>
                </div>
            </article>
            <article class="article-6">
                <img src={Images.elon4} alt=""/>
                <h1>Your Contribution Matters</h1>
                <p>Help Us Create a Resource Hub That Rocks!</p>
                <button>Join Now➡</button>
            </article>
       </main>
    )
}