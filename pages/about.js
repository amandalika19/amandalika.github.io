import Head from 'next/head'
import Image from 'next/image'


export default function About() {
  return (
    <div>
      <section class="about-me" id="about-me">
        <div class="abt-me-div">
            <div class="avatar-img">
                <Image src="https://jugalsuggala.netlify.app/Images/about-image.png" alt="avatar-image" width='320' height='420' />
            </div>
            <div class="abt-me-txt">
                <h1 class="about-heading">About <span>Me</span></h1>
                <p class="abt-me-content">
                    I am an aspiring student who want to evolve into a capable professional by being 
                    associated with an organization that will challenge me to push my boundaries and allow me 
                    to use my education and skills in a way that is mutually beneficial for my employer and 
                    me to achieve a sustainable growth in life.
                </p><br />
            </div>
        </div>
    </section>
    </div>
  )
}
