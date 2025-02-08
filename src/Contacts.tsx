import React, { useRef,  useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from './modal';

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const YOUR_SERVICE_ID = import.meta.env.YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.YOUR_TEMPLATE_ID;
  const YOUR_USER_ID = import.meta.env.YOUR_USER_ID;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const userName = formData.get('user_name')?.toString().trim();
      const userEmail = formData.get('user_email')?.toString().trim();
      const subject = formData.get('subject')?.toString().trim();
      const message = formData.get('message')?.toString().trim();

      if (!userName || !userEmail || !subject || !message) {
        setModalMessage('All fields are required. Please fill out all fields.');
        setIsModalOpen(true);
        return;
      }

      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
        .then((result) => {
          console.log(result.text);
          setModalMessage('Message sent successfully!');
          setIsModalOpen(true);
          form.current.reset();
        }, (error) => {
          console.log(error.text);
          setModalMessage('Failed to send message. Please try again later.');
          setIsModalOpen(true);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            I'm currently open for freelance projects and full-time positions.
            Let's work together to bring your ideas to life.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Project discussion"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </section>
  );
};

export default Contacts;