import React from "react"
import Images from "../assets/Images"

export default function IndexPage() {
    return (
       <main>
            <article id="article-1">
                <div id="content-1"><p>We're just a bunch of sleep-deprived college students trying to make it through our degrees without becoming permanently caffeinated. But hey, at least we're doing it together!</p></div>
                <div id="images">
                    <img src={Images.elon} alt = 'elons' id="image-1"/>
                    <img src={Images.elon} alt = 'elons' id="image-2"/>
                    <img src={Images.elon} alt = 'elons' id="image-3"/>
                    <img src={Images.elon} alt = 'elons' id="image-4"/>
                </div>
            </article>
            <article id="article-2">
                <div id="Scroll">
                    <p>Scroll</p>
                </div>
                <div id="content-2">
                    <p>
                    Some people say that college is the best time of their lives. We say, it's the most confusing time of our lives! But don't worry, we're here to help you navigate the academic jungle.
                    </p>
                </div>
            </article>
            <article id="article-3">1232</article>
            <article id="article-4">123</article>
            <article id="article-5">132</article>
       </main>
    )
}