export interface VakiReward {
  id?: string;
  claimed: number;
  delivery_date: number;
  description: string;
  img: string;
  key: string;
  quantityAvailable: number;
  title: string;
  value: string;
  visible: boolean;
}

export const vakiReward: VakiReward = {
  claimed: 0,
  delivery_date: 432,
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  img: 'assets/images/backpack.jpg',
  key: 'key',
  quantityAvailable: 10,
  title: 'Vaki reward',
  value: 'value',
  visible: true,
};
