export interface VakiReward {
  title: string;
  description: string;
  visible: boolean;
  img: string;
  key: string;
  value: string;
  delivery_date: number;
  claimed: number;
  quantityAvailable: number;
}

export const vakiReward: VakiReward = {
  title: 'Vaki reward',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  visible: true,
  img: 'assets/images/backpack.jpg',
  key: 'key',
  value: 'value',
  delivery_date: 432,
  claimed: 0,
  quantityAvailable: 10,
};

// close_date: new Date('').getTime(),
// country: 'COL',
// description:
//   'En Bahía Solano hay muchos perros y gatos, algunos son queridos, otros no tanto, pero con tu ayuda podremos cambiar la realidad de esos animales y mejorarles la vida a ellos y a toda la comunidad. ¡En esta campaña todos ganamos! Dona, recibe una recompensa, ayuda al planeta y cambiemos la vida de cientos de animales y de las comunidades de Chocó.',
// name: 'Campaña de esterilización GRATUITA en Bahía Solano',
// start_date: new Date().getTime(),
// summary:
//   'En el mes de mayo el equipo de RAYA viajará a Bahía Solano a esterilizar y a brindarle atención veterinaria GRATUITAMENTE a los perros y gatos de los corregimientos de El Valle y Huina. Nuestro objetivo es ayudar principalmente a controlar las poblaciones de estos animales y evitar todos los impactos negativos que pueden generarse a partir de poblaciones descontroladas: Abandono y maltrato animal, problemas de convivencia, contaminación ambiental, depredación de fauna silvestre, problemas de salud pública, etc.',
// url: 'estoy-con-bahia-solano',
// photo: 'assets/images/estoy-con-bahia-solano-raya.jpg',
