export default defineAppConfig({
  zeitLayer: {
    name: 'Hello from Zeitword layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    zeitLayer?: {
      /** Project name */
      name?: string
    }
  }
}
