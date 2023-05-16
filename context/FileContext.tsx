'use client' 
import React, { useEffect } from 'react'

const FileContext = React.createContext<[FileList | null, React.Dispatch<React.SetStateAction<FileList | null>>]>([null, ()=>{}]) 

const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = React.useState<FileList | null>(null)
  
  return (
    <FileContext.Provider value={[files, setFiles]}>
      {children}
    </FileContext.Provider>
  )
}

const useFileContext = () => {
  const context = React.useContext(FileContext)
  if (context === undefined) {
    throw new Error('useFileContext must be used within a FileProvider')
  }
  return context
} 

export { useFileContext, FileProvider }
