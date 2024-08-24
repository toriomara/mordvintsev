"use client";

import {
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Undo2,
  Redo2,
  Rows3,
  Underline,
  MessageSquareCode,
  Eraser,
  Link,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useCallback } from "react";

const TipTapToolbar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div className="p-1 border border-b-0 rounded-t-md bg-transparent">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 3 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <Rows3 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <MessageSquareCode className="h-4 w-4" />
      </Toggle>
      <Toggle onPressedChange={() => editor.chain().focus().clearNodes().run()}>
        <Eraser className="h-4 w-4" />
      </Toggle>
      <Toggle
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <Link className="h-4 w-4" />
      </Toggle>
      <Toggle onClick={() => editor.chain().focus().undo().run()}>
        <Undo2 className="h-4 w-4" />
      </Toggle>
      <Toggle onClick={() => editor.chain().focus().redo().run()}>
        <Redo2 className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default TipTapToolbar;
