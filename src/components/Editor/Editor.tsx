'use client';
import { FC } from 'react';

import { useEditor, EditorContent, UseEditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';

import TaskList from '@tiptap/extension-task-list';
import TableHeader from '@tiptap/extension-table-header';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import ImageResize from 'tiptap-extension-resize-image';

import Image from '@tiptap/extension-image';

interface EditorProps {
  className?: string;
  options?: UseEditorOptions;
}

export const Editor: FC<EditorProps> = (props: EditorProps) => {
  const editor = useEditor({
    ...props.options,
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'focus:outline-none print:border-0 bg-white border-2 flex flex-col min-h-[1054px] p-4 w-full cursor-text',
      },
    },
    content: `<img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />`,
  });

  return (
    <div
      className={
        'size-full overflow-x-auto px-4 bg-accent print:p-0 print:bg-white print:overflow-visible'
      }
    >
      <div
        className={
          'min-w-max justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'
        }
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
