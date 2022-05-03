type Tags = 'design' | 'product' | 'software engeneering' | 'operations';

type UserTags = Array<Tags>;

export interface User {
  id: number;
  name: string;
  username: string;
  isActive: boolean;
  email: string;
  tags: UserTags;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Olivia Rhye 1',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product', 'operations'],
  },
  {
    id: 2,
    name: 'Olivia Rhye 2',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 3,
    name: 'Olivia Rhye 3',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 4,
    name: 'Olivia Rhye 4',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 5,
    name: 'Olivia Rhye 5',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 6,
    name: 'Olivia Rhye 6',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 7,
    name: 'Olivia Rhye 7',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 8,
    name: 'Olivia Rhye 8',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 9,
    name: 'Olivia Rhye 9',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 10,
    name: 'Olivia Rhye 10',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 11,
    name: 'Olivia Rhye 11',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 12,
    name: 'Olivia Rhye 12',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 13,
    name: 'Olivia Rhye 13',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 14,
    name: 'Olivia Rhye 14',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 15,
    name: 'Olivia Rhye 15',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 16,
    name: 'Olivia Rhye 16',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 17,
    name: 'Olivia Rhye 17',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 18,
    name: 'Olivia Rhye 18',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 19,
    name: 'Olivia Rhye 19',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
  {
    id: 20,
    name: 'Olivia Rhye 20',
    username: 'olivia',
    isActive: true,
    email: 'olivia@email.com',
    tags: ['design', 'product'],
  },
];
