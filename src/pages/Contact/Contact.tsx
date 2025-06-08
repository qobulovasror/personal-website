import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from "sonner"
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
      toast.error(t('site_messages.empty_fields'));
      return;
    }
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    
    setIsLoading(true);
    try {
      const formParams = new URLSearchParams();
      (Object.keys(data) as Array<keyof typeof data>).forEach(key => {
        formParams.append(key, data[key]);
      });
      const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!url) {
        toast.error(t('site_messages.google_sheets_url_not_set'));
        return;
      }
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      }).catch(err => {
        console.log(err);
        throw err;
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      toast.success(t('site_messages.success_title'));
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(t('site_messages.error_msg'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">{t('contact.title')}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
          {t('contact.description')}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 dark:text-white">{t('contact.title2')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contact.email')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">qobulovasror0@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contact.phone')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">+998 93 358 28 27</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contact.location')}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Samarqand, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 dark:text-white">{t('contact.follow_me')}</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/qobulovasror"
                target="_blank"
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/asrorqobulov/"
                target="_blank"
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="mailto:qobulovasror0@gmail.com"
                target="_blank"
                className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="p-6 bg-green-50 rounded-2xl dark:bg-green-900">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-900 dark:text-white">{t('contact.for_work')}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {t('contact.for_work_description')}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.full_name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contact.placeholder_full_name')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder={t('contact.placeholder_email')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder={t('contact.placeholder_subject')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder={t('contact.placeholder_message')}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : t('contact.button')}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}