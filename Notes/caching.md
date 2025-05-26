in the next.js, all the two type of routes are available - static and dynamic

by default all the routes are static in next.js. cashing available in only static routes

circle - static route(caching available), function/lambda - dynamic route(no caching features) 

# sevelral types of control caching

    1. Full route cache -->> a. Time-based caching  - i want fresh data after 30 seconds
                             b. On-Demand caching   - choice based caching / create and delete
                             c. Disable caching     - i want every time fresh data

    export const dynamic = "force-dynamic"; - disabling the caching (making dynamic route)
    or
    export const revalidate = 0;