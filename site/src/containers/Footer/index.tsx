import React from "react"
import { Logo, Social } from "../../components"
import { config } from "../../config/footer"

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col justify-center w-screen space-y-10 py-20"
      style={{
        background: `${config.background}`,
      }}
    >
      <div className="flex flex-wrap px-10 md:px-10 lg:px-32">
        <div className="flex flex-col items-center md:flex-row w-full md:w-1/2 space-x-1">
          <Logo />
          <div className="flex flex-col text-center md:text-left space-y-2">
            <a
              href="https://upskiinternational.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zeal text-xs"
            >
              {config.text}
            </a>
            <p className="text-white text-xs">{config.copyright}</p>
            <p className="text-white text-xs">
              Designed and developed by{" "}
              <a className="hover:text-wine" href={config.credits.link}>
                {config.credits.username}
              </a>
            </p>
          </div>
        </div>

        <div className="w-full pt-5 md:w-1/2">
          <ul className="flex flex-wrap justify-center w-full">
            {config.socials.map((social, index) =>
              social.link ? (
                <li
                  key={`${index}-social`}
                  className="text-3xl text-white p-5 "
                >
                  <Social item={social.item} link={social.link} />
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}
