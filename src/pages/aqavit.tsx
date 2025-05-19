import React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

// @ts-ignore
import HeroBgImg from "../images/backgrounds/aqavit-hero-bg.svg"

const AQAvit = () => {
  return (
    <Layout>
      <div className="bg-purple sm:bg-contain bg-aqavit-hero bg-center bg-no-repeat relative">
        <div className="relative isolate">
          <div className="absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <HeroBgImg alt="background-image" />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="max-w-[1264px] mx-auto flex justify-center items-center">
            <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[670px] px-8 lg:px-0 flex flex-col justify-center items-center">
              <div className="text-center w-full">
                <h1 className="font-semibold leading-[72px] lg:leading-[120px] text-white-900 text-[64px] lg:text-[104px]">
                  Eclipse AQAvit™
                </h1>
                <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
                  <a
                    target="_blank"
                    href="https://projects.eclipse.org/projects/adoptium.aqavit"
                    className="text-base underline transition duration-300 ease-in-out font-bold leading-6 text-white-900"
                  >
                    Learn More
                  </a>
                  <Link
                    placeholder="Download AQAvit"
                    to="/docs/aqavit-verification/"
                    className="rounded-[80px] hover:shadow-2xl transition-all duration-300 bg-[#FF1464] border ease-in-out  border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-base"
                  >
                    Run AQAvit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mx-auto max-w-[896px] md:text-lg text-center md:text-left p-4 lg:p-0 text-base text-white-600 leading-[25px] md:leading-8">
          Eclipse AQAvit (TM): Eclipse AQAvit is the quality and runtime
          branding evaluation project for Java SE runtimes and associated
          technology. During a release, it takes a functionally complete Java
          runtime and ensures that all the additional qualities are present that
          make it suitable for production use. These quality criteria include
          good performance, exceptional security, resilience and endurance, and
          the ability to pass a wide variety of application test suites. In
          addition to verifying that functionally complete runtimes are release
          ready, the AQA tests may also serve to verify new functionality during
          runtime development.
        </p>
        <div className="flex flex-col justify-center items-center text-center md:text-left p-4">
          <div className="max-w-[896px]">
            <h2 className="text-3xl font-bold mb-8 mt-14 text-center md:text-left">
              The AQAvit Name
            </h2>
            <p className="text-base md:text-lg">
              The AQAvit Name The AQAvit project gets its name from Adoptium
              Quality Assurance 'AQA' and 'vit' for vitality and speed. As the
              project engages with vendors and enterprise consumers, the test
              suite is expanded and improved to keep pace with the latest Java
              releases and to continuously raise the quality bar through
              collaboration and rigour.
            </p>
          </div>
          <div className="max-w-[896px]">
            <h2 className="text-3xl font-bold mb-8 mt-14 text-center md:text-left">
              AQAvit Project Central
            </h2>
            <p className="text-base md:text-lg">
              AQAvit Project Central As listed in the Developer Resources
              section of the Eclipse Foundation AQAvit project page, AQAvit is
              comprised of many repositories. The central one is the aqa-tests
              repository which houses the project's test definition files, much
              of the project's documentation and is the base for running the
              AQAvit test suite. To participate in the project, people are
              invited to join the Adoptium Slack workspace and ask questions in
              the #testing-aqavit channel.
            </p>
          </div>
          <div className="max-w-[896px]">
            <h2 className="text-3xl font-bold mb-8 mt-14 text-center md:text-left">
              AQAvit Verification
            </h2>
            <p className="text-base md:text-lg mb-4">
              AQAvit Verification The AQAvit project was created to "make
              quality certain to happen." AQAvit certification is achieved
              through the process of running and passing a prescribed and
              versioned set of tests in the AQAvit test suite.
            </p>
            <Link
              to="#"
              className="text-base underline transition duration-300 ease-in-out font-bold leading-6 text-white-900"
            >
              Learn how to run AQAvit
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
    </Layout>
  )
}
export default AQAvit

export const Head = () => <Seo title="Eclipse AQAvit" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
