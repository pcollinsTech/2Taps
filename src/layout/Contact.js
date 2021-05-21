import React, { Fragment, useState } from "react"
import { Modal } from "react-bootstrap"
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation"
import ReservationContext from "../context/ReservationContext"
import {
  FaMapSigns,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"
import { MdContacts } from "react-icons/md"
import logo from "../assets/images/logo/logo.png"

const Contact = () => {

  return (
    <ReservationContext.Consumer>
    {toggler => (
      <Fragment>
        <MdContacts onClick={() => toggler.contactTab()} />

        <Modal show={toggler.contactOpen} onHide={() => toggler.contactTab()} className="right">
          <Modal.Header closeButton />
          <Modal.Body>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" width="45%" />
              </a>
            </div>
            <ul className="modal-contact-info">
              <li>
                <a
                  href="https://www.google.com/maps/place/2+Taps+Wine+Bar/@54.6015625,-5.9281421,17z/data=!3m1!4b1!4m5!3m4!1s0x4861085476a93411:0x2b9ee63dc9570a12!8m2!3d54.6015625!4d-5.9259481?hl=en-GB"
                  target="__blank"
                  style={{ color: "black" }}
                >
                  <FaMapSigns />
                  <b>42 Waring Street</b>
                  Cotton Court
                  <br />
                  Cathedral Quarter
                  <br />
                  Belfast
                  <br /> BT1 2ED
                </a>
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
            {/* <ValidationForm
              id="contactForm"
              onSubmit={(e, formData, inputs) => {
                e.preventDefault()
              }}
            >
              <div className="row">
                <form
                  className="form"
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                </form>
              </div>
            </ValidationForm> */}
          </Modal.Body>
        </Modal>
      </Fragment>
     )}
     </ReservationContext.Consumer>
  )
}
export default Contact
