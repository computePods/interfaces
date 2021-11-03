// This is the collection of All mock service workers

// see: https://mswjs.io/docs/getting-started/mocks/rest-api
// see: https://mswjs.io/docs/api/setup-worker

import { buildUrl        } from './AllHttpRouteUtils.mjs'
import { connectorMixins } from './AllMithrilConnectors.mjs'

export const All_examples = {

  // taskStatus examples
  
    "example task status" : function() {
      return connectorMixins['/build/status']({'mountPoint': '/build/status', 'workspacePath': '/a/workspace/path', 'project': 'aProject', 'target': 'aBuildTarget', 'taskPath': 'example'})
    },
  

  // buildTasks examples
  
    "example list of build tasks" : function() {
      return connectorMixins['/build/current']({'mountPoint': '/build/current'})
    },
  

  // workspaceTree examples
  
    "Measuring Heyting Algebras workspace" : function() {
      return connectorMixins['/files']({'mountPoint': '/files', 'workspacePath': 'measuringHeyting'})
    },
  

  // logFileJson examples
  
    "an example log file" : function() {
      return connectorMixins['/logfile']({'mountPoint': '/logfile', 'workspacePath': '/a/workspace/path', 'project': 'aProject', 'target': 'aTarget', 'taskPath': 'an/example/log'})
    },
  

  // projectDefinition examples
  
    "Project definition for the 'Measuring Heyting algebras' paper" : function() {
      return connectorMixins['/projects']({'mountPoint': '/projects', 'workspacePath': 'measuringHeyting', 'project': 'project.yaml'})
    },
  

  // entityInterfaceMapping examples
  
    "The current entity to interface mapping" : function() {
      return connectorMixins['/entity/interface/mapping']({'mountPoint': '/entity/interface/mapping'})
    },
  

  // notifications examples
  

}