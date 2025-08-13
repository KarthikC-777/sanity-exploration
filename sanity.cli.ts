import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'o8qrhdis',
    dataset: 'development'
  },
    graphql: [
      {
        id: "production",
        workspace: "production",
      },
      {
        id: "develop",
        workspace: "develop",
      }
    ]
})
