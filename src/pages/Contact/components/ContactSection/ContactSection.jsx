import { Mail, Phone } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex flex-col justify-between pr-30 gap-10 w-[30%]">
        <div className="flex flex-col gap-5">
          <h3 className="flex items-center gap-2.5">
            <span>
              <Phone />
            </span>{' '}
            Call To Us
          </h3>
          <span>We are available 24/7, 7 days a week.</span>
          <span>Phone: +8801611112222</span>
        </div>

        <hr className="border border-gray-200" />

        <div className="flex flex-col gap-5">
          <h3 className="flex items-center gap-2.5">
            <span>
              <Mail />
            </span>{' '}
            Write To US
          </h3>
          <span>
            Fill out our form and we will contact
            <br />
            you within 24 hours.
          </span>
          <div className="flex flex-col justify-between gap-[5px]">
            <span>Email : customer@kenakata.com</span>
            <span>Email : support@kenakata.com</span>
          </div>
        </div>
      </div>

      <div className="w-[70%]">
        <form className="flex flex-col justify-between gap-10 p-10 border-2 border-gray-200 rounded-md">
          <div className="flex justify-between items-center gap-5">
            <input
              className="w-1/3 bg-gray-100 p-2 rounded-sm"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              className="w-1/3 bg-gray-100 p-2 rounded-sm"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <input
              className="w-1/3 bg-gray-100 p-2 rounded-sm"
              type="tel"
              name="tel"
              id="tel"
              placeholder="Your Phone"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="15"
              className="w-full bg-gray-100 p-2 rounded-sm"
            ></textarea>
          </div>
          <div className="text-right">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
