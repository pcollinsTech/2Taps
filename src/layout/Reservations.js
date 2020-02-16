import React, { Fragment, useState } from "react"
import { Modal } from "react-bootstrap"
import {
  FaMapSigns,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { MdBookmark } from "react-icons/md"

const SideNav = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <MdBookmark onClick={() => setShow(!show)} />

      <Modal show={show} onHide={() => setShow(!show)} className="right">
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <iframe
            src="https://www.opentable.co.uk/r/2-taps-wine-bar-reservations-belfast?restref=161271&lang=en-GB&ot_source=Restaurant%20website"
            frameborder="0"
            width="330px"
            height="500px"
          ></iframe>

          <h3>Bookings &amp; Queries</h3>
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
              <a href="https://www.facebook.com/2tapswinebar/" target="__blank">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}
export default SideNav
