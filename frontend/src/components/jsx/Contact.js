import React from 'react';
import '../styles/Contact.css'

const ContactUs = () => {
    return (
        <div class="container-contactus">
            <div class="innerwrap">

                <section class="section1 clearfix">
                    <div class="textcenter">
                        <h1>Want to get in touch? <br />Drop Us a Mail</h1>
                    </div>
                </section>

                <section class="section2 clearfix">
                    <div class="col2 column1 first">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1796100106694!2d75.93106097504986!3d11.321579088862295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba642fd50000001%3A0xbe8a77db953bda6c!2sNational%20Institute%20of%20Technology%2C%20Calicut!5e0!3m2!1sen!2sin!4v1702252973479!5m2!1sen!2sin"  title ="club-location" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col2 column2 last">
                        <div class="sec2innercont">
                        </div>
                        <div class="sec2contactform">
                            {/* <h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3> */}
                            <form action="">
                                <div class="clearfix">
                                    <input class="col2 first" type="text" placeholder="FirstName" />
                                    <input class="col2 last" type="text" placeholder="LastName" />
                                </div>
                                <div class="clearfix">
                                    <input class="col2 first" type="Email" placeholder="Email" />
                                    <input class="col2 last" type="text" placeholder="Contact Number" />
                                </div>
                                <div class="clearfix">
                                    <textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
                                </div>
                                <div class="clearfix"><input type="submit" value="Send" /></div>
                            </form>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default ContactUs;
