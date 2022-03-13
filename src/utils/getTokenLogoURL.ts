const hostName = window.location.hostname

const getTokenLogoURL = (address: string) =>
  `/images/tokens/${address}.png`

export default getTokenLogoURL
