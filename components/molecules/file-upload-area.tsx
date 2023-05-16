"use client"

import React, { use, useEffect } from "react"
import { FileProvider, useFileContext } from "@/context/FileContext"
import { FileUp } from "lucide-react"

const FileUploadArea = () => {
  const [file, setFiles] = useFileContext()

  return (
    // Dropbox area for file uploads only for pdfs
    <form>
      <label>
        <div className="flex flex-col items-center justify-center w-full max-w-[700px] px-4 py-6 mx-auto bg-white dark:bg-slate-800 rounded-md shadow-md">
          <div className="flex flex-col items-center justify-center w-full h-32 p-4 mx-auto my-4 bg-gray-100 dark:bg-slate-900 rounded-md">
            <FileUp size={32} />
            <p className="mt-4 text-sm text-center text-gray-500">
              Drag and drop your PDF here or click to upload
            </p>
          </div>
        </div>
        <input
          id="pitch-deck-uploads"
          className="hidden"
          type="file"
          accept=".pdf"
          multiple
          onChange={(event) => {
            setFiles(event.target.files)
          }}
        ></input>
      </label>
    </form>
  )
}

export default FileUploadArea
