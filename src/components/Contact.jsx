"use client";
import React, { useState } from "react";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending....");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus("Message sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(`❌${result.error || "Failed to send message."}`);
      }
    } catch (err) {
      console.error("Error sending:", err);
      setStatus(`❌Error sending message.`);
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div id="contact" className="bg-gray-200 w-full font-mono py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-16">
          <div className="border-6 border-black px-12 py-6">
            <h2 className="text-2xl font-extrabold tracking-widest">
              C O N T A C T
            </h2>
          </div>
        </div>

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-gray-700 m-2">
            <p className="text-2xl">Ready to move forward with your project?</p>
            Let’s connect and make it happen
          </div>
        </div>

        <div className="m-5">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                type="text"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
                placeholder="ENTER YOUR NAME*"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                value={form.email}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="ENTER YOUR EMAIL*"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
                required
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <input
                type="text"
                placeholder="CONTACT NUMBER"
                className="pb-2 p-4 font-bold outline-none border-none w-full"
                value={form.phone}
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-l-4 border-black border-b-4 m-8">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="GOT AN IDEA?"
                className="pb-2 p-4 font-bold outline-none border-none w-full resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center m-10">
              <button
                type="submit"
                className="border-l-4 border-r-4 border-black px-10 hover:bg-gray-200
                hover:cursor-pointer transition-colors font-bold text-2xl py-2"
              >
                SUBMIT
              </button>
            </div>
            {status && (
              <p
                className={`text-center font-bold font-mono text-lg mt-4 transition-all duration-300 ${
                  status.startsWith("Sending")
                    ? "text-gray-600"
                    : status.startsWith("❌")
                      ? "text-red-600"
                      : "text-green-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
