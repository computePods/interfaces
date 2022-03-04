# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-03-04T16:21:49+00:00

from __future__ import annotations

from typing import Dict, List, Optional

from pydantic import BaseModel


class Targets(BaseModel):
    help: Optional[str] = None
    dependencies: Optional[List[str]] = None
    worker: Optional[str] = None


class ProjectDefinition(BaseModel):
    description: Optional[str] = None
    targets: Optional[Dict[str, Targets]] = None


class ProjectDetails(BaseModel):
    projectName: Optional[str] = None
    projectDir: Optional[str] = None
    projectDesc: Optional[ProjectDefinition] = None
