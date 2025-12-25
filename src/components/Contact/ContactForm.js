"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import mixpanel from "mixpanel-browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setSubmitStatus("sending");

    // Web3Forms submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e57fff2e-7a97-4319-a34a-f48f7f70c73b", // Replace with your actual access key
          ...data,
          subject: `New Project Inquiry from ${data.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        mixpanel.identify(data.email);
        mixpanel.people.set({
          "$name": data.name,
          "$email": data.email,
          "phone": data.phone,
          "company": data.company,
          "project_type": data.projectType,
          "budget": data.budget,
        });
        mixpanel.track("Conversion", {
          "Conversion Type": "Contact Form Submission",
          "Project Type": data.projectType,
          "Budget": data.budget,
        });
        mixpanel.track("Sign Up", {
          "user_id": data.email,
          "email": data.email,
          "signup_method": "Contact Form",
        });
        setSubmitStatus("success");
        reset();
      } else {
        mixpanel.track("Error", {
          "error_type": "Form Submission Error",
          "error_message": result.message || "Web3Forms submission failed",
          "page_url": typeof window !== "undefined" ? window.location.href : "",
        });
        setSubmitStatus("error");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      mixpanel.track("Error", {
        "error_type": "Form Execution Error",
        "error_message": error.message || "Submission logic failed",
        "page_url": typeof window !== "undefined" ? window.location.href : "",
      });
      setSubmitStatus("error");
      console.error("Submission Error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      {submitStatus === "success" ? (
        <div className="rounded-2xl bg-green-50 p-8 text-center dark:bg-green-900/20">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-400">Message Sent!</h3>
          <p className="mt-2 text-green-700 dark:text-green-300">
            Thank you for reaching out. We will get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="mt-6 rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Details */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder=" "
                {...register("name", { required: "Name is required" })}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder=""
                {...register("phone")}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder=""
                {...register("company")}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                id="projectType"
                {...register("projectType", { required: "Please select a project type" })}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              >
                <option value="">Select a type...</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="AI & ML">AI & Machine Learning</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="Blockchain">Blockchain / Web3</option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && <p className="text-xs text-red-500">{errors.projectType.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Budget Range
              </label>
              <select
                id="budget"
                {...register("budget")}
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all"
              >
                <option value="">Select a range...</option>
                <option value="< $5k">Less than $5k</option>
                <option value="$5k - $10k">$5k - $10k</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k - $50k">$25k - $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              {...register("message", { required: "Please provide some project details" })}
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-blue-500 transition-all resize-y"
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>

          {submitStatus === "error" && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              Something went wrong. Please try again later.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
