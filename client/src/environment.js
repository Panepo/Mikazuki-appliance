class EnvironmentValues {
  title = 'Mikazuki'

  urlDev = '/'
  urlProd = 'https://panepo.github.io/Mikazuki-appliance/'
  GoogleAnalyticsID = 'UA-106126363-3'
  ColorMenuIcon = '#512da8'
  ColorRibbon = 'linear-gradient(165deg, #512da8 30%, #1976d2, #009688)'
}

// Export as singleton
const environmentValuesLoader = new EnvironmentValues()
Object.freeze(environmentValuesLoader)
export { environmentValuesLoader as environment }
