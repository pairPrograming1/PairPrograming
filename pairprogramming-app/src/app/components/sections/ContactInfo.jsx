// components/sections/ContactInfo.jsx
"use client";
import { Card } from "../ui/Card";
import { useContactActions } from "../../hooks/useContactActions";
import { CONTACTS } from "../../data/contacts";

export function ContactInfo() {
  const { openWhatsApp, openChatbot } = useContactActions();

  return (
    <div className="space-y-6 h-full">
      <Card padding="lg" className="h-full min-h-[500px] lg:min-h-[600px]">
        <h3 className="text-xl font-bold text-white mb-4">
          Información de Contacto
        </h3>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">
              Teléfonos (vía WhatsApp)
            </p>
            <ul className="space-y-3">
              {CONTACTS.map((contact) => (
                <li key={contact.phone} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">
                      {contact.name}:
                      <a
                        href={`https://wa.me/${contact.phone.replace(/\+/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 underline break-all"
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start space-x-3">
           
              {/* <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg> */}
         
            
              {/* <p className="text-secondary-text text-sm">Email</p> */}
              {/* <p className="text-white font-medium text-sm break-all">
                <a
                  href="mailto:pairprogramming@gmail.com"
                  className="text-blue-400 underline"
                >
                  pairprogramming@gmail.com
                </a>
              </p> */}
            
          </div>
        </div>
      </Card>
    </div>
  );
}
