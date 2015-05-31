if (Meteor.isClient) {
  Template.hello.helpers({
    hostname: function () {
      var hostname = Hostnames.findOne();
      return hostname ? hostname.friendlyName : "Not Found";
    }
  });
}

Hostnames = new Meteor.Collection('hostnames');

Hostnames.attachSchema(new SimpleSchema({
  hostname: {
    type: String,
    index: true,
    unique: true
  },
  friendlyName: {
    type: String,
    index: true,
    unique: true
  }
}));

Router.map(function() {
  this.route('hello', {
    path: '/',
    waitOn: function () {
      return [Meteor.subscribe('hostname')];
    },
    template: 'hello',
    fastRender: true
  });
});

if (Meteor.isServer) {
  if (Hostnames.find().count() == 0) {
    Hostnames.insert({hostname: "a.127.0.0.1.xip.io:4000", friendlyName: "Host A (#1)"});
    Hostnames.insert({hostname: "b.127.0.0.1.xip.io:4000", friendlyName: "Host B (#2)"});
  }
  Meteor.publish('hostname', function () {
    return Hostnames.find({hostname: this.connection.httpHeaders.host});
  });
}
