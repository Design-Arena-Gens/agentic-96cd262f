"use client";

import { useMemo, useState } from "react";
import { getMoodResponse, MOOD_LABELS, MoodLevel } from "@/lib/messages";

const moodOptions: MoodLevel[] = [1, 2, 3, 4, 5];

export default function CheckInForm() {
  const [level, setLevel] = useState<MoodLevel | null>(null);

  const feedback = useMemo(() => {
    if (!level) {
      return null;
    }
    return getMoodResponse(level);
  }, [level]);

  return (
    <div className="w-full max-w-xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        <h2 className="text-sm uppercase tracking-[0.4em] text-slate-400">Daily Check-In</h2>
        <p className="mt-6 text-3xl font-semibold text-white">
          Hi there, how are you arriving today?
        </p>
        <fieldset className="mt-8 flex flex-wrap gap-3" aria-label="Select your current mood level">
          {moodOptions.map((option) => {
            const selected = level === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setLevel(option)}
                className={`flex-1 min-w-[120px] rounded-2xl border transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-sunrise/40 px-4 py-4 text-left ${
                  selected
                    ? "border-sunrise bg-sunrise/20 text-white scale-[1.02]"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-sunrise/60 hover:bg-sunrise/10"
                }`}
                aria-pressed={selected}
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400">
                  {option}
                </span>
                <span className="block text-lg font-semibold text-white">
                  {MOOD_LABELS[option]}
                </span>
              </button>
            );
          })}
        </fieldset>
        {!feedback && (
          <p className="mt-8 text-sm text-slate-300">
            Tap the option that resonates most. This space is just for you.
          </p>
        )}
      </div>
      {feedback && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">{feedback.title}</h3>
          <p className="mt-3 text-base text-slate-200">{feedback.message}</p>
          <div className="mt-6 rounded-2xl bg-white/5 p-5 text-sm text-slate-100">
            <p className="uppercase text-xs tracking-[0.3em] text-slate-400">Gentle tip</p>
            <p className="mt-3 leading-relaxed">{feedback.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}
