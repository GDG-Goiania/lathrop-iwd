const configValues = {
  name: 'Devfest Cerrado 2022',
  eventDate: '2022-11-26T08:00:00',
  eventLinkRegistrationUrl: 'https://doity.com.br/devfest-cerrado-2022',
  place: 'Local: Varanda 402 - Uberlândia',
  formattedDate: 'Dia 26 Novembro 2022',
  email: 'gdg.uberlandia@gmail.com',
}

console.log('Server url', process.env.NEXT_PUBLIC_VERCEL_URL);
export const server = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.NEXT_PUBLIC_SITE_URL;

export default configValues;
