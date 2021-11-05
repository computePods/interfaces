// This is a collection utilities requred to handle interface http routes
// for the All interface.

export const mountPointRouteParts = {
  
  "/build/start": [
    'workspacePath',
    'project',
    'target',
  ],
  
  "/build/current": [
  ],
  
  "/build/status": [
    'workspacePath',
    'project',
    'target',
    'taskPath',
  ],
  
  "/files": [
    'workspacePath',
  ],
  
  "/logfile": [
    'workspacePath',
    'project',
    'target',
    'taskPath',
  ],
  
  "/projects": [
  ],
  
  "/project": [
    'workspacePath',
    'project',
  ],
  
  "/entity/interface/mapping": [
  ],
  
  "/notifications": [
  ],
  
  "/heartBeat": [
  ],
  
}

export const sseMountPoints = {
  
  "/notifications": [
  ],
  
  "/heartBeat": [
  ],
  
}

export function buildUrl(
  entityUrlParts, /* a dict/object of url parts */
) {
  if (!entityUrlParts.hasOwnProperty('mountPoint')) return null

  var theUrlParts = []
  theUrlParts.push(entityUrlParts['mountPoint'])

  for (var aPartKey of mountPointRouteParts[entityUrlParts['mountPoint']]) {
    if (!entityUrlParts.hasOwnProperty(aPartKey)) return null
    if (entityUrlParts[aPartKey] == '') return null

    theUrlParts.push(entityUrlParts[aPartKey])
  }
  return theUrlParts.join('/').replace(/\/\//g,'/')
}

export function buildArtefactPath(
  entityUrlParts, /* a dict/object of url parts */
) {
  var theUrlParts = []

  for (var aPartKey of mountPointRouteParts[entityUrlParts['mountPoint']]) {
    if (!entityUrlParts.hasOwnProperty(aPartKey)) return null
    if (entityUrlParts[aPartKey] == '') return null

    theUrlParts.push(entityUrlParts[aPartKey])
  }
  return theUrlParts.join('/').replace(/\/\//g,'/')
}