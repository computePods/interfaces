# This is a collection of Python decorators for the
# All interface.

def addAllInterface(appSelf) :




  def post_security_addHostPublicKey(implFunc):
    return appSelf.add_api_route(
      '/security/addHostPublicKey',
      implFunc,
      methods=["POST"]
    )

  appSelf.post_security_addHostPublicKey = post_security_addHostPublicKey

  """
  Example use:

    @post_security_addHostPublicKey
    async def post_security_addHostPublicKey_impl() :
       = { .... }
      # do something and then return  ...
      return 
  """





  def get_build_start(implFunc):
    return appSelf.add_api_route(
      '/build/start/{workspacePath}/{project}/{target}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_build_start = get_build_start

  """
  Example use:

    @get_build_start
    async def get_build_start_impl(workspacePath, project, target) :
      none = { .... }
      # do something and then return none ...
      return none
  """





  def get_build_current(implFunc):
    return appSelf.add_api_route(
      '/build/current',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_build_current = get_build_current

  """
  Example use:

    @get_build_current
    async def get_build_current_impl() :
      buildTasks = { .... }
      # do something and then return buildTasks ...
      return buildTasks
  """





  def get_entity_interface_mapping(implFunc):
    return appSelf.add_api_route(
      '/entity/interface/mapping',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_entity_interface_mapping = get_entity_interface_mapping

  """
  Example use:

    @get_entity_interface_mapping
    async def get_entity_interface_mapping_impl() :
      entityInterfaceMapping = { .... }
      # do something and then return entityInterfaceMapping ...
      return entityInterfaceMapping
  """





  def sse_heartBeat(implFunc):
    return appSelf.add_api_route(
      '/heartBeat',
      implFunc,
      methods=["SSE"]
    )

  appSelf.sse_heartBeat = sse_heartBeat

  """
  Example use:

    @sse_heartBeat
    async def sse_heartBeat_impl() :
      heartBeat = { .... }
      # do something and then return heartBeat ...
      return heartBeat
  """





  def get_files(implFunc):
    return appSelf.add_api_route(
      '/files/{workspacePath}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_files = get_files

  """
  Example use:

    @get_files
    async def get_files_impl(workspacePath) :
      workspaceTree = { .... }
      # do something and then return workspaceTree ...
      return workspaceTree
  """





  def get_logfile(implFunc):
    return appSelf.add_api_route(
      '/logfile/{workspacePath}/{project}/{target}/{taskPath}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_logfile = get_logfile

  """
  Example use:

    @get_logfile
    async def get_logfile_impl(workspacePath, project, target, taskPath) :
      logfileJson = { .... }
      # do something and then return logfileJson ...
      return logfileJson
  """





  def sse_notifications(implFunc):
    return appSelf.add_api_route(
      '/notifications',
      implFunc,
      methods=["SSE"]
    )

  appSelf.sse_notifications = sse_notifications

  """
  Example use:

    @sse_notifications
    async def sse_notifications_impl() :
      notification = { .... }
      # do something and then return notification ...
      return notification
  """





  def post_project_add(implFunc):
    return appSelf.add_api_route(
      '/project/add',
      implFunc,
      methods=["POST"]
    )

  appSelf.post_project_add = post_project_add

  """
  Example use:

    @post_project_add
    async def post_project_add_impl() :
       = { .... }
      # do something and then return  ...
      return 
  """





  def get_project_buildTarget(implFunc):
    return appSelf.add_api_route(
      '/project/buildTarget/{project}/{target}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_project_buildTarget = get_project_buildTarget

  """
  Example use:

    @get_project_buildTarget
    async def get_project_buildTarget_impl(project, target) :
      projectBuildTarget = { .... }
      # do something and then return projectBuildTarget ...
      return projectBuildTarget
  """





  def get_project_definition(implFunc):
    return appSelf.add_api_route(
      '/project/definition/{project}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_project_definition = get_project_definition

  """
  Example use:

    @get_project_definition
    async def get_project_definition_impl(project) :
      projectDefinition = { .... }
      # do something and then return projectDefinition ...
      return projectDefinition
  """





  def get_projects(implFunc):
    return appSelf.add_api_route(
      '/projects',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_projects = get_projects

  """
  Example use:

    @get_projects
    async def get_projects_impl() :
      projectList = { .... }
      # do something and then return projectList ...
      return projectList
  """





  def post_project_remove(implFunc):
    return appSelf.add_api_route(
      '/project/remove',
      implFunc,
      methods=["POST"]
    )

  appSelf.post_project_remove = post_project_remove

  """
  Example use:

    @post_project_remove
    async def post_project_remove_impl() :
       = { .... }
      # do something and then return  ...
      return 
  """





  def get_project_targets(implFunc):
    return appSelf.add_api_route(
      '/project/targets/{project}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_project_targets = get_project_targets

  """
  Example use:

    @get_project_targets
    async def get_project_targets_impl(project) :
      projectTargetList = { .... }
      # do something and then return projectTargetList ...
      return projectTargetList
  """





  def post_project_update(implFunc):
    return appSelf.add_api_route(
      '/project/update',
      implFunc,
      methods=["POST"]
    )

  appSelf.post_project_update = post_project_update

  """
  Example use:

    @post_project_update
    async def post_project_update_impl() :
       = { .... }
      # do something and then return  ...
      return 
  """





  def post_security_removeHostPublicKey(implFunc):
    return appSelf.add_api_route(
      '/security/removeHostPublicKey',
      implFunc,
      methods=["POST"]
    )

  appSelf.post_security_removeHostPublicKey = post_security_removeHostPublicKey

  """
  Example use:

    @post_security_removeHostPublicKey
    async def post_security_removeHostPublicKey_impl() :
       = { .... }
      # do something and then return  ...
      return 
  """





  def get_security_rsyncPublicKey(implFunc):
    return appSelf.add_api_route(
      '/security/rsyncPublicKey',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_security_rsyncPublicKey = get_security_rsyncPublicKey

  """
  Example use:

    @get_security_rsyncPublicKey
    async def get_security_rsyncPublicKey_impl() :
      rsyncPublicKey = { .... }
      # do something and then return rsyncPublicKey ...
      return rsyncPublicKey
  """





  def get_build_status(implFunc):
    return appSelf.add_api_route(
      '/build/status/{workspacePath}/{project}/{target}/{taskPath}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_build_status = get_build_status

  """
  Example use:

    @get_build_status
    async def get_build_status_impl(workspacePath, project, target, taskPath) :
      taskStatus = { .... }
      # do something and then return taskStatus ...
      return taskStatus
  """


