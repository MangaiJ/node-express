nodemon
Any time we update the file will restart the server. This is only for development purpose.

Edge templating engine:

for create the template as our wish

MongoDB:
Its starts the information in the form of document.

MongoDB - Contains one or more collections
collections - Contains different types of document(object)
document - key value pair list or array or nested document.

database Contains many collections each collection Contains many document, each document Contains many fields.
 robomongo - Its help us to see our data in our database

 mongoose - is a package manager to help us to interact with mongodb

 mongoose.connect('mongodb://localhost/node-js-blog')

 mongodb - is server
 localhost - our localserver
 node-js-blog - db name we are going to connect

 when we connect the server mongodb will automatically create the node-js-blog db for us

 production: we need username and password  for connection
 
 models - its a function or objects that represent collections in our database.

 schema - represent how we are going to structure our collections (collections represents entity in application)
