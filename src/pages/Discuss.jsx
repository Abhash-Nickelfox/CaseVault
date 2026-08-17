import { useState } from 'react'
import { SITE } from '../lib/constants.js'
import { supabase } from '../lib/supabase.js'

export default function Discuss() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const { error } = await supabase.from('inquiries').insert([form])

    if (error) {
      console.error(error)
      setStatus('error')
      return
    }

    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="mx-auto max-w-2xl px-container-padding py-stack-lg">
      <h1 className="font-display-lg text-display-lg text-on-surface">Let's talk</h1>
      <p className="mt-4 font-body-lg text-body-lg text-on-surface-variant">
        Tell us a bit about your team and we'll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-stack-md">
        <div>
          <label htmlFor="name" className="block text-label-sm font-label-sm text-on-surface-variant">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-outline-variant bg-surface-container-low text-on-surface shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-label-sm font-label-sm text-on-surface-variant">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-outline-variant bg-surface-container-low text-on-surface shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-label-sm font-label-sm text-on-surface-variant">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded border-outline-variant bg-surface-container-low text-on-surface shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded bg-secondary px-stack-md py-stack-sm text-label-sm font-label-sm text-on-secondary shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-secondary">Thanks — we'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-error">
            Something went wrong. Email us directly at {SITE.email}.
          </p>
        )}
      </form>
    </section>
  )
}
