
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Privacy.css';
import base from '../redux/store';
import Navbar from '../charts/navbar';

function Pivacy() {
    return (
        <div className='pbg'>
        <Navbar/>
       
        <div className='cp'>
        <div className='h'>Privacy Policy</div><br></br>
        <div className="prp">
        
Last Updated: [23/09]

1. Introduction

Welcome to Once upon time. We are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and disclose personal information when you use our platform.

2. Information We Collect

User-Provided Information: When you sign up for an account or interact with our platform, you may provide us with personal information such as your name, email address, and profile picture.

Content: Any content you create, upload, or post on our platform, including stories, comments, and messages.

Usage Information: We collect information about how you use our platform, including your interactions with content and other users.

Device Information: We may collect information about the device you use to access our platform, including device type, operating system, and browser type.

3. How We Use Your Information

We may use the information we collect for the following purposes:

To provide and improve our platform's functionality and features.
To personalize your experience and show you relevant content.
To communicate with you, including sending updates and notifications.
To analyze usage patterns and trends to enhance our platform.
To protect our platform and its users from misuse and abuse.
4. Sharing Your Information

We may share your information in the following circumstances:

With Other Users: Your content and profile information may be visible to other users of the platform.

Service Providers: We may share information with third-party service providers who assist us in operating our platform.

Legal Compliance: We may disclose information if required by law or in response to legal requests.

5. Your Choices

You have certain rights and choices regarding your personal information:

You can access and update your profile information at any time.
You can delete your account and associated data from our platform.
You can opt-out of receiving promotional emails from us.
6. Security

We take reasonable measures to protect your personal information, but no data transmission over the internet is entirely secure. We cannot guarantee the security of your information.

7. Children's Privacy

Our platform is not intended for children under the age of 13. We do not knowingly collect or store personal information from children under 13.

8. Changes to this Privacy Policy

We may update this Privacy Policy from time to time. Please review the policy periodically for any changes.

9. Contact Us

If you have any questions or concerns about this Privacy Policy, please <Link to="/contact">contact us </Link>


        </div>
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

export default Pivacy
