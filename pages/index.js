import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home() {
  return (
    <div><section class="landing-section" id="landing-section">
    <div class="intro-div">
        <p class="welcome-para">Hi I'm Annapurna!</p>
        <p class="webdev-para">I am a <span>Student,</span> Coder,<span></span> and iced <span> vanilla </span> latte enthusiast.</p>

        <div class="hire-btn-div">
            <button class="hire-btn">Hire Me</button>
        </div>

    </div>
</section>
    </div>
  )
}
