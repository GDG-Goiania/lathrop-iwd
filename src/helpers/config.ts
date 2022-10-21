const configValues = {
  name: 'Devfest Cerrado 2022',
  eventDate: '2022-11-26T08:00:00',
  eventLinkRegistrationUrl: 'https://doity.com.br/devfest-cerrado-2022',
  place: 'Local: Varanda 402 - Uberlândia',
  formattedDate: 'Dia 26 Novembro 2022',
  email: 'gdg.uberlandia@gmail.com',
}

// TODO: hardcoded URL in order to work locally
export const ENDPOINT = process.env.NODE_ENV === "production" ? "" : "https://devfestcerrado-2022-staging.web.app";

export default configValues;
