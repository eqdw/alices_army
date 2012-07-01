var Server = require('./server');

describe("Main request/response loop", function(){
  var request, response;
  beforeEach(function(){
    request = {url: "herpderp"};
    response = jasmine.createSpyObj('response', ['writeHead', 'write', 'end']);

    Server.private.onRequest(request, response);
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
