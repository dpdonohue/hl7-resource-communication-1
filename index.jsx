


import CommunicationsPage from './client/CommunicationsPage';

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

  CommunicationsPage
};


