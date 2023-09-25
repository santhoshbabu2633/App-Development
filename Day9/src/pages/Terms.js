import React from 'react'
import base from '../redux/store';
import './Terms.css';
import { Link } from 'react-router-dom';

function Terms() {
    return (
        <div className='tec'>
        
         <div className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/">Story Review</Link> 
        <Link to="/genere">Genre</Link>
        <Link to="/contact">Contact Us</Link> 
        <Link to="/">Sign In</Link>
        <Link to="/">Add Story+</Link> 
        <img className='mba' src="ml.png" alt="Logo" />
        <div className="cred">
          <img className='logo' src="ic.png" alt="Logo" />
          <div className='fetch'>

            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>

           <div className='tec1'><br></br><br></br>
           <div className='th1'>Terms and Conditions</div><br></br>
            User Registration

a. Users must register for an account to access certain features of the Platform.

b. Users must provide accurate and up-to-date information during registration and keep their login credentials confidential.

3. Content Submission

a. Users may submit written stories, images, and other content ("User Content") to the Platform.

b. Users retain ownership of their User Content but grant [Your Company Name] a non-exclusive, worldwide, royalty-free license to use, display, and distribute User Content on the Platform.

4. User Conduct

a. Users are responsible for the content they submit and must not violate the rights of others, including copyrights, trademarks, and privacy rights.

b. Users must not engage in any unlawful, abusive, or harmful conduct on the Platform, including harassment, hate speech, or spamming.

5. Platform Access and Availability

a. [Your Company Name] may, at its discretion, modify, suspend, or terminate the Platform or access to it at any time without notice.

b. [Your Company Name] is not liable for any loss or damage resulting from platform unavailability or modification.

6. Intellectual Property

a. All content and materials on the Platform, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] and protected by intellectual property laws.

b. Users may not use, reproduce, or distribute any content from the Platform without explicit permission.

7. Privacy

a. [Your Company Name] collects and uses user data as described in our Privacy Policy.

b. Users should review the Privacy Policy for details on data collection, storage, and usage.

8. Termination

a. [Your Company Name] reserves the right to terminate or suspend user accounts for violations of these Terms.

9. Disclaimers

a. The Platform is provided "as-is," and [Your Company Name] makes no warranties or guarantees regarding its functionality, accuracy, or reliability.

b. [Your Company Name] is not responsible for the content submitted by users and disclaims liability for any damages arising from User Content.

10. Governing Law

These Terms are governed by the laws of [Your Jurisdiction], and any disputes shall be resolved in the courts of [Your Jurisdiction].

11. Changes to Terms

[Your Company Name] may update these Terms at any time. Users are responsible for reviewing the Terms regularly.

12. Contact Information

For questions or concerns regarding these Terms, please contact us at [Your Contact Information].

By using the Platform, you acknowledge that you have read, understood, and agreed to these Terms and the Privacy Policy. These Terms constitute a binding agreement between you and [Your Company Name].
            By accessing or using [Your Platform Name] ("Platform"), you agree to comply with and be bound by the following terms and conditions ("Terms"). If you do not agree to these Terms, please do not use the Platform.
           <div className='cb'> <input type="checkbox"></input></div>
           <button className='bt3'><div className='bb'>Submit</div></button><br></br><br></br>
            </div>
            <div className="footer">
        <div className="pp">
        <Link to="/privacy">  Privacy Policy</Link></div>
        <div className="cop">Copyright © 2023. All rights reserved</div>
       <div className='tc'> <Link to="/terms"> Terms&Conditions</Link></div>
      </div>
        </div>
        
    )
}

export default Terms
