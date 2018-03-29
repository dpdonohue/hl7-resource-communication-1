


import CommunicationsPage from './client/CommunicationsPage';
import CommunicationTable from './client/CommunicationTable';

var DynamicRoutes = [{
  'name': 'CommunicationPage',
  'path': '/communications',
  'component': CommunicationsPage,
  'requireAuth': true
}];

var SidebarElements = [{
  'primaryText': 'Communications',
  'to': '/communications',
  'href': '/communications'
}];

export { 
  SidebarElements, 
  DynamicRoutes, 

  CommunicationsPage,
  CommunicationTable
};


