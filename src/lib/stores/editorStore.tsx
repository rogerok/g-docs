'use client';
import { Editor } from '@tiptap/react';
import { makeAutoObservable } from 'mobx';
import { createContext, ReactNode, useContext, useState } from 'react';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export class EditorStore {
  editor: Editor | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  init(editor: Editor) {
    this.editor = editor;
    editor.commands.setContent('this is content');
  }

  undo = () => {
    this.editor?.chain().focus().undo().run();
  };
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
