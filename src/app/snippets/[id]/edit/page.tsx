import React from 'react';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export const EditSnippetPage = (props: SnippetEditPageProps) => {
  console.log(props);
  const id = parseInt(props.params.id);
  return <div>Editing snippet with ID {id}</div>;
};

export default EditSnippetPage;
