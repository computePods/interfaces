// This is the ajv validator based upon the workspaceTree JSON schema


import Ajv from 'ajv'


/********************************************************************
Generation Options:
{
  "ajvOptions": {
    "allErrors": true,
    "strict": true
  },
  "interfaceName": "All",
  "rootType": "workspaceTree"
}
*********************************************************************/

const schema = {
  "$defs": {
    "buildDetails": {
      "properties": {
        "build": {
          "type": "string"
        },
        "from": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "buildTasks": {
      "description": "An array of build task status objects",
      "items": {
        "$ref": "#/$defs/taskStatus"
      },
      "type": "array"
    },
    "canBuildFrom": {
      "properties": {
        "auxiliaries": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "canBuild": {
          "type": "string"
        },
        "from": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "entityInterfaceMapping": {
      "additionalProperties": {
        "$ref": "#/$defs/mountPoint"
      },
      "type": "object"
    },
    "entityType": {
      "properties": {
        "entityType": {
          "enum": [
            "logFile",
            "projectFile",
            "directory",
            "file",
            "task"
          ]
        },
        "url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "heartBeat": {
      "description": "A simple heartBeat message (Hello)",
      "type": "string"
    },
    "hostPublicKey": {
      "properties": {
        "host": {
          "type": "string"
        },
        "publicKey": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "howToBuild": {
      "properties": {
        "goal": {
          "type": "string"
        },
        "have": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "logfileJson": {
      "properties": {
        "lines": {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "mountPoint": {
      "type": "string"
    },
    "notification": {
      "description": "A notification that a particular Artefact has changed.",
      "properties": {
        "fullPath": {
          "type": "string"
        },
        "mountPoint": {
          "type": "string"
        },
        "notificationType": {
          "enum": [
            "Added",
            "Removed",
            "Changed"
          ]
        },
        "routeParts": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "projectDefinition": {
      "properties": {
        "description": {
          "type": "string"
        },
        "targets": {
          "additionalProperties": {
            "properties": {
              "dependencies": {
                "items": {
                  "type": "string"
                },
                "type": "array"
              },
              "help": {
                "type": "string"
              },
              "worker": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "projectDetails": {
      "properties": {
        "projectDesc": {
          "$ref": "#/$defs/projectDefinition"
        },
        "projectDir": {
          "type": "string"
        },
        "projectName": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "projectList": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "registerArtefactType": {
      "properties": {
        "extensions": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "rsyncPublicKey": {
      "type": "string"
    },
    "taskStatus": {
      "description": "The status of a single build task",
      "properties": {
        "dependencies": {
          "description": "An array of dependent tasks",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "progress": {
          "type": "integer"
        },
        "target": {
          "type": "string"
        }
      },
      "required": [
        "target",
        "progress"
      ],
      "type": "object"
    },
    "workspaceTree": {
      "properties": {
        "directories": {
          "additionalProperties": {
            "$ref": "#/$defs/workspaceTree"
          },
          "type": "object"
        },
        "entityType": {
          "$ref": "#/$defs/entityType"
        },
        "files": {
          "additionalProperties": {
            "$ref": "#/$defs/entityType"
          },
          "type": "object"
        }
      },
      "type": "object"
    }
  },
  "properties": {
    "directories": {
      "additionalProperties": {
        "$ref": "#/$defs/workspaceTree"
      },
      "type": "object"
    },
    "entityType": {
      "$ref": "#/$defs/entityType"
    },
    "files": {
      "additionalProperties": {
        "$ref": "#/$defs/entityType"
      },
      "type": "object"
    }
  },
  "title": "workspaceTree",
  "type": "object"
}

const ajv = new Ajv({
  "allErrors": true,
  "strict": true
})

export const workspaceTree_validate = ajv.compile(schema)
