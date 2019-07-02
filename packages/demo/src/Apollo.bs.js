// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var ApolloLinks = require("reason-apollo/src/ApolloLinks.bs.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var ApolloInMemoryCache = require("reason-apollo/src/ApolloInMemoryCache.bs.js");

var inMemoryCache = ApolloInMemoryCache.createInMemoryCache((function (obj) {
        return obj.id;
      }), undefined, /* () */0);

var httpLink = ApolloLinks.createHttpLink("https://api.graph.cool/simple/v1/cixna1udn0a6v0122o8exlyjb", undefined, undefined, undefined, undefined, undefined, /* () */0);

var client = ReasonApollo.createApolloClient(httpLink, inMemoryCache, undefined, undefined, undefined, undefined, /* () */0);

exports.inMemoryCache = inMemoryCache;
exports.httpLink = httpLink;
exports.client = client;
/* inMemoryCache Not a pure module */
