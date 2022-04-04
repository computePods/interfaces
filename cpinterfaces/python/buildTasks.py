# generated by datamodel-codegen:
#   filename:  <stdin>
#   timestamp: 2022-04-04T12:49:41+00:00

from __future__ import annotations

from typing import List, Optional

from pydantic import BaseModel, Field


class TaskStatus(BaseModel):
    target: str
    progress: int
    dependencies: Optional[List[str]] = Field(
        None, description='An array of dependent tasks'
    )


class BuildTasks(BaseModel):
    __root__: List[TaskStatus] = Field(
        ..., description='An array of build task status objects', title='buildTasks'
    )
