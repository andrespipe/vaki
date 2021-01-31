export interface Vaki {
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  photo?: string;
  video?: string;
  country: string; //Country['isoCode'];
  tags?: string[];
  raised: number;
  vakersQty: number;
  goal: number;
}

export const vaki: Vaki = {
  close_date: new Date('2021-03-03').getTime(),
  country: 'COL',
  description:
    'En Bahía Solano hay muchos perros y gatos, algunos son queridos, otros no tanto, pero con tu ayuda podremos cambiar la realidad de esos animales y mejorarles la vida a ellos y a toda la comunidad. ¡En esta campaña todos ganamos! Dona, recibe una recompensa, ayuda al planeta y cambiemos la vida de cientos de animales y de las comunidades de Chocó.',
  name: 'Campaña de esterilización GRATUITA en Bahía Solano',
  start_date: new Date('2020-12-12').getTime(),
  summary:
    'En el mes de mayo el equipo de RAYA viajará a Bahía Solano a esterilizar y a brindarle atención veterinaria GRATUITAMENTE a los perros y gatos de los corregimientos de El Valle y Huina. Nuestro objetivo es ayudar principalmente a controlar las poblaciones de estos animales y evitar todos los impactos negativos que pueden generarse a partir de poblaciones descontroladas: Abandono y maltrato animal, problemas de convivencia, contaminación ambiental, depredación de fauna silvestre, problemas de salud pública, etc.',
  url: 'estoy-con-bahia-solano',
  photo: 'assets/images/estoy-con-bahia-solano-raya.jpg',
  tags: ['Impacto', 'Animales', 'Causa Social'],
  raised: 3333333,
  goal: 9999999,
  vakersQty: 100,
};
