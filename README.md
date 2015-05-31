# meteor-dns-adventures

### About 
This proof-of-concept Meteor app demonstrates displaying dynamic content based on the hostname. This would be useful for when you want to run one or more horizontally-scaled meteor processes serving one or more customized versions of a white-label meteor app. With this implementation, any process could render the application with appropriate theming.

### Usage
 - Run this meteor app on port 4000, e.g., `meteor --port 4000`
 - Navigate to [http://a.127.0.0.1.xip.io:4000](http://a.127.0.0.1.xip.io:4000) to see Host #1 customiations
 - Navigate to [http://b.127.0.0.1.xip.io:4000](http://b.127.0.0.1.xip.io:4000) to see Host #2 customiations
 
### Additional thoughts
 - This implementation uses a Mongo DB collection to persist per-host customizations. Some other technology, like Redis, might provide more optimal performance in a production environment.
