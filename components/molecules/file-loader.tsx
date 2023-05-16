import { useEffect, useState } from "react"
import { useFileContext } from "@/context/FileContext"
import { Loader2 } from "lucide-react"
const pdf = require('pdf-parse');
import { Button } from "../atoms/button"

function processFiles(files: FileList) {
  const fileArray = Array.from(files)

  // Process each file into pdfreader and into pdf.js
  // to get the text from the pdf
  const processedFiles = fileArray.map((file) => {
    // Using pdf-parse to get text from pdf 
    const reader = new FileReader()
    reader.readAsDataURL(file)
    const content = reader.result
    
    // Pass the content to pdf-parse
    pdf.load(content).then(function(data: any) {
      console.log(data); // This is the parsed text from the pdf
    });
       
  })
}

async function submitFiles(formData: FormData) {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  })
  const data = await response.json()
  return data
}

const FileLoader = () => {
  const [files, _] = useFileContext()
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  return (
    <div className="flex flex-row gap-2">
      <Button
        className="flex-grow"
        disabled={loading ? true : false}
        onClick={async () => {
          if (!files) return
          setLoading(true)
          processFiles(files)
          setLoading(false)
        }}
      >
        {loading && <Loader2 className="animate-spin"></Loader2>}
        {loading ? "Trying to read your files" : "Upload your files here!"}
      </Button>
    </div>
  )
}

export default FileLoader
