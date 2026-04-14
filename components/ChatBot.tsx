'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const MOCK_RESPONSES: Record<string, string> = {
  default: "Hi! I'm the PestMaster AI assistant. I can help you with pest identification, treatment options, scheduling, and pricing questions. How can I help you today?",
  ant: "Ant infestations are one of our most common calls! We use a combination of baiting systems and perimeter treatments that eliminate the colony at its source. Our Monthly Plan (starting at $79/mo) covers ant treatment. Would you like me to schedule a free inspection?",
  roach: "Cockroaches require aggressive treatment since they reproduce quickly. We use gel baits, IGR (insect growth regulators), and targeted sprays. Most infestations are resolved within 2-3 treatments. Our quarterly plans include unlimited roach treatments with a 30-day guarantee.",
  termite: "Termite damage can be devastating - they cause over $5 billion in damage annually! We offer free termite inspections using thermal imaging. Treatment options include liquid barriers and bait stations. I'd strongly recommend scheduling an inspection ASAP.",
  rodent: "For mice or rats, we use a combination of exclusion (sealing entry points), trapping, and monitoring. Our technicians identify how they're getting in and create a customized plan. All our protection plans include rodent control.",
  spider: "Most spiders are actually beneficial, but we understand the concern! Our perimeter treatments create a barrier that keeps them out. Black widows or brown recluses require specialized treatment - if you've seen either, please call us immediately at (555) 123-4567.",
  bee: "We don't exterminate bees - they're essential pollinators! We work with local beekeepers for safe relocation. If you're seeing wasps or hornets instead, those we can definitely help with. Can you describe what you're seeing?",
  price: "Our plans start at just $79/month for monthly protection, which covers common household pests. Quarterly plans start at $119/quarter for year round coverage. Exact pricing depends on your home size and situation. We'll give you a personalized quote during your free inspection. No obligation, no surprises!",
  schedule: "I can help you schedule a free inspection! Our technicians are available Monday to Saturday, 8am to 6pm. Same day service is often available. Would you prefer morning or afternoon? You can also call us directly at (555) 123-4567 or use the contact form.",
  emergency: "For pest emergencies, please call us directly at (555) 123-4567. We offer same day emergency service! Common emergencies include wasp nests near entrances, rodent sightings, or bed bugs. Our team can usually be there within 2 to 4 hours.",
}

function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase()

  if (lower.includes('ant')) return MOCK_RESPONSES.ant
  if (lower.includes('roach') || lower.includes('cockroach')) return MOCK_RESPONSES.roach
  if (lower.includes('termite')) return MOCK_RESPONSES.termite
  if (lower.includes('mouse') || lower.includes('mice') || lower.includes('rat') || lower.includes('rodent')) return MOCK_RESPONSES.rodent
  if (lower.includes('spider')) return MOCK_RESPONSES.spider
  if (lower.includes('bee') || lower.includes('wasp') || lower.includes('hornet')) return MOCK_RESPONSES.bee
  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan') || lower.includes('pricing') || lower.includes('how much')) return MOCK_RESPONSES.price
  if (lower.includes('schedule') || lower.includes('appointment') || lower.includes('book') || lower.includes('inspection')) return MOCK_RESPONSES.schedule
  if (lower.includes('emergency') || lower.includes('urgent') || lower.includes('asap') || lower.includes('now')) return MOCK_RESPONSES.emergency
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return MOCK_RESPONSES.default

  return "I'd be happy to help with that! For the most accurate information, I recommend speaking with one of our pest control specialists. You can call us at (555) 123-4567 or schedule a free inspection through our contact form. Is there anything specific about pests or our services I can help clarify?"
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: MOCK_RESPONSES.default,
      timestamp: new Date(),
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: getAIResponse(userMessage.content),
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages(prev => [...prev, aiResponse])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-600 text-white shadow-elevated hover:shadow-button-hover transition-all duration-300 flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[420px] max-h-[70vh] md:max-h-[600px] bg-white rounded-2xl shadow-elevated overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-brand-600 text-white p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">PestMaster AI Assistant</h3>
            <p className="text-sm text-white/80 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Online - Typically replies instantly
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-50/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-md'
                    : 'bg-white text-brand-900 shadow-card rounded-bl-md'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1.5 ${message.role === 'user' ? 'text-white/60' : 'text-muted'}`}>
                  {mounted ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-card">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 bg-white border-t border-brand-100 flex gap-2 overflow-x-auto scrollbar-hide">
          {['Ant problem', 'Get pricing', 'Schedule inspection'].map((action) => (
            <button
              key={action}
              onClick={() => {
                setInputValue(action)
                inputRef.current?.focus()
              }}
              className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-full transition-colors"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-brand-100">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-brand-50 rounded-xl text-sm text-brand-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-shadow"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="w-12 h-12 bg-brand-600 hover:from-brand-700 hover:to-brand-800 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-button hover:shadow-button-hover disabled:shadow-none"
              aria-label="Send message"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-muted text-center mt-2">
            Powered by PestMaster AI
          </p>
        </div>
      </div>
    </>
  )
}
