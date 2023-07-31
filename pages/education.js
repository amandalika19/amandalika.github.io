import Head from 'next/head'
import Image from 'next/image'


export default function Education() {
  return (
    <div>
    <section class="education" id="education">
        <div class="HSC-cert">
            <div class="hsc-card">
                <div class="img-parent-div">
                    <div class="img-photo">
                    </div>
                </div>
                <h1>
                    MVN -17
                </h1>
                <h1>
                    Faridabad
                </h1>
                <div class="para-parent-div">
                </div>

                <div class="mark-percentage">
                    <div class="percentage-parent-div">
                        <p>SSC</p>
                        <div class="percent-parent">
                            <div class="percentage-count"></div>
                        </div>
                        <p>92%</p>
                    </div>
                    <div class="percentage-parent-div">
                        <p>HSC</p>
                        <div class="percent-parent-hsc">
                            <div class="percentage-count-hsc"></div>
                        </div>
                        <p>92.2%</p>
                    </div>
                </div>

                <div class="years">
                    <p>Year of Enrollment:<span> 2017</span></p>
                    <p>Year of Passing:<span> 2021</span></p>
                </div>

            </div>
        </div>
        <div class="college-cert">
            <div class="hsc-card">
                <div class="img-parent-div">
                    <div class="img-photo-2">
                    </div>
                </div>
                <h1>
                    Vellore Institute of Technology
                </h1>
                <h1>
                    Vellore
                </h1>
                <div class="para-parent-div">
                </div>

                <div class="mark-percentage">
                    <div class="percentage-parent-div">
                        <p>CGPA <span></span></p>
                        <div class="percent-parent-college">
                            <div class="percentage-count-college"></div>
                        </div>
                        <p>9.1 (till 1st sem)</p>
                    </div>
                    <div class="percentage-parent-div">
                        <p>Branch:<span> CSE with DS</span></p>
                    </div>
                </div>

                <div class="years">
                    <p>Year of Enrollment:<span> 2021</span></p>
                    <p class="big-para">Year of Graduation:<span> 2025</span></p>
                </div>

            </div>

        </div>
    </section>
    </div>
  )
}
