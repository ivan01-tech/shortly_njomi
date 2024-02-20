import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer data-testid="footer" className="bg-very-dark-violet md:py-10 py-4">
      <div className=" flex flex-col items-center justify-center   md:items-start text-white gap-8 md:flex-row max_width md:justify-start flex-wrap">
        <div className="mb-8 mt-4 logo_footer md:flex-1">
          <a className="" href="/">
            <img src="/images/logo.svg" alt="shortly logo" />
          </a>
        </div>
        <div className="flex flex-col mdp:flex-row mdp:w-full mdp:justify-around md:w-auto gap-3 flex-wrap">
          <section className="flex text-left md:mr-6 flex-col gap-4 align-baseline">
            <h4 className="text-xl font-bold capitalize">features</h4>
            <ul className="flex flex-col gap-2 text-gray">
              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Link shortening
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Branded Link
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Analytics
                </a>
              </li>
            </ul>
          </section>

          <section className="flex text-left md:mr-6 flex-col gap-4">
            <h4 className="text-xl font-bold capitalize">Resources</h4>
            <ul className="flex flex-col gap-2 text-gray">
              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Blog
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Developers
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Suuport
                </a>
              </li>
            </ul>
          </section>

          <section className="flex text-left md:mr-6 flex-col gap-4">
            <h4 className="text-xl font-bold capitalize">Company</h4>
            <ul className="flex flex-col gap-2 text-gray">
              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  About
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Our team
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Careers
                </a>
              </li>

              <li>
                <a className="hover:text-primary-cyan text-[.8rem]" href="/">
                  Contacts
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex justify-center gap-4 text-2xl my-6 text-white md:flex-1">
          <a className="hover:text-primary-cyan " href="/">
            <FaFacebook></FaFacebook>
          </a>
          <a className="hover:text-primary-cyan " href="/">
            <FaInstagram></FaInstagram>
          </a>
          <a className="hover:text-primary-cyan " href="/">
            <FaPinterest></FaPinterest>
          </a>
          <a className="hover:text-primary-cyan " href="/">
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
