import { FileProvider } from "@/context/FileContext"
import FileUploadArea from "@/components/molecules/file-upload-area"
import FileDisplay from "@/components/molecules/file-display-area"
import { Button } from "@/components/atoms/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-extrabold text-center leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Parse and Summarize PDFs in one go
        </h1>
        <p className="max-w-[700px] text-center text-lg text-muted-foreground sm:text-xl">
          Simplify your pitch deck comprehension workflow with our AI-powered PDF parser. 
          Extract. Summarize. Analyze. All in one place.
        </p>
      </div>
      <FileProvider>
        <FileUploadArea /> 
        <FileDisplay />
      </FileProvider>
    </section>
  )
}
