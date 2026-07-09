// Package widgetnotes is the "Notes" DRIVER — Pinned/recent sticky notes (admin-only) with an inline editor.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-notes"
package widgetnotes

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "notes",
		Title:       "Notes",
		DefaultZone: "sidebar",
		Asset:       "/widgets/notes.js",
	})
}
