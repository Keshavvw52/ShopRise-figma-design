import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { chatThreads, jenniferMessages } from "@/data/messages";
import { cn } from "@/lib/utils";

/** Dashboard chat — Figma Chat frame (255:5657) */
export function ChatContent() {
  return (
    <>
      <DashboardHeader title="Chat" />
      <div className="mx-6 mb-8 mt-4 flex min-h-[500px] overflow-hidden rounded-lg border border-gray-light">
        <aside className="w-[280px] shrink-0 border-r border-gray-light">
          <div className="border-b border-gray-light p-3">
            <div className="flex items-center gap-2 rounded-[25px] border border-gray-light px-2.5 py-1">
              <span className="h-6 w-6 rounded-full bg-gray-light" aria-hidden />
              <span className="rounded-[20px] bg-navy px-3 py-1 text-sm font-medium text-white">
                Search
              </span>
            </div>
          </div>
          {chatThreads.map((thread, index) => (
            <div
              key={thread.id}
              className={cn(
                "flex w-full items-start gap-3 border-b border-gray-light px-3 py-3",
                index === 0 ? "bg-surface" : "bg-white",
              )}
            >
              <span className="h-10 w-10 shrink-0 rounded-full border border-coral bg-gray-light" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-dark">
                    {thread.name}
                  </span>
                  <span className="text-[10px] text-coral">{thread.time}</span>
                </div>
                <p className="truncate text-sm text-dark">{thread.preview}</p>
              </div>
            </div>
          ))}
        </aside>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2 border-b border-gray-light px-4 py-3">
            <span className="h-10 w-10 rounded-full border border-coral bg-gray-light" />
            <span className="text-sm font-medium text-dark">Jennifer Garnet</span>
          </div>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <p className="text-center text-xs text-[#666666]">Aujourd&apos;hui</p>
            {jenniferMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col gap-1",
                  message.sender === "me" ? "items-end" : "items-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[320px] rounded-md px-3 py-2 text-sm whitespace-pre-line",
                    message.sender === "me"
                      ? "bg-coral text-white"
                      : "bg-[#F0F0F0] text-[#666666]",
                  )}
                >
                  {message.text}
                </div>
                <span className="text-[10px] text-dark">{message.time}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-light p-3">
            <div className="rounded-md bg-[#F0F0F0] px-3 py-2 text-sm text-[#666666]">
              Send a chat
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
