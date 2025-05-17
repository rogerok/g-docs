import { Editor } from '@/components/Editor/Editor';
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
      <Editor
        options={{
          content: 'something',
        }}
      />
    </section>
  );
};

export default DocumentPage;
