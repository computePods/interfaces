# This is a collection of Python decorators for the
# All interface.

def addAllNatsSubjects(appSelf) :



  def subscribe_artefact_register_type(artefactType=None):
    wildCards = ""


    if artefactType :
      wildCards = wildCards + '.' + artefactType
    else :
      wildCards = wildCards + '.*'


    def decoratorSubscribe(implFunc):
      return appSelf.subscribe(
        'artefact.register.type'+wildCards,
        cb=implFunc
      )
    return decoratorSubscribe

  appSelf.subscribe_artefact_register_type = subscribe_artefact_register_type

  """
  Example use:

    @subscribe_artefact_register_type
    async def subscribe_artefact_register_type_impl(artefactType) :
      registerArtefactType = { .... }
      # do something and then return registerArtefactType ...
      return registerArtefactType
  """



  def subscribe_build_howTo(artefactType=None):
    wildCards = ""


    if artefactType :
      wildCards = wildCards + '.' + artefactType
    else :
      wildCards = wildCards + '.*'


    def decoratorSubscribe(implFunc):
      return appSelf.subscribe(
        'build.howTo'+wildCards,
        cb=implFunc
      )
    return decoratorSubscribe

  appSelf.subscribe_build_howTo = subscribe_build_howTo

  """
  Example use:

    @subscribe_build_howTo
    async def subscribe_build_howTo_impl(artefactType) :
      howToBuild = { .... }
      # do something and then return howToBuild ...
      return howToBuild
  """



  def subscribe_build_from(artefactType=None):
    wildCards = ""


    if artefactType :
      wildCards = wildCards + '.' + artefactType
    else :
      wildCards = wildCards + '.*'


    def decoratorSubscribe(implFunc):
      return appSelf.subscribe(
        'build.from'+wildCards,
        cb=implFunc
      )
    return decoratorSubscribe

  appSelf.subscribe_build_from = subscribe_build_from

  """
  Example use:

    @subscribe_build_from
    async def subscribe_build_from_impl(artefactType) :
      canBuildFrom = { .... }
      # do something and then return canBuildFrom ...
      return canBuildFrom
  """



  def subscribe_fileChanged(reason=None, pod=None, dottedPath=None):
    wildCards = ""


    if reason :
      wildCards = wildCards + '.' + reason
    else :
      wildCards = wildCards + '.*'

    if pod :
      wildCards = wildCards + '.' + pod
    else :
      wildCards = wildCards + '.*'

    if dottedPath :
      wildCards = wildCards + '.' + dottedPath
    else :
      wildCards = wildCards + '.>'


    def decoratorSubscribe(implFunc):
      return appSelf.subscribe(
        'fileChanged'+wildCards,
        cb=implFunc
      )
    return decoratorSubscribe

  appSelf.subscribe_fileChanged = subscribe_fileChanged

  """
  Example use:

    @subscribe_fileChanged
    async def subscribe_fileChanged_impl(reason, pod, dottedPath) :
      fileChanged = { .... }
      # do something and then return fileChanged ...
      return fileChanged
  """



  def subscribe_watchRequest(pod=None):
    wildCards = ""


    if pod :
      wildCards = wildCards + '.' + pod
    else :
      wildCards = wildCards + '.*'


    def decoratorSubscribe(implFunc):
      return appSelf.subscribe(
        'watchRequest'+wildCards,
        cb=implFunc
      )
    return decoratorSubscribe

  appSelf.subscribe_watchRequest = subscribe_watchRequest

  """
  Example use:

    @subscribe_watchRequest
    async def subscribe_watchRequest_impl(pod) :
      watchRequest = { .... }
      # do something and then return watchRequest ...
      return watchRequest
  """

