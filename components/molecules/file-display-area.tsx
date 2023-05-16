"use client"

import React, { useEffect } from "react"
import { useFileContext } from "@/context/FileContext"
import { FileInput } from "lucide-react"

import { Progress } from "@/components/atoms/progress"
import { Button } from "../atoms/button"
import FileLoader from "./file-loader"

const bytestoMB = (bytes: number) => {
  return (bytes / 1024 / 1024).toFixed(2)
}

const FileDisplay = () => {
  const [file, _] = useFileContext()
  const fileArray = file ? Array.from(file) : []

  return (
    <div className="flex flex-col gap-2 w-full max-w-[700px] mx-auto">
      {file &&
        fileArray.map((file, index) => {
          return (
            <div key={index} className="flex flex-row w-full max-w-[700px]">
              <FileInput className="mr-2" />
              <div className="w-fit flex-grow">
                <div className="flex flex-row gap-2 items-center w-full">
                  <span className="text-sm font-semibold whitespace-nowrap">{file.name}</span>
                </div>
                <span className="text-xs text-gray-500 w-fit">
                    {bytestoMB(file.size)} MB
                  </span>
              </div>
            </div>
          )
        })}
      { file && <FileLoader /> }
    </div>
  )
}

export default FileDisplay
