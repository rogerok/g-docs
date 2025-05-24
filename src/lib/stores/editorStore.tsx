'use client';
import { Editor } from '@tiptap/react';
import { makeAutoObservable } from 'mobx';
import { createContext, ReactNode, useContext, useState } from 'react';
import { enableStaticRendering } from 'mobx-react-lite';
import { makeLoggable } from 'mobx-log';

enableStaticRendering(typeof window === 'undefined');

export class EditorStore {
  editor: Editor | null = null;

  constructor() {
    makeAutoObservable(this);
    makeLoggable(this);
  }

  hydrate = (editor: Editor | null) => {
    if (!editor) return;
    this.init(editor);
  };

  init(editor: Editor) {
    this.editor = editor;
    editor.commands.setContent('this is content');
  }

  undo = () => {
    this.editor?.chain().focus().undo().run();
  };

  redo = () => {
    this.editor?.chain().focus().redo().run();
  };

  spellCheck = () => {
    this.editor?.view.dom.setAttribute(
      'spellcheck',
      this.editor?.view.dom.getAttribute('spellcheck') === 'true'
        ? 'false'
        : 'true',
    );
  };

  toggleBold = () => {
    this.editor?.chain().focus().toggleBold().run();
  };

  toggleItalic = () => {
    this.editor?.chain().focus().toggleItalic().run();
  };

  toggleUnderline = () => {
    this.editor?.chain().focus().toggleUnderline().run();
  };

  toggleTaskList = () => {
    this.editor?.chain().focus().toggleTaskList().run();
  };

  isActive(toolName: string): boolean {
    return this.editor?.isActive(toolName) ?? false;
  }
}

export const EditorStoreContext = createContext<EditorStore | null>(null);

interface EditorStoreProviderProps {
  children: ReactNode;
}

export const EditorStoreProvider = (props: EditorStoreProviderProps) => {
  const [store] = useState(() => new EditorStore());

  return (
    <EditorStoreContext value={store}>{props.children}</EditorStoreContext>
  );
};

export const useEditorStore = () => {
  const store = useContext(EditorStoreContext);
  if (!store) {
    throw new Error('EditorStoreProvider must be used within a store');
  }

  return store;
};
