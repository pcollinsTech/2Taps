import React from "react"
import { Modal } from "react-bootstrap"
import { FaFacebook, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa"
import { MdBookmark } from "react-icons/md"
import ReservationContext from "../context/ReservationContext"
import { Link } from "gatsby"
const Reservations = ({ open }) => {
  return (
    <ReservationContext.Consumer>
      {toggler => (
        <>
          <MdBookmark onClick={() => toggler.toggleReservationTab()} />
          <Modal
            show={toggler.open}
            onHide={() => toggler.toggleReservationTab()}
            className="right"
          >
            <Modal.Header closeButton />
            <Modal.Body className="text-center">
              <iframe
                src="https://www.opentable.co.uk/r/2-taps-wine-bar-reservations-belfast?restref=161271&lang=en-GB&ot_source=Restaurant%20website"
                frameborder="0"
                width="330px"
                height="800px"
                title="OpenTable"
              ></iframe>

              <h3>Orders &amp; Queries</h3>
              <ul className="modal-contact-info d-flex justify-content-around">
                <li>
                  <FaPhone />
                  <b>
                    <a
                      href="tel:+442890311414"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      028 90 311414
                    </a>
                    <br />
                  </b>
                </li>
                <li>
                  <FaEnvelope />
                  <b>
                    <a
                      href="mailto:info@2taps-winebar.com"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      info@2taps-winebar.com
                    </a>
                  </b>
                </li>
              </ul>
              <div className="row d-flex justify-content-center">
                <Link
                  to="menus"
                  className="mb-5"
                  onClick={() => toggler.toggleReservationTab()}
                >
                  <button className="btn btn-primary">Restaraunt Menu</button>
                </Link>
                <Link
                  to="take-away"
                  className="mb-5"
                  onClick={() => toggler.toggleReservationTab()}
                >
                  <button className="btn btn-primary">Take Away Menu</button>
                </Link>
              </div>
              <ul className="social-links d-flex justify-content-around">
                <li className="social-link">
                  <a
                    href="https://www.instagram.com/2tapswinebar/"
                    target="__blank"
                    className="instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>

                <li className="social-link">
                  <a
                    href="https://www.facebook.com/2tapswinebar/"
                    target="__blank"
                  >
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </Modal.Body>
          </Modal>
        </>
      )}
    </ReservationContext.Consumer>
  )
}
export default Reservations
