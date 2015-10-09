/* globals uhdata, totalDegrees */

describe("Player", function() {
  var testdata = uhdata.splice(0,3);
  console.log(testdata);

  it("awards should be equal to 434.", function() {
    expect(totalDegrees(testdata)).toEqual(434);
  });

  var junkdata = {"field":"bad"};
  it("should throw an error that no awards field exists.", function() {
    expect(function(){totalDegrees(junkdata);}).toThrowError("No Awards property.");
  });

  var junkdata2 = testdata.concat({"AWARDS":"bad"});
  it("should throw an error that the the value was not a number.", function() {
    expect(function(){totalDegrees(junkdata2);}).toThrowError("Not a number.");
  });
});
