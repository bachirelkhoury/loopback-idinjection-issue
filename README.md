This is a test project that demonstrates the idInjection problem I'm getting in boot/create-models.js

Related to this issue https://github.com/strongloop/loopback-connector-mongodb/issues/282

```
/Users/bachirelkhoury/Desktop/testBugLoopback/test-app/node_modules/mongodb/lib/utils.js:98
    process.nextTick(function() { throw err; });
                                  ^
ValidationError: The `MyModel` instance is not valid. Details: `id` can't be set (value: 57cdc397ad843c0dd76a9131).,ValidationError: The `MyModel` instance is not valid. Details: `id` can't be set (value: 57cdc397ad843c0dd76a9132).

```


Usage:

1. clone
1. npm install .
1. node .


