import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { trackButtonClick } from '../utils/analytics'

const RequestResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    company: ''
  })
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    trackButtonClick('form_submit', 'Request Resume', {
      source: 'resume_request_form'
    })

    try {
      await addDoc(collection(db, 'resume_requests'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      })

      setStatus('success')
      setFormData({ name: '', email: '', reason: '', company: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return (
    <section id="request-resume" className="section-container">
      <div className="card">
        <h2 className="section-title">Request My Resume</h2>
        <p className="section-text mb-8">
          Interested in my full professional history? Please fill out the form
          below to receive my detailed resume.
        </p>

        {status === 'error' && (
          <div className="p-4 mb-6 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-700 dark:text-red-200">
            Something went wrong. Please try again later or email me directly.
          </div>
        )}

        {status === 'success' ? (
          <div className="p-6 bg-green-100 dark:bg-green-900 rounded-xl">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-100 mb-2">
              Request Sent!
            </h3>
            <p className="text-green-700 dark:text-green-200">
              Thank you for your interest. I'll review your request and get back
              to you shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-green-800 dark:text-green-100 underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto text-left space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-1 ml-1"
              >
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium mb-1 ml-1"
              >
                Reason for Request
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="3"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none"
                placeholder="I'm looking for a mobile developer..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {status === 'submitting' ? 'Sending...' : 'Request Resume'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default RequestResumeForm
