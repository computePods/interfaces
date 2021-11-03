// This is a collection of Mithril connectors mixins for the
// All interface.

// The function associated with each prefix is a "factory" which returns a
// mixin object to be mixed-in to the ultimate Mithril Component.

// Each of the mixin objects contains a getDataFromServer method which
// "remembers" the URL which was originally passed to the "factory" method
// when it create the mixin.

import m from 'mithril'
import log from 'loglevel'

import { buildUrl, buildArtefactPath } from './AllHttpRouteUtils.mjs'


import { buildTasks_validate } from './buildTasks_ajv.mjs'

import { taskStatus_validate } from './taskStatus_ajv.mjs'

import { workspaceTree_validate } from './workspaceTree_ajv.mjs'

import { logfileJson_validate } from './logfileJson_ajv.mjs'

import { projectDefinition_validate } from './projectDefinition_ajv.mjs'

import { entityInterfaceMapping_validate } from './entityInterfaceMapping_ajv.mjs'

import { notification_validate } from './notification_ajv.mjs'

import { heartBeat_validate } from './heartBeat_ajv.mjs'


function none_validate(someJson) { return true }

export const connectorMixins = {



  "/build/start": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/build/start'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/build/start',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/build/start',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            none_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            none_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/build/current": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/build/current'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/build/current',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/build/current',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            buildTasks_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            buildTasks_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/build/status": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/build/status'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/build/status',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/build/status',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            taskStatus_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            taskStatus_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/files": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/files'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/files',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/files',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            workspaceTree_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            workspaceTree_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/logfile": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/logfile'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/logfile',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/logfile',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            logfileJson_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            logfileJson_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/projects": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/projects'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/projects',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/projects',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            projectDefinition_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            projectDefinition_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },





  "/entity/interface/mapping": function(
    entityUrlParts, /* dict of path parts */
  ) {
    entityUrlParts['mountPoint'] = '/entity/interface/mapping'
    var artefactPath = buildArtefactPath(entityUrlParts)
    var theUrl       = buildUrl(entityUrlParts)
    if (!theUrl) {
      log.error("Could not build URL for:")
      log.error(entityUrlParts)
      return {
        artefactPath: artefactPath,
        entityType: '/entity/interface/mapping',
        entityUrlParts: entityUrlParts,
      }
    }
    var theModel = {
      artefactPath: artefactPath,
      entityType: '/entity/interface/mapping',
      entityUrlParts: entityUrlParts,
      "_getServerData": function() {
        return m.request({
          method: "GET",
          url: theUrl,
          
        })
      },
      "getAllServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            entityInterfaceMapping_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      },
      "getChangedServerData": function() {
        theModel.updateRequest = null
        theModel._getServerData(
          
        ).then(function(response) {
          log.debug("----------------------------------------------------")
          log.debug("response from connectorMixins")
          log.debug(entityUrlParts)
          log.debug(theUrl)
          log.debug(response);
          log.debug("----------------------------------------------------")
          try {
            entityInterfaceMapping_validate(response)
          } catch (err) {
            log.error(err)
          }
          theModel.data = response
        })
      }
    }
    return theModel
  },











}