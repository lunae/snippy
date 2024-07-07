'use client';

import React from 'react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';

const CreateSnippetPage = () => {
  const [formState, createSnippetAction] = useFormState(actions.createSnippet, {
    message: '',
  });

  return (
    <form action={createSnippetAction}>
      <h3 className="font-bold m-3">Create a Snippet</h3>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            className="rounded p-2 w-full border"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="rounded p-2 w-full border"
            id="code"
          />
        </div>

        {formState.message ? (
          <div className="my-2 p-2 border rounded bg-red-200 border-red-400">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateSnippetPage;
