var Server = require('./server');

describe("Main request/response loop", function(){
  var request, response, route;
  beforeEach(function(){
    request  = {url: "herpderp"};
    response = jasmine.createSpyObj('response', ['writeHead', 'write', 'end']);
    route    = jasmine.createSpy('route');
    Server.private.onRequest(request, response);
  });

  it("attemps to route a request", function(){
    expect(route).toHaveBeenCalled();
  });
  it("writes out a header", function(){
    expect(response.writeHead).toHaveBeenCalled();
  });

  it("writes out some content", function(){
    expect(response.write).toHaveBeenCalled();
  });

  it("sends the response", function(){
    expect(response.end).toHaveBeenCalled();
  });

});
