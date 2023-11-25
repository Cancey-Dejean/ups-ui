"use client"
import Link from "next/link"
import { useState } from "react"

const tabs = [
  { name: "Track", content: "For Tracking", url: null },
  { name: "Quote", content: "For Quoting", url: null },
  { name: "Ship", content: "For Shipping", url: "#ship" },
  { name: "Billing", content: "For Billing", url: "#billing" },
]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
  const tablinksClass =
    "tablink flex-1 flex justify-center py-[var(--spacing-200)] px-[var(--spacing-400)]"
  return (
    <>
      <div className="rounded-[var(--border-radius-1000)] overflow-hidden">
        {/* Tabs */}
        <nav className="bg-[var(--color-primary-100)] text-[var(--color-secondary)] rounded-[var(--border-radius-1000)] flex items-center justify-center overflow-hidden">
          {tabs.map((tab) =>
            tab.url === null ? (
              <button
                className={`${tablinksClass} ${
                  activeTab === tab.name
                    ? "bg-[var(--color-secondary)] text-[var(--color-primary-100)] font-bold"
                    : ""
                }`}
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ) : (
              <Link
                href={tab.url}
                className={`${tablinksClass} ${
                  activeTab === tab.name ? "active" : ""
                }`}
              >
                {tab.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {tabs.map((tab) => (
        <div
          id={tab.name}
          className={`tabcontent ${
            activeTab === tab.name ? "block" : "hidden"
          }`}
        >
          <h3>{tab.name}</h3>
          <p>{tab.content}</p>
        </div>
      ))}
    </>
  )
}
