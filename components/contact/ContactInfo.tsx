import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      className="space-y-8"
    >
      <div>
        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          Contact Information
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          We'd Love to Hear From You
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Whether you're ready to book your next vacation or simply have a few
          questions, we're here to help make your travel planning simple and
          stress-free.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-5">
        <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
            <Phone size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Phone
            </h3>

            <p className="mt-1 text-slate-600">
              (832) 543-6351
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
            <Mail size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Email
            </h3>

            <p className="mt-1 text-slate-600">
              sociabletravels34@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
            <Clock3 size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Business Hours
            </h3>

            <p className="mt-1 text-slate-600">
              Monday – Friday
            </p>

            <p className="text-slate-600">
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
            <MessageCircle size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Follow Us
            </h3>

            <p className="mt-1 text-slate-600">
              Facebook • Instagram
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
            <MapPin size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Location
            </h3>

            <p className="mt-1 text-slate-600">
              Serving travelers nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}