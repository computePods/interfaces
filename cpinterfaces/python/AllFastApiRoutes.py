# This is a collection of Python decorators for the
# All interface.

def addAllInterface(appSelf) :




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





  def get_project(implFunc):
    return appSelf.add_api_route(
      '/project/{workspacePath}/{project}',
      implFunc,
      methods=["GET"]
    )

  appSelf.get_project = get_project

  """
  Example use:

    @get_project
    async def get_project_impl(workspacePath, project) :
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
      projectDefinition = { .... }
      # do something and then return projectDefinition ...
      return projectDefinition
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


