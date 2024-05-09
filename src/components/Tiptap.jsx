"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapToolbar from "./TipTapToolbar";
import Heading from "@tiptap/extension-heading";

const Tiptap = ({ description, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: { class: "text-xl font-bold", levels: [2] },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-sm border min-h-[100px] p-2 text-sm",
      },
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[150px] space-y-2">
      <TipTapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
