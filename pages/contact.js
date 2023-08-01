import Head from 'next/head'
import Image from 'next/image'


export default function Contact() {
  return (
    <div>
    <section class="contact-section" id="contact-section">

        <h1>Contact <span>Me</span></h1>

        <div class="contact">
            <div class="contact-image">
                <Image src="https://jugalsuggala.netlify.app/Images/contact-image.png" alt="avatar-image" width='280' height='420' />
            </div>
            <div class="contact-form">
                <form method="post">
                    <div>
                        <input type="text" class="name-input" placeholder="name" name="text" />
                    </div>
                    <input type="email" class="mail-input" placeholder="email" name="email" />
                    <input type="text" class="disc-topic" placeholder="Name of organization(if any)" name="org" />
                    <textarea placeholder = "What's the message?" name="message" class="post-desc"></textarea>
                    <div class="form-btn-div">
                        <button type="submit" class="form-submit-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>

    </section>
    </div>
  )
}
