// @togo-framework/widget-notes — a DRIVER whose whole body is editable in place
// and persisted through the host's settings store.
import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Notes({ settings, setSettings, editing }: WidgetContext) {
  const text = (settings.text as string) ?? "Double-tap the pencil, then jot anything here — it persists across reloads.";
  if (editing) {
    return (
      <textarea
        className="notes-edit"
        value={text}
        rows={4}
        onChange={(e) => setSettings({ text: e.target.value })}
      />
    );
  }
  return <p className="notes-text">{text}</p>;
}

registerWidget({
  key: "notes",
  title: "Sticky note",
  defaultZone: "body",
  defaultSettings: { text: "Double-tap the pencil, then jot anything here — it persists across reloads." },
  Comp: Notes,
});
