"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapToolbar from "./TipTapToolbar";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";

export default function Tiptap({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      // StarterKit,
      StarterKit.configure(),
      Underline,
      Heading.configure({
        HTMLAttributes: { class: "text-xxl font-bold", levels: [2] },
        HTMLAttributes: { class: "text-sm font-bold", levels: [3] },
      }),
      Blockquote,
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "list-decimal",
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: "underline",
        },
        autolink: true,
        openOnClick: false,
        validate: (href) => /^https?:\/\//.test(href),
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "flex flex-col min-h-[80px] w-full rounded-b-md border border-input bg-transparent p-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-fit">
      <TipTapToolbar editor={editor} content={content} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
    </div>
  );
}
