import { Editor } from '@/components/Editor/Editor';
import { EditorStoreProvider } from '@/lib/stores/editorStore';
//
// interface DocumentPageProps {
//   params: Promise<{ documentId: string }>;
//   className?: string;
// }

const DocumentPage = async () => {
  return (
    <section
      className={
        'min-h-screen flex flex-col items-center justify-center bg-gray-200'
      }
    >
      <EditorStoreProvider>
        <Editor />
      </EditorStoreProvider>
    </section>
  );
};

export default DocumentPage;
