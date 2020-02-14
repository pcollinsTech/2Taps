import React, { Fragment, useState } from "react"
import { Modal } from "react-bootstrap"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import {
  FaMapSigns,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { MdContacts } from "react-icons/md"

const SideNav = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <MdContacts onClick={() => setShow(!show)} />

      <Modal show={show} onHide={() => setShow(!show)} className="right">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="logo">
            <a href="/">
              2Taps -<span>Winebar</span>{" "}
            </a>
          </div>
          <p>Get in touch</p>
          <ul className="modal-contact-info">
            <li>
              <FaMapSigns />
              <b>42 Waring Street</b>
              Cotton Court
              <br />
              Cathedral Quarter
              <br />
              Belfast
              <br /> BT1 2ED
            </li>
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
                Bookings &amp; queries
              </b>
            </li>
            <li>
              <FaEnvelope />
              <b>
                <a
                  href="mailto:info@2tapswinebar.com"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  info@2tapswinebar.com
                </a>
              </b>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/2tapswinebar/"
                target="__blank"
              >
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/2tapswinebar/" target="__blank">
                <FaFacebook />
              </a>
            </li>
          </ul>
          <ValidationForm
            id="contactForm"
            onSubmit={(e, formData, inputs) => {
              e.preventDefault()
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <TextInput
                    name="name"
                    id="name"
                    required
                    successMessage=""
                    errorMessage="Please enter your name"
                    className="form-control"
                    placeholder="Name"
                    autoComplete="off"
                    // e                    onChange={this.handleFields}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <TextInput
                    name="email"
                    id="email"
                    type="email"
                    required
                    successMessage=""
                    errorMessage="Please enter your email address"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    // onChange={this.handleFields}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <TextInput
                    name="message"
                    id="description"
                    multiline
                    placeholder="Your message"
                    className="form-control"
                    required
                    successMessage=""
                    errorMessage="Please write your message"
                    rows="5"
                    autoComplete="off"
                    // onChange={this.handleFields}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </ValidationForm>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
}
export default SideNav
