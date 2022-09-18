import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a5x6idk',
        'mZTaic7FshnY45ZGL',
        form.current,
        'mZTaic7FshnY45ZGL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className='bg-base-200 px-10 py-14 '>
      <div className='text-center pb-14 text-black'>
        <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='grid grid-cols-1 justify-items-center gap-5'>
          <input
            type='text'
            name='email'
            placeholder='Email Address'
            className='input w-full max-w-md'
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='input w-full max-w-md'
          />
          <textarea
            className='textarea w-full max-w-md'
            name='message'
            placeholder='Your message'
            rows={6}
          ></textarea>
          <input
            className='w-100 btn btn-outline-danger w-100 mx-auto text-white mt-0 mb-4 py-3'
            type='submit'
            value='Send'
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
