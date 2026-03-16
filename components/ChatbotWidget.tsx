"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type LeadInfo = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  description?: string;
};

const MENSAJE_INICIAL =
  "¡Hola! Soy **NOVA**, el asistente de INNOVAD 👋\n\n¿En qué puede ayudarte tu organización hoy? Cuéntame qué necesitas y te oriento rápido.";

function formatMessage(text: string) {
  // Convierte **texto** a <strong> y saltos de línea a <br>
  const html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function buildConversationSummary(messages: Message[]) {
  return messages
    .map((m) => `${m.role === "user" ? "Usuario" : "NOVA"}: ${m.content}`)
    .join("\n")
    .slice(0, 1500);
}

function extractLeadFromMessages(messages: Message[]): LeadInfo {
  const lead: LeadInfo = {};
  const fullText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" ");

  const emailMatch = fullText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) lead.email = emailMatch[0];

  const phoneMatch = fullText.match(/\b9\d{8}\b/);
  if (phoneMatch) lead.phone = phoneMatch[0];

  return lead;
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "assistant", content: MENSAJE_INICIAL },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, loading, open]);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const sendLead = useCallback(
    async (msgs: Message[], leadData: LeadInfo) => {
      if (leadSent) return;
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...leadData,
            conversationSummary: buildConversationSummary(msgs),
          }),
        });
        setLeadSent(true);
      } catch (err) {
        console.error("Error enviando lead:", err);
      }
    },
    [leadSent]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error en la petición");

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);

      // Si se detectó un lead, enviar datos
      if (data.lead?.detected && !leadSent) {
        const leadInfo = extractLeadFromMessages(finalMessages);
        await sendLead(finalMessages, { ...leadInfo, ...data.lead });
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "No se pudo conectar. Intenta de nuevo.";
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "assistant", content: errorMsg },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const whatsappUrl = `https://wa.me/51980378479?text=${encodeURIComponent("Hola, me contacto desde el chatbot de innovad.pe. Necesito información sobre sus servicios.")}`;

  return (
    <>
      {/* Burbuja flotante */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip de bienvenida */}
        {!open && showPulse && (
          <div className="animate-fade-in mb-1 max-w-[200px] rounded-2xl rounded-br-sm bg-slate-900 px-4 py-2.5 text-sm text-slate-100 shadow-xl ring-1 ring-slate-700">
            ¿Necesitas una solución tecnológica? 👋
          </div>
        )}

        <button
          onClick={() => { setOpen((v) => !v); setShowPulse(false); }}
          aria-label={open ? "Cerrar chatbot" : "Abrir chatbot NOVA"}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 shadow-[0_8px_30px_rgba(56,189,248,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_12px_40px_rgba(56,189,248,0.6)]"
        >
          {showPulse && !open && (
            <span className="absolute inset-0 animate-ping rounded-full bg-sky-400 opacity-30" />
          )}
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#0f172a"/>
            </svg>
          )}
        </button>
      </div>

      {/* Ventana del chat */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl bg-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-slate-800"
          style={{ height: "520px" }}>

          {/* Header */}
          <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-slate-950 shadow-[0_4px_12px_rgba(56,189,248,0.4)]">
              IN
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-100">NOVA · INNOVAD</p>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-400">En línea</span>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Hablar por WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 transition hover:bg-emerald-600/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Mensajes */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 transparent" }}
          >
            <div className="flex flex-col gap-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "assistant" && (
                    <div className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-[9px] font-bold text-slate-950">
                      IN
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-sky-500 text-slate-950"
                        : "rounded-bl-sm bg-slate-800 text-slate-100 ring-1 ring-slate-700"
                    }`}
                  >
                    {formatMessage(m.content)}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="mr-2 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-[9px] font-bold text-slate-950">
                    IN
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-slate-800 px-4 py-3 ring-1 ring-slate-700">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-slate-800 bg-slate-900 px-3 py-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={loading}
                className="flex-1 rounded-xl bg-slate-800 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none ring-1 ring-slate-700 transition focus:ring-sky-500/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500 text-slate-950 transition hover:bg-sky-400 disabled:opacity-40"
                aria-label="Enviar mensaje"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
            <p className="mt-2 text-center text-[10px] text-slate-600">
              NOVA · Asistente de INNOVAD · innovad.pe
            </p>
          </div>
        </div>
      )}
    </>
  );
}
