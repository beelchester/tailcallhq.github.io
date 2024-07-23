import path from "path"
import * as hashnode from "./utils/hashnode"
import {extractFrontMatterAndContent} from "./utils/markdown"
import * as devTo from "./utils/devto"
import failedToPublishExternals from "../failed-publish-external.json"
import fs from "fs"

const ExternalPublications = [
  {name: "Hashnode", handler: hashnode.handler},
  {name: "Dev.to", handler: devTo.handler},
]

const main = async () => {
  const changedFiles = process.argv[2].split(" ")
  const backlog = failedToPublishExternals.backlog || []
  for (const file of changedFiles) {
    if (file.startsWith("blog/")) {
      const filePath = path.join(__dirname, "../../", file)
      publish(filePath)
    }
  }
  if (backlog.length !== 0) {
    for (const blog of backlog) {
      publish(blog.blogPath)
    }
  }
}

const publish = async (filePath: string) => {
  const backlog = failedToPublishExternals.backlog || []
  const errors = []
  const {frontMatter, content} = extractFrontMatterAndContent(filePath)
  for (let publication of ExternalPublications) {
    console.log(`[${publication.name}] ${frontMatter.slug} ... publishing ⏳`)
    try {
      await publication.handler(frontMatter, content)
      if (backlog.length !== 0) {
        backlog.filter((blog) => blog.blogPath !== filePath)
        await writeBacklog(backlog)
      }
      console.log(`[${publication.name}] Success ${frontMatter.slug} ... succeeded ✅`)
    } catch (error) {
      errors.push(error)
      console.error(`[${publication.name}] Failure ${frontMatter.slug} ... failed 💀`)
    }
  }
  if (errors.length !== 0) {
    backlog.push({
      blogPath: filePath,
    })
    console.log(backlog)
    await writeBacklog(backlog)
    console.error(errors)
    throw new Error("Publishing failed because of one or more errors")
  }
}

const writeBacklog = async (backlog: any) => {
  fs.writeFile(
    path.join(__dirname, "../../", "failed-publish-external.json"),
    JSON.stringify(backlog, null, 2),
    err => {
      if (err) {
        console.error(err)
      }
    }
  )
}

main()
