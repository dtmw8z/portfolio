import { Skill, Image, Category } from './interface';

export const Images: Image[] = [
  {
    name: 'html-5.svg',
  },
  {
    name: 'css-3.svg',
  },
  {
    name: 'typescript.svg',
  },
  {
    name: 'python.svg',
  },
  {
    name: 'angular.svg',
  },
  {
    name: 'bootstrap.svg',
  },
  {
    name: 'cypress.svg',
  },
  {
    name: 'git.svg',
  },
  {
    name: 'java.svg',
  },
  {
    name: 'mongodb.svg',
  },
  {
    name: 'nodejs.svg',
  },
  {
    name: 'mysql.svg',
  },
  {
    name: 'azure.svg',
  },
];

export const Skills: Skill[] = [
  {
    name: 'HTML5',
    percentage: 100,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#C7E596',
    imageSource: Images[0],
  },
  {
    name: 'CSS',
    percentage: 90,
    outerStrokeColor: '#ffb400',
    innerStrokeColor: '#ffce5c',
    imageSource: Images[1],
  },
  {
    name: 'TypeScript',
    percentage: 90,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#C7E596',
    imageSource: Images[2],
  },
  {
    name: 'Python',
    percentage: 70,
    outerStrokeColor: '#0D2C54',
    innerStrokeColor: '#19539F',
    imageSource: Images[3],
  },
  {
    name: 'Angular',
    percentage: 80,
    outerStrokeColor: '#131112',
    innerStrokeColor: '#413A3D',
    imageSource: Images[4],
  },
  {
    name: 'Bootstrap',
    percentage: 100,
    outerStrokeColor: '#60656F',
    innerStrokeColor: '#9297A0',
    imageSource: Images[5],
  },
  {
    name: 'Cypress',
    percentage: 60,
    outerStrokeColor: '#757761',
    innerStrokeColor: '#A2A38F',
    imageSource: Images[6],
  },
  {
    name: 'Git',
    percentage: 90,
    outerStrokeColor: '#A6D49F',
    innerStrokeColor: '#A6D49F',
    imageSource: Images[7],
  },
  {
    name: 'Java',
    percentage: 75,
    outerStrokeColor: '#3D1FFF',
    innerStrokeColor: '#725CFF',
    imageSource: Images[8],
  },
  {
    name: 'MongoDB',
    percentage: 50,
    outerStrokeColor: '#36413E',
    innerStrokeColor: '#5D6F6A',
    imageSource: Images[9],
  },
  {
    name: 'NodeJS',
    percentage: 40,
    outerStrokeColor: '#241E4E',
    innerStrokeColor: '#453993',
    imageSource: Images[10],
  },
  {
    name: 'MySQL',
    percentage: 85,
    outerStrokeColor: '#D2B037',
    innerStrokeColor: '#EADAA2',
    imageSource: Images[11],
  },
  {
    name: 'Azure',
    percentage: 30,
    outerStrokeColor: '#6852A3',
    innerStrokeColor: '#8977BB',
    imageSource: Images[12],
  },
];

export const Categories: Category[] = [
  {
    name: 'Web Development',
    skills: [Skills[0], Skills[1], Skills[4], Skills[5]],
  },
  {
    name: 'Programming Language',
    skills: [Skills[2], Skills[3], Skills[8]],
  },
  {
    name: 'Database',
    skills: [Skills[9], Skills[11]],
  },
  {
    name: 'Tools/Technologies',
    skills: [Skills[12], Skills[7], Skills[10], Skills[6]],
  }
];
