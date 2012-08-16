Vacuum
======

Vacuum is a CouchApp that makes a CouchDB database read-only for readers and anonymous users.


Example
-------

### Replication

To prevent Vacuum from making a replicated database read-only, use filtered replication:

    curl\
      -X POST\
      -H "Content-Type:application/json"\
      -d "{\"source\":\"http://<some_host>/<some_vacuum_db>\",\
           \"target\":\"http://localhost:5984/<your_db>\",\
           \"filter\":\"vacuum/rw\"}"\
      http://localhost:5984/_replicate


Installation
------------

Clone this repository and use [CouchApp](http://couchapp.org) to push Vacuum to CouchDB, or replicate [an existing deployment of Vacuum](http://couchdb.gutpassfilter.de/vacuum/), e.g. using curl:

    curl\
      -X POST\
      -H "Content-Type:application/json"\
      -d "{\"source\":\"http://couchdb.gutpassfilter.de/vacuum\",\
           \"target\":\"http://localhost:5984/<your_db>\"}"\
      http://localhost:5984/_replicate
