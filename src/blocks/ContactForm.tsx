'use client'

import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/schemas/contactSchema'
import Button from '@/components/Button'

interface ContactFormProps {
  className?: string
}

export const ContactForm: FC<ContactFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className={`min-h-screen  ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Get in <span className='text-purple-500'>touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Reach out, and let&apos;s create a universe of possibilities together!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-white/10 via-transparent to-transparent backdrop-blur-md rounded-[32px] p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">
            Let&apos;s connect constellations
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <input
                  {...register('firstName')}
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('lastName')}
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('phoneNumber')}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-400">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span>Send it to the moon</span>
                  <span className="text-xl">🚀</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
