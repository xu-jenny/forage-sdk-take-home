# SDK Take Home Challenge

## Instructions

The goal is simple. Build an importable client-side library that helps a
developer run operations against a remote server. It will allow you to
understand the challenges we face at Forage and to demonstrate your skills.

1. The language will be determined by you and the hiring manager.
1. Clone this repository.
1. Complete the coding challenge.
1. Push your code changes to a private repository hosted by you on github. 
1. Email your hiring manager to invite them to your private repo and to schedule a code review.
1. Do a live code review with the hiring manager(s). 


### Required solution

1. Create a visual component that allows an end-user to enter their EBT card number and submit it to the remote server.
1. Develop the component against the server that lives in `./server/`. You will find instruction on how to run the server in the file `./server/README.md`
1. The component should be importable.
1. The component should be mountable.
1. The component should expose a method for submitting the card number to the remote server. This method should return "valuable" data to its caller.
  1.1. We are purposefully leaving this ambiguous. We are curious to know how you approach this and we will ask you to explain your reasoning during the code review.
1. Documentation on how to use the component.

### Extra credit solutions

1. Accompanying unit tests.
1. The client library is installable via a popular package manager.
1. The component accepts a callback function for validation errors.

### About the server

We have created a development server and included it in this repository. You can find it in the directory `./server/`. 

## Prerequisites

- Docker
- Docker Compose

