# ComputePod interfaces

The [ComputePods tools](https://github.com/computePods) will communicate 
via a number of interfaces. This project collects, version controls, 
releases and documents these interfaces. 

The interfaces themselves will be a collection of [RESTful 
http](https://en.wikipedia.org/wiki/Representational_state_transfer) as 
well as [NATS interfaces](https://docs.nats.io/). All of these interfaces 
will use [JSON payloads](https://en.wikipedia.org/wiki/JSON). 

The RESTful http interfaces will be used by the interaction between the 
[User Interface](https://github.com/computePods/computePodMajorDomoUI)
(based in the user's browser) and the [ComputePods MajorDomo
server](https://github.com/computePods/computePodMajorDomo) 
(inside each computePod). 

The NATS interfaces will be used between and among the various tools in 
the federation of computePods. 

## Releases

This project will periodically release interfaces for use in all of the 
other ComputePods projects and tools.

Release versioning will roughly follow a [Semantic 
style](https://semver.org/) (see also [Wikipedia's 
description](https://en.wikipedia.org/wiki/Software_versioning#Degree_of_compatibility)). 

Each release will contain a complete set of interfaces generated using the 
companion [ComputePod Interface Generator 
tool](https://github.com/computePods/interfaceGenerator) as tar files 
which the other ComputePods tools can and should download and use.
